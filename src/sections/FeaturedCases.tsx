import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "Series B · AI Platform",
    quote:
      "proHIRE's integrated approach delivered immediate operational impact: 5 technical hires and complete BD function buildout in 60 days, generating $1.2M qualified pipeline in the first quarter.",
    role: "Chief Technology Officer",
  },
  {
    tag: "Series C · FinTech",
    quote:
      "Their fractional CRO brought proven expertise from scaling a competitor from $5M to $50M ARR. This wasn't staff augmentation — this was strategic leadership acquisition.",
    role: "Chief Executive Officer",
  },
  {
    tag: "Series A · MedTech",
    quote:
      "Healthcare market access was our biggest challenge. proHIRE's network secured meetings with four target health systems in 30 days — relationships that would have taken 18 months to develop internally.",
    role: "Chief Executive Officer",
  },
];

export const FeaturedCases = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              Selected outcomes
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight max-w-2xl">
              Work that compounds — across hires, leaders, and pipeline.
            </h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
          >
            More client work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/15">
          {cases.map((c) => (
            <article key={c.role + c.tag} className="bg-primary p-8 lg:p-10 flex flex-col">
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                {c.tag}
              </div>
              <blockquote className="font-serif text-xl leading-snug text-primary-foreground flex-1">
                "{c.quote}"
              </blockquote>
              <div className="mt-8 text-sm text-primary-foreground/70">{c.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
