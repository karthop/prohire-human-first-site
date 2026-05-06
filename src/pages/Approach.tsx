import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const phases = [
  { n: "01", h: "Discovery", b: "Confidential conversation. We listen for the underlying objective, not just the role or the deliverable, and pressure-test scope against the outcome you actually need." },
  { n: "02", h: "Design", b: "We design the engagement: target profile or capability set, sourcing strategy, stakeholders, success metrics, investment model, and timeline. Written. Specific." },
  { n: "03", h: "Execute", b: "Senior-led execution. Named-target sourcing, deep diligence, structured stakeholder process, or fractional embedding, BD execution, and operational delivery." },
  { n: "04", h: "Embed", b: "Onboarding, integration, and 30–90 day support. The hire or the engagement only matters if the impact compounds after we step back." },
];

const principles = [
  { h: "Human-first.", b: "Senior judgment over volume. Relationships over transactions. Discretion is non-negotiable." },
  { h: "AI-enhanced.", b: "Modern tooling for sourcing, screening, and market intelligence, applied where it sharpens decisions, not where it replaces them." },
  { h: "Outcome-accountable.", b: "We commit to measurable outcomes, transparent investment, and the candor to tell you when we're not the right partner." },
];

export default function Approach() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Our Approach | proHIRE resources"
        description="The proHIRE method, Discovery, Design, Execute, Embed. Human-first, AI-enhanced, outcome-accountable."
      />
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Approach</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            Human-first. AI-enhanced. Outcome-accountable.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
            A boutique operating model with enterprise-grade discipline. The same approach
            whether we're placing a CFO, building a finance function, or executing a
            quarter of business development.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The method</div>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">Four phases. One discipline.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {phases.map((p) => (
              <div key={p.n} className="bg-background p-10">
                <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">Phase {p.n}</div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{p.h}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-editorial">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Operating principles</div>
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight max-w-3xl mb-16">
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

      <section className="py-24">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Network</div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">Reach beyond our walls.</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-foreground font-light text-lg leading-relaxed">
            <p>
              We extend client reach through curated partnerships built over twenty years
              in executive search and senior advisory.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-border">
              <li><span className="text-foreground">C-Level Advisory</span>, global CXO advisory and capital network.</li>
              <li><span className="text-foreground">The Curated Network™</span>, senior leadership community.</li>
              <li><span className="text-foreground">FinTech Atlanta</span>, sector advisor and advocate.</li>
              <li><span className="text-foreground">Inspiredu</span>, Emeritus board member, civic commitment.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
