## Goal

Turn the current single-page landing into a fully-routed multi-page site with all nav/footer/CTAs wired up, plus three site-wide additions: a floating WhatsApp button, a cookie consent banner, and the phone number `+91 87805-23473` connected everywhere relevant. Keep all existing design, animations, custom cursor, and home-page sections exactly as-is.

## Note on routing

The project uses **TanStack Router** (file-based routes in `src/routes/`), not React Router DOM. Functionally identical for the user — every page works as a real URL with deep links, refresh, and SEO — just a different import (`@tanstack/react-router`).

## 1. New routes (all use `createFileRoute`, each with its own `head()` for SEO)

```text
src/routes/
  __root.tsx                 (extend: WhatsApp + CookieBanner + ScrollToTop)
  index.tsx                  (existing — only swap Nav anchors → real Links)
  about.tsx                  NEW
  portfolio.tsx              NEW (filter tabs + grid)
  portfolio.$slug.tsx        NEW (project detail page)
  contact.tsx                NEW
  faq.tsx                    NEW
  terms.tsx                  NEW
  privacy.tsx                NEW
  sitemap.tsx                NEW (human-readable /sitemap)
  api/sitemap[.]xml.tsx      NEW (machine-readable /sitemap.xml served as XML)
```

The styled 404 already exists in `__root.tsx` as `NotFoundComponent` — restyle it to match the dark editorial theme (cream paper, display serif "404", lime accent, "Back home" PrimaryCTA).

## 2. Page contents

- **About** — Hero "We Are Landin · A Premium Creative Agency", 2-col story, 3 team cards (placeholder avatars from existing `gallery-*` assets), stats row (900+ Projects · 5+ Years · 200+ Clients · 98% Satisfaction), bottom CTA "Start a Project With Us" → `/contact`.
- **Portfolio** — Filter tabs (All / E-Commerce / Agency / SaaS / Landing Page) using local `useState`. Reuses the project grid card style from home. Each card → `/portfolio/$slug`.
- **Portfolio detail** (`/portfolio/way-fields`, `/portfolio/raven-studio`, `/portfolio/white-stag`) — hero image, name, category tags, year, description, results/stats list, "Start a Similar Project" CTA → `/contact`. Data loaded from a local `projects` array; `notFound()` thrown for unknown slugs (root `notFoundComponent` catches it).
- **Contact** — Heading "Let's Work Together", subtext "we'll get back to you within 24 hours". Two-column: left = email + phone (tel:) + WhatsApp (wa.me) + Ahmedabad, India; right = form (Name/Email/Phone/Message) validated with `zod`, success toast via `sonner` ("Message sent! We'll get back to you soon."). Two extra buttons under contact details: **Call Us** (`tel:+918780523473`) and **WhatsApp Us** (`https://wa.me/918780523473`).
- **FAQ** — Reuse the homepage accordion style (`@/components/ui/accordion`), expanded to 12 Q&As covering pricing, process, timelines, revisions, tech stack, support.
- **Terms & Conditions** / **Privacy Policy** — Standard placeholder legal copy with proper `h1/h2/p` hierarchy, paper background, body text in `text-foreground/75`. Privacy mentions cookies, data collection, and contact info.
- **Sitemap** (`/sitemap`) — Three sections: Main Pages, Legal, Projects (under Portfolio) — each item a real `<Link>`.
- **api/sitemap.xml** — Server route returning XML with all known URLs (Content-Type `application/xml`).

## 3. Global components (new files in `src/components/site/`)

