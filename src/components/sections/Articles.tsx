import {
  ArrowUpRight,
  BookOpen,
  PenLine,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

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
  },
  {
    number: "02",
    title:
      "Production Debugging in React Native — From Crash to Root Cause",
    category: "Production",
    description:
      "A practical approach to debugging production mobile issues, tracing failures, understanding logs, and identifying root causes.",
  },
  {
    number: "03",
    title:
      "React Native Startup Performance: From App Launch to First Screen",
    category: "Performance",
    description:
      "Understanding what happens between launching a React Native application and rendering the first meaningful screen.",
  },
  {
    number: "04",
    title:
      "Server-Driven UI in React Native — Building Dynamic Screens Without App Releases",
    category: "Architecture",
    description:
      "Exploring how server-driven UI can make mobile products more flexible while maintaining a strong application architecture.",
  },
  {
    number: "05",
    title:
      "What 8 Years in Software Development Taught Me About People",
    category: "Engineering Life",
    description:
      "Lessons from years of working with developers, teams, deadlines, systems, and the people behind the software.",
  },
  {
    number: "06",
    title:
      "A Developer's Life Outside the Screen",
    category: "Personal",
    description:
      "A reflection on balancing software engineering with life, learning, experiences, and the world outside the screen.",
  },
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="scroll-mt-24 border-t border-white/[0.08] py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Writing"
            title="Ideas worth sharing."
            description="I write about React Native, mobile architecture, performance, production engineering, AI, and lessons learned along the way."
          />
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
                className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.025]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.035] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                    <BookOpen
                      size={17}
                      className="text-blue-300/70"
                    />
                  </div>

                  <span className="text-xs tracking-[0.2em] text-neutral-700">
                    {article.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1 pt-7">
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-300/50">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-8 tracking-tight text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {article.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="relative mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-sm text-neutral-500 transition-colors group-hover:text-white">
                  <PenLine size={15} />

                  <span>Read on Medium</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400/70 via-violet-400/30 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* View all */}
        <ScrollReveal delay={0.25}>
          <div className="mt-10">
            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-2.5 text-sm text-neutral-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
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