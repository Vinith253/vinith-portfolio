import {
  ArrowUpRight,
  BookOpen,
  PenLine,
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
    featured: true,
  },
  {
    number: "02",
    title:
      "Production Debugging in React Native — From Crash to Root Cause",
    category: "Production",
    description:
      "A practical approach to debugging production mobile issues, tracing failures, understanding logs, and identifying root causes.",
    featured: true,
  },
  {
    number: "03",
    title:
      "React Native Startup Performance: From App Launch to First Screen",
    category: "Performance",
    description:
      "Understanding what happens between launching a React Native application and rendering the first meaningful screen.",
    featured: true,
  },
  {
    number: "04",
    title:
      "Server-Driven UI in React Native — Building Dynamic Screens Without App Releases",
    category: "Architecture",
    description:
      "Exploring how server-driven UI can make mobile products more flexible while maintaining a strong application architecture.",
    featured: true,
  },
  {
    number: "05",
    title:
      "What 8 Years in Software Development Taught Me About People",
    category: "Engineering Life",
    description:
      "Lessons from years of working with developers, teams, deadlines, systems, and the people behind the software.",
    featured: false,
  },
  {
    number: "06",
    title:
      "A Developer's Life Outside the Screen",
    category: "Personal",
    description:
      "A reflection on balancing software engineering with life, learning, experiences, and the world outside the screen.",
    featured: false,
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="relative overflow-hidden border-t border-white/[0.08] py-32"
    >
      <SectionAtmosphere variant="blue" />

      <Container className="relative">
        {/* Heading */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="Writing"
            title="Ideas worth sharing."
            description="I write about React Native, mobile architecture, performance, production engineering, AI, and lessons learned along the way."
          />
        </ScrollReveal>

        {/* Publication signal */}
        <ScrollReveal delay={0.08}>
          <div className="mb-10 flex items-center gap-3 text-sm text-neutral-600">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02]">
              <PenLine
                size={14}
                className="text-blue-300/60"
              />
            </div>

            <span>
              Technical writing for developers, engineers, and
              builders.
            </span>
          </div>
        </ScrollReveal>

        {/* Articles */}
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
                className={`group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                  article.featured
                    ? "border-blue-400/[0.10] bg-blue-500/[0.012] hover:border-blue-400/[0.18] hover:bg-blue-500/[0.02]"
                    : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.025]"
                }`}
              >
                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                    article.featured
                      ? "bg-blue-500/[0.07]"
                      : "bg-violet-500/[0.045]"
                  }`}
                />

                {/* Header */}
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

                {/* Content */}
                <div className="relative flex-1 pt-7">
                  <div className="flex items-center gap-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-blue-300/50">
                      {article.category}
                    </p>

                    {article.featured && (
                      <span className="rounded-full border border-blue-400/[0.10] bg-blue-400/[0.04] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-blue-300/50">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-8 tracking-tight text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {article.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-sm text-neutral-500 transition-colors group-hover:text-white">
                  <PenLine size={15} />

                  <span>Read on Medium</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 via-violet-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* View all */}
        <ScrollReveal delay={0.25}>
          <div className="mt-10 flex items-center justify-between gap-6">
            <p className="text-sm text-neutral-700">
              More articles covering mobile architecture,
              performance, and engineering.
            </p>

            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] px-5 py-2.5 text-sm text-neutral-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
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