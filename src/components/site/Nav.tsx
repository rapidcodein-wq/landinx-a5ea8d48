import { Link } from "@tanstack/react-router";

const links = ["Home", "About", "Portfolio", "Contact", "FAQ"];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/60 bg-background/80 px-3 py-2.5 backdrop-blur-xl">
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
          <span className="grid size-7 place-items-center rounded-full bg-accent text-accent-foreground text-xs transition group-hover:rotate-45">↗</span>
        </a>
      </nav>
    </header>
  );
}
