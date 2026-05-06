import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function CareerAdvisory() {
  return (
    <ServiceTemplate
      seoTitle="Career Advisory for Senior Professionals | proHIRE resources"
      seoDescription="Confidential career advisory for senior executives, board candidates, and high-stakes professional transitions."
      eyebrow="Practice 04"
      title="Career Advisory for Senior Professionals"
      lead="Confidential, one-to-one advisory for senior leaders navigating high-stakes transitions, from CXO moves and board candidacies to legacy-defining career decisions."
      whoFor={[
        "Senior executives weighing roles, exits, or board transitions",
        "Mid-career leaders positioning for the next inflection",
        "Founders and operators planning a strategic next chapter",
      ]}
      capabilities={[
        {
          heading: "Executive positioning",
          body: "Resume, LinkedIn, and executive-narrative development calibrated to board-level audiences and search firm scrutiny.",
        },
        {
          heading: "Search & network strategy",
          body: "Targeted approach to retained search firms, board networks, and decision-makers in your category.",
        },
        {
          heading: "Interview & negotiation advisory",
          body: "Preparation for board interviews, executive comp structures, equity, and complex offer negotiations.",
        },
        {
          heading: "Board readiness",
          body: "Board-track positioning, affiliations, governance preparation, and director-level introductions.",
        },
      ]}
      engagements={[
        { name: "Engagement", detail: "Scoped per engagement. Confidential, fixed-fee structures." },
        { name: "Discovery call", detail: "30-minute confidential conversation to assess fit and approach." },
      ]}
    />
  );
}
