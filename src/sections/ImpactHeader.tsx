import { cn } from "@/lib/utils";

interface ImpactHeaderProps {
  phrases: string[];
  className?: string;
}

export function ImpactHeader({ phrases, className }: ImpactHeaderProps) {
  const phrase = phrases[0];
  return (
    <div className={cn("w-full bg-accent/10 border-b border-accent/20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
        <p className="text-sm font-medium text-accent">{phrase}</p>
      </div>
    </div>
  );
}
