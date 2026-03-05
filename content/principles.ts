import type { Principle, SectionCopy } from "@/content/types";

export const principlesSection = {
  eyebrow: "Principles",
  title: "A working style built for calm momentum",
  subtitle: "Habits that keep delivery clean, clear, and consistently high quality.",
} satisfies SectionCopy;

export const principles = [
  {
    title: "Clarity over complexity",
    description: "Structure the experience so the path feels obvious and calm.",
    icon: "Target",
  },
  {
    title: "Accessible by default",
    description: "Keyboard-first, readable contrast, and reduced-motion aware.",
    icon: "ShieldCheck",
  },
  {
    title: "Performance with intent",
    description: "Measure, budget, and ship with speed as a feature.",
    icon: "Gauge",
  },
  {
    title: "Partnered delivery",
    description: "Work closely with design and product to keep quality high.",
    icon: "Users",
  },
] satisfies Principle[];
