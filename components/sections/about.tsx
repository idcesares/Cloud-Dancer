import { MapPin } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function About() {
  const about = siteConfig.about;

  return (
    <section id="about" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] section-gap">
          <div className="space-y-6">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} subtitle={about.subtitle} />
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <Card className="space-y-6 border-border/60 bg-card/80 card-padding">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Quick facts
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {siteConfig.location}
              </div>
            </div>
            <div className="grid gap-4 text-sm">
              {about.quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">{fact.label}</span>
                  <span className="text-right text-foreground">{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <Link href={siteConfig.links.linkedin} className="hover:text-foreground">
                LinkedIn
              </Link>
              <Link href={siteConfig.links.github} className="hover:text-foreground">
                GitHub
              </Link>
              <Link href={siteConfig.links.website} className="hover:text-foreground">
                Website
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
