"use client";

import { useReducedMotionPreference } from "@/components/motion/use-reduced-motion";
import { cn } from "@/lib/utils";
import { type HTMLMotionProps, motion } from "framer-motion";
import type * as React from "react";

interface DriftProps extends HTMLMotionProps<"div"> {
  duration?: number;
  delay?: number;
}

export function Drift({ className, duration = 26, delay = 0, ...props }: DriftProps) {
  const reduced = useReducedMotionPreference();

  if (reduced) {
    const divProps = props as React.HTMLAttributes<HTMLDivElement>;
    return <div className={cn(className)} {...divProps} />;
  }

  return (
    <motion.div
      {...props}
      className={cn(className)}
      animate={{ y: [0, -12, 8, 0], x: [0, 8, -6, 0] }}
      transition={{ duration, delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
  );
}
