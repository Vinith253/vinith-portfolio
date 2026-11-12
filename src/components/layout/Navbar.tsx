import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          VS<span className="text-neutral-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-full border border-white/10 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-black"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}