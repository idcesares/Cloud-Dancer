import { Container } from "@/components/common/container";
import { SocialLinks } from "@/components/common/social-links";
import { siteConfig } from "@/content/site";
import { templateConfig } from "@/content/template";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <SocialLinks showLabels />
            <a href={templateConfig.creator.website} className="hover:text-foreground">
              Template by {templateConfig.creator.name}
            </a>
            <a href={templateConfig.repo} className="hover:text-foreground">
              Cloud Dancer on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
