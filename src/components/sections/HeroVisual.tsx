import {
  BrainCircuit,
  Code2,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";

const nodes = [
  {
    title: "AI",
    subtitle: "LLM Engineering",
    icon: BrainCircuit,
    className: "left-1/2 top-[3%] -translate-x-1/2",
  },
  {
    title: "React Native",
    subtitle: "Cross-platform",
    icon: Smartphone,
    className: "left-[1%] top-1/2 -translate-y-1/2",
  },
  {
    title: "Native",
    subtitle: "Swift · iOS",
    icon: Code2,
    className: "right-[1%] top-1/2 -translate-y-1/2",
  },
  {
    title: "Architecture",
    subtitle: "Scalable Systems",
    icon: Layers3,
    className: "bottom-[3%] left-1/2 -translate-x-1/2",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Ambient center glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[62%]
          w-[62%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.025]
          blur-[90px]
        "
      />

      {/* Outer orbital ring */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[82%]
          w-[82%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-400/[0.035]
        "
      />

      {/* Inner dashed ring */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[64%]
          w-[64%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-blue-400/[0.045]
        "
      />

      {/* Vertical connector */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[21%]
          z-0
          h-[58%]
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-blue-400/[0.16]
          via-blue-400/[0.07]
          to-blue-400/[0.16]
        "
      />

      {/* Horizontal connector */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[21%]
          top-1/2
          z-0
          h-px
          w-[58%]
          -translate-y-1/2
          bg-gradient-to-r
          from-blue-400/[0.16]
          via-blue-400/[0.07]
          to-blue-400/[0.16]
        "
      />

      {/* Center orbital ring */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          h-[38%]
          w-[38%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-400/[0.08]
        "
      />

      {/* Skill cards */}

      {nodes.map((node) => {
        const Icon = node.icon;

        return (
          <div
            key={node.title}
            className={`
              group
  absolute
  ${node.className}
  z-20
  flex
  min-h-[138px]
  w-[31%]
  flex-col
  justify-center
  rounded-[22px]
  border
  border-white/[0.09]
  bg-[#080808]/95
  px-4
  py-5
  shadow-[0_20px_60px_rgba(0,0,0,0.24)]
  transition-colors
  duration-300
  hover:border-white/[0.18]
  hover:bg-[#0c0c0c]
  sm:min-h-[150px]
  sm:px-5
  sm:py-6
`}
          >
            {/* Icon */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-[13px]
                border
                border-white/[0.09]

bg-white/[0.02]

text-neutral-400

transition-colors

duration-300

group-hover:border-white/[0.16]

group-hover:bg-white/[0.04]

group-hover:text-neutral-300
                sm:h-11
                sm:w-11
                sm:rounded-[14px]
              "
            >
              <Icon
                size={20}
                strokeWidth={1.6}
                className="sm:h-[21px] sm:w-[21px]"
              />
            </div>

            {/* Title */}

            <h3
              className="
                mt-4
                whitespace-nowrap
                text-[13px]
                font-medium
                tracking-tight
                text-neutral-100
                sm:text-lg
              "
            >
              {node.title}
            </h3>

            {/* Subtitle */}

            <p
              className="
                mt-1.5
                whitespace-nowrap
                text-[10px]
                font-medium
                text-neutral-500
                sm:text-sm
              "
            >
              {node.subtitle}
            </p>
          </div>
        );
      })}

      {/* Center ENGINEER node */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-30
          flex
          h-[25%]
          w-[25%]
          min-h-[110px]
          min-w-[110px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-blue-400/25
          bg-[#070b12]
          shadow-[0_0_70px_rgba(59,130,246,0.08)]
        "
      >
        {/* Center glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-blue-400/[0.025]
            blur-xl
          "
        />

        <div className="relative flex flex-col items-center justify-center">
          <Sparkles
            size={25}
            strokeWidth={1.5}
            className="
              mb-2
              text-blue-300
              drop-shadow-[0_0_12px_rgba(96,165,250,0.45)]
              sm:mb-3
              sm:h-7
              sm:w-7
            "
          />

          <span
            className="
              whitespace-nowrap
              text-[9px]
              font-medium
              tracking-[0.22em]
              text-neutral-300
              sm:text-sm
              sm:tracking-[0.28em]
            "
          >
            ENGINEER
          </span>
        </div>
      </div>
    </div>
  );
}
