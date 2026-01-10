"use client";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { useReducedMotionPreference } from "@/components/motion/use-reduced-motion";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

const PAGE_SIZE = 2;

function chunk<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function Timeline() {
  const reduced = useReducedMotionPreference();
  const pages = chunk(experience, PAGE_SIZE).map((items) => ({
    id: items.map((entry) => `${entry.company}-${entry.role}`).join("|"),
    items,
  }));
  const [pageIndex, setPageIndex] = React.useState(0);

  React.useEffect(() => {
    if (pageIndex > pages.length - 1) {
      setPageIndex(0);
    }
  }, [pageIndex, pages.length]);

  if (!pages.length) {
    return null;
  }

  const page = pages[pageIndex];
  const items = page?.items ?? [];

  return (
    <section id="experience" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Experience"
            title="Roles that shaped the craft"
            subtitle="Browse the timeline with a calm, focused carousel."
          />
          <div className="space-y-6 section-gap">
            <AnimatePresence mode="wait">
              <motion.div
                key={`page-${pageIndex}`}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: reduced ? 0 : 0.35, ease: "easeOut" }}
                className="grid gap-6"
                role="tabpanel"
                id={`experience-panel-${pageIndex}`}
                aria-labelledby={`experience-tab-${pageIndex}`}
                tabIndex={0}
              >
                {items.map((item) => (
                  <div
                    key={`${item.company}-${item.role}`}
                    className="grid gap-6 rounded-2xl border border-border/60 bg-card/80 card-padding md:grid-cols-[220px_1fr]"
                  >
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    </div>
                    <div className="space-y-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                      {item.tech?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-2" role="tablist">
              {pages.map((pageItem, index) => (
                <button
                  key={pageItem.id}
                  type="button"
                  role="tab"
                  id={`experience-tab-${index}`}
                  onClick={() => setPageIndex(index)}
                  aria-label={`Show experience page ${index + 1}`}
                  aria-selected={index === pageIndex}
                  aria-controls={`experience-panel-${index}`}
                  tabIndex={index === pageIndex ? 0 : -1}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border border-border transition",
                    index === pageIndex
                      ? "bg-foreground"
                      : "bg-background hover:border-foreground/60",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
