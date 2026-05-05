import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function TalentSolutions() {
  return (
    <ServiceTemplate
      seoTitle="Strategic Talent & Workforce Solutions | proHIRE resources"
      seoDescription="Specialized hiring across technology, finance, and operations. Direct-hire, contract, RPO, and onboarding systems for high-growth teams."
      eyebrow="Practice 02"
      title="Strategic Talent & Workforce Solutions"
      lead="Specialized hiring and workforce infrastructure for technology, finance, and operations roles — built for the speed, compliance, and quality demands of high-growth environments."
      whoFor={[
        "Founders and CFOs scaling technology, finance, and operations teams",
        "Companies needing dedicated recruiting capacity without fixed overhead",
        "Leaders rebuilding hiring velocity after rapid growth or restructuring",
      ]}
      capabilities={[
        {
          heading: "Finance & accounting hiring",
          body: "Senior accountants, controllers, FP&A, tax & compliance, finance ops, and BI specialists for high-growth companies.",
          bullets: [
            "Roles filled in 1–3 weeks vs. 6–8 week industry average",
            "Deep screening for startup and high-growth fit",
            "Investor-reporting and compliance experience",
          ],
        },
        {
          heading: "Technology & operations hiring",
          body: "Senior engineering, product, data, and operations roles across technology, fintech, healthcare, and supply chain.",
        },
        {
          heading: "Recruiting subscription / fractional RPO",
          body: "Dedicated recruiting capacity that scales with hiring needs without fixed overhead.",
          bullets: [
            "$1,750–$2,500/week subscription model",
            "Project-based campaigns $2,500–$5,000",
            "Volume pricing for multiple simultaneous hires",
          ],
        },
        {
          heading: "Remote onboarding systems",
          body: "Modular onboarding service — planning, forms, welcome programs, manager briefs, and 30-day liaison support. Complimentary on direct-hire placements.",
        },
      ]}
      engagements={[
        { name: "Direct-hire", detail: "14% of first-year compensation. 90-day replacement guarantee." },
        { name: "Contract / contract-to-hire", detail: "Custom hourly rates with conversion path." },
        { name: "Recruiting subscription", detail: "$1,750–$2,500 per week. Month-to-month." },
        { name: "Onboarding modular", detail: "Per-hire pricing or $1,800/month team plan." },
        { name: "Volume partnership", detail: "10–15% discount on multi-hire and 6-month commitments." },
      ]}
      outcomes={[
        {
          tag: "Series B · Software",
          quote:
            "Built our entire FP&A function for the next funding round — Senior Financial Analyst and Controller delivered in 3 weeks, immediately owning our board reporting.",
          role: "Chief Financial Officer",
        },
        {
          tag: "28-Employee · Tech Services",
          quote:
            "Complete operational transformation: 350% increase in employer brand visibility, 53% reduction in time-to-hire, 24% improvement in retention — while reducing total recruiting costs.",
          role: "Chief Financial Officer",
        },
      ]}
    />
  );
}
