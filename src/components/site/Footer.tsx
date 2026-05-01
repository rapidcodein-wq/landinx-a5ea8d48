import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { EMAIL, EMAIL_HREF, LOCATION, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const pages: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-foreground text-background font-display text-base">L</span>
            <span className="font-display text-2xl">Xstudio</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-foreground/65">
            A premium agency crafting unique digital presences for ambitious brands and startups.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <li>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 hover:text-foreground">
                <Phone className="size-4 text-accent" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <MessageCircle className="size-4 text-accent" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="size-4 text-accent" /> {EMAIL}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-foreground/70">
              <MapPin className="size-4 text-accent" /> {LOCATION}
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-foreground/50">Pages</div>
          <ul className="mt-4 space-y-2 text-sm">
            {pages.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:underline">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-foreground/50">Legal</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-foreground/50">Social</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["Twitter (X)", "Instagram", "Youtube", "Framer"].map((l) => (
              <li key={l}><a href="#" className="hover:underline">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-foreground/55">
        <div>© {new Date().getFullYear()} Xstudio</div>
        <div className="flex flex-wrap gap-5">
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <a href="/sitemap.xml" className="hover:underline">sitemap.xml</a>
        </div>
      </div>
    </footer>
  );
}