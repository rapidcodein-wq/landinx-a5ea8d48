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
      preserveAspectRatio="none"
      className="absolute bottom-[-20px] right-[-200px] h-[260px] w-[1600px] max-w-none"
      fill="none"
    >
      <defs>
        <path
          id="heroWavePath"
          d="M -400 200 C 0 60 420 320 900 140 C 1280 10 1500 160 1900 120"
        />
      </defs>

      {/* Black ribbon */}
      <path
        d="M -400 200 C 0 60 420 320 900 140 C 1280 10 1500 160 1900 120"
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
            dur="18s"
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
