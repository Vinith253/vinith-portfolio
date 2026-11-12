"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[-1] hidden h-96 w-96 rounded-full bg-blue-500/[0.035] blur-3xl md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}