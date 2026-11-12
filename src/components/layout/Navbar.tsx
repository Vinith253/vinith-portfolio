"use client";

import { useEffect, useState } from "react";
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

const NAVBAR_HEIGHT = 72;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
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
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const target = document.querySelector(
      href
    ) as HTMLElement | null;

    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: Math.max(
        0,
        targetTop - NAVBAR_HEIGHT - 16
      ),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "/");
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-8 ${
          scrolled
            ? "border-b border-white/[0.06]"
            : "border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Back to top"
          className="group text-xl font-semibold tracking-tight text-white"
        >
          VS
          <span className="text-violet-400 transition-colors duration-300 group-hover:text-blue-400">
            .
          </span>
        </button>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/[0.08] bg-white/[0.015] p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleNavClick(event, item.href)
                }
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.09] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:inline-flex"
          >
            Resume

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}