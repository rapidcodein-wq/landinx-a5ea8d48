import { motion } from "framer-motion";

const LEFT_TEXT =
  "branding · strategy · moodboards · type explorations · art direction · motion · identity systems · web design · framer development · launch · growth · ";

const RIGHT_TEXT =
  "brand systems · website design · framer development · motion · identity · launches · growth strategy · creative direction · brand systems · website design · framer development · motion · identity · launches · ";

function LeftLoopRibbon() {
  return (
    <svg
      viewBox="0 0 440 520"
      className="absolute left-[-40px] top-[40px] hidden h-[420px] w-[360px] md:block lg:left-[20px] lg:h-[480px] lg:w-[420px]"
      fill="none"
    >
      <defs>
        {/* A teardrop / figure-8-ish loop path */}
        <path
          id="heroLoopPath"
          d="M 220 60 C 360 60 410 200 360 300 C 310 400 180 440 110 380 C 40 320 40 200 110 140 C 180 80 300 100 320 200 C 340 300 220 360 160 320 C 100 280 110 200 180 180 C 250 160 320 200 320 260"
        />
      </defs>
      <text
        fill="oklch(0.72 0.01 80)"
        style={{ fontFamily: "Geist, ui-sans-serif", fontSize: 16, letterSpacing: "0.02em" }}
      >
        <textPath href="#heroLoopPath" startOffset="0%">
          {LEFT_TEXT.repeat(4)}
          <animate
            attributeName="startOffset"
            from="0%"
            to="100%"
            dur="60s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
}

function RightWaveRibbon() {
  return (
    <svg
      viewBox="0 0 1600 280"
      preserveAspectRatio="none"
      className="absolute bottom-[-20px] right-[-200px] h-[260px] w-[1600px] max-w-none"
      fill="none"
    >
      <defs>
        <path
          id="heroWavePath"
          d="M -80 200 C 280 60 620 320 1000 140 C 1280 10 1450 160 1700 120"
        />
      </defs>
      {/* The black ribbon: stroke the path heavily */}
      <path
        d="M -80 200 C 280 60 620 320 1000 140 C 1280 10 1450 160 1700 120"
        stroke="oklch(0.18 0.01 80)"
        strokeWidth="56"
        strokeLinecap="round"
        fill="none"
      />
      {/* White text running along the same centerline */}
      <text
        fill="var(--paper)"
        style={{ fontFamily: "Geist, ui-sans-serif", fontSize: 20, fontWeight: 500, letterSpacing: "0.01em" }}
      >
        <textPath href="#heroWavePath" startOffset="-20%" dominantBaseline="middle">
          {RIGHT_TEXT.repeat(3)}
          <animate
            attributeName="startOffset"
            from="-20%"
            to="80%"
            dur="45s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
}

function AudioPill() {
  const bars = Array.from({ length: 22 });
  return (
    <div className="absolute left-1/2 bottom-[14%] z-[1] -translate-x-1/2">
      <div className="flex h-[52px] w-[148px] items-center justify-center gap-[3px] rounded-full border-[1.5px] border-foreground/85 bg-background px-4 shadow-sm">
        {bars.map((_, i) => {
          // Rough bell-curve heights so it looks like a real waveform
          const base = 4 + Math.round(20 * Math.sin((i / bars.length) * Math.PI));
          return (
            <motion.span
              key={i}
              className="block w-[2px] rounded-full bg-foreground"
              style={{ height: base }}
              animate={{ scaleY: [0.6, 1.4, 0.8, 1.2, 0.6] }}
              transition={{
                duration: 1.4 + (i % 4) * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 7) * 0.08,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function HeroStripe() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <LeftLoopRibbon />
      <RightWaveRibbon />
      <AudioPill />
    </div>
  );
}
