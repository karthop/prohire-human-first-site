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
  phone?: string;
  inquiryType: string;
  message: string;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, role, phone, inquiryType, message }: ContactEmailRequest = await req.json();
    const toAddress = Deno.env.get("CONTACT_EMAIL_TO") || "cbetz@prohireresources.com";

    const subject = `New Inquiry from ${name}${company ? ` — ${company}` : ""}`;

    const notificationHtml = `
      <h2>New contact submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      ${role ? `<p><strong>Role:</strong> ${escapeHtml(role)}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    const notificationFrom = Deno.env.get("RESEND_FROM") || "proHIRE resources <info@prohireresources.com>";
    const confirmationFrom = Deno.env.get("RESEND_CONFIRMATION_FROM") || "proHIRE resources <info@prohireresources.com>";

    const notificationResp = await resend.emails.send({
      from: notificationFrom,
      to: [toAddress],
      reply_to: email,
      subject,
      html: notificationHtml,
    });

    if (notificationResp.error) {
      console.error("Resend notification failed:", notificationResp.error);
      return new Response(JSON.stringify({ error: notificationResp.error }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Confirmation auto-reply to the submitter
    const firstName = (name || "").trim().split(/\s+/)[0] || "there";
    const confirmationHtml = `
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Thanks for reaching out to proHIRE resources. We've received your note and will respond within one business day.</p>
      <p>In the meantime, if anything urgent comes up, just reply to this email.</p>
      <p>— Chris Betz<br/>CEO, proHIRE resources</p>
    `;

    try {
      const confirmationResp = await resend.emails.send({
        from: confirmationFrom,
        to: [email],
        reply_to: "cbetz@prohireresources.com",
        subject: "We received your inquiry — proHIRE resources",
        html: confirmationHtml,
      });
      if (confirmationResp.error) {
        console.error("Resend confirmation failed:", confirmationResp.error);
      }
    } catch (e) {
      console.error("Confirmation send threw:", e);
    }

    return new Response(JSON.stringify({ data: notificationResp.data }), {
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
