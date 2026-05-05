import { ReactNode, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion";

interface Props {
  to?: string;
  href?: string;
  className?: string;
  children: ReactNode;
  strength?: number; // px max offset
}

export const MagneticButton = ({
  to,
  href,
  className,
  children,
  strength = 6,
}: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent) => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.max(rect.width, rect.height);
    if (dist > radius * 1.2) {
      el.style.transform = "translate3d(0,0,0)";
      return;
    }
    const factor = strength / radius;
    el.style.transform = `translate3d(${dx * factor}px, ${dy * factor}px, 0)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const classes = cn(
    "inline-flex items-center justify-center will-change-transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    className
  );

  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      ref={ref}
      href={href}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  );
};
