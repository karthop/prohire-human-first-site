import { ReactNode, useEffect, useRef, useState, ElementType } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "rise" | "image";
  as?: ElementType;
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setShown(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const styleFor: Record<string, React.CSSProperties> = {
    fade: {
      opacity: shown ? 1 : 0,
    },
    rise: {
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(16px)",
    },
    image: {
      clipPath: shown ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      WebkitClipPath: shown ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
    },
  };

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        className
      )}
      style={styleFor[variant]}
    >
      {children}
    </Comp>
  );
};
