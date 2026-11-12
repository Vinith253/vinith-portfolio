"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: {
    number: string;
    title: string;
    description: string;
    technologies: string[];
    href?: string;
    github?: string;
    featured?: boolean;
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.045]">
        {/* Mouse-follow style glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top row */}
        <div className="relative flex items-start justify-between p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08]">
            <span className="text-sm font-medium text-neutral-400 transition-colors duration-300 group-hover:text-white">
              {project.number}
            </span>
          </div>

          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className="text-xs tracking-[0.2em] text-neutral-600"
          >
            PROJECT
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative flex h-[calc(100%-90px)] flex-col px-7 pb-7">
          <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 transition-colors duration-500 group-hover:text-neutral-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-neutral-500 transition-all duration-300 group-hover:border-white/15 group-hover:text-neutral-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between pt-10">
            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                View project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                />
              </Link>
            ) : (
              <span className="text-sm text-neutral-600">Coming soon</span>
            )}

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={17} />{" "}
              </Link>
            )}
          </div>
        </div>

        {/* Bottom interaction line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ width: "0%", opacity: 0 }}
          whileHover={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
        />
      </div>
    </motion.article>
  );
}
