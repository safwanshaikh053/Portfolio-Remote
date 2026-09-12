import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-accent-from to-accent-to text-white shadow-[0_0_30px_-8px_hsl(var(--accent-from)/0.8)] hover:shadow-[0_0_45px_-6px_hsl(var(--accent-to)/0.9)] hover:scale-[1.03]",
        outline:
          "border border-border text-foreground hover:border-accent-from hover:text-accent-from hover:shadow-[0_0_25px_-10px_hsl(var(--accent-from)/0.7)]",
        ghost: "text-foreground hover:text-accent-from",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[0.8rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
