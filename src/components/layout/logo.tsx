"use client";

export default function Logo() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-xl font-semibold tracking-tight"
      aria-label="Back to top"
    >
      VS<span className="text-violet-400">.</span>
    </button>
  );
}