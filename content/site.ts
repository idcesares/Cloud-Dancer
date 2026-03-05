import type { SiteConfig } from "@/content/types";

const links = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  x: "https://x.com",
  email: "hello@example.com",
  website: "https://example.com",
};

export const siteConfig = {
  name: "Avery Lin",
  headline: "Design-minded full-stack developer",
  shortBio:
    "I design and ship cloud-soft product surfaces that stay fast, accessible, and quietly premium at scale.",
  location: "Seattle, WA",
  avatarUrl: "/avatars/placeholder.png",
  links,
  ctas: {
    primary: { label: "Explore Projects", href: "#projects" },
    secondary: { label: "Book an Intro Call", href: "#contact" },
  },
  seo: {
    title: "Cloud Dancer - Developer Portfolio",
    description:
      "A calm, modern developer portfolio landing page inspired by Pantone Cloud Dancer.",
    keywords: ["portfolio", "developer", "next.js", "template"],
    ogImage: "/og.png",
    twitterHandle: "@cloud_dancer",
    locale: "en_US",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Principles", href: "#principles" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  socialProof: ["Arcadia Labs", "Nimbus OSS", "Latent UI", "SignalStream"],
  skills: [
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind", "Motion"],
    },
    {
      label: "Backend",
      items: ["Node.js", "APIs", "Edge Functions", "Postgres", "Auth"],
    },
    {
      label: "DevOps",
      items: ["Vercel", "Docker", "CI/CD", "Observability", "SLOs"],
    },
    {
      label: "AI/ML",
      items: ["RAG", "Embeddings", "Prompt Design", "Evaluation", "Guardrails"],
    },
    {
      label: "Tooling",
      items: ["Playwright", "Biome", "Storybook", "Figma", "Notion"],
    },
  ],
  hero: {
    statusChips: ["Open to selective collaborations", "Design-forward product systems"],
    nowBlurb: "Designing cloud-soft experiences for teams that want clarity, speed, and trust.",
    availability: "Q2 2026",
    focus: "Product surfaces + interaction systems",
    signals: [
      { label: "Projects shipped", value: "32+" },
      { label: "OSS stars", value: "1.4k" },
      { label: "Design systems", value: "4" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A calm, deliberate approach to product craft",
    subtitle: "I help teams translate complexity into focused, intuitive product moments.",
    paragraphs: [
      "I specialize in design-forward engineering for modern web products, balancing clear information architecture with subtle motion and accessibility-first patterns.",
      "From early prototypes to polished launch phases, I partner with design and product to deliver experiences that feel steady, premium, and fast on every screen.",
    ],
    quickFacts: [
      { label: "Preferred stack", value: "Next.js + Tailwind" },
      { label: "Availability", value: "Limited, remote" },
      { label: "Typical response", value: "24-48h" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s build something calm and powerful.",
    subtitle: "Open to product builds, advisory support, and design engineering leadership.",
    actions: [
      { label: "Email me", href: `mailto:${links.email}`, variant: "default" },
      { label: "LinkedIn", href: links.linkedin, variant: "secondary" },
      { label: "Schedule a call", href: links.website, variant: "ghost" },
    ],
    helperText:
      "Need a form instead of direct links? Connect this section to your preferred form provider or a server action.",
  },
} satisfies SiteConfig;
