import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CTABand } from "@/sections/CTABand";
import { Seo } from "@/components/Seo";
import { FaqList } from "@/components/FaqList";

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

interface MethodStep {
  phase: string;
  body: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface CaseNarrative {
  tag: string;
  title: string;
  body: string;
}

interface Props {
  eyebrow: string;
  title: string;
  lead: string;
  thesis?: string;
  pointOfView?: string;
  whoFor: string[];
  capabilities: Section[];
  disciplines?: Section[];
  rolesWeLeadOn?: string[];
  methodMap?: MethodStep[];
  wontDo?: string[];
  engagements: Engagement[];
  engagementsNote?: string;
  outcomes?: CaseQuote[];
  caseNarrative?: CaseNarrative;
  faq?: FaqItem[];
  seoTitle: string;
  seoDescription: string;
}

export const ServiceTemplate = ({
  eyebrow,
  title,
  lead,
  thesis,
  pointOfView,
  whoFor,
  capabilities,
  disciplines,
  rolesWeLeadOn,
  methodMap,
  wontDo,
  engagements,
  engagementsNote,
  outcomes,
  caseNarrative,
  faq,
  seoTitle,
  seoDescription,
}: Props) => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo title={seoTitle} description={seoDescription} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
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
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            {lead}
          </p>
        </div>
      </section>

      {/* Thesis */}
      {thesis && (
        <section className="py-12 lg:py-16 border-b border-border">
          <div className="container-editorial grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Where we stand
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Why this practice exists.
              </h2>
            </div>
            <div className="lg:col-span-8 text-foreground text-lg leading-relaxed font-light">
              <p>{thesis}</p>
            </div>
          </div>
        </section>
      )}

      {/* Point of view pull-quote */}
      {pointOfView && (
        <section className="py-12 bg-secondary/40 border-b border-border">
          <div className="container-editorial max-w-4xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Point of view
            </div>
            <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-snug">
              "{pointOfView}"
            </blockquote>
            <div className="mt-6 text-sm text-muted-foreground">, Chris Betz, CEO</div>
          </div>
        </section>
      )}

      {/* Who it's for */}
      <section className="py-12 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who it's for
            </div>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {whoFor.map((item) => (
              <li key={item} className="flex gap-4 text-foreground text-lg font-light leading-relaxed border-b border-border pb-4">
                <span className="text-accent text-sm pt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
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

      {/* Disciplines */}
      {disciplines && disciplines.length > 0 && (
        <section className="py-16 bg-secondary/40 border-y border-border">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  How the work gets done
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                  How we hold ourselves to it.
                </h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-12">
              <ul className="lg:col-span-12 divide-y divide-border border-y border-border">
                {disciplines.map((d) => (
                  <li key={d.heading} className="grid md:grid-cols-12 gap-6 py-8">
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-xl text-foreground leading-snug">{d.heading}</h3>
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
      )}

      {/* Roles we lead on */}
      {rolesWeLeadOn && rolesWeLeadOn.length > 0 && (
        <section className="py-16 border-b border-border">
          <div className="container-editorial grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Mandates
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Roles we lead on.
              </h2>
            </div>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground text-lg font-light">
              {rolesWeLeadOn.map((r) => (
                <li key={r} className="border-b border-border pb-3">{r}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Method on this practice */}
      {methodMap && methodMap.length > 0 && (
        <section className="py-16">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  How we run this work
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                  Discovery → Design → Execute → Embed.
                </h2>
                <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                  The same four phases, applied to the texture of this work.
                </p>
              </div>
              <div className="lg:col-span-8 divide-y divide-border border-y border-border">
                {methodMap.map((m, i) => (
                  <div key={m.phase} className="py-6 grid grid-cols-12 gap-6">
                    <div className="col-span-3 md:col-span-2">
                      <div className="font-serif text-3xl text-foreground/30 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="col-span-9 md:col-span-10">
                      <div className="font-serif text-lg text-foreground mb-2">{m.phase}</div>
                      <p className="text-muted-foreground font-light leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What we won't do */}
      {wontDo && wontDo.length > 0 && (
        <section className="py-16 bg-primary text-primary-foreground brush-texture">
          <div className="container-editorial grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
                What we say no to
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                What we will not do.
              </h2>
              <p className="mt-4 text-primary-foreground/75 font-light leading-relaxed">
                What you say no to says more than what you sell.
              </p>
            </div>
            <ul className="lg:col-span-8 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              {wontDo.map((w, i) => (
                <li key={w} className="py-6 flex gap-6 items-baseline">
                  <span className="font-serif text-sm text-primary-foreground/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl lg:text-2xl leading-snug">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Engagement models */}
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
              {engagementsNote ||
                "Investment is engagement-specific and shared in conversation. Engagements compose by capability, with incentives for multi-month and annual partnerships."}
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

      {/* Case narrative */}
      {caseNarrative && (
        <section className="py-16 border-b border-border">
          <div className="container-editorial grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{caseNarrative.tag}</div>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground leading-tight">
                {caseNarrative.title}
              </h2>
            </div>
            <div className="lg:col-span-8 text-foreground text-lg font-light leading-relaxed space-y-4">
              {caseNarrative.body.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground pt-4">
                Identifying details have been altered to preserve client confidentiality.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {outcomes && outcomes.length > 0 && (
        <section className="py-16 bg-primary text-primary-foreground brush-texture">
          <div className="container-editorial">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              What clients have said
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl mb-16 max-w-3xl leading-tight">
              In their words, after the work was done.
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/15">
              {outcomes.map((o) => (
                <article key={o.tag + o.role} className="bg-primary p-8 lg:p-10">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                    {o.tag}
                  </div>
                  <blockquote className="font-serif text-xl leading-snug">"{o.quote}"</blockquote>
                  <div className="mt-6 text-sm text-primary-foreground/75">{o.role}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && <FaqList items={faq} />}

      <CTABand
        title="Talk to us about a partnership."
        body="Tell us where you're headed. We will respond with a candid view of how, and whether, we can help."
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
