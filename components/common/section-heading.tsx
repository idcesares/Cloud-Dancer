import type * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
