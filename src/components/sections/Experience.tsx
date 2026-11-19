"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  impact: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    company: "Dbiz Solutions",
    location: "Bengaluru",
    role: "Software Analyst – Mobile (Grade B)",
    period: "Aug 2025 — Present",
    impact:
      "Improved development velocity, code quality, and engineering efficiency through scalable architecture, automation, and AI-assisted workflows.",
    highlights: [
      "Owned and delivered a core React Native mobile module end-to-end, driving architecture decisions and mentoring engineers.",
      "Architected reusable UI and utility component systems with centralized theming, reducing duplicate code by ~40% across 20+ components.",
      "Designed Azure DevOps CI/CD automation, reducing PR review time by ~60%.",
      "Built an AI-powered LLM-based PR review system with automated comment resolution.",
      "Delivered deep linking and deferred deep linking with multi-environment support.",
      "Led production support and incident management while improving application stability.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Azure DevOps",
      "CI/CD",
      "LLM",
      "AI",
      "Deep Linking",
    ],
    current: true,
  },
  {
    company: "Integrate",
    location: "Chennai",
    role: "Software Engineer – L2 | React Native & React Developer",
    period: "Aug 2023 — Aug 2025",
    impact:
      "Improved development efficiency and code quality through modular architecture, reusable components, and consistent testing practices.",
    highlights: [
      "Engineered modular, reusable React Native components, improving code reusability by ~60%.",
      "Developed and maintained React web components and shared frontend architecture.",
      "Applied Clean Architecture, MVVM, SOLID principles, and established design patterns.",
      "Improved application performance and reduced technical debt across multiple releases.",
      "Improved unit testing with Jest and code quality with SonarQube.",
      "Collaborated with cross-functional teams to deliver features reliably.",
    ],
    technologies: [
      "React Native",
      "React",
      "TypeScript",
      "Jest",
      "SonarQube",
      "Clean Architecture",
      "MVVM",
    ],
  },
  {
    company: "Fibonalabs",
    location: "Bengaluru",
    role: "Software Development Engineer II",
    period: "Apr 2020 — Aug 2023",
    impact:
      "Delivered scalable mobile solutions while providing technical leadership, mentoring engineers, and improving development and release reliability.",
    highlights: [
      "Built scalable React Native UI components using reusable design patterns.",
      "Led and mentored a team of 8 engineers through technical guidance and code reviews.",
      "Applied Clean Architecture, MVVM, SOLID principles, and design patterns.",
      "Integrated payment gateway solutions and reliable transaction flows.",
      "Improved CI/CD pipelines and deployment workflows.",
      "Collaborated with product and cross-functional teams across end-to-end delivery.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Clean Architecture",
      "MVVM",
      "SOLID",
      "CI/CD",
      "Payment Integration",
    ],
  },
  {
    company: "DesmosLab",
    location: "Coimbatore",
    role: "Software Developer",
    period: "May 2018 — Mar 2020",
    impact:
      "Built a strong foundation in mobile development and cross-platform technologies.",
    highlights: [
      "Developed and launched the first iOS application using MVC architecture.",
      "Led migration of a legacy application to Flutter.",
      "Explored React Native and Flutter for cross-platform development.",
      "Contributed to UI implementation and API integration.",
    ],
    technologies: [
      "iOS",
      "Swift",
      "Flutter",
      "React Native",
      "MVC",
      "REST APIs",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-white/10
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.02]
          blur-[120px]
        "
      />

      <Container className="relative w-full min-w-0">
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Building, leading, and shipping."
            description="A progression from hands-on mobile development to owning architecture, engineering systems, technical leadership, and production delivery."
          />
        </ScrollReveal>

        {/* Experience timeline */}
        <div className="relative mt-16 w-full min-w-0">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-8
              left-[15px]
              top-8
              hidden
              w-px
              bg-gradient-to-b
              from-violet-400/40
              via-white/[0.08]
              to-transparent
              xl:block
            "
          />

          <div className="flex w-full min-w-0 flex-col gap-5">
            {experiences.map((experience, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <article
                  key={experience.company}
                  className={`
                    group
                    relative
                    w-full
                    min-w-0
                    max-w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-colors
                    duration-300
                    ${
                      isExpanded
                        ? "border-white/[0.14] bg-white/[0.035]"
                        : "border-white/[0.07] bg-white/[0.018] hover:border-white/[0.12] hover:bg-white/[0.025]"
                    }
                  `}
                >
                  {/* Timeline marker */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-[15px]
                      top-8
                      hidden
                      h-3
                      w-3
                      -translate-x-1/2
                      items-center
                      justify-center
                      xl:flex
                    "
                  >
                    <div
                      className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        border
                        ${
                          experience.current
                            ? "border-blue-300 bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.45)]"
                            : "border-neutral-600 bg-[#080808]"
                        }
                      `}
                    />
                  </div>

                  {/* ================================= */}
                  {/* HEADER */}
                  {/* ================================= */}

                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="
                      grid
                      w-full
                      min-w-0
                      cursor-pointer
                      grid-cols-1
                      gap-5
                      p-6
                      text-left
                      sm:p-7
                      xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)_40px]
                      xl:items-center
                      xl:gap-10
                      xl:py-7
                      xl:pl-12
                      xl:pr-7
                    "
                  >
                    {/* Company / Role */}
                    <div className="min-w-0">
                      <div className="flex min-w-0 flex-wrap items-center gap-3">
                        <h3
                          className="
                            min-w-0
                            max-w-full
                            break-words
                            text-lg
                            font-semibold
                            tracking-tight
                            text-white
                            sm:text-xl
                          "
                        >
                          {experience.company}
                        </h3>

                        {experience.current && (
                          <span
                            className="
                              inline-flex
                              shrink-0
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-emerald-400/15
                              bg-emerald-400/[0.06]
                              px-2.5
                              py-1
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.15em]
                              text-emerald-300/80
                            "
                          >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Current
                          </span>
                        )}
                      </div>

                      <p
                        className="
                          mt-1.5
                          max-w-full
                          break-words
                          text-sm
                          leading-6
                          text-neutral-400
                          sm:text-base
                        "
                      >
                        {experience.role}
                      </p>

                      <div
                        className="
                          mt-3
                          flex
                          min-w-0
                          max-w-full
                          flex-wrap
                          items-center
                          gap-x-4
                          gap-y-2
                          text-xs
                          text-neutral-600
                        "
                      >
                        <span>{experience.period}</span>

                        <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

                        <span className="inline-flex min-w-0 items-center gap-1.5">
                          <MapPin size={12} className="shrink-0" />

                          <span>{experience.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="hidden min-w-0 xl:block">
                      <p
                        className="
                          max-w-full
                          break-words
                          text-sm
                          leading-6
                          text-neutral-500
                          transition-colors
                          duration-300
                          group-hover:text-neutral-400
                        "
                      >
                        {experience.impact}
                      </p>
                    </div>

                    {/* Expand button */}
                    <div className="flex items-center justify-end">
                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.02]
                          text-neutral-500
                          transition-all
                          duration-300
                          ${
                            isExpanded
                            ? "rotate-180 border-white/[0.14] text-neutral-300 xl:hidden"
                            : "group-hover:hidden"
                          }
                        `}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </div>
                  </button>

                  {/* ================================= */}
                  {/* MOBILE / TABLET LABEL */}
                  {/* ================================= */}

                  <div className="px-6 pb-5 sm:px-7 xl:hidden">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
                      {isExpanded ? "Hide details" : "View details"}
                    </span>
                  </div>

                  {/* ================================= */}
                  {/* EXPANDED CONTENT */}
                  {/* ================================= */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-400
                      ease-out
                      ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 xl:group-hover:grid-rows-[1fr] xl:group-hover:opacity-100"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="
                          border-t
                          border-white/[0.06]
                          px-6
                          pb-7
                          pt-6
                          sm:px-7
                          xl:pl-12
                          xl:pr-7
                        "
                      >
                        {/* Impact */}
                        <div className="max-w-3xl">
                          <p
                            className="
                              text-xs
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-neutral-600
                            "
                          >
                            Impact
                          </p>

                          <p
                            className="
                              mt-3
                              max-w-full
                              break-words
                              text-sm
                              leading-7
                              text-neutral-400
                              sm:text-base
                            "
                          >
                            {experience.impact}
                          </p>
                        </div>

                        {/* Details */}
                        <div
                          className="
                            mt-7
                            grid
                            w-full
                            min-w-0
                            gap-10
                            xl:grid-cols-[minmax(0,1fr)_240px]
                          "
                        >
                          {/* Contributions */}
                          <div className="min-w-0">
                            <p
                              className="
                                text-xs
                                font-medium
                                uppercase
                                tracking-[0.2em]
                                text-neutral-600
                              "
                            >
                              Key Contributions
                            </p>

                            <div
                              className="
                                mt-4
                                grid
                                w-full
                                min-w-0
                                gap-x-8
                                gap-y-3
                                md:grid-cols-2
                              "
                            >
                              {experience.highlights.map((highlight) => (
                                <div
                                  key={highlight}
                                  className="
                                      flex
                                      min-w-0
                                      gap-3
                                      text-sm
                                      leading-6
                                      text-neutral-500
                                    "
                                >
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />

                                  <span className="min-w-0 break-words">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Focus */}
                          <div className="min-w-0">
                            <p
                              className="
                                text-xs
                                font-medium
                                uppercase
                                tracking-[0.2em]
                                text-neutral-600
                              "
                            >
                              Focus
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {experience.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="
                                      rounded-full
                                      border
                                      border-white/[0.07]
                                      bg-white/[0.02]
                                      px-3
                                      py-1.5
                                      text-[11px]
                                      font-medium
                                      text-neutral-500
                                      transition-colors
                                      duration-300
                                      group-hover:border-white/[0.1]
                                      group-hover:text-neutral-400
                                    "
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Accent */}
                        <div className="mt-7">
                          <div className="h-px w-16 bg-gradient-to-r from-blue-400/40 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 border-t border-white/[0.06] pt-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-neutral-300">
                8+ years across mobile engineering
              </p>

              <p className="max-w-xl text-sm leading-6 text-neutral-600 sm:text-right">
                From building mobile features to owning architecture, developer
                tooling, delivery, and production reliability.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
