import type { FaqItem, SectionCopy } from "@/content/types";

export const faqSection = {
  eyebrow: "FAQ",
  title: "Answers to common collaboration questions",
  subtitle: "Short, direct guidance for how I typically engage and ship.",
} satisfies SectionCopy;

export const faqs = [
  {
    question: "What projects are the best fit?",
    answer:
      "I focus on product surfaces, design systems, and high-value UX flows where clarity and performance are strategic priorities.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Most engagements begin within one to three weeks, depending on scope and whether discovery work is already complete.",
  },
  {
    question: "Do you work with existing teams?",
    answer:
      "Yes. I plug into product, design, and engineering teams, then leave behind maintainable patterns and clear implementation docs.",
  },
  {
    question: "Can this template support a contact form later?",
    answer:
      "Yes. The current CTA section is link-based by default, but it can be wired to a server action or form provider without changing the layout system.",
  },
] satisfies FaqItem[];
