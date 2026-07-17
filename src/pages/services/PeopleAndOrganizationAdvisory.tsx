import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CTABand } from "@/sections/CTABand";
import { Seo } from "@/components/Seo";
import { FaqList } from "@/components/FaqList";

const situations = [
  "New CHRO, VP People, or Head of HR just stepped in and needs execution capacity in the first ninety days",
  "Founder or CEO carrying HR decisions off the side of the desk, with no senior people leader yet in place",
  "HR team is real but outnumbered by the agenda the business is asking it to carry",
  "Growth, restructure, acquisition, or workforce redesign is moving faster than the people function can absorb",
  "HR technology, data, or reporting cannot support the decisions leadership is being asked to make",
  "Board or PE sponsor wants an independent read on the people function before the next capital event",
];

const modes = [
  {
    label: "Build",
    body: "For companies that do not yet have the HR structure, leadership, processes, or technology their stage requires. We build the foundation before growth makes the gaps expensive.",
  },
  {
    label: "Strengthen",
    body: "For companies with an existing HR team that is overwhelmed, understaffed, or missing specific capabilities. We put real horsepower behind them, without replacing them.",
  },
  {
    label: "Transform",
    body: "For companies in growth, restructuring, leadership change, acquisition, technology implementation, or workforce redesign. We carry the people work across the inflection.",
  },
];

const flagships = [
  {
    heading: "CHRO Transition & 100-Day Partnership",
    body: "A ninety-day engagement behind a newly appointed CHRO, VP People, or Head of HR. Business and stakeholder interviews, HR function capability assessment, workforce and leadership risk map, HR metrics, and a written twelve-month roadmap ready for the board.",
    bullets: [
      "30-day discovery, 60-day diagnostic, 90-day roadmap",
      "Independent view of the team they inherited",
      "Search or interim placements for missing HR capabilities",
      "Embedded recruiting behind the new leader from day one, direct-hire, contract, contract-to-hire, and statement-of-work",
    ],
  },
  {
    heading: "HR Function Diagnostic & Roadmap",
    body: "A fixed-scope assessment for companies asking whether their people function is designed for the next stage. Ends with findings, priorities, and a written twelve-month plan the CEO, CHRO, and board can act on.",
    bullets: [
      "HR organizational structure and responsibility map",
      "Staffing plan, service model, and capability assessment",
      "Where work is duplicated, missing, or sitting with the wrong people",
    ],
  },
  {
    heading: "Fractional & Interim HR Leadership",
    body: "A senior HR leader operating inside the company for an agreed period. Fractional CHRO, interim Chief People Officer, VP HR, Head of People, HR transformation leader, or a specialist in talent, total rewards, HRIS, OD, or employee relations.",
    bullets: [
      "Lead the function, stabilize an area, or run a defined transformation",
      "Same senior judgment, without immediate full-time headcount",
      "Runs in parallel with the permanent search when needed",
    ],
  },
  {
    heading: "Recruiting, Workforce & Organization Planning",
    body: "Specialized recruiting and the workforce architecture around it. Direct-hire, contract, contract-to-hire, and statement-of-work delivery across finance, technology, operations, and people functions, paired with headcount planning, organizational structure, span-of-control, workforce cost, critical-role identification, and build-versus-buy-versus-contract decisions.",
    bullets: [
      "Direct-hire, contract, contract-to-hire, and statement-of-work delivery",
      "Embedded recruiting teams sized to the hiring plan",
      "Skills mapping against the reorg or AI redesign",
      "Restructuring and post-reorganization hiring plans",
      "Succession risk analysis and critical-role coverage",
    ],
  },
];

