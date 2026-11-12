import {
  ArrowUpRight,
  Smartphone,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Monthly Expense Tracker",
    category: "Mobile Application",
    description:
      "An offline-first expense management application designed for working professionals, with local persistence, PIN protection, biometrics, analytics, and future AI-powered insights.",
    technologies: [
      "React Native",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Zustand",
    ],
    status: "Building",
  },
  {
    number: "02",
    title: "AI PR Review System",
    category: "AI Engineering",
    description:
      "An LLM-powered engineering workflow designed to automate pull-request review, identify issues, and assist with comment resolution.",
    technologies: [
      "LLM",
      "AI Automation",
      "Git",
      "CI/CD",
      "Developer Tools",
    ],
    status: "Engineering",
  },
  {
    number: "03",
    title: "Server-Driven UI",
    category: "Mobile Architecture",
    description:
      "A mobile architecture approach where backend-driven configuration determines screen composition, allowing product experiences to evolve without requiring a complete application release.",
    technologies: [
      "React Native",
      "SDUI",
      "TypeScript",
      "APIs",
      "Architecture",
    ],
    status: "Exploring",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/[0.08] py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I'm building."
            description="A selection of engineering projects exploring mobile products, architecture, automation, and AI."
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.08}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.16] hover:bg-white/[0.025]">
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.04] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                    <Smartphone
                      size={18}
                      className="text-blue-300/70"
                    />
                  </div>

                  <span className="text-xs tracking-[0.2em] text-neutral-700">
                    {project.number}
                  </span>
                </div>

                <div className="relative mt-8">
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-300/50">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {project.description}
                  </p>
                </div>

                <div className="relative mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[11px] text-neutral-500"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                      {project.status}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 via-violet-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 flex items-center gap-3 text-sm text-neutral-600">
            <Sparkles size={15} />
            <span>More projects and experiments are continuously evolving.</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}