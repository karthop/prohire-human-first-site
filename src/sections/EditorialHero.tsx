import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import editorialHero from "@/assets/editorial-hero.jpg";

export const EditorialHero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={editorialHero}
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      <div className="relative container-editorial py-28 lg:py-40">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-8 font-sans">
            Executive talent &amp; growth advisory
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-normal text-primary-foreground">
            Leadership talent and growth infrastructure for companies scaling with intent.
          </h1>
          <p className="mt-8 text-lg lg:text-xl leading-relaxed text-primary-foreground/80 max-w-2xl font-light">
            We partner with founder-led, PE-backed, and enterprise leadership teams to place senior talent, embed fractional executives, and accelerate revenue — human-first, AI-enhanced, outcome-accountable.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
            >
              Explore our approach <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
