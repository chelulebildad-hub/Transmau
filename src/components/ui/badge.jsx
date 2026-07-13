import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, variant = "forest", ...props }) {
  const variants = {
    forest: "bg-forest-soft text-forest",
    honey: "bg-honey-soft text-bark",
    bark: "bg-linen text-bark",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