const stages = [
  {
    label: "Startup",
    scale: "Under ~100 employees",
    situation: "People decisions are being made by founders between everything else.",
    flagship: "People Foundation Build",
    body: "Fractional Head of People, HR infrastructure assessment, initial HR organization and hiring plan, HRIS and payroll selection, manager basics, performance-management foundations, compensation philosophy, and the search for the first HR hire when the time comes.",
  },
  {
    label: "Growth",
    scale: "~100 to 500 employees",
    situation: "The HR team is real but outnumbered, and the board's expectations just went up.",
    flagship: "New HR Leader Launch",
    body: "Ninety-day partnership behind a newly hired CHRO or Head of People. Talent audit, org assessment, compensation benchmarking, leadership bench, manager development sprints, and embedded recruiting so a small team is not drowning in requisitions.",
  },
  {
    label: "Mid-market",
    scale: "~500 to 2,500 employees",
    situation: "The company is restructuring around AI and efficiency, and HR is expected to lead it without breaking the culture or the pipeline.",
    flagship: "Strategic Workforce Planning",
    body: "Office of the CHRO support. HR operating-model redesign, HRBP and center-of-excellence design, workforce planning, succession for the top twenty roles, executive onboarding, reorg execution, and outplacement handled with the same care we give the people we place.",
  },
  {
    label: "Enterprise",
    scale: "2,500+ employees",
    situation: "The function is mature. The need is confidential, senior, and specific.",
    flagship: "Confidential leadership & interim",
    body: "Focused, high-consequence work where an independent outside partner has an advantage. Business-unit transformation, executive assessment, HR operating-model work, TA diagnostics, leadership succession, HR technology or AI governance, interim CHRO placement, and independent market intelligence.",
  },
];

const capabilityAreas = [
  "HR Function Strategy & Operating Model",
  "Office of the CHRO",
  "Fractional & Interim HR Leadership",
  "Recruiting & Talent Delivery",
  "Workforce Planning & Organization Design",
  "Leadership, Performance & Succession",
  "Compensation & People Analytics",
  "HR Technology, Process & Responsible AI",
  "Change, Integration & Special Situations",
];

const deliveryModel = [
  {
    heading: "Senior-led on every engagement",
    body: "Chris owns the client relationship, the diagnosis, the scope, executive alignment, and project accountability. No junior staffing layer running the work behind a partner-fronted pitch.",
  },
  {
    heading: "Specialist bench where the work needs it",
    body: "A curated network of specialists in compensation, employment-law support, HRIS, benefits, investigations, organizational development, change management, people analytics, and learning. Brought in with clear professional boundaries and named on the engagement.",
  },
  {
    heading: "Accountable for the outcome, not the hours",
    body: "Engagements sell defined access, capability, and deliverables. We do not sell hours. The measure is whether the function works twelve months from now, not whether a report was delivered.",
  },
];

const methodMap = [
  {
    phase: "Discovery",
    body: "Sit with the CEO, CHRO, board, and HR team to understand the business, the workforce, and where the people function is stretched. Identify whether this is a build, a strengthen, or a transform.",
  },
  {
    phase: "Design",
    body: "Deliver a written diagnostic: HR operating model, capability gaps, workforce and leadership risk map, priorities, and a twelve-month roadmap with named owners.",
  },
  {
    phase: "Execute",
    body: "Run the workstreams. Interim leadership, searches, comp architecture, HRIS selection, or transformation program leadership, with senior accountability and weekly cadence.",
  },
  {
    phase: "Embed",
    body: "Stay in through adoption. Manager enablement, HR team ramp, executive alignment, and the ninety-day check that says whether the work is actually holding.",
  },
];

const wontDo = [
  "Operate as a PEO, co-employer, or benefits broker.",
  "Process payroll or administer benefits enrollment.",
  "Provide employment-law opinions or ERISA fiduciary services. Compliance work is readiness and coordination with qualified counsel.",
  "Sell unlimited day-to-day HR administration in place of the leadership the company actually needs to hire.",
  "Run generic executive coaching without a business or people-function objective attached.",
];

const engagements = [
  {
    name: "Diagnostic",
    detail: "A fixed-scope assessment ending with findings, priorities, and a written roadmap.",
  },
  {
    name: "Project",
    detail: "A defined initiative such as HR function redesign, compensation architecture, HRIS selection, or succession planning.",
  },
  {
    name: "Embedded Advisory",
    detail: "A three-, six-, or twelve-month partnership with the CHRO, CEO, or HR leader.",
  },
  {
    name: "Fractional or Interim Leadership",
    detail: "A named executive or specialist operating inside the company for an agreed period.",
  },
  {
    name: "Talent Delivery",
    detail: "Direct-hire, contract, contract-to-hire, and statement-of-work engagements, delivered by the same team leading the practice.",
  },
  {
    name: "Transformation Office",
    detail: "A senior lead and specialist team managing several connected workstreams across the inflection.",
  },
  {
    name: "Annual Partnership",
    detail: "Reserved capacity, quarterly diagnostics, market intelligence, and priority project support across the year.",
  },
];

