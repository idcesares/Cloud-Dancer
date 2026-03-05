export interface LinkSet {
  github: string;
  linkedin: string;
  x: string;
  email: string;
  website: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle?: string;
  locale: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface DetailItem {
  label: string;
  value: string;
}

export interface HeroContent {
  statusChips: string[];
  nowBlurb: string;
  availability: string;
  focus: string;
  signals: StatItem[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  quickFacts: DetailItem[];
}

export interface ContactAction {
  label: string;
  href: string;
  variant: "default" | "secondary" | "ghost";
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions: ContactAction[];
  helperText: string;
}

export interface SiteConfig {
  name: string;
  headline: string;
  shortBio: string;
  location: string;
  avatarUrl: string;
  links: LinkSet;
  ctas: {
    primary: CtaLink;
    secondary: CtaLink;
  };
  seo: SeoConfig;
  nav: NavItem[];
  socialProof: string[];
  skills: SkillGroup[];
  hero: HeroContent;
  about: AboutContent;
  contact: ContactContent;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  hrefLive?: string;
  hrefRepo?: string;
  featured: boolean;
  highlights?: string[];
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export type PrincipleIcon = "Target" | "ShieldCheck" | "Gauge" | "Users";

export interface Principle {
  title: string;
  description: string;
  icon: PrincipleIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}
