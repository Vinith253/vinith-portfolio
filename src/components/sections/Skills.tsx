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
        featured: true,

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
        featured: true,

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
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                    group.featured
                      ? "border-violet-400/[0.16] bg-violet-500/[0.018] hover:border-violet-400/[0.24] hover:bg-violet-500/[0.03]"
                      : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.025]"
                  }`}
                >
                  {/* Ambient glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                      group.featured
                        ? "bg-violet-500/[0.08]"
                        : "bg-blue-500/[0.04]"
                    }`}
                  />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
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

                    {/* Title */}
                    <div className="mt-7 flex items-center gap-2">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {group.title}
                      </h3>

                      {group.featured && (
                        <span className="rounded-full border border-violet-400/[0.14] bg-violet-400/[0.05] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-violet-300/70">
                          Focus
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {group.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[11px] text-neutral-500 transition-all duration-300 group-hover:border-white/[0.11] group-hover:text-neutral-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent */}
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

        {/* Closing statement */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex items-center gap-3 text-sm text-neutral-600">
            <Sparkles size={15} className="text-violet-400/50" />

            <span>
              Always learning, experimenting, and improving the way
              software is built.
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}