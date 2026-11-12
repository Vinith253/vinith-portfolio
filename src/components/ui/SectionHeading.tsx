import Reveal from "@/src/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-16 max-w-3xl">
      <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
        <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-violet-400" />

        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-neutral-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}