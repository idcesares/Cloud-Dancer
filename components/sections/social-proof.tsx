import { Container } from "@/components/common/container";
import { siteConfig } from "@/content/site";

export function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-card/40 section-tight">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {siteConfig.socialProof.map((item) => (
            <span key={item} className="transition hover:text-foreground">
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
