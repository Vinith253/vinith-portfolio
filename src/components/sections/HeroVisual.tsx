"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { MouseEvent, useEffect } from "react";

const nodes = [
  {
    title: "AI",
    subtitle: "LLM Engineering",
    icon: BrainCircuit,
    position: "left-1/2 top-[3%] -translate-x-1/2",
  },
  {
    title: "React Native",
    subtitle: "Cross-platform",
    icon: Smartphone,
    position: "left-0 top-1/2 -translate-y-1/2",
  },
  {
    title: "Native",
    subtitle: "Swift · iOS",
    icon: Code2,
    position: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    title: "Architecture",
    subtitle: "Scalable Systems",
    icon: Layers3,
    position: "bottom-[3%] left-1/2 -translate-x-1/2",
  },
];

const nodeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 10,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroVisual() {
  /*
   * Mouse position
   *
   * We intentionally keep this very small.
   * The entire architecture network only moves around 8px.
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    /*
     * Normalize cursor position between -1 and 1.
     */
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    /*
     * Maximum movement = 8px.
     */
    mouseX.set(normalizedX * 8);
    mouseY.set(normalizedY * 8);
  };

  return (
    <div
      className="relative hidden h-[520px] w-full max-w-[560px] lg:block"
      onMouseMove={handleMouseMove}
    >
      {/* Entire architecture network moves subtly */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: springX,
          y: springY,
        }}
      >
        {/* Main ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-3xl" />

        {/* Secondary glow */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.035] blur-2xl" />

        {/* Connection system */}
        <div className="pointer-events-none absolute inset-0">
          {/* Top connection */}
          <div className="absolute left-1/2 top-[17%] h-[28%] w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/30 via-blue-400/10 to-white/5" />

          {/* Left connection */}
          <div className="absolute left-[24%] top-1/2 h-px w-[26%] -translate-y-1/2 bg-gradient-to-r from-white/5 via-blue-400/20 to-blue-400/10" />

          {/* Right connection */}
          <div className="absolute right-[24%] top-1/2 h-px w-[26%] -translate-y-1/2 bg-gradient-to-l from-white/5 via-blue-400/20 to-blue-400/10" />

          {/* Bottom connection */}
          <div className="absolute bottom-[17%] left-1/2 h-[28%] w-px -translate-x-1/2 bg-gradient-to-t from-violet-400/30 via-violet-400/10 to-white/5" />
        </div>

        {/* Center Engineer */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/20 bg-[#080b10]/90 backdrop-blur-xl"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Outer pulse */}
          <motion.div
            className="absolute inset-[-12px] rounded-full border border-blue-400/[0.08]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-[-28px] rounded-full border border-blue-400/[0.035]"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex flex-col items-center gap-2">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles
                size={25}
                className="text-blue-300 drop-shadow-[0_0_12px_rgba(96,165,250,0.65)]"
              />
            </motion.div>

            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
              Engineer
            </span>
          </div>
        </motion.div>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.title}
              className={`absolute ${node.position} z-10`}
              variants={nodeVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.45 + index * 0.12,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group w-44 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-400/[0.035] hover:shadow-[0_15px_50px_rgba(59,130,246,0.08)]"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.05]">
                  <Icon
                    size={17}
                    className="text-white/65 transition-colors duration-300 group-hover:text-blue-300"
                  />
                </div>

                <p className="text-sm font-medium text-white/90">
                  {node.title}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  {node.subtitle}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}