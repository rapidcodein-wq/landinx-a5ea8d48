## Goal

Replace the current blurred-gradient `HeroStripe` with a faithful recreation of Wispr Flow's hero decoration: two long sentences typeset along curved SVG paths that drift slowly, plus a small audio-waveform pill — but with copy tuned to a creative/branding/web-dev studio instead of meeting notes.

## Reference breakdown (from wisprflow.ai)

Three decorative pieces sit on the cream background around the hero text:

```text
   ┌──────────────────────────────────────────────────────────┐
   │  ╭─╮                                                      │
   │ │loop│   ← light gray circular ribbon (left)              │
   │  ╰─╯       sentence wraps around a teardrop/loop path     │
   │                                                            │
   │              [ HERO HEADLINE ]                            │
   │              [ subheading + CTA ]                         │
   │                                                            │
   │                          ╭──[ ▮▮▯▮▯▮ ]──╮                 │
   │                          │  audio pill   │                 │
   │                          ╰───────────────╯                 │
   │                              ～～～━━━━━━━━━━━━━━━━━━━     │
   │                              ↑ dark wavy ribbon, white text │
   └──────────────────────────────────────────────────────────┘
```

Key visual rules:
- Text is rendered as SVG `<textPath>` along a hand-drawn `<path>` — that's why characters rotate to follow the curve.
- Left ribbon: light gray text on cream, no fill, just text. Path is a soft teardrop loop.
- Right ribbon: solid black pill/ribbon shape with white text running along its centerline. Path is a long shallow wave that exits the viewport on the right.
- Both ribbons rotate the text slowly (CSS/SVG `animate` of `startOffset` or a slow `rotate`/translate transform) so the words appear to flow.
- A small rounded outlined "audio waveform" pill sits between the two ribbons, near the bottom of the hero.

## Implementation

### 1. Rewrite `src/components/site/HeroStripe.tsx`

Replace the gradient-band approach entirely. New structure:

```tsx
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
  <LeftLoopRibbon />     // SVG, top-left, ~420px wide
  <RightWaveRibbon />    // SVG, bottom-right, full width, exits viewport
  <AudioPill />          // small centered pill near bottom of hero
</div>
```

**LeftLoopRibbon** — SVG ~440x520 positioned absolute top-left:
- One `<path id="loopPath" d="..." />` describing a teardrop/figure-loop.
- One `<text fill="oklch(0.72 0.01 80)" font-size="18" font-family="Geist">` containing a `<textPath href="#loopPath" startOffset="0%">…long sentence…</textPath>`.
- Animate `startOffset` from `0%` → `100%` over ~40s linear infinite via a small `<animate>` tag (or framer-motion on a wrapper translating along the path origin).
- Sentence (studio-flavored): *"branding strategy moodboards type explorations art direction motion identity systems web design development launch growth ・ "* repeated to fill the path.

**RightWaveRibbon** — SVG full-width, ~260px tall, bottom-right of hero:
- A wide `<path id="wavePath" d="M -40 200 C 300 80, 700 320, 1200 120 L 1600 120">` (long S-curve).
- Stroke that same path with `stroke="var(--ink)" stroke-width="56" stroke-linecap="round"` — that becomes the black ribbon.
- Then a `<text fill="var(--paper)" font-size="20">` with `<textPath href="#wavePath" startOffset="-20%">` containing the white sentence.
- Animate `startOffset` from `-20%` → `80%` linearly over ~35s for the flowing-text effect.
- Studio sentence: *"brand systems · website design · framer development · motion · identity · launches · growth strategy · creative direction ·"* repeated.

**AudioPill** — small rounded outlined pill (~140x52, `border border-foreground/80 rounded-full bg-background`) positioned `absolute left-1/2 bottom-[18%] -translate-x-1/2`, containing 24 thin vertical bars at varying heights (3–28px). Animate each bar's `scaleY` with framer-motion in a staggered loop to mimic a live waveform.

### 2. Wire reduced-motion

Wrap the `<animate>` and framer-motion loops with a `prefers-reduced-motion` check — render the ribbons static (no flow, no waveform pulse) when reduced motion is requested.

### 3. Hero integration

`src/routes/index.tsx` already renders `<HeroStripe />` inside the Hero section. No structural change needed — just make sure the parent `<section>` keeps `relative overflow-hidden` (it does). Bump hero bottom padding from `pb-24` to `pb-32` so the right ribbon and audio pill have breathing room above the next section.

### 4. Files touched

- **rewrite** `src/components/site/HeroStripe.tsx` — replace gradient implementation with the SVG-path-text + audio-pill version above.
- **edit** `src/routes/index.tsx` — minor: increase Hero section `pb-24` → `pb-32`.

No new dependencies (framer-motion is already installed). No backend or schema changes. ~4KB of SVG markup added, ~2KB JS.

## What stays / what goes

- Remove: blurred horizontal gradient bands, floating absolute words, mix-blend overlays.
- Keep: cream background, headline, CTA — they're unchanged. The ribbons sit *behind* the headline (`-z-10`) like on Wispr.

