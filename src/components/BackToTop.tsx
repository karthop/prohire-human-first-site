import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed z-50 bottom-6 left-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl",
        "flex items-center justify-center transition-opacity duration-300 ease-out",
        "hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <ChevronUp className="h-6 w-6" strokeWidth={1.75} />
    </button>
  );
};
