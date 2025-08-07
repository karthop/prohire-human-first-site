import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "./card";
import { forwardRef } from "react";
import * as React from "react";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'lift';
  hover?: boolean;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, delay = 0, animation = 'fade', hover = true, children, ...props }, ref) => {
    const { elementRef, isVisible } = useScrollAnimation({ delay });

    const animationClasses = {
      fade: isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4',
      slide: isVisible ? 'animate-slide-in' : 'opacity-0 -translate-x-4',
      scale: isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
      lift: isVisible ? 'animate-scroll-reveal' : 'opacity-0 translate-y-8'
    };

    const hoverClasses = hover 
      ? 'hover:shadow-hover hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300' 
      : '';

    return (
      <Card
        ref={(node) => {
          elementRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "transition-all duration-300",
          animationClasses[animation],
          hoverClasses,
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

export { AnimatedCard };