import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Link2, Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";
import { articles, getArticleBySlug, SITE_URL } from "@/content/articles";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function WhatWereSeeingArticle() {
  const { slug = "" } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug);
  const [copied, setCopied] = useState(false);

  const moreArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.slug !== article.slug && a.audience === article.audience)
      .slice(0, 3);
  }, [article]);

  if (!article) {
    return <Navigate to="/what-were-seeing" replace />;
  }

  const url = `${SITE_URL}/what-were-seeing/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: "Chris Betz" },
    publisher: {
      "@type": "Organization",
      name: "proHIRE resources",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/prohire-favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title={`${article.title} | proHIRE resources`}
        description={article.dek}
        canonical={url}
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-16">
          <Link
            to="/what-were-seeing"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            What We're Seeing
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border border-primary-foreground/40 text-primary-foreground/90">
              {article.type}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border border-primary-foreground/40 text-primary-foreground/90">
              {article.audience}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-4xl">
            {article.title}
          </h1>

          <p className="mt-6 font-serif text-lg lg:text-xl text-primary-foreground/85 leading-snug max-w-3xl">
            {article.dek}
          </p>

          <div className="mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
            <span>{formatDate(article.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>proHIRE resources</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-20">
        <div className="container-editorial">
          <article className="max-w-3xl mx-auto">
            <div className="space-y-6 text-foreground text-lg font-light leading-relaxed">
              {article.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/what-were-seeing"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to all
              </Link>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] px-4 py-2 border border-border text-foreground hover:border-foreground transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* More perspectives */}
      {moreArticles.length > 0 && (
        <section className="py-12 lg:py-16 border-t border-border bg-secondary/40">
          <div className="container-editorial">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              More for {article.audience}
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {moreArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/what-were-seeing/${a.slug}`}
                  className="group bg-background p-6 lg:p-8 flex flex-col hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 border border-accent text-accent">
                      {a.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground leading-snug mb-3 transition-colors group-hover:text-accent">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                    {a.dek}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground">
                    Read
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </div>
  );
}
