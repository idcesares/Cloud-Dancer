import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const links = [
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "X", href: siteConfig.links.x, icon: Twitter },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-xs text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground hover:shadow-soft",
            showLabels ? "" : "px-2.5",
          )}
          aria-label={item.label}
        >
          <item.icon className="h-4 w-4" />
          {showLabels ? <span>{item.label}</span> : null}
        </Link>
      ))}
    </div>
  );
}
