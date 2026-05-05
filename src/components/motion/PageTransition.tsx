import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [stage, setStage] = useState<"enter" | "ready">("enter");

  useEffect(() => {
    setStage("enter");
    const t = window.requestAnimationFrame(() => setStage("ready"));
    return () => window.cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div
      className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
      style={{
        opacity: stage === "ready" ? 1 : 0,
        transform: stage === "ready" ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {children}
    </div>
  );
};
