import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { GridFill } from "@/components/GridFill";

const pillars = [
  {
    title: "Recruiting & Talent Delivery",
    body: "We recruit professionals for permanent, contract, and contract-to-hire roles, provide embedded recruiting support, and build out functional teams.",
    href: "/services/recruiting",
    linkText: "Explore Recruiting & Talent Delivery",
  },
  {
    title: "Executive Search & Leadership Advisory",
    body: "We run senior leadership searches, assess executive candidates, and place fractional and interim executives when a company needs leadership sooner.",
    href: "/services/executive-search",
    linkText: "Explore Executive Search & Leadership Advisory",
  },
  {
    title: "HR & Talent Leadership Support",
    body: "We give CHROs, Chief People Officers, and senior HR leaders added capacity through function assessments, interim leadership, and defined projects.",
    href: "/services/hr-support-advisory",
    linkText: "Explore HR & Talent Leadership Support",
  },
  {
    title: "Revenue & Operational Acceleration",
    body: "We help companies clarify revenue team structure and roles, support sales leadership and hiring, and improve selected operating processes.",
    href: "/services/revenue-operational-acceleration",
    linkText: "Explore Revenue & Operational Acceleration",
  },
  {
    title: "Career Advisory",
    body: "We advise executives and senior professionals on career decisions, and we help students and early career professionals plan their first steps.",
    href: "/services/career-advisory",
    linkText: "Explore Career Advisory",
  },
  {
    title: "Digital Positioning & Web Design",
    body: "We help companies sharpen their positioning and messaging, then design, write, and launch the website and LinkedIn presence that carry it.",
    href: "/services/digital-positioning",
    linkText: "Explore Digital Positioning & Web Design",
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
              Six capabilities.
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Chris Betz leads every engagement and brings in qualified recruiters and
              specialists when a project requires additional capacity. Start with the
              capability that matches your situation, or review all of them on the{" "}
              <Link
                to="/services"
                className="text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors"
              >
                capabilities overview
              </Link>
              .
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
