import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "20", label: "Years in executive search and growth advisory" },
  { value: "$15M–$150B", label: "Client revenue range served" },
  { value: "Series A → F500", label: "From founders to Fortune 500" },
  { value: "30–60 days", label: "Typical time to first measurable impact" },
];

export const ProofBar = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/40">
      <div className="container-editorial">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} variant="rise">
              <div className="font-serif text-3xl lg:text-4xl text-foreground mb-2">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
