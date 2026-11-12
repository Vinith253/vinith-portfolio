"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        /*
         * Creates an activation zone around the upper-middle
         * portion of the viewport.
         *
         * This is much more reliable for tall sections such
         * as Articles and Projects.
         */
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.05, 0.1, 0.2],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#050505]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden items-center rounded-full border border-white/[0.08] bg-black/40 p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`relative rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {/* Active background */}
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.09] shadow-[0_0_25px_rgba(255,255,255,0.04)]" />
                )}

                <span className="relative">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Contact */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:inline-flex"
        >
          Resume
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
