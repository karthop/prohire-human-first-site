import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    eyebrow: "01 — Executive Search",
    title: "Executive Search & Leadership Advisory",
    body: "Retained search and fractional CXOs who have scaled comparable businesses. C-suite, VP, and board-track placements with measurable time-to-impact.",
    href: "/services/executive-search",
  },
  {
    eyebrow: "02 — Talent Solutions",
    title: "Strategic Talent & Workforce Solutions",
    body: "Specialized hiring across technology, finance, and operations. RPO, contract, contract-to-hire, and onboarding systems built for high-growth environments.",
    href: "/services/talent-solutions",
  },
  {
    eyebrow: "03 — Growth Acceleration",
    title: "Revenue & Operational Acceleration",
    body: "Fractional business development, operational infrastructure, and partnership development. We function as your external BD and ops arm during pivotal phases.",
    href: "/services/growth-acceleration",
  },
];

export const PillarGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What we do
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight text-foreground">
              Three practices, one operating philosophy.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Built for the moments that matter most — a critical hire, a leadership gap,
              an inflection in revenue. We bring senior judgment, a curated network, and
              the operational execution to translate strategy into hires and outcomes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {pillars.map((p) => (
            <Link
              key={p.title}
              to={p.href}
              className="group bg-background p-8 lg:p-10 hover:bg-secondary/50 transition-colors flex flex-col"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                {p.eyebrow}
              </div>
              <h3 className="font-serif text-2xl leading-snug text-foreground mb-4">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light flex-1">
                {p.body}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Learn more
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
