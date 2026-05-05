import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function ExecutiveSearch() {
  return (
    <ServiceTemplate
      seoTitle="Executive Search & Leadership Advisory | proHIRE resources"
      seoDescription="Retained executive search and fractional CXO placement for founder-led, PE-backed, and enterprise companies."
      eyebrow="Practice 01"
      title="Executive Search & Leadership Advisory"
      lead="Retained executive search and fractional CXOs for the inflection points that define a company — new market entry, capital event, succession, or accelerated scale."
      whoFor={[
        "Founders and boards filling C-suite roles where the next hire shapes the next chapter",
        "PE and VC-backed companies needing leadership that has done it before",
        "Enterprise teams sourcing senior or specialized executives with discretion",
      ]}
      capabilities={[
        {
          heading: "Retained executive search",
          body: "C-suite and VP-level placements with named-target sourcing, deep diligence, and structured stakeholder process.",
          bullets: [
            "CEO, CFO, COO, CRO, CTO, CHRO, GC",
            "Board director and advisor placement",
            "Confidential and replacement searches",
          ],
        },
        {
          heading: "Fractional CXO placement",
          body: "Proven senior leaders embedded on fractional terms — typically 3–5 weeks to placement, vs. 8–10 weeks industry average.",
          bullets: [
            "CRO for go-to-market acceleration",
            "COO for scaling and process optimization",
            "CFO for investor relations and financial strategy",
            "CTO for product and technical strategy",
          ],
        },
        {
          heading: "Leadership advisory",
          body: "Trusted-advisor support to CEOs and founders on strategy, transformation, capital, and human capital decisions.",
        },
        {
          heading: "Network access",
          body: "Curated reach into our partner networks — C-Level Advisory, The Curated Network™, FinTech Atlanta — for board, capital, and go-to-market doors.",
        },
      ]}
      engagements={[
        { name: "Retained search", detail: "Standard executive search engagement with milestone-based investment structure." },
        { name: "Fractional executive", detail: "10% of annualized compensation for fractional executive placements." },
        { name: "Advisory retainer", detail: "Custom retainers for ongoing leadership and board advisory." },
      ]}
      outcomes={[
        {
          tag: "Series C · FinTech",
          quote:
            "Their fractional CRO brought proven expertise from scaling a competitor from $5M to $50M ARR. This wasn't staff augmentation — this was strategic leadership acquisition.",
          role: "Chief Executive Officer",
        },
        {
          tag: "Series A · Supply Chain Tech",
          quote:
            "We needed operational transformation while maintaining growth velocity. proHIRE delivered fractional COO expertise plus complete BD infrastructure, accelerating our market penetration by 6 months.",
          role: "Chief Executive Officer",
        },
      ]}
    />
  );
}
