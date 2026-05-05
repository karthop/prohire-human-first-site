import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface Props {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const CTABand = ({
  eyebrow = "Begin a conversation",
  title = "Schedule an executive consultation.",
  body = "A confidential 30-minute conversation to assess priorities and design a partnership aligned with your growth objectives.",
  ctaLabel = "Request consultation",
  ctaHref = "/contact",
}: Props) => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/60 border-y border-border">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <Reveal variant="rise" className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {eyebrow}
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight text-foreground">
              {title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              {body}
            </p>
          </Reveal>
          <Reveal variant="fade" delay={150} className="lg:col-span-4 lg:text-right">
            <MagneticButton
              to={ctaHref}
              className="link-arrow gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary-light"
              strength={8}
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
