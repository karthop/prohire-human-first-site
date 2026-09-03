import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { GridFill } from "@/components/GridFill";

const pillars = [
  {
    title: "Executive Search & Leadership Advisory",
    body: "Secure the leaders who define your company's next phase of growth. Every search is managed directly by senior partners, never passed down to junior associates after the pitch.",
    href: "/services/executive-search",
    linkText: "Explore Executive Search",
  },
  {
    title: "HR & Talent Leadership Support",
    body: "We act as the tactical execution partner for your HR leadership, helping you build, structure, and scale your people operations from Series A through enterprise.",
    href: "/services/hr-support-advisory",
    linkText: "Explore HR & Talent Leadership Support",
  },
  {
    title: "Revenue & Operational Acceleration",
    body: "An embedded business development and operations team designed to deliver target revenue and hit critical quarterly milestones.",
    href: "/services/revenue-operational-acceleration",
    linkText: "Explore Revenue & Operational Acceleration",
  },
  {
    title: "Career Advisory for Senior Professionals",
    body: "Discreet, strategic guidance for CXOs, board candidates, and executive operators navigating pivotal career transitions.",
    href: "/services/career-advisory",
    linkText: "Explore Career Advisory",
  },
  {
    title: "The First Move",
    body: "Targeted coaching for top early-career talent competing for high-impact internships and foundational roles.",
    href: "/services/the-first-move",
    linkText: "Explore The First Move",
  },
];

export const PillarGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <Reveal variant="rise" className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What we do
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight text-foreground">
              Focused Capabilities. Uncompromising Execution.
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              When your business reaches a critical inflection point, whether you are
              addressing a leadership gap or accelerating revenue, we provide hands-on
              advisory, deep talent networks, and the operational discipline needed to
              turn strategic plans into measurable results.
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
                <div className="link-arrow mt-8 text-sm font-medium text-foreground leading-relaxed">
                  {p.linkText}{" "}
                  <ArrowUpRight className="inline-block w-4 h-4 align-text-bottom" />
                </div>
              </Link>
            </Reveal>
          ))}
          <GridFill items={pillars.length} md={2} lg={3} />
        </div>
      </div>
    </section>
  );
};
