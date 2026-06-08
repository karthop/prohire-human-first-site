import * as React from 'npm:react@18.3.1'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { TEMPLATES } from '../_shared/transactional-email-templates/registry.ts'

const SITE_NAME = 'proHIRE resources'
// Resend test sender — works without domain verification. Once
// notify.prohireresources.com is verified in Resend (or via Lovable's
// integration), swap to `noreply@notify.prohireresources.com`.
const FROM_ADDRESS = `${SITE_NAME} <onboarding@resend.dev>`

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  if (!resendApiKey) {
    console.error('Missing RESEND_API_KEY')
    return new Response(
      JSON.stringify({ error: 'Email service not configured' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  let templateName: string
  let recipientEmail: string | undefined
  let replyTo: string | undefined
  let templateData: Record<string, unknown> = {}
  try {
    const body = await req.json()
    templateName = body.templateName || body.template_name
    recipientEmail = body.recipientEmail || body.recipient_email
    replyTo = body.replyTo || body.reply_to
    if (body.templateData && typeof body.templateData === 'object') {
      templateData = body.templateData
    }
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON in request body' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  if (!templateName) {
    return new Response(
      JSON.stringify({ error: 'templateName is required' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const template = TEMPLATES[templateName]
  if (!template) {
    return new Response(
      JSON.stringify({
        error: `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`,
      }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const effectiveRecipient = template.to || recipientEmail
  if (!effectiveRecipient) {
    return new Response(
      JSON.stringify({
        error: 'recipientEmail is required (unless the template defines a fixed recipient)',
      }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  // Render React Email template
  let html: string
  let plainText: string
  try {
    html = await renderAsync(React.createElement(template.component, templateData))
    plainText = await renderAsync(React.createElement(template.component, templateData), {
      plainText: true,
    })
  } catch (err) {
    console.error('Template render failed', err)
    return new Response(
      JSON.stringify({ error: 'Failed to render email template' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const subject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  const payload: Record<string, unknown> = {
    from: FROM_ADDRESS,
    to: [effectiveRecipient],
    subject,
    html,
    text: plainText,
  }
  if (replyTo) payload.reply_to = replyTo

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const resendBody = await resendRes.json().catch(() => ({}))

  if (!resendRes.ok) {
    console.error('Resend send failed', { status: resendRes.status, resendBody })
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: resendBody }),
      { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  console.log('Email sent', { templateName, effectiveRecipient, id: resendBody?.id })

  return new Response(
    JSON.stringify({ success: true, id: resendBody?.id ?? null }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
})
