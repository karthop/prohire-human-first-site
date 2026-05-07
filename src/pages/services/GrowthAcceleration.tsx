import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function GrowthAcceleration() {
  return (
    <ServiceTemplate
      seoTitle="Revenue & Operational Acceleration | proHIRE resources"
      seoDescription="Senior business development, partnership work, and operating infrastructure for companies between strategy and scale."
      eyebrow="Growth Acceleration"
      title="Revenue & Operational Acceleration"
      lead="The gap between a strategy deck and a closed enterprise account is staffed wrong in most companies. We close it with experienced operators on shorter time horizons, real revenue and operating impact in 30, 60, and 90 days."
      thesis="Most growth-stage companies don't lack strategy. They lack the senior execution muscle to turn it into closed revenue and durable operating infrastructure. Hiring a full-time CRO or COO is an 8-to-12-month exercise the company often can't afford to wait for. We bring operators who have run the play before, embed them inside the team, and accept real accountability for the outcome."
      pointOfView="Acceleration isn't more activity. It's the right person, in the right seat, for the right twelve weeks."
      whoFor={[
        "Founder-led companies needing senior BD execution before , or instead of , a full-time sales hire",
        "PE-backed portfolios scaling go-to-market or operating capacity across multiple investments",
        "Leadership teams penetrating enterprise accounts, new geographies, or new market segments",
        "Companies whose product is ready and whose pipeline isn't",
      ]}
      capabilities={[
        {
          heading: "Business development execution",
          body: "We function as your senior external BD team , running named-account campaigns, partnership development, and C-level relationship building while the leadership team focuses on strategy and product.",
          bullets: [
            "Enterprise account penetration",
            "Strategic partnership identification and structuring",
            "C-level relationship building and deal facilitation",
            "Market entry and competitive positioning",
          ],
        },
        {
          heading: "Operating infrastructure",
          body: "Strategic HR, compliance, and operating systems that scale with growth while reducing legal and operational exposure.",
          bullets: [
            "Compliance and risk frameworks",
            "Performance management and compensation design",
            "Organizational design and change management",
          ],
        },
        {
          heading: "Fractional executive support",
          body: "Senior chief-of-staff and executive operations capacity for CEOs and founders whose time is the bottleneck.",
        },
        {
          heading: "Strategic partnership models",
          body: "Foundation, Growth, and Enterprise partnership shapes , modular by capability, with quarterly business reviews and shared milestones.",
        },
      ]}
      disciplines={[
        {
          heading: "Named plays, not generic activity",
          body: "Every engagement runs against one of a small number of named plays we have run before. We are explicit about which play we are running, why, and what success looks like at each milestone.",
        },
        {
          heading: "Senior operators in the seat",
          body: "The work is done by senior operators with first-hand experience running the play, not by a junior team supervised from a distance. The person you meet at intake is the person executing.",
        },
        {
          heading: "Written milestones, weekly cadence",
          body: "Engagements run on a weekly working session and written milestone notes. There is no ambiguity about what was committed, what shipped, and what is at risk.",
        },
        {
          heading: "Outcome accountability",
          body: "We define measurable outcomes in writing at the start of each engagement and grade ourselves against them at quarterly reviews.",
        },
      ]}
      methodMap={[
        { phase: "Discovery", body: "Two to three structured conversations with the CEO and revenue or operations leadership to identify the highest-leverage play and the constraint that's been blocking it." },
        { phase: "Design", body: "A written 12-week plan: named accounts or workstreams, weekly cadence, success metrics, and the senior operator who will run it. Reviewed and signed jointly." },
        { phase: "Execute", body: "Senior-led execution against the plan. Weekly working sessions with the client team, written milestone notes, and monthly steering check-in with the CEO or sponsor." },
        { phase: "Embed", body: "Hand-off plan to the internal team or recommended next hire. The play continues running after we step back; the playbook stays with the client." },
      ]}
      wontDo={[
        "Sell a fixed-deliverable engagement when the underlying play hasn't been agreed in writing.",
        "Staff junior operators against a senior mandate.",
        "Take performance-only engagements where there is no shared accountability for inputs.",
      ]}
      engagements={[
        { name: "Foundation Partnership", detail: "Core operating infrastructure , onboarding, light recruiting, and HR foundations , for companies under 30 employees." },
        { name: "Growth Partnership", detail: "Foundation plus active BD execution or fractional chief-of-staff capacity. The most common shape for Series A and B companies." },
        { name: "Enterprise Partnership", detail: "Comprehensive multi-workstream support , BD, operating infrastructure, and fractional executive capacity in parallel." },
        { name: "BD execution", detail: "Standalone senior BD engagement against a named-account or partnership thesis, with monthly retainer and outcome incentives." },
        { name: "Operations & HR", detail: "Standalone operating-infrastructure engagement, retainer or project-based." },
        { name: "Volume partnership", detail: "Multi-quarter and annual commitments structured with shared milestones and partnership incentives." },
      ]}
      caseNarrative={{
        tag: "Series B · Logistics",
        title: "Five national-chain meetings in 30 days, two converted within the quarter.",
        body: "A Series B logistics platform had spent six months trying to break into national retail accounts and was burning founder cycles on cold outreach.\n\nWe ran our enterprise account-penetration play: a named target list of seven retailers, a senior operator who had sold into the same buyers from a prior role, and a weekly cadence with the founder.\n\nWithin 30 days, five of the seven were in active conversations. By the end of the quarter, two had become signed contracts. The internal sales hire , postponed for a year while the company looked for the wrong profile , was now scoped against actual deal motion."
      }}
      faq={[
        {
          q: "How fast do we see impact?",
          a: "Most engagements show first measurable signal , a meeting set, a partnership advanced, an operating workstream stood up , within the first 30 days. We define what 30/60/90-day signal looks like at the start of each engagement, in writing.",
        },
        {
          q: "Are you a substitute for a full-time CRO or COO?",
          a: "Sometimes, for a defined window. More often we are the bridge that buys the company time to hire the right full-time leader against real, validated motion rather than against a hypothesis. We will tell you directly which case yours is.",
        },
        {
          q: "Do you take performance-only deals?",
          a: "No. Pure performance-only structures create misaligned incentives and short-term behavior. We take blended structures with shared accountability for both inputs and outcomes.",
        },
        {
          q: "What does a typical week look like?",
          a: "One working session with the client team, named-account or workstream execution between sessions, and a written milestone note at the end of the week. A monthly steering check-in with the CEO or sponsor.",
        },
        {
          q: "Who owns the relationships built during the engagement?",
          a: "The client. Every account, contact, and partnership advanced during the engagement transitions to the client team and the client CRM. The playbook stays with the client when we step back.",
        },
      ]}
    />
  );
}
