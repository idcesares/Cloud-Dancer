import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { Cloud, Code2, Server, Sparkles, Wrench } from "lucide-react";

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  DevOps: Cloud,
  "AI/ML": Sparkles,
  Tooling: Wrench,
} as const;

const detailMap: Record<string, string> = {
  Frontend: "Interfaces, motion, and layout craft.",
  Backend: "APIs and performance-minded data flows.",
  DevOps: "Deploy, observe, and keep it steady.",
  "AI/ML": "Practical, product-ready intelligence.",
  Tooling: "Ship faster with calm systems.",
};

export function Skills() {
  const skills = siteConfig.skills;

  return (
    <section id="skills" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Toolbelt"
            title="Stacks that keep things light and focused"
            subtitle="Fluid, modular stacks tailored to the needs of each project."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 section-gap">
            {skills.map((group) => {
              const Icon = iconMap[group.label as keyof typeof iconMap] ?? Code2;
              return (
                <Card
                  key={group.label}
                  className="relative overflow-hidden border-border/60 bg-card/80 card-padding"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{group.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {detailMap[group.label] ?? ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
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
