type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        box-border
        w-full
        max-w-6xl
        min-w-0
        px-5
        sm:px-6
        md:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}