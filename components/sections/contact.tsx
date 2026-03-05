import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Contact() {
  const contact = siteConfig.contact;

  return (
    <section id="contact" className="section">
      <Container>
        <Card className="space-y-6 border-border/60 bg-card/80 card-padding">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
          />
          <div className="flex flex-wrap gap-3">
            {contact.actions.map((action) => (
              <Button key={action.label} asChild variant={action.variant} size="lg">
                <Link href={action.href}>
                  {action.label}
                  {!action.href.startsWith("mailto:") ? (
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  ) : null}
                </Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">{contact.helperText}</p>
        </Card>
      </Container>
    </section>
  );
}
