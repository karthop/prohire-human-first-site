import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { FaqList } from "@/components/FaqList";
import { CTABand } from "@/sections/CTABand";
import { MagneticButton } from "@/components/motion/MagneticButton";

const ownershipSteps = [
  {
    num: "01",
    title: "First 100 days after close",
    body: "Fill gaps in the leadership team the plan requires, and place interim or fractional leaders where a permanent hire will take too long.",
    links: [{ to: "/services/executive-search", label: "Executive Search & Leadership Advisory" }],
  },
  {
    num: "02",
    title: "Building the layer below the C-suite",
    body: "A new CFO often needs a stronger controller and FP&A team. A new COO often needs operations leadership across locations. We hire these as connected roles, sequenced so each leader arrives before the team that reports to them, across finance, operations, HR, commercial, and technology functions.",
    links: [
      { to: "/services/recruiting", label: "Recruiting & Talent Delivery" },
      { to: "/services/executive-search", label: "Executive Search & Leadership Advisory" },
    ],
  },
  {
    num: "03",
    title: "Growth and add-on acquisitions",
    body: "Add capacity as the company grows or integrates acquired businesses, and give the HR team help with the hiring and integration work that comes with it.",
    links: [
      { to: "/services/recruiting", label: "Recruiting & Talent Delivery" },
      { to: "/services/hr-support-advisory", label: "HR & Talent Leadership Support" },
    ],
  },
  {
    num: "04",
    title: "Preparing for the next stage",
    body: "Strengthen the bench, plan succession for critical roles, and close leadership gaps before a recapitalization or sale process begins.",
    links: [
      { to: "/services/executive-search", label: "Executive Search & Leadership Advisory" },
      { to: "/services/hr-support-advisory", label: "HR & Talent Leadership Support" },
    ],
  },
];

const deliveryItems = [
  {
    heading: "We agree one plan before recruiting starts.",
    body: "We align the roles, the sequence, and the timeline with the sponsor, the company's leadership, and any advisors involved.",
  },
  {
    heading: "Discretion by default.",
    body: "Searches tied to a deal, a restructuring, or a leadership change stay confidential, and we agree who is kept informed before the work begins.",
  },
  {
    heading: "Chris leads the client relationship.",
    body: "Chris runs the intake, the candidate conversations, and the client communication. Qualified recruiters and specialists support the work when needed, and we name them before it starts.",
  },
];

const engagements = [
  {
    name: "Critical hire after close",
    detail: "One senior or functional role the plan cannot wait on.",
  },
  {
    name: "Leadership layer buildout",
    detail: "Several connected roles below a new C-suite, managed as one coordinated project.",
  },
  {
    name: "Portfolio relationship",
    detail: "One relationship and one set of standards across several portfolio companies, with a separate scope for each.",
  },
  {
    name: "Advisor introduction",
    detail: "An advisor connects us with the company's leadership, and we agree up front how the advisor is kept informed.",
  },
];

const wontDo = [
  "We do not provide investment banking, M&A advisory, due diligence, or restructuring services.",
  "We do not replace the operating partner or the advisory firm.",
  "We do not guarantee hiring timelines or business results.",
];

const faq = [
  {
    q: "Do you work with the sponsor or the portfolio company?",
    a: "Either, and often both. Some engagements start with an operating partner and run inside the portfolio company. Others start with the company's leadership. We agree up front who the client is and who is kept informed.",
  },
  {
    q: "How does this page relate to your six capabilities?",
    a: "It is not a separate service. It shows how the existing capabilities apply under private equity ownership. Each capability page describes that service in full.",
  },
  {
    q: "Do you work with advisory firms and investment banks?",
    a: "Yes. We work alongside advisors already engaged with a company, and we welcome introductions in both directions.",
  },
];

