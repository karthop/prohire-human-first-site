import { cn } from "@/lib/utils";

interface FilterItem {
  id: string;
  label: string;
  targetId: string;
}

interface FiltersBarProps {
  items: FilterItem[];
  className?: string;
}

export function FiltersBar({ items, className }: FiltersBarProps) {
  const handleClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={cn("flex flex-wrap items-center gap-2 p-2 rounded-md bg-muted/50 border", className)} aria-label="Service filters">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => handleClick(it.targetId)}
          className="px-3 py-1.5 rounded-md text-sm bg-background hover:bg-muted transition-colors border"
          aria-controls={it.targetId}
        >
          {it.label}
        </button>
      ))}
    </nav>
  );
}
