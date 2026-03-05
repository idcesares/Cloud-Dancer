import { ChevronDown } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { faqSection, faqs } from "@/content/faq";

export function Faq() {
  if (!faqs.length) {
    return null;
  }

  return (
    <section id="faq" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            subtitle={faqSection.subtitle}
          />
          <div className="grid gap-4 md:grid-cols-2 section-gap">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border/60 bg-card/80 card-padding"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-base font-semibold text-foreground">
                  <span>{item.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
