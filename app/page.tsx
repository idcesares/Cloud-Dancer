import { ScrollToTop } from "@/components/common/scroll-to-top";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SocialProof } from "@/components/sections/social-proof";
import { Testimonials } from "@/components/sections/testimonials";
import { Timeline } from "@/components/sections/timeline";
import { siteConfig } from "@/content/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      // JSON-LD must be raw JSON text to avoid SSR/client escaping mismatches.
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw JSON text.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  const locale = siteConfig.seo.locale?.replace("_", "-");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.links.website}/#person`,
        name: siteConfig.name,
        description: siteConfig.shortBio,
        url: siteConfig.links.website,
        image: `${siteConfig.links.website}${siteConfig.seo.ogImage}`,
        jobTitle: siteConfig.headline,
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.linkedin,
          siteConfig.links.x,
          siteConfig.links.website,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.links.website}/#website`,
        url: siteConfig.links.website,
        name: siteConfig.seo.title,
        description: siteConfig.seo.description,
        inLanguage: locale,
        publisher: {
          "@id": `${siteConfig.links.website}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.links.website}/#profile`,
        url: siteConfig.links.website,
        name: `${siteConfig.name} - ${siteConfig.headline}`,
        inLanguage: locale,
        mainEntity: {
          "@id": `${siteConfig.links.website}/#person`,
        },
        isPartOf: {
          "@id": `${siteConfig.links.website}/#website`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content">
        <JsonLd data={jsonLd} />
        <Hero />
        <SocialProof />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Testimonials />
        <Principles />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
