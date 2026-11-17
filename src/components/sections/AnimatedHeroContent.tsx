"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-start justify-center py-24 sm:py-28 lg:py-32">
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400/80" />

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Available for opportunities
        </span>
      </motion.div>

      <motion.p
        initial={false}
        animate={{ opacity: 1 }}
        className="
          mt-6
          whitespace-nowrap
          text-6xl
          font-semibold
          leading-none
          tracking-[-0.055em]
          text-white
          sm:text-7xl
          md:text-8xl
          lg:text-[6rem]
        "
      >
        Vinith S.
      </motion.p>

      <motion.h1
        initial={false}
        animate={{ opacity: 1 }}
        className="
          mt-5
          max-w-[700px]
          bg-gradient-to-r
          from-violet-400
          via-purple-400
          to-blue-400
          bg-clip-text
          text-4xl
          font-semibold
          leading-[1.05]
          tracking-tight
          text-transparent
          sm:text-5xl
          lg:text-6xl
        "
      >
        Senior Mobile Engineer
      </motion.h1>

      <motion.p
        initial={false}
        animate={{ opacity: 1 }}
        className="mt-4 text-base font-medium text-neutral-300 sm:text-lg"
      >
        React Native &amp; Mobile Architecture
      </motion.p>

      <motion.p
        initial={false}
        animate={{ opacity: 1 }}
        className="
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-neutral-400
          sm:text-lg
          sm:leading-8
        "
      >
        8+ years building production-grade mobile applications,
        scalable architectures, developer tooling, and
        AI-powered engineering solutions.
      </motion.p>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
      >
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <MapPin
            size={15}
            className="text-blue-300/60"
          />

          <span>Bengaluru, India</span>
        </div>

        <div className="hidden h-4 w-px bg-white/[0.08] sm:block" />

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  text-neutral-500
                  transition-colors
                  duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
      >
        <a
          href="#projects"
          className="
            group
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-6
            py-3.5
            text-sm
            font-semibold
            !text-black
            transition-colors
            duration-300
            hover:bg-neutral-100
            sm:w-auto
          "
        >
          View My Work

          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <a
          href="#contact"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.1]
            bg-white/[0.02]
            px-6
            py-3.5
            text-sm
            font-medium
            text-neutral-300
            transition-colors
            duration-300
            hover:border-white/[0.18]
            hover:bg-white/[0.05]
            hover:text-white
            sm:w-auto
          "
        >
          Let&apos;s Connect
        </a>
      </motion.div>
    </div>
  );
}