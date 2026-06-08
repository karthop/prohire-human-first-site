import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const TO_EMAIL = 'cbetz@prohireresources.com';
const FROM_EMAIL = 'proHIRE Contact Form <onboarding@resend.dev>';

const inquiryLabels: Record<string, string> = {
  'executive-search': 'Executive search / fractional CXO',
  'talent-solutions': 'Hiring / embedded recruiting',
  'growth-acceleration': 'Growth acceleration / BD',
  'career-advisory': 'Career advisory (individual)',
  partnership: 'Partnership / referral',
  general: 'General inquiry',
};

const esc = (s: string) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)
  );

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();
    const name = String(body.name ?? '').trim().slice(0, 200);
    const email = String(body.email ?? '').trim().slice(0, 200);
    const company = String(body.company ?? '').trim().slice(0, 200);
    const role = String(body.role ?? '').trim().slice(0, 200);
    const phone = String(body.phone ?? '').trim().slice(0, 50);
    const inquiryType = String(body.inquiryType ?? '').trim().slice(0, 100);
    const message = String(body.message ?? '').trim().slice(0, 5000);

    if (!name || !email || !company || !role || !inquiryType || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const inquiry = inquiryLabels[inquiryType] || inquiryType;
    const subject = `Inquiry from ${name}${company ? ` — ${company}` : ''}`;

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#1a1a1a;line-height:1.6">
        <h2 style="font-family:Georgia,serif;margin:0 0 16px">New inquiry — proHIRE resources</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Company:</strong> ${esc(company)}</p>
        <p><strong>Role:</strong> ${esc(role)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ''}
        <p><strong>Inquiry:</strong> ${esc(inquiry)}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:20px 0"/>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('Resend error', res.status, data);
      return new Response(JSON.stringify({ error: 'Failed to send', detail: data }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
