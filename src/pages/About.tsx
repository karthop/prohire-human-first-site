import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const milestones = [
  { year: "2003–2008", role: "Randstad / Kelly Services", note: "Foundations in executive account management and engineering staffing." },
  { year: "2008–2014", role: "PIC Group · NobleTek", note: "Marketing, business development, and global engineering services." },
  { year: "2014–2021", role: "Pyramid Consulting · 3i People · Quest Group", note: "VP and Director-level BD and delivery across global staffing firms." },
  { year: "2021–2022", role: "Amazon — Senior Talent Acquisition Consultant", note: "Senior and Principal TPM hiring for Alexa product organization." },
  { year: "2023–2024", role: "Stellar Consulting Solutions — EVP of Sales", note: "Sales leadership at NMSDC Award-winning MBE technology consulting firm." },
  { year: "2021–Present", role: "proHIRE resources — CEO", note: "Boutique executive talent and growth advisory practice." },
  { year: "2022–Present", role: "C-Level Advisory — Consulting Specialist", note: "CXO advisory and capital network." },
  { year: "2015–Present", role: "Inspiredu — Emeritus Board Member", note: "Civic commitment to digital literacy and access in Atlanta." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="About | proHIRE resources"
        description="Atlanta-based boutique executive talent and growth advisory practice founded by Chris Betz."
      />

      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">About</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            A boutique practice, built on twenty years of senior judgment.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
            proHIRE resources is an Atlanta-based executive talent and growth advisory firm
            serving founders, CEOs, and boards from Series A through Fortune 500 — with revenue
            scales ranging from $15M to $150B.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Founder</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">Chris Betz</h2>
            <p className="mt-3 text-muted-foreground font-light">CEO, proHIRE resources LLC</p>
          </div>
          <div className="lg:col-span-8 space-y-6 text-foreground font-light text-lg leading-relaxed">
            <p>
              "You are more than just a keyword search." Almost twenty years at the
              intersection of CXO, mid-career, and emerging talent strategy — partnering with
              both organizations and individuals to navigate the complexities of the modern
              workforce.
            </p>
            <p>
              Through proHIRE resources, Chris helps companies — from small enterprises to
              Fortune 500 corporations — achieve hiring goals and solve workforce challenges.
              The practice combines traditional executive search and recruiting models with
              flexible, scalable solutions: high-volume sourcing, retained direct hire,
              fractional executive placement, and AI-augmented assessment.
            </p>
            <p>
              On the individual side, Chris advises senior professionals through high-stakes
              transitions — from early-career foundation-building to board candidacy and
              legacy-defining moves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-editorial">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Track record</div>
          <h2 className="font-serif text-3xl lg:text-4xl mb-16 max-w-3xl leading-tight">
            Two decades across executive search, growth, and operating leadership.
          </h2>
          <div className="divide-y divide-border border-y border-border">
            {milestones.map((m) => (
              <div key={m.year + m.role} className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-3 text-sm text-muted-foreground tracking-wide">{m.year}</div>
                <div className="md:col-span-4 font-serif text-lg text-foreground">{m.role}</div>
                <div className="md:col-span-5 text-muted-foreground font-light leading-relaxed">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Affiliations</div>
            <h2 className="font-serif text-3xl text-foreground leading-tight">Networks &amp; civic</h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-6 text-foreground font-light leading-relaxed">
            <div>
              <div className="font-serif text-lg text-foreground">C-Level Advisory</div>
              <p className="text-muted-foreground text-sm mt-1">Consulting Specialist · CXO advisory and capital network.</p>
            </div>
            <div>
              <div className="font-serif text-lg text-foreground">The Curated Network™</div>
              <p className="text-muted-foreground text-sm mt-1">Member of the senior leadership community.</p>
            </div>
            <div>
              <div className="font-serif text-lg text-foreground">FinTech Atlanta</div>
              <p className="text-muted-foreground text-sm mt-1">Advisor and advocate.</p>
            </div>
            <div>
              <div className="font-serif text-lg text-foreground">Inspiredu</div>
              <p className="text-muted-foreground text-sm mt-1">Emeritus Board Member · digital literacy and access.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
