"use client";

import {
  ArrowUpRight,
  Heart,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinith-s-b4b201138/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Vinith253",
    icon: FaGithub,
  },
  {
    label: "Medium",
    href: "https://medium.com/@vinith1496",
    icon: FaMedium,
  },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:py-20">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="group text-2xl font-semibold tracking-tight text-white"
            >
              VS
              <span className="text-violet-400 transition-colors duration-300 group-hover:text-blue-400">
                .
              </span>
            </button>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
              Senior Mobile Engineer focused on React Native,
              mobile architecture, native development, and
              AI-powered engineering.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-600">
              <MapPin
                size={13}
                className="text-blue-300/50"
              />
              <span>Bengaluru, India</span>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.015] text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              Navigate
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Focus */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
              Focus
            </p>

            <div className="mt-5 space-y-3 text-sm text-neutral-500">
              <p>React Native</p>
              <p>Mobile Architecture</p>
              <p>Native iOS</p>
              <p>AI Engineering</p>
              <p>Developer Tooling</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-6 text-xs text-neutral-700 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Vinith S. All rights
            reserved.
          </p>

          {/* <div className="flex items-center gap-1.5">
            <span>Built with</span>

            <span className="text-neutral-500">
              Next.js
            </span>

            <span>and</span>

            <span className="text-neutral-500">
              React
            </span>

            <Heart
              size={12}
              className="mx-1 text-violet-400/50"
              fill="currentColor"
            />
          </div> */}

          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-2 self-start transition-colors duration-300 hover:text-neutral-400 md:self-auto"
          >
            Back to top

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}