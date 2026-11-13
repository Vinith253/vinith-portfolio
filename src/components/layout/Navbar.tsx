"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
const ACTIVE_OFFSET = 140;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + ACTIVE_OFFSET;

      let currentSection = "about";

      for (const item of navItems) {
        const section = document.querySelector(
          item.href
        ) as HTMLElement | null;

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
      setScrolled(window.scrollY > 24);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
      target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(
        0,
        targetTop - NAVBAR_HEIGHT - 16
      ),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "/");
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-5 transition-all duration-500 sm:px-6 md:px-8 ${
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

        {/* Desktop navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/[0.08] bg-white/[0.015] p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

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
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.09]"
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Desktop resume */}
        <div className="hidden items-center md:flex">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Resume
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-300"
          >
            Resume
            <ArrowUpRight size={13} />
          </a>

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((value) => !value)
            }
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-300"
          >
            {mobileMenuOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[72px] md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="border-b border-white/[0.08] bg-[#050505]/95 px-5 py-5 backdrop-blur-2xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const sectionId =
                item.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(event, item.href)
                  }
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/[0.07] text-white"
                      : "text-neutral-500 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}