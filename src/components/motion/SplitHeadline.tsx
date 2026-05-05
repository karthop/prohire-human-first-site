import { useEffect, useState, ElementType } from "react";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  stagger?: number; // ms
}

export const SplitHeadline = ({
  text,
  as: Tag = "h1",
  className,
  stagger = 40,
}: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(t);
  }, []);

  const words = text.split(" ");
  return (
    <Tag className={cn(className)}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline"
          style={{ paddingBottom: "0.05em" }}
        >
          <span
            className="inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100"
            style={{
              transform: mounted ? "translateY(0)" : "translateY(0.6em)",
              opacity: mounted ? 1 : 0,
              transitionDelay: `${i * stagger}ms`,
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
};
