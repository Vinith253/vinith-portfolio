import {
  ArrowUpRight,
  BookOpen,
  PenLine,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";
import SectionAtmosphere from "../ui/SectionAtmosphere";

const MEDIUM_PROFILE =
  "https://medium.com/@shankarmadeshvaran";

const articles = [
  {
    number: "01",
    title:
      "React Native New Architecture: The Complete Performance Optimization Guide",
    category: "React Native",
    description:
      "A practical deep dive into performance optimization across Fabric, JSI, rendering, startup, memory, and application architecture.",
    topics: ["Fabric", "JSI", "Performance", "Architecture"],
    featured: true,
  },
  {
    number: "02",
    title:
      "Production Debugging in React Native — From Crash to Root Cause",
    category: "Production",
    description:
      "A practical approach to debugging production mobile issues, tracing failures, understanding logs, and identifying root causes.",
    topics: ["Debugging", "Crash Analysis", "Logs", "Production"],
    featured: true,
  },
  {
    number: "03",
    title:
      "React Native Startup Performance: From App Launch to First Screen",
    category: "Performance",
    description:
      "Understanding what happens between launching a React Native application and rendering the first meaningful screen.",
    topics: ["Startup", "Rendering", "Profiling", "Optimization"],
    featured: true,
  },
  {
    number: "04",
    title:
      "Server-Driven UI in React Native — Building Dynamic Screens Without App Releases",
    category: "Architecture",
    description:
      "Exploring how server-driven UI can make mobile products more flexible while maintaining a strong application architecture.",
    topics: ["SDUI", "Architecture", "APIs", "Scalability"],
    featured: true,
  },
  {
    number: "05",
    title:
      "What 8 Years in Software Development Taught Me About People",
    category: "Engineering Life",
    description:
      "Lessons from years of working with developers, teams, deadlines, systems, and the people behind the software.",
    topics: ["People", "Teams", "Leadership", "Engineering"],
    featured: false,
  },
  {
    number: "06",
    title:
      "A Developer's Life Outside the Screen",
    category: "Personal",
    description:
      "A reflection on balancing software engineering with life, learning, experiences, and the world outside the screen.",
    topics: ["Life", "Growth", "Balance", "Reflection"],
    featured: false,
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
    >
      <SectionAtmosphere variant="blue" />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Writing"
            title="Ideas worth sharing."
            description="I write about React Native, mobile architecture, performance, production engineering, AI, and lessons learned along the way."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mb-8 flex items-start gap-3 text-sm text-neutral-600 sm:mb-10 sm:items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02]">
              <PenLine
                size={14}
                className="text-blue-300/60"
              />
            </div>

            <span>
              Technical writing for developers, engineers, and builders.
            </span>
          </div>
        </ScrollReveal>

        <div className="grid items-stretch gap-4 md:grid-cols-2">
          {articles.map((article, index) => (
            <ScrollReveal
              key={article.title}
              delay={index * 0.06}
              className="h-full"
            >
              <a
                href={MEDIUM_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${article.title} on Medium`}
                className={`group relative flex h-full min-h-[370px] flex-col overflow-hidden rounded-2xl border p-6 outline-none transition-all duration-500 hover:-translate-y-1 focus-visible:-translate-y-1 sm:min-h-[390px] sm:p-7 ${
                  article.featured
                    ? "border-blue-400/[0.10] bg-blue-500/[0.012] hover:border-blue-400/[0.18] hover:bg-blue-500/[0.02] focus-visible:border-blue-400/[0.22]"
                    : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.025] focus-visible:border-white/[0.18]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${
                    article.featured
                      ? "bg-blue-500/[0.07]"
                      : "bg-violet-500/[0.045]"
                  }`}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                      article.featured
                        ? "border-blue-400/[0.12] bg-blue-400/[0.04]"
                        : "border-white/[0.08] bg-white/[0.025]"
                    }`}
                  >
                    <BookOpen
                      size={17}
                      className={
                        article.featured
                          ? "text-blue-300/80"
                          : "text-neutral-400/70"
                      }
                    />
                  </div>

                  <span className="text-xs tracking-[0.2em] text-neutral-700">
                    {article.number}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col pt-6 sm:pt-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-blue-300/50 sm:text-xs">
                      {article.category}
                    </p>

                    {article.featured && (
                      <span className="rounded-full border border-blue-400/[0.10] bg-blue-400/[0.04] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-blue-300/50">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-7 tracking-tight text-white sm:text-xl sm:leading-8">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-white/[0.06] pt-5">
                      <div className="flex items-center gap-2">
                        <Sparkles
                          size={13}
                          className="text-blue-300/50"
                        />

                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                          Topics
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {article.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] text-neutral-600"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-7 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white">
                  <PenLine size={15} />
                  <span>Read on Medium</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 via-violet-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-neutral-700">
              More articles covering mobile architecture, performance, and
              engineering.
            </p>

            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] px-5 py-2.5 text-sm text-neutral-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            >
              View all articles
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}