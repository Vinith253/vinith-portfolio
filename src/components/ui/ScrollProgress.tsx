"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}