import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const services = [
  {
    eyebrow: "Practice 01",
    title: "Executive Search & Leadership Advisory",
    body: "Retained search, fractional CXOs, and board advisory for inflection-point hires.",
    href: "/services/executive-search",
  },
  {
    eyebrow: "Practice 02",
    title: "Strategic Talent & Workforce Solutions",
    body: "Specialized hiring across technology, finance, and operations. RPO, contract, and onboarding systems.",
    href: "/services/talent-solutions",
  },
  {
    eyebrow: "Practice 03",
    title: "Revenue & Operational Acceleration",
    body: "Fractional BD, operational infrastructure, and partnership development for high-growth phases.",
    href: "/services/growth-acceleration",
  },
  {
    eyebrow: "Practice 04",
    title: "Career Advisory for Senior Professionals",
    body: "Confidential one-to-one advisory for senior executives and board candidates.",
    href: "/services/career-advisory",
  },
];

export default function ServicesIndex() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Services | proHIRE resources"
        description="Executive search, talent solutions, growth acceleration, and senior career advisory."
      />
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
            Services
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            Four practices, configured to the moment.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
            We engage where senior judgment, network reach, and disciplined execution change
            the outcome — not where a transactional vendor will do.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-editorial grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="group bg-background p-10 lg:p-12 hover:bg-secondary/50 transition-colors flex flex-col"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-6">
                {s.eyebrow}
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl leading-snug text-foreground mb-4">
                {s.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed flex-1">{s.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Explore practice
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