const faq = [
  {
    q: "How is this different from an HR outsourcing firm or a PEO?",
    a: "We do not process payroll, administer benefits, or act as a co-employer. This practice sits above that layer. We help leadership decide what the people function needs to become, put the right capability around it, and stay accountable until it works.",
  },
  {
    q: "How does this relate to your existing hiring and workforce work?",
    a: "It absorbs it. Specialized hiring across finance, technology, operations, and people functions, plus embedded recruiting, now sit inside this practice as execution capacity. The team we place is downstream of the function we help design.",
  },
  {
    q: "Do you personally do every technical HR specialty?",
    a: "No, and the practice is designed that way on purpose. Chris owns the diagnosis, judgment, and accountability. Comp analysis, employment-law support, HRIS, investigations, and OD are delivered by named specialists on our bench, with clear professional boundaries.",
  },
  {
    q: "Will you compete with our internal HR leader?",
    a: "The practice is built to support HR leaders, not replace them. The CHRO or Head of People stays the leader. We give that person independent intelligence, execution capacity, and access to talent they would otherwise have to build alone.",
  },
  {
    q: "What does this cost?",
    a: "Investment is engagement-specific and shared in conversation. Engagements compose by capability, with incentives for multi-month and annual partnerships. We do not sell hourly consulting as the primary model.",
  },
];

