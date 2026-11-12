"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import type {
  MouseEvent,
  ReactNode,
} from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function Magnetic({
  children,
  className = "",
  strength = 8,
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    x.set(
      (mouseX / rect.width - 0.5) * strength,
    );

    y.set(
      (mouseY / rect.height - 0.5) * strength,
    );
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}