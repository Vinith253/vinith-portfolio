"use client";

import { motion } from "framer-motion";

type SectionAtmosphereProps = {
  variant?: "blue" | "violet" | "neutral";
};

const variants = {
  blue: {
    background:
      "radial-gradient(circle, rgba(59,130,246,0.055) 0%, rgba(59,130,246,0.02) 35%, transparent 70%)",
  },
  violet: {
    background:
      "radial-gradient(circle, rgba(139,92,246,0.055) 0%, rgba(139,92,246,0.02) 35%, transparent 70%)",
  },
  neutral: {
    background:
      "radial-gradient(circle, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 35%, transparent 70%)",
  },
};

export default function SectionAtmosphere({
  variant = "blue",
}: SectionAtmosphereProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-[100px]"
      style={variants[variant]}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}