export default function PeopleAndOrganizationAdvisory() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="HR Support & Advisory | proHIRE resources"
        description="Execution partner for CHROs, Heads of People, and founders. HR leadership advisory, people function build-out, workforce strategy, and specialized talent delivery, from Startup to Enterprise."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            ← All services
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            HR Support & Advisory
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            HR Support & Advisory
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            The execution partner behind the HR leader. Senior expertise and execution
            capacity to help CEOs, CHROs, and Heads of People build, strengthen, and
            transform the people function. Recruiting sits inside the practice, with
            direct-hire, contract, contract-to-hire, and statement-of-work delivery scaled
            to the stage of the company.
          </p>
        </div>
      </section>

      {/* Thesis: Build / Strengthen / Transform */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Where we stand
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              Build, strengthen, or transform. Not one-size-fits-all.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground text-lg leading-relaxed font-light">
            <p className="mb-8">
              HR leaders are being asked to carry more than ever: leadership development,
              workforce planning, restructures, AI-driven change, usually with a smaller
              team than the job requires. The strategy is rarely the problem. Capacity and
              execution are. We do not replace the function. We equip it.
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {modes.map((m) => (
                <div key={m.label} className="bg-background p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-3">
                    {m.label}
                  </div>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Point of view */}
      <section className="py-12 bg-secondary/40 border-b border-border">
        <div className="container-editorial max-w-4xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Point of view
          </div>
          <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-snug">
            "We help leadership determine what the people function needs to become, put the
            right capability around it, and stay accountable until it works."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">Chris Betz, CEO</div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-12 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who it's for
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              You recognize your situation before you recognize the terminology.
            </h2>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {situations.map((item) => (
              <li
                key={item}
                className="flex gap-4 text-foreground text-lg font-light leading-relaxed border-b border-border pb-4"
              >
                <span className="text-accent text-sm pt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Four flagship offers */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                What we lead with
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Four signature offers.
              </h2>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                Everything else in the practice composes around these four. They are close
                enough to our existing authority that we can begin the work now, and each
                opens the door to the specialist capabilities the client actually needs.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {flagships.map((c) => (
              <div key={c.heading} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4">{c.heading}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  {c.body}
                </p>
                <ul className="space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-foreground font-light text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-accent">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sized for your stage */}
      <section className="py-16 bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Sized for your stage
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                A fifty-person startup and a fifteen-thousand-person enterprise do not need
                the same thing.
              </h2>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                Each stage leads with a flagship. Everything else composes around it.
              </p>
            </div>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {stages.map((s) => (
              <div key={s.label} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-3">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2">
                    {s.label}
                  </div>
                  <div className="font-serif text-xl text-foreground leading-snug">
                    {s.scale}
                  </div>
                </div>
                <div className="md:col-span-9 md:border-l md:border-border md:pl-8">
                  <p className="font-serif italic text-foreground/80 text-base mb-3">
                    {s.situation}
                  </p>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    Flagship
                  </div>
                  <div className="font-serif text-lg text-foreground mb-3">{s.flagship}</div>
                  <p className="text-muted-foreground font-light leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability areas */}
      <section className="py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What the practice covers
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              Nine capability areas.
            </h2>
            <p className="mt-4 text-muted-foreground font-light leading-relaxed">
              These are the domains the flagship offers pull from. We do not launch every
              one as an equal top-level pitch. We lead with the four above and bring the
              rest in as the engagement requires.
            </p>
          </div>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground text-lg font-light">
            {capabilityAreas.map((r) => (
              <li key={r} className="border-b border-border pb-3">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we deliver
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Senior-led, specialist-supported.
              </h2>
            </div>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {deliveryModel.map((d) => (
              <li key={d.heading} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    {d.heading}
                  </h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Method */}
      <section className="py-16 bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we run this work
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Discovery → Design → Execute → Embed.
              </h2>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                The same four phases, applied to the texture of this work.
              </p>
            </div>
            <div className="lg:col-span-8 divide-y divide-border border-y border-border">
              {methodMap.map((m) => (
                <div key={m.phase} className="py-6">
                  <div className="font-serif text-lg text-foreground mb-2">{m.phase}</div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we won't do */}
      <section className="py-16 bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              What we say no to
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              What we will not do.
            </h2>
            <p className="mt-4 text-primary-foreground/75 font-light leading-relaxed">
              This is an advisory, project, and talent practice. It is not a PEO, an
              outsourcing firm, or an employment-law substitute.
            </p>
          </div>
          <ul className="lg:col-span-8 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {wontDo.map((w) => (
              <li key={w} className="py-6">
                <span className="font-serif text-xl lg:text-2xl leading-snug">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-16 bg-secondary/50 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we engage
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Ways to work together
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-muted-foreground font-light text-lg leading-relaxed">
              Investment is engagement-specific and shared in conversation. Engagements
              compose by capability, with incentives for multi-month and annual partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {engagements.map((e) => (
              <div key={e.name} className="bg-background p-8 flex flex-col">
                <div className="font-serif text-lg text-foreground mb-3">{e.name}</div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case narrative */}
      <section className="py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              500-person company · New CHRO
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground leading-tight">
              The first ninety days is a resourcing problem, not a strategy problem.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground text-lg font-light leading-relaxed space-y-4">
            <p>
              A 500-person company brings in a new CHRO. The mandate is real, the runway is
              short, and the first board meeting is inside the ninety-day window.
            </p>
            <p>
              The CHRO does not need someone to tell them what HR is. They need execution
              capacity while they are still finding their footing: the audit, the
              benchmarks, the workforce risk map, the roadmap. So the first board meeting
              lands with substance, not slogans.
            </p>
            <p>
              That is the CHRO Transition & 100-Day Partnership. The CHRO remains the
              leader. We provide the intelligence, capacity, structure, and access to the
              talent that would otherwise take a year to assemble.
            </p>
            <p>
              <Link
                to="/what-were-seeing/new-chro-first-90-days-is-a-resourcing-problem"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
              >
                Read the full perspective <ArrowUpRight className="w-4 h-4" />
              </Link>
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground pt-4">
              Identifying details have been altered to preserve client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqList items={faq} />

      <CTABand
        title="Talk to us about a partnership."
        body="Tell us where your people function is stretched. We will respond with a candid view of how, and whether, we can help."
      />

      <div className="py-12 bg-background">
        <div className="container-editorial">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-180" /> All services
          </Link>
        </div>
      </div>
    </div>
  );
}
