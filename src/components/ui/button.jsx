import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sand disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-forest text-white shadow-soft hover:bg-forest-dark",
        dark: "bg-bark text-sand hover:bg-bark/90 shadow-soft",
        honey: "bg-honey text-bark hover:bg-honey/90 shadow-soft",
        outline:
          "border border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-white",
        soft: "bg-forest-soft text-forest hover:bg-forest hover:text-white",
        ghost: "text-bark hover:bg-linen",
        link: "text-forest underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
