import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    eyebrow: "01, Executive Search",
    title: "Executive Search & Leadership Advisory",
    body: "Retained search and fractional CXOs who have scaled comparable businesses. C-suite, VP, and board-track placements with measurable time-to-impact.",
    href: "/services/executive-search",
  },
  {
    eyebrow: "02, Talent Solutions",
    title: "Strategic Talent & Workforce Solutions",
    body: "Specialized hiring across technology, finance, and operations. RPO, contract, contract-to-hire, and onboarding systems built for high-growth environments.",
    href: "/services/talent-solutions",
  },
  {
    eyebrow: "03, Growth Acceleration",
    title: "Revenue & Operational Acceleration",
    body: "Fractional business development, operational infrastructure, and partnership development. We function as your external BD and ops arm during pivotal phases.",
    href: "/services/growth-acceleration",
  },
];

export const PillarGrid = () => {
  return (
    <section className="py-14 lg:py-12 bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <Reveal variant="rise" className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What we do
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight text-foreground">
              Three practices, one operating philosophy.
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Built for the moments that matter most, a critical hire, a leadership gap,
              an inflection in revenue. We bring senior judgment, a curated network, and
              the operational execution to translate strategy into hires and outcomes.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} variant="rise" className="h-full">
              <Link
                to={p.href}
                className="group bg-background p-8 lg:p-10 hover:bg-secondary/50 transition-colors duration-500 flex flex-col h-full"
              >
                <div className="rule-grow text-accent mb-6" />
                <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                  {p.eyebrow}
                </div>
                <h3 className="font-serif text-2xl leading-snug text-foreground mb-4 transition-colors duration-300 group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light flex-1">
                  {p.body}
                </p>
                <div className="link-arrow mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
