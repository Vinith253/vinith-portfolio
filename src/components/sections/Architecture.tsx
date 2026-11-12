import {
  Database,
  Layers3,
  Smartphone,
  Zap,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const layers = [
  {
    number: "01",
    title: "Experience",
    subtitle: "Mobile UI",
    description:
      "Composable interfaces built around reusable components, design systems, accessibility, and responsive interactions.",
    icon: Smartphone,
    technologies: [
      "React Native",
      "TypeScript",
      "Reanimated",
      "Design Systems",
    ],
  },
  {
    number: "02",
    title: "Application",
    subtitle: "State & Logic",
    description:
      "Predictable application state, feature-based architecture, and business logic separated from presentation.",
    icon: Layers3,
    technologies: [
      "Redux Toolkit",
      "Zustand",
      "Feature Modules",
      "Custom Hooks",
    ],
  },
  {
    number: "03",
    title: "Data",
    subtitle: "Local & Remote",
    description:
      "Reliable data flows designed for real-world mobile conditions, including offline usage, caching, synchronization, and persistence.",
    icon: Database,
    technologies: [
      "SQLite",
      "Drizzle ORM",
      "MMKV",
      "API Layer",
    ],
  },
  {
    number: "04",
    title: "Platform",
    subtitle: "Native & Runtime",
    description:
      "Native capabilities and runtime integrations that allow React Native applications to operate closer to the platform.",
    icon: Zap,
    technologies: [
      "JSI",
      "Fabric",
      "TurboModules",
      "Swift",
    ],
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="scroll-mt-24 border-t border-white/[0.08] py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Architecture"
            title="Thinking beyond the component."
            description="I approach mobile applications as systems — balancing user experience, application structure, data, native capabilities, and operational reliability."
          />
        </ScrollReveal>

        <div className="relative mt-20">
          <div className="absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="space-y-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <ScrollReveal
                  key={layer.title}
                  delay={index * 0.08}
                >
                  <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.025]">
                    <div className="grid lg:grid-cols-[280px_1fr]">
                      <div className="flex items-center gap-5 border-b border-white/[0.06] p-7 lg:border-b-0 lg:border-r">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                          <Icon
                            size={20}
                            className="text-blue-300/70"
                          />
                        </div>

                        <div>
                          <div className="text-[10px] tracking-[0.2em] text-neutral-700">
                            {layer.number}
                          </div>

                          <h3 className="mt-1 text-xl font-semibold text-white">
                            {layer.title}
                          </h3>

                          <p className="mt-1 text-sm text-neutral-600">
                            {layer.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="p-7 lg:p-8">
                        <p className="max-w-3xl text-base leading-7 text-neutral-400">
                          {layer.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {layer.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-white/[0.07] px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400"
                              >
                                {technology}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/60 via-violet-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}