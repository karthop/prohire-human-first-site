import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CTABand } from "@/sections/CTABand";
import { Seo } from "@/components/Seo";

interface Section {
  heading: string;
  body?: string;
  bullets?: string[];
}

interface Engagement {
  name: string;
  detail: string;
}

interface CaseQuote {
  tag: string;
  quote: string;
  role: string;
}

interface Props {
  eyebrow: string;
  title: string;
  lead: string;
  whoFor: string[];
  capabilities: Section[];
  engagements: Engagement[];
  outcomes?: CaseQuote[];
  seoTitle: string;
  seoDescription: string;
}

export const ServiceTemplate = ({
  eyebrow,
  title,
  lead,
  whoFor,
  capabilities,
  engagements,
  outcomes,
  seoTitle,
  seoDescription,
}: Props) => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo title={seoTitle} description={seoDescription} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-20 lg:py-28">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            ← All services
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            {eyebrow}
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            {title}
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
            {lead}
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who it's for
            </div>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {whoFor.map((item) => (
              <li key={item} className="flex gap-4 text-foreground text-lg font-light leading-relaxed border-b border-border pb-4">
                <span className="text-accent text-sm pt-1">,</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                What's included
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Capabilities
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {capabilities.map((c) => (
              <div key={c.heading} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4">{c.heading}</h3>
                {c.body && (
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">{c.body}</p>
                )}
                {c.bullets && (
                  <ul className="space-y-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="text-foreground font-light text-sm leading-relaxed flex gap-3">
                        <span className="text-accent">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Investment models
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                How we engage
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-muted-foreground font-light text-lg leading-relaxed">
              Transparent investment ranges. Modular by capability, with volume incentives for
              multi-month and annual partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {engagements.map((e) => (
              <div key={e.name} className="bg-background p-8 flex flex-col">
                <div className="font-serif text-lg text-foreground mb-3">{e.name}</div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      {outcomes && outcomes.length > 0 && (
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container-editorial">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              Outcomes
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl mb-16 max-w-3xl leading-tight">
              Representative client results.
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/15">
              {outcomes.map((o) => (
                <article key={o.tag + o.role} className="bg-primary p-8 lg:p-10">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                    {o.tag}
                  </div>
                  <blockquote className="font-serif text-xl leading-snug">"{o.quote}"</blockquote>
                  <div className="mt-6 text-sm text-primary-foreground/70">{o.role}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Discuss a partnership."
        body="Tell us where you're headed. We'll respond with a candid view of how, and whether, we can help."
      />

      <div className="py-12 bg-background">
        <div className="container-editorial">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-180" /> All services
          </Link>
        </div>
      </div>
    </div>
  );
};
