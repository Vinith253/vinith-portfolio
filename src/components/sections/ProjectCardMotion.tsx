"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
};

type ProjectCardMotionProps = {
  projects: Project[];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectCardMotion({
  projects,
}: ProjectCardMotionProps) {
  return (
    <motion.div
      className="grid gap-5 md:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.number}
          project={project}
        />
      ))}
    </motion.div>
  );
}

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  return (
    <motion.article
      variants={cardVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);

        setMousePosition({
          x: 50,
          y: 50,
        });
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#070707]"
    >
      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        animate={{
          background: isHovered
            ? `radial-gradient(
                300px circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(120, 100, 255, 0.10),
                transparent 70%
              )`
            : "radial-gradient(circle at 50% 50%, transparent, transparent)",
        }}
        transition={{
          duration: 0.15,
        }}
      />

      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent"
        animate={{
          borderColor: isHovered
            ? "rgba(255,255,255,0.16)"
            : "rgba(255,255,255,0)",
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Top accent */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-violet-400/70 via-blue-400/40 to-transparent"
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
        }}
      />

      {/* Project number */}
      <div className="absolute right-7 top-7">
        <motion.span
          animate={{
            color: isHovered
              ? "rgba(255,255,255,0.65)"
              : "rgba(255,255,255,0.22)",
          }}
          className="text-xs tracking-[0.25em]"
        >
          {project.number}
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col p-7 md:p-8">
        {/* Icon */}
        <motion.div
          animate={{
            y: isHovered ? -2 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-neutral-400"
        >
          {project.featured ? (
            <Sparkles size={19} />
          ) : (
            <Code2 size={19} />
          )}
        </motion.div>

        {/* Category */}
        <p className="mt-12 text-xs font-medium uppercase tracking-[0.25em] text-blue-400/70">
          {project.category}
        </p>

        {/* Title */}
        <motion.h3
          animate={{
            x: isHovered ? 2 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 md:text-base md:leading-8">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map(
            (technology, index) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  y: 8,
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
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-white/15 group-hover:text-neutral-400"
              >
                {technology}
              </motion.span>
            ),
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-10">
          <motion.div
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white"
          >
            <span>Explore project</span>

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom glow */}
      <motion.div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full bg-violet-500/[0.04] blur-3xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{
          duration: 0.5,
        }}
      />
    </motion.article>
  );
}