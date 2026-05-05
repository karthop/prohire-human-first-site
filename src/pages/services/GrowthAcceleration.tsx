import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function GrowthAcceleration() {
  return (
    <ServiceTemplate
      seoTitle="Growth Acceleration | proHIRE resources"
      seoDescription="Fractional business development, operational infrastructure, and partnership development for companies scaling with intent."
      eyebrow="Practice 03"
      title="Revenue & Operational Acceleration"
      lead="External business development, operational infrastructure, and partnership execution — boutique senior expertise at startup-conscious investment models, with measurable impact in 30–60 days."
      whoFor={[
        "Founder-led companies needing senior BD execution before a full sales hire",
        "PE-backed portfolios scaling operations across multiple investments",
        "Leadership teams penetrating enterprise accounts or new market segments",
      ]}
      capabilities={[
        {
          heading: "Business development execution",
          body: "We function as your external BD team — executing targeted revenue initiatives while leadership focuses on strategy and product.",
          bullets: [
            "Enterprise account penetration",
            "Strategic partnership identification and structuring",
            "C-level relationship building and deal facilitation",
            "Market entry and competitive positioning",
          ],
        },
        {
          heading: "Operational infrastructure",
          body: "Strategic HR, compliance, and operational systems that scale with growth while minimizing legal and operational exposure.",
          bullets: [
            "Compliance and risk mitigation frameworks",
            "Performance management and compensation design",
            "Organizational design and change management",
          ],
        },
        {
          heading: "Fractional executive support",
          body: "Senior career-level executive assistant and chief-of-staff capacity for C-suite productivity and execution.",
        },
        {
          heading: "Strategic partnership models",
          body: "Foundation, Growth, and Enterprise partnership tiers — modular by capability, with quarterly business reviews.",
        },
      ]}
      engagements={[
        { name: "Foundation Partnership", detail: "$3,500/month — core HR infrastructure, onboarding, light recruiting." },
        { name: "Growth Partnership", detail: "$6,500/month — Foundation + BD execution or fractional EA." },
        { name: "Enterprise Partnership", detail: "$12,000/month — comprehensive multi-service support." },
        { name: "BD execution", detail: "$6,000–$12,000/month + performance incentives, or $12K–$25K project-based." },
        { name: "HR & operations", detail: "$2,000–$4,500/month retainer or $1,500–$4,000 project-based." },
        { name: "Volume incentives", detail: "10% off 6-month commitments · 15% off annual partnerships." },
      ]}
      outcomes={[
        {
          tag: "Series B · AI Platform",
          quote:
            "5 technical hires and complete BD function buildout in 60 days, generating $1.2M qualified pipeline in the first quarter.",
          role: "Chief Technology Officer",
        },
        {
          tag: "Series B · Logistics Platform",
          quote:
            "We were burning cycles trying to penetrate enterprise retail accounts. proHIRE's BD execution secured meetings with 5 national chains within 30 days, converting 2 into major contracts.",
          role: "Chief Operating Officer",
        },
      ]}
    />
  );
}
