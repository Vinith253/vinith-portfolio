"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  href?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  category,
  technologies,
  href = "#",
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-600">
            {category}
          </span>

          <Link
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.05] group-hover:text-blue-300"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Title */}
        <h3 className="mt-12 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-white/10 group-hover:text-neutral-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border highlight */}
      <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400/60 via-violet-400/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}