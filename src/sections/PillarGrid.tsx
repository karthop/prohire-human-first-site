import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    title: "Executive Search & Leadership Advisory",
    body: "The hires that decide the next two years, led by senior partners, not associates behind a pitch.",
    href: "/services/executive-search",
  },
  {
    title: "Hiring & Workforce Strategy",
    body: "Embedded recruiting for teams that have outgrown the generic agency model.",
    href: "/services/talent-solutions",
  },
  {
    title: "Revenue & Operational Acceleration",
    body: "An external BD and operations bench for the quarters that have to land.",
    href: "/services/growth-acceleration",
  },
  {
    title: "Career Advisory for Senior Professionals",
    body: "Discreet counsel for CXOs, board candidates, and operators making a defining move.",
    href: "/services/career-advisory",
  },
  {
    title: "The First Move",
    body: "Early career advisory for students competing for the internships that set the trajectory.",
    href: "/services/the-first-move",
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
              Five practices, one way of working.
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Built for the moments that decide a company: a critical hire, a leadership
              gap, an inflection in revenue. We bring experienced people, a real network,
              and the discipline to turn the plan into actual hires and actual outcomes.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} variant="rise" className="h-full">
              <Link
                to={p.href}
                className="group bg-background p-8 lg:p-8 hover:bg-secondary/50 transition-colors duration-500 flex flex-col h-full"
              >
                <h3 className="font-serif text-xl lg:text-2xl leading-snug text-foreground mb-4 transition-colors duration-300 group-hover:text-accent">
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
