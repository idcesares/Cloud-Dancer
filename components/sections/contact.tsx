import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <Card className="space-y-6 border-border/60 bg-card/80 card-padding">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something calm and powerful."
            subtitle="Open to new work, advisory, and speaking engagements."
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={`mailto:${siteConfig.links.email}`}>Email me</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={siteConfig.links.linkedin}>
                LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={siteConfig.links.website}>
                Schedule a call <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Want to add a contact form? Wire this section to your preferred form provider or
            serverless action. See README for TODOs.
          </p>
        </Card>
      </Container>
    </section>
  );
}
