import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-stone bg-card text-card-foreground shadow-card transition-all duration-300",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-heading text-lg font-semibold text-bark", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 text-taupe", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardTitle, CardContent };
