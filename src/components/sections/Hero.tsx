import Container from "@/src/components/ui/Container";
import AnimatedHeroContent from "./AnimatedHeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05070d]"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[35%] top-[-20%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.055] blur-[150px]" />

        <div className="absolute right-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.045] blur-[150px]" />

        <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[600px] rounded-full bg-blue-600/[0.035] blur-[150px]" />
      </div>

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(5,7,13,0.2)_45%,rgba(5,7,13,0.8)_100%)]"
      />

      <Container className="relative z-10">
        <AnimatedHeroContent />
      </Container>
    </section>
  );
}