import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
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
  },
  {
    period: "Aug 2023 — Aug 2025",
    company: "Integrate",
    role: "Software Engineer – L2",
    location: "India",
    description:
      "Built and maintained production mobile applications with a strong focus on React Native development, reusable components, architecture, and reliable feature delivery.",
    highlights: [
      "Developed production React Native applications.",
      "Built reusable mobile components and application features.",
      "Worked across architecture, state management, and API integration.",
      "Contributed to performance and maintainability improvements.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "iOS",
    ],
  },
  {
    period: "Apr 2020 — Aug 2023",
    company: "Fibonalabs",
    role: "Software Development Engineer II",
    location: "India",
    description:
      "Worked across React Native and native mobile technologies, contributing to product development, architecture, reusable components, and engineering practices.",
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
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/[0.08] py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Engineering with ownership."
            description="8+ years building mobile products, evolving architectures, improving engineering workflows, and owning software from development to production."
          />
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Timeline */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-blue-400/50 via-white/10 to-transparent md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <ScrollReveal
                key={experience.company}
                delay={index * 0.08}
              >
                <article className="group relative md:pl-12">
                  {/* Timeline node */}
                  <div className="absolute left-[19px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-blue-400/40 bg-[#050505] md:block">
                    <div className="absolute inset-[3px] rounded-full bg-blue-400 transition-transform duration-300 group-hover:scale-150" />
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.025]">
                    {/* Glow */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-500/[0.035] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="relative grid lg:grid-cols-[280px_1fr]">
                      {/* Left */}
                      <div className="border-b border-white/[0.06] p-7 lg:border-b-0 lg:border-r lg:p-8">
                        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                          <CalendarDays size={13} />

                          {experience.period}
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                          {experience.company}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-400">
                          {experience.role}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs text-neutral-600">
                          <MapPin size={13} />

                          {experience.location}
                        </div>
                      </div>

                      {/* Right */}
                      <div className="p-7 lg:p-8">
                        <div className="flex gap-3">
                          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                            <BriefcaseBusiness
                              size={15}
                              className="text-blue-300/70"
                            />
                          </div>

                          <p className="text-base leading-7 text-neutral-300">
                            {experience.description}
                          </p>
                        </div>

                        <div className="mt-7 space-y-3">
                          {experience.highlights.map(
                            (highlight) => (
                              <div
                                key={highlight}
                                className="flex gap-3 text-sm leading-6 text-neutral-500"
                              >
                                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />

                                <span>{highlight}</span>
                              </div>
                            ),
                          )}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {experience.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[11px] text-neutral-500 transition-all duration-300 group-hover:border-white/[0.12] group-hover:text-neutral-400"
                              >
                                {technology}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Animated bottom accent */}
                    <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 via-violet-400/40 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
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