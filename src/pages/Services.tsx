import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const services = [
  {
    eyebrow: "Practice 01",
    title: "Executive Search & Leadership Advisory",
    body: "Retained search, fractional CXOs, and board advisory for inflection-point hires.",
    href: "/services/executive-search",
  },
  {
    eyebrow: "Practice 02",
    title: "Strategic Talent & Workforce Solutions",
    body: "Workforce architecture and specialized hiring across finance, technology, operations, and people functions.",
    href: "/services/talent-solutions",
  },
  {
    eyebrow: "Practice 03",
    title: "Revenue & Operational Acceleration",
    body: "Senior BD execution, operating infrastructure, and partnership development on shorter time horizons.",
    href: "/services/growth-acceleration",
  },
  {
    eyebrow: "Practice 04",
    title: "Career Advisory for Senior Professionals",
    body: "Confidential one-to-one advisory for senior executives, board candidates, and post-exit operators.",
    href: "/services/career-advisory",
  },
];

const integrations = [
  {
    situation: "Founder-led scale, Series A → C",
    play: "Executive Search + Revenue Acceleration",
    body: "Place a fractional CRO while building the BD motion the next full-time hire will inherit.",
  },
  {
    situation: "PE value-creation plan, year one",
    play: "Talent Solutions + Operating Infrastructure",
    body: "Build the finance and people functions on the new operating cadence the sponsor expects.",
  },
  {
    situation: "Confidential CEO succession",
    play: "Executive Search + Career Advisory",
    body: "Run the off-books search for the successor while advising the outgoing CEO on the next chapter.",
  },
  {
    situation: "Enterprise market entry",
    play: "Revenue Acceleration + Executive Search",
    body: "Run the named-account play for two quarters; convert to a permanent enterprise leader once motion is real.",
  },
];

const comparisons = [
  {
    title: "Vs. a traditional search firm",
    body: "We are senior-led from intake to onboarding. No junior associates running the search behind a partner-fronted pitch. Scope is re-architected before sourcing begins.",
  },
  {
    title: "Vs. a management consulting firm",
    body: "We do not sell decks. Our deliverables are placed leaders, built functions, and closed accounts — measurable inside one or two quarters, not one or two years.",
  },
  {
    title: "Vs. a fractional marketplace",
    body: "We are not a roster. Every fractional executive we place is matched against a written scope, referenced through our own protocols, and accountable to written milestones.",
  },
];

export default function ServicesIndex() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Services | proHIRE resources"
        description="Four integrated practices — executive search, workforce solutions, revenue acceleration, and senior career advisory — for founders, boards, and senior leaders."
      />

      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
            Services
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            Four practices, configured to the moment.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            We engage where senior judgment, network reach, and disciplined execution change
            the outcome — not where a transactional vendor will do.
          </p>
        </div>
      </section>

      {/* Integration thesis */}
      <section className="py-20 lg:py-24 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              How the practices fit together
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              The boundaries are deliberate. The seams are the work.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground text-lg font-light leading-relaxed space-y-4">
            <p>
              Most of our engagements draw on more than one practice. A founder scaling toward a
              capital event rarely needs a single placement; they need a leader, the function
              under that leader, and the operating cadence that holds it together.
            </p>
            <p>
              The practices are designed to compose. We scope the situation first and configure
              the engagement second — never the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Practice cards */}
      <section className="py-20">
        <div className="container-editorial grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group bg-background p-10 lg:p-12 hover:bg-secondary/50 transition-colors flex flex-col"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                {s.eyebrow}
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl leading-snug text-foreground mb-4">
                {s.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed flex-1">{s.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Explore practice
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Integration matrix */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How clients use us
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Common situations, configured engagements.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground font-light text-lg leading-relaxed">
              These are the four shapes most engagements take. Yours will be specific. The
              method is the same.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {integrations.map((i) => (
              <div key={i.situation} className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-2">
                    Situation
                  </div>
                  <h3 className="font-serif text-xl text-foreground leading-snug">{i.situation}</h3>
                </div>
                <div className="md:col-span-3 md:border-l md:border-border md:pl-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Configuration
                  </div>
                  <div className="text-foreground font-light">{i.play}</div>
                </div>
                <p className="md:col-span-5 md:border-l md:border-border md:pl-6 text-muted-foreground font-light leading-relaxed">
                  {i.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-24">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Where we fit
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                What we are. What we are not.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {comparisons.map((c) => (
              <div key={c.title} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4">{c.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
