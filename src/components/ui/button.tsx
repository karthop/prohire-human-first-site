import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-hover hover:-translate-y-0.5 shadow-card transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-hover hover:-translate-y-0.5 shadow-card transition-all duration-300",
        outline: "border border-input bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:shadow-hover hover:-translate-y-0.5 shadow-card transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-hover hover:-translate-y-0.5 shadow-card transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline transition-colors duration-200",
        premium: "bg-gradient-primary text-primary-foreground hover:shadow-premium hover:-translate-y-1 shadow-card transition-all duration-300 hover:scale-105",
        hero: "bg-gradient-hero text-primary-foreground hover:shadow-hero hover:-translate-y-1 shadow-premium text-lg px-8 py-3 transition-all duration-300 hover:scale-105 font-semibold",
        professional: "bg-charcoal text-charcoal-foreground hover:bg-charcoal/90 hover:shadow-hover hover:-translate-y-0.5 border border-charcoal/20 shadow-card transition-all duration-300",
        emerald: "bg-accent-emerald text-accent-emerald-foreground hover:bg-accent-emerald/90 hover:shadow-interactive hover:-translate-y-0.5 shadow-card transition-all duration-300",
        teal: "bg-accent-teal text-accent-teal-foreground hover:bg-accent-teal/90 hover:shadow-hover hover:-translate-y-0.5 shadow-card transition-all duration-300",
        interactive: "bg-gradient-interactive text-primary-foreground hover:shadow-glow hover:-translate-y-1 shadow-elegant transition-all duration-300 hover:scale-105"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-12 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
