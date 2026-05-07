import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function TalentSolutions() {
  return (
    <ServiceTemplate
      seoTitle="Hiring & Workforce Strategy | proHIRE resources"
      seoDescription="Hiring built around the actual work, finance, technology, operations, and people, for fast-growing companies that have outgrown a generic agency."
      eyebrow="Hiring & Workforce"
      title="Hiring & Workforce Strategy"
      lead="We don't fill seats. We build teams. Specialized hiring across finance, technology, operations, and people, designed for the speed, compliance, and quality demands of fast-growing companies."
      thesis="Most growth-stage companies don't have a hiring problem. They have a team-design problem. The function isn't drawn out, so every search starts from scratch and every offer feels like an emergency. The work begins one layer up, defining the team, the seats, the seams, and the cadence, and only then does the hiring start. Done this way, the team scales. Done the other way, the team churns."
      pointOfView="Hiring is the symptom. Designing the team is the work."
      whoFor={[
        "Founders and CFOs scaling finance, technology, and operations teams through a funding round or capital event",
        "Companies that need dedicated recruiting capacity without the fixed overhead of an in-house team",
        "Leaders rebuilding hiring velocity after rapid growth, restructuring, or a leadership change",
        "PE-backed portfolios standardizing talent infrastructure across multiple investments",
      ]}
      capabilities={[
        {
          heading: "Finance & accounting",
          body: "Senior accountants, controllers, FP&A leaders, tax & compliance, finance operations, and BI specialists tuned for high-growth and investor-reporting environments.",
        },
        {
          heading: "Technology & product",
          body: "Senior engineering, product management, data, and platform roles across SaaS, fintech, healthcare, and supply chain.",
        },
        {
          heading: "Operations & supply chain",
          body: "Operations leadership, supply chain, logistics, and customer operations talent built for scaling complexity.",
        },
        {
          heading: "People & HR",
          body: "Heads of people, talent acquisition leaders, total rewards, and HR business partners who can stand up the function as the company crosses inflection points.",
        },
        {
          heading: "Embedded recruiting (RPO)",
          body: "Dedicated recruiting capacity that operates as part of your team, sized to your hiring plan and scaled up or down without fixed overhead.",
        },
        {
          heading: "Onboarding systems",
          body: "Modular onboarding infrastructure , planning, forms, welcome programs, manager briefs, and 30-day liaison support , included on direct-hire placements.",
        },
      ]}
      disciplines={[
        {
          heading: "Design the team before sourcing",
          body: "We map the team, roles, reporting lines, seams to adjacent groups, and the operating cadence, before opening any requisition. The hiring plan is downstream of that.",
        },
        {
          heading: "Senior screening on every role",
          body: "Every candidate engaged is interviewed by a senior recruiter who has hired into this kind of role before. Screening is judgment work, not throughput work.",
        },
        {
          heading: "Calibrated shortlists",
          body: "Three to five referenceable candidates per role, not twenty resumes. Calibration meetings re-tune the search after the first round, every time.",
        },
        {
          heading: "Offer integrity",
          body: "We coach hiring managers on offer construction, comp positioning, and counter-offer dynamics. The placement is not closed when the offer is signed, it is closed when day 30 holds.",
        },
      ]}
      methodMap={[
        { phase: "Discovery", body: "Sit with the CFO, CTO, or head of people to map the function, the gaps, and the timeline. Identify whether this is a hiring problem, an architecture problem, or both." },
        { phase: "Design", body: "Deliver a written workforce plan: roles in priority order, scope language, comp bands, sourcing thesis, and the hiring cadence required to land the plan." },
        { phase: "Execute", body: "Run searches in parallel against the plan, with weekly progress notes and calibration meetings. Embedded RPO capacity ramps up or down to match the rhythm." },
        { phase: "Embed", body: "Onboarding system installs alongside the first hires. 30/60/90-day check-ins with the function lead to ensure retention is being earned, not assumed." },
      ]}
      wontDo={[
        "Run as a contingent agency or compete against five firms for the same requisition.",
        "Submit a single resume that hasn't been interviewed by a senior member of our team.",
        "Take a hiring mandate when the underlying function is broken and the client won't re-design it first.",
      ]}
      engagements={[
        { name: "Direct hire", detail: "Senior-led permanent placements with written replacement protections and onboarding support included." },
        { name: "Embedded RPO", detail: "Dedicated recruiting capacity priced as a subscription to a defined hiring plan, scalable up or down." },
        { name: "Project squad", detail: "Time-boxed campaigns to land a defined cluster of hires inside a quarter , typical for funding-event ramps." },
        { name: "Onboarding system", detail: "Standalone install of the onboarding infrastructure for an existing team, or bundled with direct-hire placements." },
        { name: "Volume partnership", detail: "Multi-hire and annual partnerships structured with shared milestones and incentives." },
      ]}
      caseNarrative={{
        tag: "Series B · Software",
        title: "An entire FP&A function built before the next round.",
        body: "A Series B software CFO had nine months to the next financing and a board reporting cadence the existing finance team couldn't sustain.\n\nWe re-scoped the function before opening searches: a Senior Financial Analyst plus a Controller, sequenced two weeks apart, with onboarding built in.\n\nBoth seats were filled within three weeks. By the next board meeting the new team owned the package. The CFO redirected attention to the round."
      }}
      faq={[
        {
          q: "How are you different from a recruiting agency?",
          a: "An agency sells resumes. We sell function design and senior-led execution. Every engagement begins with a workforce plan, every shortlist is calibrated, and every placement comes with onboarding support. The pricing model reflects that , we are not paid to send volume.",
        },
        {
          q: "What does embedded RPO actually mean?",
          a: "We become your recruiting team for a defined period , running intake meetings, sourcing, scheduling, and offer construction inside your tooling and your brand. Capacity scales with the hiring plan; we ramp up before a round and back down after.",
        },
        {
          q: "Who owns the offer and the candidate relationship?",
          a: "You do, always. We coach offer construction and run final-mile closing support, but the relationship belongs to the hiring manager from day one of onboarding.",
        },
        {
          q: "How do you handle data and IP?",
          a: "All client data , candidate pipelines, comp benchmarks, hiring plans , is treated as confidential and is not reused across engagements. NDAs are standard. Pipelines built during an engagement remain with the client.",
        },
        {
          q: "How quickly can you start?",
          a: "Most engagements start within seven to ten business days of an executed engagement letter. Project squads for funding-event ramps can be stood up faster when the timing demands it.",
        },
      ]}
    />
  );
}
