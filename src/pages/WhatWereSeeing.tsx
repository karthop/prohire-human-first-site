import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";
import { articles, type Article, type Audience, type ContentType } from "@/content/articles";

const typeFilters: ("All" | ContentType)[] = ["All", "Analysis", "Perspective"];
const audienceFilters: ("All" | Audience)[] = ["All", "Executive Leadership", "HR & Talent", "Hiring & Management"];

export default function WhatWereSeeing() {
  const [typeFilter, setTypeFilter] = useState<"All" | ContentType>("All");
  const [audienceFilter, setAudienceFilter] = useState<"All" | Audience>("All");

  const filtered = useMemo<Article[]>(
    () =>
      articles
        .filter(
          (a) =>
            (typeFilter === "All" || a.type === typeFilter) &&
            (audienceFilter === "All" || a.audience === audienceFilter),
        )
        .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)),
    [typeFilter, audienceFilter],
  );

  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="What We're Seeing | proHIRE resources"
        description="Grounded observations on hiring, executive search, and leadership from a firm actively doing the work."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
            What We're Seeing
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-4xl">
            Thinking on talent, leadership, and the work of building great organizations.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            Field notes from inside the work, written for founders, boards, and the leaders they hire. Published when there is something worth saying, not on a content calendar.
          </p>
        </div>
      </section>

      {/* Filters + feed */}
      <section className="py-12 lg:py-16">
        <div className="container-editorial">
          <div className="space-y-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Type</div>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setTypeFilter(f)}
                    className={`text-xs uppercase tracking-[0.18em] px-4 py-2 border transition-colors ${
                      typeFilter === f
                        ? "border-foreground text-background bg-foreground"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Audience</div>
              <div className="flex flex-wrap gap-2">
                {audienceFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setAudienceFilter(f)}
                    className={`text-xs uppercase tracking-[0.18em] px-4 py-2 border transition-colors ${
                      audienceFilter === f
                        ? "border-foreground text-background bg-foreground"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {filtered.map((a) => (
              <Link
                key={a.slug}
                to={`/what-were-seeing/${a.slug}`}
                className="group bg-background p-8 lg:p-10 flex flex-col hover:bg-secondary/50 transition-colors"
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border border-accent text-accent">
                    {a.type}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border border-border text-muted-foreground">
                    {a.audience}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-foreground leading-snug mb-3 transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="font-serif text-base text-muted-foreground leading-snug mb-4">
                  {a.dek}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed flex-1">
                  {a.body[0]}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-1 w-fit group-hover:text-accent group-hover:border-accent transition-colors">
                  Read full piece
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-muted-foreground font-light text-center py-12">
              No pieces match these filters yet.
            </p>
          )}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
