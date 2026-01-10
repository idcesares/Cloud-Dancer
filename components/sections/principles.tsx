import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { principles } from "@/content/principles";
import { Gauge, ShieldCheck, Target, Users } from "lucide-react";

const iconMap = {
  Target,
  ShieldCheck,
  Gauge,
  Users,
} as const;

export function Principles() {
  return (
    <section id="principles" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Principles"
            title="A working style built for calm momentum"
            subtitle="A few habits that keep delivery clean, clear, and consistent."
          />
          <div className="grid gap-6 md:grid-cols-2 section-gap">
            {principles.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Target;
              return (
                <Card
                  key={item.title}
                  className="space-y-4 border-border/60 bg-card/80 card-padding"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
