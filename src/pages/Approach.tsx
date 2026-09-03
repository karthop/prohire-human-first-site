import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const phases = [
  {
    n: "01",
    h: "Discovery",
    b: "We open with a real conversation, not a pitch and not a discovery call dressed up as one. We listen for what the engagement actually has to deliver in twelve months, what is non-negotiable, and what was written down because no one wanted to argue about it. Most engagements get re-scoped here. That is the value.",
    deliverable: "A written situation summary and a pressure-tested scope.",
    excludes: "We will not take an engagement we believe is mis-scoped without re-writing it first.",
  },
  {
    n: "02",
    h: "Design",
    b: "We design the engagement on paper before any work starts. Target profile, sourcing thesis, named stakeholders, success metrics, investment shape, and timeline. The document is the contract. Every decision after this references it.",
    deliverable: "An engagement plan, signed by client and firm, that governs the work.",
    excludes: "We do not begin sourcing or execution until the plan is signed.",
  },
  {
    n: "03",
    h: "Execute",
    b: "Senior-led work against the plan. Named-target sourcing, structured stakeholder process, deep referencing, or for operating engagements, embedded delivery and named-account work. One scheduled working session each week, written milestone notes at the end of every week.",
    deliverable: "Calibrated shortlists, placed leaders, closed motion, or stood-up functions, depending on the engagement.",
    excludes: "We do not put junior people on senior mandates.",
  },
  {
    n: "04",
    h: "Embed",
    b: "Onboarding, integration, and 30-, 60-, and 90-day check-ins with both the placement and the hiring executive. For operating engagements, hand-off plans to the internal team and the next full-time hire. The work is only finished when the impact holds after we step back.",
    deliverable: "A documented hand-off and structured post-engagement check-ins.",
    excludes: "We do not disappear at offer signing or at engagement close.",
  },
];

const principles = [
  {
    h: "People make the decisions",
    b: "Experienced people own the judgment on every engagement, including which candidates to present, what to recommend, and what to tell a client when the news is not good.",
  },
  {
    h: "Technology supports the work",
    b: "We use modern tooling for research, sourcing, screening, and market analysis. It helps us prepare and cover more ground, and it does not decide who gets hired or what we advise.",
  },
  {
    h: "We say what we find",
    b: "We tell clients what the market is showing us, including when a role is scoped in a way that will not work and when we are not the right firm for the engagement.",
  },
];

const pricingPrinciples = [
  {
    h: "A small set of engagement shapes",
    b: "We use a small set of engagement shapes across every kind of work we do, including retained search, contract recruiting, embedded recruiting, project work, interim leadership, and defined advisory engagements. We agree which one fits before the work starts.",
  },
  {
    h: "You pay for the capability you use",
    b: "Engagements are scoped by capability and by workstream, so you pay for the work you actually need rather than a predetermined package.",
  },
  {
    h: "Success is defined in writing",
    b: "Every engagement defines what finished looks like in writing at the start. We review the work against that definition and adjust the engagement on paper when it needs to change.",
  },
];

const cadence = [
  { h: "Weekly working session", b: "One scheduled hour with the client team to drive execution, surface blockers, and review progress against the written plan." },
  { h: "Written milestone notes", b: "End-of-week notes capturing what shipped, what is at risk, and what changes for next week. No verbal-only updates." },
  { h: "Monthly steering check-in", b: "One scheduled hour with the CEO or executive sponsor for higher-altitude review and re-scoping decisions." },
  { h: "Quarterly review", b: "A formal review against the engagement's written success metrics. Honest grading, with adjustments made on paper, not by drift." },
];

const networks = [
  {
    name: "C-Level Advisory",
    url: "https://www.linkedin.com/company/c-level-advisory-llc",
    body: "A global network of CXO advisors and capital partners. Used for board and capital introductions, peer references, and senior advisory access on transformation work.",
  },
  {
    name: "The Curated Network™",
    url: "https://www.linkedin.com/company/c-level-advisory-llc",
    body: "A senior leadership community we draw on for off-market candidate access, peer benchmarking, and confidential succession conversations.",
  },
  {
    name: "FinTech Atlanta",
    url: "https://fintechatlanta.org/",
    body: "Sector advocacy and ecosystem access for fintech-adjacent engagements: capital, regulatory voice, and sector-specific candidate reach.",
  },
  {
    name: "Inspiredu",
    url: "https://www.iuatl.org/",
    body: "Civic commitment to digital literacy and access in Atlanta. Emeritus board service that anchors the firm's community accountability.",
  },
];

export default function Approach() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="Human & AI | proHIRE resources"
        description="How proHIRE resources works. Technology supports research, analysis, organization, and execution. Experienced people remain responsible for decisions, recommendations, and client communication."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Human &amp; AI</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            AI sharpens the work. Human judgment makes the call.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg text-primary-foreground/85 font-light leading-relaxed">
            <p>
              We use technology to support research, analysis, organization, and
              execution. It helps us cover a market faster, keep records straight, and
              prepare better for the conversations that matter.
            </p>
            <p>
              Experienced people remain responsible for the decisions, the
              recommendations, and the communication with clients and candidates. Chris
              leads every engagement and brings in qualified recruiters and specialists
              when a project requires additional capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The method</div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-[1.1]">
                We run every engagement in four phases.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 lg:pt-4 text-muted-foreground font-light text-lg leading-relaxed">
              Every engagement runs through the same four phases. We write them down so
              you know at every point what the work covers and what you should expect to
              receive.
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
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">How we operate</div>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight max-w-3xl mb-16">
            How the work actually runs.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">How we price</div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                We do not publish rates.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground font-light text-lg leading-relaxed">
              Fees vary by scope, urgency, and the shape of the engagement. We discuss
              them in conversation once we understand the work.
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
                What an engagement actually looks like, week to week.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-primary-foreground/80 font-light text-lg leading-relaxed">
              No surprise invoices, no surprise updates. Every engagement runs on the same
              rhythm, adjusted to how urgent the work is.
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
              Partnerships built over twenty years in executive search and senior advisory.
              Used to extend client reach into board, capital, sector, and civic networks
              that don't open through cold outreach.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {networks.map((n) => (
              <div key={n.name} className="grid md:grid-cols-12 gap-6 py-6">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground">
                    {n.url ? (
                      <a href={n.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{n.name}</a>
                    ) : (
                      n.name
                    )}
                  </h3>
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
