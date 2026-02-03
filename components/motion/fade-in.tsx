"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import { useReducedMotionPreference } from "@/components/motion/use-reduced-motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeIn({ className, delay = 0, ...props }: FadeInProps) {
  const reduced = useReducedMotionPreference();

  return (
    <motion.div
      {...props}
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    />
  );
}
