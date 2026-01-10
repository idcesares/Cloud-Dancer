export const siteConfig = {
  name: "Avery Lin",
  headline: "Design-minded full-stack developer",
  shortBio:
    "I build calm, high-performance web experiences with a focus on clarity, polish, and speed.",
  location: "Seattle, WA",
  avatarUrl: "/avatars/placeholder.png",
  links: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
    x: "https://x.com",
    email: "hello@example.com",
    website: "https://example.com",
  },
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "#contact" },
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
};
