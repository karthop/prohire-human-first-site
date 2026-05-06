import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  role?: string;
  inquiryType: string;
  message: string;
  persona?: 'employer' | 'professional' | null;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, role, inquiryType, message, persona }: ContactEmailRequest = await req.json();
    const toAddress = Deno.env.get("CONTACT_EMAIL_TO") || "cbetz@prohireresources.com";

    const subject = persona === 'employer'
      ? `Employer Inquiry: ${name} — ${company ?? ''}`
      : persona === 'professional'
      ? `Professional Inquiry: ${name}`
      : `New Inquiry from ${name}`;

    const html = `
      <h2>New contact submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
      <p><strong>Inquiry type:</strong> ${inquiryType}</p>
      <p><strong>Persona:</strong> ${persona ?? 'not specified'}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    const fromAddress = Deno.env.get("RESEND_FROM") || "proHIRE resources <onboarding@resend.dev>";

    const emailResponse = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject,
      html,
    });

    // If Resend returns an error, bubble it up so the client can handle fallback
    if (emailResponse.error) {
      console.error("Resend send failed:", emailResponse.error);
      return new Response(JSON.stringify({ error: emailResponse.error }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Success
    return new Response(JSON.stringify({ data: emailResponse.data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
