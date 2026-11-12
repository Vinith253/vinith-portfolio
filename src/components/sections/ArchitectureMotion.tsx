"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Database,
  Layers3,
  ServerCog,
  Smartphone,
} from "lucide-react";

type ArchitectureLayer = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
};

type ArchitectureMotionProps = {
  layers: ArchitectureLayer[];
};

const icons = [
  Smartphone,
  Layers3,
  Database,
  Boxes,
  ServerCog,
];

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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function ArchitectureMotion({
  layers,
}: ArchitectureMotionProps) {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      {/* Animated architecture spine */}
      <div className="pointer-events-none absolute left-[28px] top-8 hidden h-[calc(100%-64px)] w-px overflow-hidden bg-white/10 md:block">
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-blue-400/80 via-blue-400/30 to-transparent"
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="space-y-5">
        {layers.map((layer, index) => {
          const Icon = icons[index] ?? Layers3;

          return (
            <motion.article
              key={layer.number}
              variants={cardVariants}
              className="group relative"
            >
              {/* Timeline node */}
              <motion.div
                className="absolute left-[20px] top-10 z-10 hidden h-[17px] w-[17px] items-center justify-center rounded-full border border-blue-400/40 bg-[#050505] md:flex"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" />
              </motion.div>

              <motion.div
                className="relative ml-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-7 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.03] md:ml-16 md:p-8"
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle top highlight */}
                <motion.div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-blue-400/60 via-blue-400/20 to-transparent"
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
                    duration: 0.8,
                    delay: index * 0.12 + 0.2,
                  }}
                />

                <div className="relative grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
                  {/* Left */}
                  <div>
                    <div className="flex items-start justify-between lg:block">
                      <div className="flex items-center gap-5">
                        <motion.div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-white/70"
                          whileHover={{
                            scale: 1.06,
                            rotate: -3,
                            borderColor: "rgba(96,165,250,0.35)",
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <Icon size={21} />
                        </motion.div>

                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-600">
                            {layer.number}
                          </p>

                          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                            {layer.title}
                          </h3>

                          <p className="mt-1 text-sm text-neutral-500">
                            {layer.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="max-w-3xl text-base leading-7 text-neutral-400 md:text-lg md:leading-8">
                      {layer.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {layer.technologies.map((technology, technologyIndex) => (
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
                            delay:
                              index * 0.12 +
                              technologyIndex * 0.06 +
                              0.25,
                          }}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-white/15 group-hover:text-neutral-400"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}