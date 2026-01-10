import { cn } from "@/lib/utils";
import type * as React from "react";

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-10", className)} {...props} />;
}
