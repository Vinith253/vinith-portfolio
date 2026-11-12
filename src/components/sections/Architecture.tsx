import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";
import ArchitectureMotion from "@/src/components/sections/ArchitectureMotion";
import SectionAtmosphere from "../ui/SectionAtmosphere";

const architectureLayers = [
  {
    number: "01",
    title: "Experience",
    subtitle: "Mobile UI",
    description:
      "Composable interfaces built around reusable components, design systems, accessibility, and responsive interactions.",
    technologies: [
      "React Native",
      "TypeScript",
      "Reanimated",
      "Design Systems",
    ],
  },
  {
    number: "02",
    title: "Application",
    subtitle: "State & Logic",
    description:
      "Predictable application state, feature-based architecture, and business logic separated from presentation.",
    technologies: [
      "Redux Toolkit",
      "Zustand",
      "Feature Modules",
      "Custom Hooks",
    ],
  },
  {
    number: "03",
    title: "Data",
    subtitle: "Local & Remote",
    description:
      "Reliable data flows designed for real-world mobile conditions, including offline usage, caching, synchronization, and persistence.",
    technologies: [
      "SQLite",
      "Drizzle ORM",
      "MMKV",
      "API Layer",
    ],
  },
  {
    number: "04",
    title: "Platform",
    subtitle: "Native Capabilities",
    description:
      "Native integrations that extend React Native with platform-specific capabilities, performance optimizations, and device APIs.",
    technologies: [
      "Swift",
      "Objective-C",
      "TurboModules",
      "JSI",
    ],
  },
  {
    number: "05",
    title: "Infrastructure",
    subtitle: "Delivery & Reliability",
    description:
      "Engineering infrastructure focused on reliable releases, automated quality checks, observability, and production stability.",
    technologies: [
      "Azure DevOps",
      "CI/CD",
      "Sentry",
      "SonarQube",
    ],
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-t border-white/10 py-32"
    >
        <SectionAtmosphere variant="violet" />
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Architecture"
          title="Systems that scale beyond the screen."
          description="I approach mobile engineering as a system — from user experience and application logic to data, native capabilities, infrastructure, and production reliability."
        />

        <ArchitectureMotion layers={architectureLayers} />
      </Container>
    </section>
  );
}