- **`WhatsAppButton.tsx`** — fixed `bottom-6 right-6 z-[9999]`, 56px circle, `bg-[#25D366]` (added as `--whatsapp` token in `styles.css`), official WhatsApp SVG (lucide doesn't ship one — inline brand SVG path), opens `https://wa.me/918780523473` in new tab. Soft pulse via Tailwind `animate-ping` on a sibling ring + `hover:scale-110` on the button. Tooltip "Chat with us on WhatsApp" using `@/components/ui/tooltip`. Reduced-motion aware.
- **`CookieBanner.tsx`** — reads `localStorage.cookieConsent`; if absent, renders a fixed bottom banner (full width on mobile, centered max-w-2xl card on desktop) with `bg-[#111] text-white border border-white/10 rounded-xl`, slide-up via framer-motion (300ms ease). Accept → store `"accepted"`; Decline → `"declined"`; either dismisses. Wrapped in `useEffect` so SSR renders nothing (avoids hydration mismatch).
- **`ScrollToTop.tsx`** — uses `useRouterState({ select: s => s.location.pathname })`; on change, `window.scrollTo({ top: 0, behavior: 'instant' })`.
- **`PageTransition.tsx`** — wraps `<Outlet />` in framer-motion `AnimatePresence` keyed by pathname for a 200ms fade.
- **`Footer.tsx`** — extracted from home so all routes share it. Replaces all `href="#"` with `<Link>` to real routes; phone row with `Phone` lucide icon + `tel:` link; small "sitemap.xml" link near the bottom.

All three globals (`WhatsAppButton`, `CookieBanner`, `ScrollToTop`) and the `PageTransition` wrapper are mounted once in `__root.tsx`'s `RootShell` so they appear on every page including the 404.

## 4. Nav + footer rewire

- `src/components/site/Nav.tsx`: replace the `<a href="#">` map with `<Link to="/about">`, `to="/portfolio"`, `to="/contact"`, `to="/faq"`. Use `activeProps={{ className: "text-foreground bg-secondary" }}` plus a lime underline for the active page. "Get In Touch" button → `to="/contact"`. Add a mobile hamburger (`Sheet` from shadcn) since current nav has no mobile menu — links collapse into a slide-over.
- `Footer` (extracted): every link becomes a `<Link>`; add Legal column (Terms, Privacy, Sitemap), and a contact column with email + phone (tel:) + WhatsApp (wa.me).
- Home page (`index.tsx`) anchor CTAs (`href="#contact"`, `href="#about"`, `href="#"` for portfolio cards): leave `#about` as in-page scroll, but rewrite `#contact` → `to="/contact"`, portfolio card `href="#"` → `to="/portfolio/$slug"`, and any "Book an Appointment" / "Connect With Us" buttons → `to="/contact"`.

## 5. Phone / WhatsApp constants

Add `src/lib/contact.ts`:
```ts
export const PHONE_DISPLAY = "+91 87805-23473";
export const PHONE_TEL = "tel:+918780523473";
export const WHATSAPP_URL = "https://wa.me/918780523473";
export const EMAIL = "hello@landin.studio"; // placeholder
export const LOCATION = "Ahmedabad, India";
```
Imported by Footer, Contact page, and WhatsApp button so the number is single-sourced.

## 6. SEO per route

Each new route exports `head()` with route-specific `title`, `description`, `og:title`, `og:description` (e.g. About → "About Landin — Premium Creative Agency"). Portfolio detail derives title from the project name in its loader.

## 7. Dependencies

Already installed: `framer-motion`, `zod`, `sonner`, `lucide-react`, `@tanstack/react-router`, all shadcn UI primitives (`accordion`, `sheet`, `tooltip`, `input`, `textarea`, `button`, `label`). **No new packages needed.**

## 8. Files touched

**New**: `src/routes/about.tsx`, `portfolio.tsx`, `portfolio.$slug.tsx`, `contact.tsx`, `faq.tsx`, `terms.tsx`, `privacy.tsx`, `sitemap.tsx`, `api/sitemap[.]xml.tsx`; `src/components/site/WhatsAppButton.tsx`, `CookieBanner.tsx`, `ScrollToTop.tsx`, `PageTransition.tsx`, `Footer.tsx`; `src/lib/contact.ts`.

**Edited**: `src/routes/__root.tsx` (mount globals, restyle 404), `src/routes/index.tsx` (anchor → Link rewires, remove inline footer), `src/components/site/Nav.tsx` (real Links + active states + mobile sheet), `src/styles.css` (add `--whatsapp: #25D366` token).

No backend, no Cloud, no schema changes.
