import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const highlights = [
  {
    value: "8+",
    label: "Years Experience",
    description: "Building production mobile software",
  },
  {
    value: "RN",
    label: "Core Expertise",
    description: "React Native & TypeScript",
  },
  {
    value: "iOS",
    label: "Native Development",
    description: "Swift & Objective-C",
  },
  {
    value: "AI",
    label: "Engineering Focus",
    description: "LLMs & developer tooling",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-32"
    >
      {/* Subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-500/[0.025] blur-[120px]"
      />

      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="About Me"
            title="Building beyond the screen."
            description="I build mobile products, engineering systems, and developer experiences with a strong focus on scalability, performance, and maintainability."
          />
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Story */}
          <ScrollReveal delay={0.1}>
            <div className="relative">
              {/* Vertical accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-violet-400/40 via-blue-400/10 to-transparent"
              />

              <div className="space-y-7 pl-7 text-lg leading-8 text-neutral-400">
                <p>
                  I&apos;m a React Native and Mobile Engineer with
                  <span className="text-neutral-200">
                    {" "}
                    8+ years of experience
                  </span>{" "}
                  building production applications across the
                  mobile ecosystem.
                </p>

                <p>
                  My work spans React Native, TypeScript, native iOS
                  development, mobile architecture, performance
                  optimization, CI/CD, and production engineering.
                </p>

                <p>
                  Over time, my focus has evolved from simply
                  delivering features to
                  <span className="text-neutral-200">
                    {" "}
                    owning systems end-to-end
                  </span>{" "}
                  — from architecture and implementation to
                  deployment, observability, and production support.
                </p>

                <p>
                  I&apos;m also exploring how
                  <span className="text-neutral-200">
                    {" "}
                    AI and LLM-powered engineering tools
                  </span>{" "}
                  can improve the way teams build, review, test,
                  and maintain software.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.label}
                  className={`group relative min-h-[190px] bg-[#050505] p-7 transition-all duration-500 hover:bg-white/[0.035] ${
                    index < 2
                      ? "border-b border-white/[0.08]"
                      : ""
                  } ${
                    index % 2 === 0
                      ? "border-r border-white/[0.08]"
                      : ""
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative">
                    <p className="text-4xl font-semibold tracking-[-0.04em] text-white transition-transform duration-500 group-hover:-translate-y-1">
                      {highlight.value}
                    </p>

                    <p className="mt-3 text-sm font-medium text-neutral-300">
                      {highlight.label}
                    </p>

                    <p className="mt-2 max-w-[150px] text-xs leading-5 text-neutral-600 transition-colors duration-300 group-hover:text-neutral-500">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="absolute bottom-5 left-7 h-px w-6 bg-gradient-to-r from-violet-400/50 to-transparent transition-all duration-500 group-hover:w-12" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}