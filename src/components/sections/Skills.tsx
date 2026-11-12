import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const skillGroups = [
  {
    number: "01",
    title: "Mobile Engineering",
    description:
      "Building production-grade cross-platform and native mobile applications.",
    icon: Smartphone,
    skills: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Swift",
      "Objective-C",
      "iOS",
    ],
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Designing scalable application structures with performance and maintainability in mind.",
    icon: Layers3,
    skills: [
      "New Architecture",
      "Fabric",
      "JSI",
      "TurboModules",
      "Feature Architecture",
      "Offline-first",
      "SDUI",
    ],
  },
  {
    number: "03",
    title: "State & Data",
    description:
      "Building predictable data flows and reliable persistence layers.",
    icon: Database,
    skills: [
      "Redux Toolkit",
      "Zustand",
      "SQLite",
      "Drizzle ORM",
      "MMKV",
      "REST APIs",
      "Caching",
    ],
  },
  {
    number: "04",
    title: "Engineering Systems",
    description:
      "Improving development workflows, automation, quality, and delivery.",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "CI/CD",
      "SonarQube",
      "Pre-commit",
      "Release Automation",
    ],
  },
  {
    number: "05",
    title: "AI Engineering",
    description:
      "Exploring practical applications of LLMs across the software development lifecycle.",
    icon: BrainCircuit,
    skills: [
      "LLM Integration",
      "AI Code Review",
      "Prompt Engineering",
      "AI Developer Tools",
      "Local LLMs",
      "Ollama",
      "AI Automation",
    ],
  },
  {
    number: "06",
    title: "Development",
    description:
      "Strong fundamentals across frontend engineering and developer tooling.",
    icon: Terminal,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "REST",
      "Git",
      "VS Code",
      "Debugging",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/[0.08] py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Skills"
            title="The tools behind the work."
            description="A practical engineering stack built around mobile development, architecture, automation, and emerging AI capabilities."
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <ScrollReveal
                key={group.title}
                delay={index * 0.07}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.025]">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.04] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                        <Icon
                          size={19}
                          className="text-blue-300/70"
                        />
                      </div>

                      <span className="text-xs tracking-[0.2em] text-neutral-700">
                        {group.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                      {group.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[11px] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/60 via-violet-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex items-center gap-3 text-sm text-neutral-600">
            <Sparkles size={15} />
            <span>
              Always learning, experimenting, and improving the stack.
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}