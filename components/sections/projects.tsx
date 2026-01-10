import { Container } from "@/components/common/container";
import { ProjectCard } from "@/components/common/project-card";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Featured"
            title="Selected work with gentle ambition"
            subtitle="A few recent projects that balance clarity, craft, and performance."
          />
          <div className="grid gap-6 md:grid-cols-2 section-gap">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
