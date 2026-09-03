import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SplitHeadline } from "@/components/motion/SplitHeadline";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HeroAmbient } from "@/components/motion/HeroAmbient";

export const EditorialHero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden brush-texture">
      <HeroAmbient />

      <div className="relative container-editorial pt-20 pb-16 lg:py-40">
        <div className="max-w-3xl lg:max-w-2xl">
          <Reveal variant="fade" delay={50}>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-8 font-sans">
              Recruiting, executive search &amp; growth advisory
            </div>
          </Reveal>
          <SplitHeadline
            as="h1"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-normal text-primary-foreground"
            text="We Provide Recruiting, Executive Search, and Growth Advisory for Growing Companies."
          />
          <Reveal variant="fade" delay={600}>
            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-primary-foreground/80 max-w-2xl font-light">
              We recruit professionals and executives, build functional teams, and provide targeted advisory support when clients need experienced help.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={750}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <MagneticButton
                to="/approach"
                className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-primary-foreground border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
              >
                See how we work <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link
                to="/contact"
                className="link-underline-grow text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Schedule a Confidential Call
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
