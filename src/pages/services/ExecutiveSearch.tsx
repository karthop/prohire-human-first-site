import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function ExecutiveSearch() {
  return (
    <ServiceTemplate
      seoTitle="Executive Search & Leadership Advisory | proHIRE resources"
      seoDescription="Senior-led retained executive search, fractional CXO placement, and leadership advisory for founder-led, PE-backed, and enterprise companies."
      eyebrow="Executive Search"
      title="Executive Search & Leadership Advisory"
      lead="Retained search, fractional CXOs, and board advisory for the inflection points that define a company , succession, capital events, market entry, and accelerated scale."
      thesis="Most of what's sold as executive search today is a sourcing motion in advisory clothing , a database query dressed up in a deck. The result is a market saturated with shortlists that look credible and miss the underlying scope. We rebuild the work from the question backward: what is the company actually trying to do, who can do it, and how do we get them to say yes? The hire is the artifact. The judgment is the practice."
      pointOfView="A search is a leadership decision, not a procurement event. We engage the way a board wants to be advised, not the way a vendor wants to be paid."
      whoFor={[
        "Founders and boards filling C-suite roles where the next hire shapes the next chapter",
        "PE and VC-backed companies that need leadership who has done it before, at this stage, in this category",
        "Enterprise teams sourcing senior or specialized executives where discretion is non-negotiable",
        "Operators between roles who have been approached for a board seat and need a structured path",
      ]}
      capabilities={[
        {
          heading: "Retained executive search",
          body: "C-suite and VP-level placements with named-target sourcing, deep diligence, and a structured stakeholder process. Senior-led from intake to offer.",
          bullets: [
            "CEO, CFO, COO, CRO, CTO, CHRO, GC",
            "Confidential, replacement, and successor searches",
            "Board director and advisor placements",
          ],
        },
        {
          heading: "Fractional CXO placement",
          body: "Proven senior leaders embedded on fractional terms when the role is real but the timing, runway, or scope doesn't justify a full-time hire.",
          bullets: [
            "CRO for go-to-market acceleration",
            "COO for scaling operations and process",
            "CFO for investor relations and finance discipline",
            "CTO for product and technical strategy",
          ],
        },
        {
          heading: "Leadership advisory",
          body: "Trusted-advisor support to CEOs, founders, and boards on transformation, capital events, succession, and the human capital decisions that follow.",
        },
        {
          heading: "Network access",
          body: "Curated reach into our partner ecosystems , C-Level Advisory, The Curated Network™, FinTech Atlanta , for board, capital, and go-to-market doors that don't open through job boards.",
        },
      ]}
      disciplines={[
        {
          heading: "Scope architecture",
          body: "Before sourcing begins, we re-write the role with the CEO and the board: what outcome must this leader own in 12 months, what is non-negotiable in their resume, and what is mistakenly listed as required. Most failed searches were mis-scoped, not mis-sourced.",
        },
        {
          heading: "Named-target sourcing",
          body: "We source against a written shortlist of named companies and named operators, not against a keyword query. Every candidate engaged can be traced to a thesis about why they belong on the list.",
        },
        {
          heading: "360° referencing",
          body: "References are the work, not the formality. We speak to people the candidate did not provide , peers, former direct reports, board members , under structured protocols that surface signal, not testimonial.",
        },
        {
          heading: "Stakeholder choreography",
          body: "Board, CEO, executive team, and the candidate are sequenced deliberately. We protect the candidate's experience and the client's optionality at the same time.",
        },
        {
          heading: "Onboarding accountability",
          body: "Our work continues through the first 30, 60, and 90 days. The placement only matters if the impact compounds after we step back.",
        },
      ]}
      rolesWeLeadOn={[
        "Chief Executive Officer",
        "Chief Financial Officer",
        "Chief Operating Officer",
        "Chief Revenue Officer",
        "Chief Technology Officer",
        "Chief Human Resources Officer",
        "General Counsel",
        "Board Director",
        "Senior Advisor",
        "Functional VP / SVP (Sales, Finance, Engineering, People)",
      ]}
      methodMap={[
        { phase: "Discovery", body: "Two to three structured conversations with the CEO and key board members to pressure-test the scope, the success metrics, and the unwritten constraints , comp band, geography, off-limits firms, internal politics." },
        { phase: "Design", body: "A written engagement plan: target persona, named-target list, sourcing thesis, diligence protocol, stakeholder sequence, and timeline. The document is the contract for the search." },
        { phase: "Execute", body: "Senior-led sourcing, structured first conversations, calibrated shortlist, deep referencing, and choreographed client interviews. Weekly written progress notes." },
        { phase: "Embed", body: "Offer construction, negotiation support, transition planning, and 30/60/90-day onboarding check-ins with both the placement and the hiring executive." },
      ]}
      wontDo={[
        "Run a contingent search or compete against three other firms for the same role.",
        "Submit candidates we haven't personally interviewed and referenced.",
        "Take the engagement if the role is mis-scoped and the client won't re-scope it.",
      ]}
      engagements={[
        { name: "Retained search", detail: "Milestone-based engagement. Senior-led from intake to onboarding. Replacement protections defined per engagement." },
        { name: "Fractional executive", detail: "Embedded senior leadership for a defined operating window. Outcomes are written into the engagement, not assumed." },
        { name: "Advisory retainer", detail: "Ongoing trusted-advisor capacity to a CEO, founder, or board on leadership and capital decisions." },
        { name: "Confidential succession", detail: "Off-the-books succession planning for sitting CEOs and CXOs. NDA-backed, board-only visibility." },
      ]}
      caseNarrative={{
        tag: "Series C · Fintech",
        title: "A fractional CRO who had already scaled the same playbook.",
        body: "A Series C fintech CEO had a strong product, an under-built revenue function, and a board pressing for visible go-to-market traction before the next round. A full-time CRO was 9–12 months away on the cap table.\n\nWe re-scoped the role: the company didn't need a permanent CRO yet , it needed an operator who had taken a comparable product from $5M to $50M ARR and could install the motion in two quarters.\n\nWe placed a fractional CRO from a named target list of nine operators. Within the first quarter, the pipeline doubled and the company secured the enterprise logos the board had been asking about. The fractional engagement converted into a full-time CRO mandate at the right moment, with the right person already in the seat.",
      }}
      faq={[
        {
          q: "How long does a typical retained search take?",
          a: "Most C-suite searches close in 10 to 14 weeks from intake to signed offer. Fractional CXO placements typically close in three to five weeks. The first written shortlist arrives by week four on a retained search.",
        },
        {
          q: "What's your off-limits policy?",
          a: "We do not source from active clients during an engagement and for a defined period after. The exact terms are written into every engagement. Client trust is the asset; it isn't worth a placement.",
        },
        {
          q: "Do you offer a replacement guarantee?",
          a: "Yes. Specific terms are defined per engagement, but every retained search includes a written replacement protection. We also conduct 30/60/90-day check-ins with both the placement and the hiring executive to surface issues early.",
        },
        {
          q: "When should we hire fractional versus full-time?",
          a: "Fractional makes sense when the work is real but the runway, scope, or stage doesn't justify the cost of a full-time CXO , or when you need a specific operator's playbook for a defined window. We will tell you directly when full-time is the right answer, even if it shrinks the engagement.",
        },
        {
          q: "Will my search be confidential?",
          a: "Confidentiality is the default. Most of our searches are not advertised, not posted, and not discussed outside the named stakeholder set. Off-books succession work is run under NDA with board-only visibility.",
        },
      ]}
    />
  );
}
