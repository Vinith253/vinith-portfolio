"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Magnetic from "@/src/components/ui/Magnetic";

const technologies = [
  "React Native",
  "React",
  "JavaScript",
  "TypeScript",
  "iOS",
  "Mobile Architecture",
  "AI",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function AnimatedHeroContent() {
  return (
    <motion.div
      className="max-w-4xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Availability */}
      <motion.div
        variants={itemVariants}
        className="mb-8 flex items-center gap-3"
      >
        <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] animate-pulse" />

        <span className="text-sm text-neutral-400">
          Open to Senior / Lead Mobile opportunities
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-7xl lg:text-8xl"
      >
        Hi, I&apos;m{" "}
        <span className="accent-text">
          Vinith.
        </span>
      </motion.h1>

      {/* Role */}
      <motion.h2
        variants={itemVariants}
        className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-neutral-300 md:text-5xl"
      >
        React Native & Mobile Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl"
      >
        8+ years building production-grade mobile
        applications, scalable architectures, developer
        tooling, and AI-powered engineering solutions.
      </motion.p>

      {/* Technologies */}
      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-wrap gap-3"
      >
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.04]"
          >
            {technology}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={itemVariants}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Magnetic strength={6}>
          <Link
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium !text-black transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100"
          >
            <span className="!text-black">
              View My Work
            </span>

            <ArrowUpRight
              size={16}
              className="!text-black transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Magnetic>

        <Magnetic strength={6}>
          <Link
            href="#contact"
            className="flex items-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.04]"
          >
            Let&apos;s Connect
          </Link>
        </Magnetic>
      </motion.div>
    </motion.div>
  );
}