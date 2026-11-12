import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import ScrollReveal from "@/src/components/ui/ScrollReveal";
import SectionAtmosphere from "../ui/SectionAtmosphere";

const EMAIL = "your-email@example.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.08] py-32"
    >
      <SectionAtmosphere variant="violet" />
      <Container>
        <ScrollReveal>
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.02] px-7 py-16 md:px-14 md:py-20">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-3xl transition-all duration-1000 group-hover:bg-blue-500/[0.09]" />

            {/* Secondary glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-3xl" />

            <div className="relative mx-auto max-w-4xl text-center">
              {/* Icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                <MessageCircle
                  size={20}
                  className="text-blue-300/80"
                />
              </div>

              {/* Eyebrow */}
              <p className="mt-7 text-xs font-medium uppercase tracking-[0.3em] text-blue-300/50">
                Contact
              </p>

              {/* Heading */}
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                Let&apos;s build something
                <br />
                <span className="text-neutral-500">
                  meaningful.
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
                Whether it&apos;s a mobile product, architecture challenge,
                engineering problem, or an opportunity to build something
                ambitious — I&apos;d love to hear about it.
              </p>

              {/* CTA */}
              <div className="mt-10 flex justify-center">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group/cta inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold !text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                >
                  <Mail
                    size={16}
                    className="text-black"
                  />

                  <span className="!text-black">
                    Get in touch
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-black transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  />
                </a>
              </div>

              {/* Availability */}
              <div className="mt-7 flex items-center justify-center gap-2 text-xs text-neutral-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/70" />

                <span>
                  Open to interesting opportunities
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}