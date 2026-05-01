// One witty/funny phrase. Keep it one line — we render it twice back-to-back
// and translate by exactly its length so the loop is perfectly seamless.
const PHRASE =
  "we design brands · we ship websites · we make pixels behave · powered by espresso & deadlines · no lorem ipsum was harmed · please don't ask for comic sans · yes the logo can be bigger · we speak fluent figma · 100% handcrafted, 0% stock photos · ";

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

      {/* The black ribbon */}
      <path
        d="M -400 200 C 0 60 420 320 900 140 C 1280 10 1500 160 1900 120"
        stroke="oklch(0.18 0.01 80)"
        strokeWidth="56"
        strokeLinecap="round"
        fill="none"
      />

      {/* Seamless scrolling text:
          - text A starts at 0%, text B starts at 50%
          - both shift -50% over one cycle
          - because both copies are identical and offset by exactly 50%,
            as A leaves the path B has already filled the gap → infinite loop */}
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
          {PHRASE.repeat(2)}
          <animate
            attributeName="startOffset"
            from="0%"
            to="-50%"
            dur="40s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
      <text
        fill="var(--paper)"
        style={{
          fontFamily: "Geist, ui-sans-serif",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}
      >
        <textPath href="#heroWavePath" startOffset="50%" dominantBaseline="middle">
          {PHRASE.repeat(2)}
          <animate
            attributeName="startOffset"
            from="50%"
            to="0%"
            dur="40s"
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
