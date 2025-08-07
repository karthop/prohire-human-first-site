import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'lift';
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0, 
  animation = 'fade',
  threshold = 0.1,
  as: Component = 'div'
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay, threshold });

  const animationClasses = {
    fade: isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4',
    slide: isVisible ? 'animate-slide-in' : 'opacity-0 -translate-x-4',
    scale: isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
    lift: isVisible ? 'animate-scroll-reveal' : 'opacity-0 translate-y-8'
  };

  const Comp = Component as any;
  
  return (
    <Comp
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
    >
      {children}
    </Comp>
  );
}