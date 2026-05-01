import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const links = ["Home", "About", "Portfolio", "Contact", "FAQ"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 px-4 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"}`}>
      <nav
        className={`mx-auto flex items-center justify-between rounded-full border bg-background/70 px-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "max-w-5xl border-border/80 py-2 shadow-[0_8px_30px_-12px_oklch(0_0_0/0.18)]"
            : "max-w-7xl border-border/60 py-2.5"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-3">
          <span className="grid size-7 place-items-center rounded-full bg-foreground text-background font-display text-base leading-none">L</span>
          <span className="font-display text-xl leading-none">Landin</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="rounded-full px-4 py-2 text-sm text-foreground/70 transition hover:bg-secondary hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-4 pr-1.5 text-sm font-medium text-background transition hover:bg-foreground/85"
        >
          Get In Touch
          <span className="grid size-7 place-items-center overflow-hidden rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
          </span>
        </a>
      </nav>
    </header>
  );
}
