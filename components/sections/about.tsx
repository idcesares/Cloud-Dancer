import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] section-gap">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About"
              title="A calm, deliberate approach to product craft"
              subtitle="I help teams translate complex systems into focused, intuitive experiences."
            />
            <p className="text-base text-muted-foreground">
              I specialize in design-forward engineering for modern web products. My work balances
              clear information architecture with subtle motion and accessible UI patterns.
            </p>
            <p className="text-base text-muted-foreground">
              From early-stage prototypes to polished launch, I partner closely with design and
              product to deliver experiences that feel steady, premium, and fast.
            </p>
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
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Preferred stack</span>
                <span>Next.js + Tailwind</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span>Limited, remote</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Response time</span>
                <span>24-48h</span>
              </div>
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
