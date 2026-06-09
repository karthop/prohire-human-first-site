import { Seo } from "@/components/Seo";

const sections = [
  {
    heading: "Acceptance",
    body: [
      "These Terms and Conditions (\"Terms\") govern your use of prohireresources.com (the \"Site\") and any inquiry, communication, or engagement with proHIRE resources LLC (\"proHIRE resources,\" \"we,\" \"us,\" or \"our\"). By using the Site or contacting us, you agree to these Terms.",
      "Engagements for our professional services are governed by a separate written engagement letter or statement of work signed by both parties. Where these Terms conflict with that signed agreement, the signed agreement controls.",
    ],
  },
  {
    heading: "Nature of our services",
    body: [
      "proHIRE resources is a boutique firm offering executive search, hiring and embedded recruiting support, growth acceleration and business development advisory, and individual career advisory.",
      "Our work is advisory and consultative. Information, recommendations, candidate introductions, and strategy provided by us are based on our professional judgment, the information available to us at the time, and the scope defined in the engagement.",
      "Use of the Site does not create a client relationship. A client relationship is established only through a signed engagement letter or statement of work.",
    ],
  },
  {
    heading: "No guarantee of outcomes",
    body: [
      "Executive search, recruiting, and advisory work involve human decisions, market conditions, and factors outside our control. We do not guarantee that any specific candidate will be hired, will accept an offer, will remain in role for any specific period, or will perform to any particular standard.",
      "Similarly, we do not guarantee that growth advisory, business development, or career advisory work will produce any specific revenue result, hiring decision, promotion, or career outcome. Any forecasts, benchmarks, illustrations, or examples shared during our work are provided for context and do not constitute a promise of results.",
      "Replacement guarantees, fee structures, and other engagement-specific commitments, if any, will be set out in the applicable engagement letter or statement of work.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "We treat all client information, candidate information, search activity, and engagement details as confidential. We will not disclose confidential information except as required to perform the engagement, with your authorization, or as required by law.",
      "You agree to treat as confidential any non-public information we share with you in the course of our work, including search strategy, candidate identities, market intelligence, methodologies, templates, and pricing.",
      "Confidentiality obligations survive the conclusion of an engagement.",
    ],
  },
  {
    heading: "Fees and payment terms",
    body: [
      "Fees, retainers, milestones, expenses, and payment schedules are set out in the engagement letter or statement of work for each engagement. Unless otherwise stated, invoices are due net fifteen days from the invoice date.",
      "Past-due amounts may accrue interest at one and one-half percent per month, or the maximum rate allowed by law, whichever is lower. You are responsible for reasonable costs of collection, including attorney fees, on any past-due balance.",
      "Pre-engagement consultations and initial scoping conversations are complimentary unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "Client responsibilities",
    body: [
      "You agree to provide accurate and complete information needed for us to do the work, to respond to candidates and to us within reasonable timeframes, to make decisions and feedback available in a timely manner, and to comply with all applicable hiring, employment, and anti-discrimination laws when evaluating candidates we introduce.",
      "Delays or inaccuracies on the client side may affect timelines, outcomes, and, where applicable, fees.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All materials authored by proHIRE resources, including methodologies, frameworks, search strategy documents, scorecards, role specifications, templates, candidate summaries, articles, and content published on the Site, are the intellectual property of proHIRE resources LLC.",
      "On full payment of the applicable fees, the client receives a limited, non-exclusive, non-transferable, internal-use license to the specific deliverables produced for that engagement. Underlying methodologies, tools, and know-how remain the property of proHIRE resources.",
      "You may not reproduce, redistribute, republish, or commercialize content from the Site or from an engagement without our prior written consent. Brief quotations with attribution are permitted.",
    ],
  },
  {
    heading: "Candidate introductions",
    body: [
      "Candidates introduced by proHIRE resources are introduced for the specific role described in the engagement. Engagement of an introduced candidate for any role, by the client or any affiliate of the client, within the period stated in the engagement letter is subject to the fee structure of that engagement, regardless of the source of the introduction.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, the total aggregate liability of proHIRE resources LLC, its members, employees, and contractors, arising out of or related to the Site, these Terms, or any engagement, shall not exceed the fees actually paid by you to proHIRE resources for the specific engagement giving rise to the claim during the twelve months preceding the event giving rise to the claim.",
      "In no event shall proHIRE resources be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, loss of revenue, loss of business opportunity, loss of data, or reputational harm, even if advised of the possibility of such damages.",
      "Nothing in these Terms limits liability for fraud, willful misconduct, or any liability that cannot be excluded by applicable law.",
    ],
  },
  {
    heading: "No employment relationship",
    body: [
      "Candidates we introduce are not employees, agents, or representatives of proHIRE resources. Hiring, employment, classification, compensation, and ongoing management of any candidate the client hires are the sole responsibility of the client.",
    ],
  },
  {
    heading: "Third-party content",
    body: [
      "The Site may include links to or references to third-party content. We do not control and are not responsible for third-party content, products, or services.",
    ],
  },
  {
    heading: "Site availability",
    body: [
      "We make commercially reasonable efforts to keep the Site available, but we do not warrant uninterrupted or error-free operation. The Site is provided on an \"as is\" and \"as available\" basis.",
    ],
  },
  {
    heading: "Governing law and disputes",
    body: [
      "These Terms are governed by the laws of the State of Georgia, United States, without regard to its conflict of laws principles. The parties agree that any dispute arising out of or related to these Terms or any engagement will be brought exclusively in the state or federal courts located in Fulton County, Georgia, and both parties consent to the personal jurisdiction of those courts.",
      "The parties first agree to attempt in good faith to resolve any dispute through direct discussion before initiating formal proceedings.",
    ],
  },
  {
    heading: "Changes to these Terms",
    body: [
      "We may update these Terms from time to time. The updated version will be posted on this page with a revised effective date. Continued use of the Site after an update constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these Terms should be directed to Chris Betz through the Contact page.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Terms and Conditions | proHIRE resources"
        description="Terms governing use of prohireresources.com and professional services engagements with proHIRE resources LLC."
      />

      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Legal</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-3xl">Terms and Conditions</h1>
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
