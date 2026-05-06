import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface Step {
  icon: ReactNode;
  title: string;
  description: string;
}

interface PersonaJourneyProps {
  heading: string;
  steps: Step[];
  className?: string;
}

export function PersonaJourney({ heading, steps, className }: PersonaJourneyProps) {
  return (
    <section className={cn("py-12 bg-muted/50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">{heading}</h2>
          <p className="text-muted-foreground">A clear, human-first path with measurable outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={i} animation="lift" delay={i * 100} className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{i + 1}. {s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
