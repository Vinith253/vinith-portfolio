"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  children?: ReactNode;
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  children,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMouse({
      x,
      y,
    });
  };

  const handleMouseLeave = () => {
    setMouse({
      x: 50,
      y: 50,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            420px circle at ${mouse.x}% ${mouse.y}%,
            rgba(96,165,250,0.09),
            transparent 45%
          )`,
        }}
      />

      {/* Top accent */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            rgba(96,165,250,0.8) ${Math.max(
              mouse.x - 20,
              0
            )}%,
            rgba(167,139,250,0.5) ${Math.min(
              mouse.x + 20,
              100
            )}%,
            transparent 100%
          )`,
        }}
      />

      <div className="relative flex h-full min-h-[420px] flex-col p-7 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span className="text-xs tracking-[0.2em] text-neutral-700 transition-colors duration-300 group-hover:text-blue-300/50">
            {number}
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-blue-400/[0.06]">
            <ArrowUpRight
              size={17}
              className="text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
            />
          </div>
        </div>

        {/* Optional visual */}
        {children && (
          <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015]">
            {children}
          </div>
        )}

        {/* Content */}
        <div className="mt-auto pt-10">
          <h3 className="text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-0.5">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-500 transition-all duration-300 group-hover:border-white/[0.1] group-hover:text-neutral-400"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* View project */}
          <div className="mt-7 flex items-center gap-2 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-300">
            <span>Explore project</span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}