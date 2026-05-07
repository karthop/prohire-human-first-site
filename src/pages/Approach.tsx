import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const phases = [
  {
    n: "01",
    h: "Discovery",
    b: "We open with a confidential, structured conversation , not a pitch and not a discovery call dressed up as one. We listen for the underlying objective behind the brief: what the engagement must deliver in twelve months, what is non-negotiable, and what was put in writing because no one wanted to argue about it. Most engagements get re-scoped at this stage; that is the value.",
    deliverable: "A written situation summary and a pressure-tested scope.",
    excludes: "We will not accept an engagement we believe is mis-scoped without re-writing it first.",
  },
  {
    n: "02",
    h: "Design",
    b: "We design the engagement on paper before any work starts. Target profile or capability set, sourcing or execution thesis, named stakeholders, success metrics, investment shape, and timeline. The document is the contract , every subsequent decision references it.",
    deliverable: "An engagement plan, signed by client and firm, that governs the work.",
    excludes: "We do not begin sourcing or execution until the plan is signed.",
  },
  {
    n: "03",
    h: "Execute",
    b: "Senior-led execution against the plan. Named-target sourcing, structured stakeholder process, deep referencing , or for operating engagements, embedded delivery and named-account execution. Weekly working session with the client team, written milestone notes at the end of every week.",
    deliverable: "Calibrated shortlists, placed leaders, closed motion, or stood-up functions , depending on the engagement.",
    excludes: "We do not staff junior operators against senior mandates.",
  },
  {
    n: "04",
    h: "Embed",
    b: "Onboarding, integration, and 30-, 60-, and 90-day check-ins with both the placement and the hiring executive. For operating engagements, hand-off plans to internal teams and the next full-time hire. The work is only finished when the impact compounds after we step back.",
    deliverable: "A documented hand-off and structured post-engagement check-ins.",
    excludes: "We do not disappear at offer signing or at engagement close.",
  },
];

const principles = [
  {
    h: "Human-first.",
    b: "Senior judgment over volume. Relationships over transactions. Discretion is not a feature; it is the practice.",
  },
  {
    h: "AI-enhanced.",
    b: "Modern tooling for sourcing, screening, and market intelligence , applied where it sharpens decisions, never where it replaces judgment.",
  },
  {
    h: "Outcome-accountable.",
    b: "We commit to measurable outcomes, transparent investment shapes, and the candor to tell a client when we are not the right partner.",
  },
];

const pricingPrinciples = [
  {
    h: "Transparent shapes, never published rates.",
    b: "We use a small set of clear engagement shapes , Retainer, Project, Subscription, Performance-linked. The investment for each is engagement-specific and shared in consultation, not advertised. Premium positioning and published rate cards do not coexist.",
  },
  {
    h: "Modular by capability.",
    b: "Engagements compose by practice and by workstream. Clients pay for the capability they engage, with bundled incentives for multi-month and annual commitments.",
  },
  {
    h: "Shared accountability.",
    b: "Every engagement defines success in writing at intake. We grade ourselves against those metrics at quarterly reviews and adjust the engagement, not just the conversation, when the work demands it.",
  },
];

const cadence = [
  { h: "Weekly working session", b: "One scheduled hour with the client team to drive execution, surface blockers, and review progress against the written plan." },
  { h: "Written milestone notes", b: "End-of-week notes capturing what shipped, what is at risk, and what changes for next week. No verbal-only updates." },
  { h: "Monthly steering check-in", b: "One scheduled hour with the CEO or executive sponsor for higher-altitude review and re-scoping decisions." },
  { h: "Quarterly review", b: "A formal review against the engagement's written success metrics. Honest grading, with engagement adjustments made on paper, not by drift." },
];

const networks = [
  {
    name: "C-Level Advisory",
    body: "A global network of CXO advisors and capital partners. Used for board and capital introductions, peer references, and senior advisory access on transformation work.",
  },
  {
    name: "The Curated Network™",
    body: "A senior leadership community we draw on for off-market candidate access, peer benchmarking, and confidential succession conversations.",
  },
  {
    name: "FinTech Atlanta",
    body: "Sector advocacy and ecosystem access for fintech-adjacent engagements , capital, regulatory voice, and sector-specific candidate reach.",
  },
  {
    name: "Inspiredu",
    body: "Civic commitment to digital literacy and access in Atlanta. Emeritus board service that anchors the firm's community accountability.",
  },
];

export default function Approach() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Our Approach | proHIRE resources"
        description="The proHIRE method , Discovery, Design, Execute, Embed , applied with boutique discipline and enterprise rigor."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Approach</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            Human-first. AI-enhanced. Outcome-accountable.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            A boutique operating model with enterprise-grade discipline. The same method
            whether we are placing a CFO, building a finance function, or executing a
            quarter of business development.
          </p>
        </div>
      </section>

      {/* Method */}
      <section className="py-14 lg:py-12">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The method</div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-[1.1]">
                Four phases. One discipline.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 lg:pt-4 text-muted-foreground font-light text-lg leading-relaxed">
              Every engagement runs through the same four phases , applied to the texture of
              the practice. The phases are deliberately written so the client knows, at every
              point, what they are paying for and what they should expect to receive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {phases.map((p) => (
              <div key={p.n} className="bg-background p-10">
                <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">Phase {p.n}</div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{p.h}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">{p.b}</p>
                <div className="border-t border-border pt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">What you get</div>
                    <div className="text-foreground font-light">{p.deliverable}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">What we won't do</div>
                    <div className="text-foreground font-light">{p.excludes}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="py-16 bg-secondary/50 border-y border-border">
        <div className="container-editorial">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Operating principles</div>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight max-w-3xl mb-16">
            Three commitments that govern every engagement.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {principles.map((p) => (
              <div key={p.h}>
                <div className="font-serif text-2xl text-foreground mb-4">{p.h}</div>
                <p className="text-muted-foreground font-light leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing philosophy */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Pricing philosophy</div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                We do not publish rates. We publish principles.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground font-light text-lg leading-relaxed">
              Fee structures vary by engagement scope, urgency, and partnership shape. The
              principles do not.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {pricingPrinciples.map((p) => (
              <div key={p.h} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">{p.h}</h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadence */}
      <section className="py-16 bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">Working with us</div>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                The cadence of an engagement.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-primary-foreground/80 font-light text-lg leading-relaxed">
              No surprise invoices, no surprise updates. Every engagement runs on the same
              rhythm , adjusted to the urgency of the work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/15">
            {cadence.map((c) => (
              <div key={c.h} className="bg-primary p-8">
                <h3 className="font-serif text-lg mb-3">{c.h}</h3>
                <p className="text-primary-foreground/80 font-light text-sm leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="py-16">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Network</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">Reach beyond our walls.</h2>
            <p className="mt-4 text-muted-foreground font-light leading-relaxed">
              Curated partnerships built over twenty years in executive search and senior
              advisory. Used to extend client reach into board, capital, sector, and civic
              networks that don't open through cold outreach.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {networks.map((n) => (
              <div key={n.name} className="grid md:grid-cols-12 gap-6 py-6">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground">{n.name}</h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
