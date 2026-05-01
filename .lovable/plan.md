## Goal

Take the Landin site from "good static page" to a tactile, editorial experience where every scroll, hover, and movement feels intentional. Three pillars: **smooth scroll**, **custom cursor**, **scroll-driven choreography**.

## 1. Premium scroll (Lenis)

Add Lenis (industry standard for Awwwards-style smooth scroll — used by sites like studiofreight.com).

- Install `lenis` (~3KB, no jank, respects `prefers-reduced-motion`).
- Mount once in `__root.tsx` via a `<SmoothScroll />` client component using `useEffect` + `requestAnimationFrame`.
- Tuned config: `duration: 1.2`, custom easing curve (expo-out), `lerp: 0.1`. Disabled on touch devices (native momentum is better on mobile).
- Add a slim custom progress bar (1px lime gradient) fixed at the top, scaling with `scrollYProgress`.

## 2. Custom cursor

A two-layer cursor that feels like Apple/Linear/Vercel sites.

- `src/components/site/Cursor.tsx` — a small ink dot (8px) that tracks mouse 1:1, plus an outer ring (32px) that lags behind with spring easing.
- On hover over `[data-cursor="link"]` (links, buttons, cards): ring expands to 64px, becomes lime, dot hides.
- On hover over images/cases: ring becomes a pill showing "View →" label.
- Hidden entirely on touch devices via media query.
- Native cursor hidden only on `md+` breakpoints so mobile is untouched.

## 3. Scroll-driven motion

Use `framer-motion` (already common) for tasteful reveals — no parallax overload.

- Section headings: fade + 20px rise on enter (once, viewport margin -100px).
- Case study and feature cards: stagger children, 60ms delay between siblings.
- Hero portrait pill: subtle scale on scroll using `useScroll` + `useTransform`.
- Marquee: pause on hover (premium tell — currently doesn't react).
- Numbers in About stats ("$0 → $500K", "+47%"): count-up animation when in view.

## 4. Micro-polish

- **Buttons**: replace the `↗` glyph with a real `lucide-react` `ArrowUpRight` icon, animate translate+rotate on hover (no font fallback shifts).
- **Card hover**: add a subtle `box-shadow` lift + 1px border darken on case cards. Use CSS transitions (200ms ease-out) instead of `transition` shorthand for control.
- **Image reveals**: cases and portfolio images get a clip-path reveal (clip from bottom) when entering viewport.
- **Focus states**: ring offset matched to paper bg, lime ring color — currently inherits default which clashes.
- **Selection color**: `::selection` set to lime/ink for brand consistency.
- **Nav**: shrink padding + tighter blur after 50px scroll (sticky nav densifies).
- **Section dividers**: replace hard borders with thin grain/noise texture transitions where dark sections meet paper.

## 5. Accessibility

- All motion wrapped in `@media (prefers-reduced-motion: reduce)` — Lenis disabled, transitions become instant, custom cursor falls back to native.
- Cursor uses `pointer-events: none` and `aria-hidden`.

## Technical details

**New deps**: `lenis`, `framer-motion` (verify if already present; if so, skip).

**New files**:
- `src/components/site/SmoothScroll.tsx` — Lenis bootstrap + RAF loop.
- `src/components/site/Cursor.tsx` — custom cursor with spring-lagged ring.
- `src/components/site/ScrollProgress.tsx` — top progress bar.
- `src/components/site/Reveal.tsx` — reusable `<Reveal>` wrapper using framer-motion `whileInView`.
- `src/hooks/use-count-up.ts` — for stat counters.

**Edits**:
- `src/routes/__root.tsx` — mount `SmoothScroll`, `Cursor`, `ScrollProgress` inside `RootShell`.
- `src/routes/index.tsx` — wrap section headings/cards in `<Reveal>`, swap glyph arrows for `ArrowUpRight`, add `data-cursor` attributes, plug count-up into stats.
- `src/components/site/Marquee.tsx` — pause-on-hover via `group-hover:[animation-play-state:paused]`.
- `src/components/site/Nav.tsx` — scroll-state-aware density.
- `src/styles.css` — `::selection`, focus ring tokens, reduced-motion overrides, hide native cursor on `md+`.

```text
┌─ RootShell ──────────────────────────────┐
│  <ScrollProgress/>      ← top 1px bar    │
│  <SmoothScroll/>        ← Lenis RAF      │
│  <Cursor/>              ← dot + ring     │
│  <Outlet/>                               │
│    └─ Index                              │
│        ├─ Hero    (scroll-scaled portrait)│
│        ├─ <Reveal> About / stats counter │
│        ├─ <Reveal> Results (stagger)     │
│        └─ ...                            │
└──────────────────────────────────────────┘
```

No backend, no schema changes. All client-side, ~12KB gzipped added.
