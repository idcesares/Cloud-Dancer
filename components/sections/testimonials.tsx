import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/testimonials";
import Image from "next/image";

export function Testimonials() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by thoughtful teams"
            subtitle="Short notes from collaborators and clients."
          />
          <div className="grid gap-6 md:grid-cols-2 section-gap">
            {testimonials.map((item) => (
              <Card key={item.name} className="space-y-4 border-border/60 bg-card/80 card-padding">
                <p className="text-base text-foreground">“{item.quote}”</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-border/60 bg-muted">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
