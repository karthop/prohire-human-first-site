import { Seo } from "@/components/Seo";

const sections = [
  {
    heading: "Overview",
    body: [
      "proHIRE resources LLC (\"proHIRE resources,\" \"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains what information we collect through prohireresources.com (the \"Site\"), how we use it, who we share it with, and the rights you have over it.",
      "By using the Site or submitting an inquiry through our contact form, you agree to the practices described here.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We only collect information that you voluntarily provide through our contact form, together with limited technical information generated when you visit the Site.",
      "Contact form submissions include: name, business email, company, role, phone number (optional), inquiry type, and the content of the message you send. We do not request sensitive personal information through the form and ask that you do not include it in your message.",
      "Technical information includes basic log data such as browser type, device type, referring page, and pages visited. This information is used in aggregate to operate the Site and is not used to identify individual visitors.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information you submit solely to respond to your inquiry, to evaluate a potential engagement, to communicate with you about our services, and to maintain a record of the conversation.",
      "We do not sell your information. We do not use it for advertising. We do not add you to a marketing list without your explicit consent.",
    ],
  },
  {
    heading: "Who we share information with",
    body: [
      "Your information is reviewed by Chris Betz and, where relevant, by members of the proHIRE resources team supporting your inquiry.",
      "We use a small number of vetted service providers to operate the Site and deliver our contact form, including our hosting and form delivery infrastructure and our email service. These providers process information only on our instructions and only to the extent needed to perform their service.",
      "We will disclose information if required to do so by law, by valid legal process, or to protect the rights, safety, or property of proHIRE resources, our clients, or others.",
      "In the event of a sale, merger, or reorganization of the firm, information may transfer to the successor entity, subject to the protections of this Policy.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "We retain contact form submissions and related correspondence for as long as needed to evaluate, deliver, and document a potential or active engagement, and afterward for the period required by professional, contractual, tax, and legal obligations. When information is no longer needed, it is deleted or anonymized.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "All inquiries are treated as confidential. Information shared with us during an active executive search, advisory, or career engagement is held under the same standard of discretion that governs the engagement itself.",
    ],
  },
  {
    heading: "Your rights under GDPR",
    body: [
      "If you are located in the European Economic Area or the United Kingdom, you have the right to request access to the personal information we hold about you, to request correction or deletion of that information, to object to or restrict certain processing, and to request portability of the information you provided to us.",
      "Our lawful bases for processing your information are your consent (when you submit the contact form), our legitimate interest in responding to business inquiries, and, where applicable, the performance of a contract with you.",
      "You also have the right to lodge a complaint with your local data protection authority.",
    ],
  },
  {
    heading: "Your rights under CCPA",
    body: [
      "If you are a California resident, you have the right to know what personal information we have collected about you, the categories of sources, the business purpose for collecting it, and the categories of third parties with whom we share it. You have the right to request deletion of your personal information, subject to legal exceptions, and the right not to be discriminated against for exercising these rights.",
      "We do not sell personal information and we do not share it for cross-context behavioral advertising.",
    ],
  },
  {
    heading: "How to exercise your rights",
    body: [
      "To make a request under GDPR, CCPA, or any other applicable privacy law, contact Chris Betz through the form on our Contact page. We will respond within the timeframes required by the applicable law and may need to verify your identity before fulfilling the request.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "The Site uses a minimal set of cookies and similar technologies that are necessary for the Site to function and to understand basic, aggregated usage patterns. We do not use third-party advertising or retargeting cookies.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect the information you submit. No method of transmission over the internet is fully secure, and we cannot guarantee absolute security. Please do not send sensitive personal or financial information through the contact form.",
    ],
  },
  {
    heading: "Children",
    body: [
      "The Site is intended for business audiences. We do not knowingly collect information from children under the age of 16.",
    ],
  },
  {
    heading: "Changes to this Policy",
    body: [
      "We may update this Policy from time to time. The updated version will be posted on this page with a revised effective date.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this Privacy Policy or about how your information is handled should be directed to Chris Betz through the Contact page.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Privacy Policy | proHIRE resources"
        description="How proHIRE resources collects, uses, and protects information submitted through our Site, including rights under GDPR and CCPA."
      />

      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Legal</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-3xl">Privacy Policy</h1>
          <p className="mt-6 text-sm text-primary-foreground/70">Effective June 9, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">On this page</div>
            <ul className="space-y-2 text-sm text-foreground/80 font-light">
              {sections.map((s) => (
                <li key={s.heading}>{s.heading}</li>
              ))}
            </ul>
          </aside>

          <article className="lg:col-span-8 space-y-12">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-serif text-2xl text-foreground mb-4">{s.heading}</h2>
                <div className="space-y-4 text-foreground/85 font-light leading-relaxed">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}
