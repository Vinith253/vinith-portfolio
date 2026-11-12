export default function AmbientBackground() {
  return (
    <>
      <div className="ambient-glow ambient-glow-blue" />
      <div className="ambient-glow ambient-glow-violet" />
      <div className="ambient-glow ambient-glow-cyan" />

      <div className="engineering-grid pointer-events-none fixed inset-0 z-[-1]" />
    </>
  );
}