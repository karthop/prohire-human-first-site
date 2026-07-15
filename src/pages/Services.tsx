import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const services = [
  {
    eyebrow: "Executive Search",
    title: "Executive Search & Leadership Advisory",
    body: "Retained C-suite, VP, and board-track search, plus fractional CXOs who have scaled comparable businesses. Senior-led from intake through onboarding, with scope re-written before sourcing begins and measurable time-to-impact written into the engagement.",
    href: "/services/executive-search",
  },
  {
    eyebrow: "People & Organization",
    title: "People & Organization Advisory",
    body: "The execution partner behind the HR leader. Senior expertise and execution capacity to help CEOs, CHROs, and Heads of People build, strengthen, and transform the people function. Includes HR leadership advisory, function build-out, workforce planning, and the specialized hiring that follows, from startup to enterprise.",
    href: "/services/people-and-organization-advisory",
  },
  {
    eyebrow: "Growth Acceleration",
    title: "Revenue & Operational Acceleration",
    body: "Senior BD execution, operating infrastructure, and partnership work on shorter time horizons than a full-time hire allows. We run the named-account play, build the operating cadence, and convert to a permanent leader once the motion is real.",
    href: "/services/growth-acceleration",
  },
  {
    eyebrow: "Career Advisory",
    title: "Career Advisory for Senior Professionals",
    body: "Confidential, one-to-one advisory for sitting CXOs, board candidates, and post-exit operators navigating CXO moves, board candidacies, succession, and the legacy-defining decisions that arrive without warning. Positioning, search strategy, interview and negotiation, and board readiness, all under NDA.",
    href: "/services/career-advisory",
  },
  {
    eyebrow: "Early Career Advisory",
    title: "The First Move",
    body: "Early career advisory for high school juniors and seniors and college students competing for the internships that set the trajectory. We build a LinkedIn profile that gets found, a resume that reflects real potential, and the networking instincts most people don't develop until years into their career, through individual coaching and institutional partnerships with high schools and universities.",
    href: "/services/the-first-move",
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
    play: "People & Organization + Executive Search",
    body: "Design the people function around the value-creation plan, then build the finance and people teams on the cadence the sponsor expects.",
  },
  {
    situation: "Confidential CEO succession",
    play: "Executive Search + Career Advisory",
    body: "Run the off-books search for the successor while advising the outgoing CEO on the next chapter.",
  },
  {
    situation: "Enterprise market entry",
    play: "Revenue Acceleration + Executive Search",
    body: "Run the named-account play for two quarters; convert to a permanent enterprise leader once the motion is real.",
  },
];

const comparisons = [
  {
    title: "Vs. a traditional search firm",
    body: "We are senior-led from intake to onboarding. No junior associates running the search behind a partner-fronted pitch. Scope gets re-written before sourcing begins.",
  },
  {
    title: "Vs. a management consulting firm",
    body: "We do not sell decks. The deliverables are placed leaders, built teams, and closed accounts, measurable inside one or two quarters, not one or two years.",
  },
  {
    title: "Vs. a fractional marketplace",
    body: "We are not a roster. Every fractional executive we place is matched to a written scope, referenced through our own protocols, and accountable to written milestones.",
  },
];

export default function ServicesIndex() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Services | proHIRE resources"
        description="Five practices: executive search, hiring and workforce strategy, growth acceleration, senior career advisory, and early career advisory. For founders, boards, senior leaders, and the next generation."
      />

      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
            Services
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            Five practices, shaped to the moment you are in.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            We engage where experienced judgment, real network reach, and disciplined
            execution actually change the outcome.
          </p>
        </div>
      </section>

      {/* Integration thesis */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              How the practices fit together
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              The boundaries are deliberate. Most engagements draw on more than one practice.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground text-lg font-light leading-relaxed space-y-4">
            <p>
              Most engagements draw on more than one practice. A founder scaling toward a
              capital event rarely needs a single placement. They need a leader, the team
              under that leader, and the operating cadence that holds it together.
            </p>
            <p>
              The practices are designed to fit together. We scope the situation first and
              configure the engagement second, never the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Practice cards */}
      <section className="py-12">
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
      <section className="py-16 bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How clients use us
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Common situations, real engagements.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground font-light text-lg leading-relaxed">
              These are the four shapes most engagements take. Yours will be specific. The
              way we work is the same.
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
      <section className="py-16">
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
