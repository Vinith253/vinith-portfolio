import {
  BriefcaseBusiness,
  CalendarDays,
  Layers3,
  MapPin,
  Sparkles,
  TrendingDown,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const experiences = [
  {
    period: "Aug 2025 — Present",
    company: "Dbiz Solutions",
    role: "Software Analyst – Mobile (Grade B)",
    location: "Bengaluru, India",
    description:
      "Leading mobile engineering initiatives across React Native and native iOS, with ownership spanning architecture, development, CI/CD, AI-powered developer tooling, and production reliability.",
    highlights: [
      "Owned and delivered core React Native modules end-to-end.",
      "Architected reusable UI and utility component systems across 20+ components, reducing duplicate code by around 40%.",
      "Implemented CI/CD automation using Azure DevOps.",
      "Built an LLM-powered PR review system with automated comment resolution.",
      "Delivered deep linking, multi-environment deployments, and production support.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Swift",
      "iOS",
      "Azure DevOps",
      "AI / LLM",
    ],
    impact: [
      {
        value: "40%",
        label: "Less duplicate code",
        icon: TrendingDown,
      },
      {
        value: "20+",
        label: "Reusable components",
        icon: Layers3,
      },
      {
        value: "AI",
        label: "PR review automation",
        icon: Sparkles,
      },
    ],
  },
  {
    period: "Aug 2023 — Aug 2025",
    company: "Integrate",
    role: "Software Engineer – L2",
    location: "India",
    description:
      "Built and maintained production mobile applications with a strong focus on React Native development, reusable architecture, reliable feature delivery, and application performance.",
    highlights: [
      "Developed and maintained production React Native applications.",
      "Built reusable mobile components and application features.",
      "Worked across architecture, state management, and API integration.",
      "Contributed to performance, reliability, and maintainability improvements.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "iOS",
    ],
    impact: [
      {
        value: "RN",
        label: "Production applications",
        icon: BriefcaseBusiness,
      },
      {
        value: "API",
        label: "Integrated data flows",
        icon: Layers3,
      },
      {
        value: "Scale",
        label: "Reusable architecture",
        icon: Sparkles,
      },
    ],
  },
  {
    period: "Apr 2020 — Aug 2023",
    company: "Fibonalabs",
    role: "Software Development Engineer II",
    location: "India",
    description:
      "Worked across React Native and native mobile technologies, contributing to product development, reusable architecture, platform integrations, and engineering practices.",
    highlights: [
      "Built and maintained production mobile applications.",
      "Developed features using React Native and TypeScript.",
      "Worked with native mobile capabilities and platform integrations.",
      "Contributed to application architecture and reusable components.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "iOS",
      "Redux",
    ],
    impact: [
      {
        value: "RN",
        label: "Cross-platform development",
        icon: BriefcaseBusiness,
      },
      {
        value: "iOS",
        label: "Native integrations",
        icon: Layers3,
      },
      {
        value: "UI",
        label: "Reusable components",
        icon: Sparkles,
      },
    ],
  },
  {
    period: "May 2018 — Mar 2020",
    company: "DesmosLab Pvt Ltd",
    role: "Software Developer",
    location: "Coimbatore, India",
    description:
      "Built a strong foundation in mobile development while working across native iOS, Flutter, and React Native technologies.",
    highlights: [
      "Launched an iOS application using MVC architecture.",
      "Worked on native iOS application development.",
      "Experimented with Flutter and React Native.",
      "Led the migration of a legacy application to Flutter.",
    ],
    technologies: [
      "iOS",
      "Swift",
      "Objective-C",
      "Flutter",
      "React Native",
    ],
    impact: [
      {
        value: "iOS",
        label: "First native application",
        icon: BriefcaseBusiness,
      },
      {
        value: "Flutter",
        label: "Legacy migration",
        icon: Layers3,
      },
      {
        value: "RN",
        label: "Early cross-platform work",
        icon: Sparkles,
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-[88px] border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Engineering with ownership."
            description="8+ years building mobile products, evolving architectures, improving engineering workflows, and owning software from development to production."
          />
        </ScrollReveal>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Desktop timeline */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-blue-400/50 via-white/[0.08] to-transparent md:block"
          />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {experiences.map((experience, index) => (
              <ScrollReveal
                key={experience.company}
                delay={index * 0.08}
              >
                <article className="group relative md:pl-12">
                  {/* Timeline node */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[19px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-blue-400/40 bg-[#050505] md:block"
                  >
                    <div className="absolute inset-[3px] rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-150" />
                  </div>

                  <div
                    tabIndex={0}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] outline-none transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.025] focus-visible:border-blue-400/30"
                  >
                    <div className="relative grid lg:grid-cols-[300px_1fr]">
                      {/* Company */}
                      <div className="border-b border-white/[0.06] p-6 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
                        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600 sm:text-[11px] sm:tracking-[0.18em]">
                          <CalendarDays size={13} />
                          <span>{experience.period}</span>
                        </div>

                        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:mt-5 sm:text-2xl">
                          {experience.company}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-400">
                          {experience.role}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600 sm:mt-5">
                          <MapPin size={13} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-6 sm:p-7 lg:p-8">
                        <div className="flex gap-3">
                          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                            <BriefcaseBusiness
                              size={15}
                              className="text-blue-300/70"
                            />
                          </div>

                          <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                            {experience.description}
                          </p>
                        </div>

                        <div className="mt-6 space-y-3 sm:mt-7">
                          {experience.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex gap-3 text-sm leading-6 text-neutral-500"
                            >
                              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Impact */}
                        <div className="mt-6 border-t border-white/[0.06] pt-6 sm:mt-7">
                          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                            Impact
                          </p>

                          <div className="grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-3 sm:gap-3">
                            {experience.impact.map((item) => {
                              const Icon = item.icon;

                              return (
                                <div
                                  key={item.label}
                                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:p-3.5"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold tracking-tight text-white">
                                      {item.value}
                                    </span>

                                    <Icon
                                      size={13}
                                      className="text-blue-300/50"
                                    />
                                  </div>

                                  <p className="mt-1 text-[10px] leading-4 text-neutral-600">
                                    {item.label}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-neutral-500 sm:px-3 sm:text-[11px]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 via-violet-400/40 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                    />
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}