import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  duration?: number; // ms
  suffix?: string;
  className?: string;
}

export function StatCounter({ value, duration = 1200, suffix = '', className }: StatCounterProps) {
  const [display, setDisplay] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = (ts: number) => {
      if (start.current === null) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <span className={className}>{display.toLocaleString()}{suffix}</span>;
}
