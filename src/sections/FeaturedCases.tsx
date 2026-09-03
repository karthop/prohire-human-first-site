import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { GridFill } from "@/components/GridFill";

const cases = [
  {
    tag: "Series B · AI Platform",
    quote:
      "Five technical hires and a built-out BD function in 60 days, with $1.2M of qualified pipeline in the first quarter. The work moved as fast as the company needed it to.",
    role: "Chief Technology Officer",
  },
  {
    tag: "Series C · FinTech",
    quote:
      "The fractional CRO they placed had already taken a comparable product from $5M to $50M ARR. That isn't a resume match, that is the right person walking in the door already knowing the play.",
    role: "Chief Executive Officer",
  },
  {
    tag: "Series A · MedTech",
    quote:
      "Health system access was the wall we kept hitting. Four target health systems agreed to meet inside 30 days, relationships that would have taken us a year and a half to build on our own.",
    role: "Chief Executive Officer",
  },
];

export const FeaturedCases = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground brush-texture">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <Reveal variant="rise">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              Selected outcomes
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight max-w-2xl">
              Proven Impact Across Leadership, Teams, and Revenue Pipeline
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={120}>
            <Link
              to="/what-were-seeing"
              className="link-arrow inline-flex items-center gap-2 text-sm font-medium border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
            >
              More client work <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/15">
          {cases.map((c, i) => (
            <Reveal key={c.role + c.tag} delay={i * 100} variant="rise">
              <article className="bg-primary p-8 lg:p-10 flex flex-col h-full">
                <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                  {c.tag}
                </div>
                <blockquote className="font-serif text-xl leading-snug text-primary-foreground flex-1">
                  "{c.quote}"
                </blockquote>
                <div className="mt-8 text-sm text-primary-foreground/70">{c.role}</div>
              </article>
            </Reveal>
          ))}
          <GridFill items={cases.length} md={2} lg={3} className="bg-primary" />
        </div>
      </div>
    </section>
  );
};
