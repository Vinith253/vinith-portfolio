"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";

import HeroVisual from "./HeroVisual";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:vinith1496@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinith-s-b4b201138/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Vinith253",
    icon: FaGithub,
  },
  {
    label: "Medium",
    href: "https://medium.com/@vinith1496",
    icon: FaMedium,
  },
];

export default function AnimatedHeroContent() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen">
      <div className="grid min-h-screen items-center py-28 lg:grid-cols-[52%_48%]">
        {/* LEFT */}
        <div className="relative z-20 max-w-[650px]">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8 flex items-center gap-3 text-sm text-neutral-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
            </span>

            <span>Open to Senior / Lead Mobile opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="whitespace-nowrap text-6xl font-semibold leading-none tracking-[-0.055em] text-white sm:text-7xl md:text-8xl lg:text-[6rem]"
          >
            Vinith S.
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
            className="mt-7 max-w-[600px] bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-4xl font-semibold leading-[1.05] tracking-tight text-transparent md:text-5xl lg:whitespace-nowrap"
          >
            Senior Mobile Engineer
          </motion.h2>

          {/* Specialization */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-4 max-w-[500px] text-2xl font-medium leading-tight tracking-tight text-neutral-200 md:text-[2rem]"
          >
            React Native &amp;
            <br />
            Mobile Architecture
          </motion.p>

          {/* Accent */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-9 h-[3px] rounded-full bg-gradient-to-r from-violet-400 to-blue-400"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-8 max-w-[570px] text-base leading-8 text-neutral-400 md:text-lg"
          >
            8+ years building production-grade mobile applications, scalable
            architectures, developer tooling, and AI-powered engineering
            solutions.
          </motion.p>

          {/* Location + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <div className="flex items-center gap-2.5 text-sm text-neutral-400">
              <MapPin className="h-4 w-4 text-neutral-500" />
              <span>Bengaluru, India</span>
            </div>

            <span className="hidden h-6 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              <p>Let&apos;s Connect</p>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative flex min-w-0 items-center justify-center lg:pl-4">
          <div className="w-full max-w-[520px]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-600 md:flex"
      >
        <span>Scroll</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-gradient-to-b from-neutral-600 to-transparent"
        />
      </motion.div>
    </div>
  );
}
