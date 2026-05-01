const RIGHT_TEXT =
  "brand systems · website design · framer development · motion · identity · launches · growth strategy · creative direction · brand systems · website design · framer development · motion · identity · launches · ";

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

export function HeroStripe() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <RightWaveRibbon />
    </div>
  );
}
