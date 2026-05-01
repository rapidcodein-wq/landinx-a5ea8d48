import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import appCss from "../styles.css?url";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Cursor } from "@/components/site/Cursor";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CookieBanner } from "@/components/site/CookieBanner";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="grid min-h-[70vh] place-items-center px-4 py-24">
        <div className="mx-auto max-w-xl text-center">
          <div className="font-display text-[clamp(6rem,18vw,12rem)] leading-none">
            4<span className="text-accent">0</span>4
          </div>
          <h1 className="mt-2 font-display text-3xl md:text-4xl">This page wandered off.</h1>
          <p className="mx-auto mt-4 max-w-md text-foreground/70">
            The page you're looking for doesn't exist or has been moved. Let's get you back to safer ground.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground py-3 pl-6 pr-2 text-sm font-medium text-background transition hover:bg-foreground/85"
            >
              Back to home
              <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
            <Link to="/sitemap" className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary">
              View sitemap
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Xstudio — Premium Agency for Creatives" },
      { name: "description", content: "Xstudio is a premium creative agency crafting unique digital presences that help ambitious brands grow and stand out." },
      { name: "author", content: "Xstudio" },
      { property: "og:title", content: "Xstudio — Premium Agency for Creatives" },
      { property: "og:description", content: "Xstudio is a premium creative agency crafting unique digital presences that help ambitious brands grow and stand out." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Xstudio — Premium Agency for Creatives" },
      { name: "twitter:description", content: "Xstudio is a premium creative agency crafting unique digital presences that help ambitious brands grow and stand out." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7958ceb4-e7ba-4033-9c71-3922deeff091/id-preview-8948204d--a661c7a6-5edd-4389-8e9c-340bb8481e3d.lovable.app-1777618474855.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7958ceb4-e7ba-4033-9c71-3922deeff091/id-preview-8948204d--a661c7a6-5edd-4389-8e9c-340bb8481e3d.lovable.app-1777618474855.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <Cursor />
        <ScrollToTop />
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