export default function PrivateEquity() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="Private Equity & Portfolio Company Hiring | proHIRE resources"
        description="Leadership and professional hiring for private equity sponsors, portfolio companies, and the advisory firms that work alongside them."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            ← All capabilities
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Private Equity &amp; Advisors
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            We Help Portfolio Companies Hire the Team the Plan Depends On.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            We work with private equity sponsors, portfolio company leaders, and the
            advisory firms beside them to hire the executives, functional leaders, and
            professionals a company needs after a close, a restructuring, or a leadership
            change.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              to="/contact"
              className="link-arrow gap-2 bg-primary-foreground text-primary px-7 py-4 text-sm font-medium"
              strength={8}
            >
              Schedule a Confidential Call <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <a
              href="#ownership-cycle"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("ownership-cycle")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-4 text-sm font-medium hover:border-primary-foreground transition-colors"
            >
              See where we fit
            </a>
          </div>
        </div>
      </section>

      {/* Where we stand */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Where we stand
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              Why we provide this support.
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground text-lg leading-relaxed font-light">
            <p>
              An acquisition, restructuring, or leadership transition can create hiring
              needs across multiple functions at once. A new CEO, CFO, or COO often needs
              to strengthen the team below them, build functions that did not exist
              before, or replace roles that no longer fit the company's direction. We
              work with the sponsor, the company's leadership, and any advisors already
              involved, so the people we hire fit the plan everyone has agreed to.
            </p>
          </div>
        </div>
      </section>

      {/* Point of view callout */}
      <section className="py-12 bg-secondary/40 border-b border-border">
        <div className="container-editorial max-w-4xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Point of view
          </div>
          <p className="font-serif text-2xl lg:text-3xl text-foreground leading-snug">
            We hire for the plan the sponsor and the leadership team have already set. The
            capability pages describe how each part of the work runs.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who it's for
            </div>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {[
              "Operating partners and talent partners responsible for leadership across a portfolio.",
              "Portfolio company CEOs, CFOs, and CHROs building teams after a close or a restructuring.",
              "Advisory firms supporting PE-backed companies on finance, operations, or transformation work, whose clients need people to run what the advisors put in place.",
              "Investment banks and deal advisors whose clients ask who can help them hire after close.",
            ].map((item) => (
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

      {/* Where we fit */}
      <section id="ownership-cycle" className="py-16 scroll-mt-24">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                What's included
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Where we fit under private equity ownership.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {ownershipSteps.map((s) => (
              <div key={s.num} className="bg-background p-8 lg:p-10 flex flex-col">
                <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  {s.num}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4 leading-snug">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                  {s.body}
                </p>
                <div className="mt-auto space-y-2">
                  {s.links.map((l) => (
                    <Link
                      key={l.to + l.label}
                      to={l.to}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                    >
                      {l.label}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For advisory firms */}
      <section id="advisors" className="py-12 bg-secondary/40 border-y border-border scroll-mt-24">
        <div className="container-editorial max-w-4xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            For advisory firms
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground leading-snug">
            An introduction you can make with confidence.
          </h2>
          <p className="mt-6 text-foreground text-lg font-light leading-relaxed">
            Advisory firms often see a portfolio company's people gaps before a formal
            hiring process begins. When your engagement calls for a new controller, an
            FP&amp;A leader, an operations lead, or a team to run a new process, we can
            hire those people while you stay focused on your work. We support the company
            and its leadership team, and we do not step into your relationship or your
            scope. When our conversations with CEOs and CFOs turn up a need for advisory
            support, we are glad to make an introduction.
          </p>
          <div className="mt-8">
            <MagneticButton
              to="/contact"
              className="link-arrow gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary-light"
              strength={8}
            >
              Talk about partnering <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-16 border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we deliver
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                How the work runs alongside the deal team.
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-12">
            <ul className="lg:col-span-12 divide-y divide-border border-y border-border">
              {deliveryItems.map((d) => (
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
        </div>
      </section>

      {/* Example */}
      <section className="py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Example
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground leading-tight">
              Building the leadership layer after a restructuring
            </h2>
          </div>
          <div className="lg:col-span-8 text-foreground text-lg font-light leading-relaxed">
            <p>
              A PE-backed commercial services company completed a restructuring and
              entered a growth phase with a new C-suite in place. We supported hiring
              across finance, operations, HR, marketing, and sales for the leadership
              layer below the C-suite, including the finance team reporting to the CFO.
              Multiple roles have been filled.
            </p>
          </div>
        </div>
      </section>

      {/* How we engage */}
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
              Every engagement has a written scope, an agreed schedule, and a named lead.
              We discuss fees in conversation once we understand the roles, the timeline,
              and the hiring process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
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

      {/* What we will not do */}
      <section className="py-16 bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              What we say no to
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              What we will not do.
            </h2>
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

      {/* FAQ */}
      <FaqList items={faq} />

      <CTABand
        eyebrow="Schedule a Confidential Call"
        title="Tell us about the company and the roles it needs."
        body="Share where the company is under its current ownership and which roles matter most right now. We will respond with a candid view of how, and whether, we can help."
        ctaLabel="Schedule a Confidential Call"
        ctaHref="/contact"
      />

      <div className="py-12 bg-background">
        <div className="container-editorial">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-180" /> All capabilities
          </Link>
        </div>
      </div>
    </div>
  );
}
