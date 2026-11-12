import {
  ArrowDown,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

import HeroVisual from "@/src/components/sections/HeroVisual";
import AnimatedHeroContent from "@/src/components/sections/AnimatedHeroContent";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient hero glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl" />

      <Container className="relative pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedHeroContent />

          <HeroVisual />
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-neutral-600 md:flex">
        <ArrowDown size={16} />

        <span className="text-xs uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}