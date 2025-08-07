import { cn } from "@/lib/utils";

interface LogoStripProps {
  logos?: { name: string }[];
  className?: string;
}

export function LogoStrip({ logos = [
  { name: 'TechCorp' },
  { name: 'FinEdge' },
  { name: 'HealthNova' },
  { name: 'BuildWorks' },
  { name: 'GlobalOps' }
], className }: LogoStripProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6 opacity-80", className)} aria-label="Trusted by clients">
      {logos.map((l) => (
        <div key={l.name} className="text-sm font-medium text-muted-foreground/80 px-3 py-1 rounded border border-border">
          {l.name}
        </div>
      ))}
    </div>
  );
}
