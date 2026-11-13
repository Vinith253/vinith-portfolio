import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";

import Container from "@/src/components/ui/Container";
import ScrollReveal from "@/src/components/ui/ScrollReveal";
import SectionAtmosphere from "../ui/SectionAtmosphere";

const EMAIL = "your-email@example.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR_PROFILE",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: FaGithub,
  },
  {
    label: "Medium",
    href: "https://medium.com/@shankarmadeshvaran",
    icon: FaMedium,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
    >
      <SectionAtmosphere variant="violet" />

      <Container className="relative">
        <ScrollReveal>
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.02] px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/[0.055] blur-3xl transition-all duration-1000 group-hover:bg-blue-500/[0.08] sm:h-80 sm:w-80"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-3xl"
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] sm:h-12 sm:w-12">
                <MessageCircle
                  size={20}
                  className="text-blue-300/80"
                />
              </div>

              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-300/50 sm:mt-7 sm:text-xs sm:tracking-[0.3em]">
                Contact
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building something
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ambitious?
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-neutral-400 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
                Whether you&apos;re building a mobile product, solving an
                architecture challenge, improving an engineering system, or
                exploring AI-powered development — let&apos;s talk.
              </p>

              <div className="mt-8 flex justify-center sm:mt-10">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group/cta inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold !text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:bg-neutral-100 sm:px-7"
                >
                  <Mail size={16} className="text-black" />

                  <span className="!text-black">
                    Get in touch
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-black transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="mt-7 flex items-center justify-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center justify-center gap-2 text-xs text-neutral-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/70" />
                <span>Open to interesting opportunities</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}