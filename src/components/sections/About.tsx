import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const highlights = [
  { value: "8+", label: "Years Experience" },
  { value: "RN", label: "Primary Expertise" },
  { value: "iOS", label: "Native Development" },
  { value: "AI", label: "Engineering Focus" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-32"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="About Me"
            title="Building beyond the screen."
            description="I build mobile products, engineering systems, and developer experiences with a strong focus on scalability, performance, and maintainability."
          />
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-lg leading-8 text-neutral-400">
              <p>
                I&apos;m a React Native and Mobile Engineer with 8+
                years of experience building production
                applications across the mobile ecosystem.
              </p>

              <p>
                My work spans React Native, TypeScript, native iOS
                development, mobile architecture, performance
                optimization, CI/CD, and production engineering.
              </p>

              <p>
                Over the years, my focus has evolved from simply
                building features to owning systems end-to-end —
                from architecture and development to deployment,
                observability, and production support.
              </p>

              <p>
                More recently, I&apos;ve been exploring how AI and
                LLM-powered tooling can improve the way software
                teams build, review, test, and maintain
                applications.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="bg-[#050505] p-8 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <p className="text-4xl font-semibold tracking-tight text-white">
                    {highlight.value}
                  </p>

                  <p className="mt-2 text-sm text-neutral-500">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}