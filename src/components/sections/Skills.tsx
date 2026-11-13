import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const skillGroups = [
  {
    number: "01",
    title: "Mobile Engineering",
    description:
      "Building production-grade cross-platform applications with deep native platform experience.",
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
      "Designing scalable mobile systems with clear boundaries, performance, and long-term maintainability.",
    icon: Layers3,
    featured: true,
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
      "Designing predictable state flows, local persistence, and reliable data access layers.",
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
      "Improving developer workflows through automation, quality gates, and reliable delivery pipelines.",
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
      "Applying LLMs and AI-assisted workflows to improve how software is built, reviewed, and maintained.",
    icon: BrainCircuit,
    featured: true,
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
    title: "Frontend & Development",
    description:
      "Strong foundations across frontend engineering, APIs, debugging, and modern developer tooling.",
    icon: Code2,
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
      className="scroll-mt-24 border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Skills"
            title="The engineering stack behind the work."
            description="A practical stack built around mobile engineering, scalable architecture, production systems, and AI-powered developer workflows."
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <ScrollReveal
                key={group.title}
                delay={index * 0.07}
                className="h-full"
              >
                <article
                  tabIndex={0}
                  className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border p-6 outline-none transition-all duration-500 sm:min-h-[330px] sm:p-7 ${
                    group.featured
                      ? "border-violet-400/[0.16] bg-violet-500/[0.018] hover:border-violet-400/[0.28] hover:bg-violet-500/[0.03] focus-visible:border-violet-400/[0.28]"
                      : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.025] focus-visible:border-white/[0.18]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${
                      group.featured
                        ? "bg-violet-500/[0.09]"
                        : "bg-blue-500/[0.045]"
                    }`}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-105 ${
                          group.featured
                            ? "border-violet-400/[0.16] bg-violet-400/[0.05]"
                            : "border-white/[0.08] bg-white/[0.025]"
                        }`}
                      >
                        <Icon
                          size={19}
                          className={
                            group.featured
                              ? "text-violet-300/80"
                              : "text-blue-300/70"
                          }
                        />
                      </div>

                      <span className="text-xs tracking-[0.2em] text-neutral-700">
                        {group.number}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-7">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {group.title}
                      </h3>

                      {group.featured && (
                        <span className="rounded-full border border-violet-400/[0.14] bg-violet-400/[0.05] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-violet-300/70">
                          Focus
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {group.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-neutral-500 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-neutral-300 sm:px-3 sm:text-[11px]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-700 group-hover:scale-x-100 ${
                      group.featured
                        ? "from-violet-400/70 via-blue-400/40 to-transparent"
                        : "from-blue-400/60 via-violet-400/30 to-transparent"
                    }`}
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex items-start gap-3 text-sm text-neutral-600 sm:items-center">
            <Sparkles
              size={15}
              className="mt-0.5 shrink-0 text-violet-400/50 sm:mt-0"
            />
            <span>
              Always learning, experimenting, and improving the way software
              is built.
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}