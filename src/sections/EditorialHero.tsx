import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import editorialHero from "@/assets/editorial-hero.jpg";
import chrisBetz from "@/assets/chris-betz.png";
import { SplitHeadline } from "@/components/motion/SplitHeadline";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const EditorialHero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={editorialHero}
          alt=""
          className="w-full h-full object-cover opacity-30 kenburns-slow"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
      </div>

      {/* Founder portrait — right side, blended into the dark hero */}
      <img
        src={chrisBetz}
        alt="Chris Betz, CEO of proHIRE resources"
        aria-hidden="true"
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-[55%] h-[92%] w-auto object-contain opacity-90 pointer-events-none select-none"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 75% at 60% 55%, #000 45%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 65% 75% at 60% 55%, #000 45%, transparent 95%)",
        }}
      />
      {/* Soft left-to-right gradient over portrait so text remains crisp */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-primary via-primary/40 to-transparent pointer-events-none" />

      <div className="relative container-editorial py-28 lg:py-40">
        <div className="max-w-3xl lg:max-w-2xl">
          <Reveal variant="fade" delay={50}>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-8 font-sans">
              Executive talent &amp; growth advisory
            </div>
          </Reveal>
          <SplitHeadline
            as="h1"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-normal text-primary-foreground"
            text="Leadership talent and growth infrastructure for companies scaling with intent."
          />
          <Reveal variant="fade" delay={600}>
            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-primary-foreground/80 max-w-2xl font-light">
              We partner with founder-led, PE-backed, and enterprise leadership teams to place senior talent, embed fractional executives, and accelerate revenue, human-first, AI-enhanced, outcome-accountable.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={750}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <MagneticButton
                to="/approach"
                className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-primary-foreground border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
              >
                Explore our approach <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link
                to="/contact"
                className="link-underline-grow text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Request a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
