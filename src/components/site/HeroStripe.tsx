const PHRASE =
  "we design brands · we ship websites · we make pixels behave · powered by espresso & deadlines · no lorem ipsum was harmed · please don't ask for comic sans · yes the logo can be bigger · we speak fluent figma · 100% handcrafted, 0% stock photos · ";

// Repeat the phrase enough times that the path is always covered AND we have
// at least one extra phrase to slide off-screen. We then animate startOffset
// by exactly one phrase's worth → seamless infinite loop.
const REPEATS = 8;
const TEXT = PHRASE.repeat(REPEATS);
// One phrase = 1/REPEATS of the total text length, so shifting by that much
// brings the next identical phrase exactly into the previous one's place.
const SHIFT_PCT = 100 / REPEATS; // = 12.5

function RightWaveRibbon() {
  return (
    <svg
      viewBox="0 0 1600 280"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-x-0 bottom-0 h-[180px] w-full sm:h-[220px] md:h-[260px]"
      fill="none"
    >
      <defs>
        <path
          id="heroWavePath"
          d="M 0 80 C 320 200 720 240 1080 150 C 1380 80 1500 150 1600 140"
        />
      </defs>

      {/* Black ribbon */}
      <path
        d="M 0 80 C 320 200 720 240 1080 150 C 1380 80 1500 150 1600 140"
        stroke="oklch(0.18 0.01 80)"
        strokeWidth="56"
        strokeLinecap="round"
        fill="none"
      />

      {/* Single text element — seamless because we shift by exactly one phrase */}
      <text
        fill="var(--paper)"
        style={{
          fontFamily: "Geist, ui-sans-serif",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}
      >
        <textPath href="#heroWavePath" startOffset="0%" dominantBaseline="middle">
          {TEXT}
          <animate
            attributeName="startOffset"
            from="0%"
            to={`-${SHIFT_PCT}%`}
            dur="10s"
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
