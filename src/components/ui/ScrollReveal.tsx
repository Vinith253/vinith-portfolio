"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`w-full min-w-0 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`w-full min-w-0 ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}