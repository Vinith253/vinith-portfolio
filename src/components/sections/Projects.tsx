import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ProjectCard from "@/src/components/sections/ProjectCard";
import { projects } from "@/src/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Selected Work"
          title="Building things that solve real problems."
          description="A collection of mobile products, engineering systems, developer tooling, and architecture experiments I've worked on."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}