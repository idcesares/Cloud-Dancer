import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  hrefLive?: string;
  hrefRepo?: string;
  highlights?: string[];
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  hrefLive,
  hrefRepo,
  highlights,
  featured,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col justify-between overflow-hidden border-border/60 bg-card/80 transition hover:-translate-y-1 hover:shadow-hover motion-reduce:transform-none motion-reduce:transition-none card-padding",
        featured ? "ring-1 ring-accent/40" : "",
      )}
    >
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4 px-0 pb-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        {highlights?.length ? (
          <ul className="space-y-1 text-sm text-muted-foreground">
            {highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        ) : null}
        <div className="flex items-center gap-3 text-sm">
          {hrefLive ? (
            <Link
              href={hrefLive}
              className="inline-flex items-center gap-1 text-foreground hover:text-primary"
            >
              Live <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
          {hrefRepo ? (
            <Link
              href={hrefRepo}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" /> Repo
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
