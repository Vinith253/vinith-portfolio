import Container from "@/src/components/ui/Container";

const links = [
  {
    label: "GitHub",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Medium",
    href: "https://medium.com/@vinith1496",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold tracking-tight">
              VS<span className="text-neutral-600">.</span>
            </p>

            <p className="mt-2 text-sm text-neutral-600">
              React Native & Mobile Engineer
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-600">© 2026 Vinith S.</p>
        </div>
      </Container>
    </footer>
  );
}
