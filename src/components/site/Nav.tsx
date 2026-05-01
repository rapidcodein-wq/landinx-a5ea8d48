import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/xstudio-logo.png";

type NavLinkItem = { label: string; to: string };

const links: NavLinkItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-1 pl-2" aria-label="X Studio — Home">
          <img src={logo} alt="X" className="size-9 rounded-lg" />
          <span className="font-display text-xl leading-none">Studio</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm text-foreground/70 transition hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground data-[status=active]:underline data-[status=active]:underline-offset-[6px] data-[status=active]:decoration-accent data-[status=active]:decoration-2"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-foreground py-2 pl-4 pr-1.5 text-sm font-medium text-background transition hover:bg-foreground/85 sm:inline-flex"
          >
            Get In Touch
            <span className="grid size-7 place-items-center overflow-hidden rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
            </span>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="grid size-10 place-items-center rounded-full border border-border bg-background hover:bg-secondary md:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-background">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
              </SheetHeader>
              <ul className="mt-8 space-y-1 px-2">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-display text-2xl text-foreground/80 transition hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 px-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-medium text-background"
                >
                  Get In Touch
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
