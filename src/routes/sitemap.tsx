import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — X Studio" },
      { name: "description", content: "Every page on the X Studio website, organised in one place." },
      { property: "og:title", content: "Sitemap — X Studio" },
      { property: "og:description", content: "Every page on the X Studio website, organised in one place." },
    ],
  }),
  component: SitemapPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-3xl">{title}</h2>
      <ul className="mt-5 space-y-2 text-base">{children}</ul>
    </div>
  );
}

function Item({ to, children, params }: { to: string; children: React.ReactNode; params?: Record<string, string> }) {
  return (
    <li>
      <Link to={to as any} params={params as any} className="text-foreground/80 hover:text-foreground hover:underline">
        {children}
      </Link>
    </li>
  );
}

function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="px-4 pt-16 pb-24 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">Sitemap</h1>
          <p className="mt-4 max-w-xl text-foreground/70">Every page on the X Studio site.</p>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <Section title="Main Pages">
              <Item to="/">Home</Item>
              <Item to="/about">About</Item>
              <Item to="/portfolio">Portfolio</Item>
              <Item to="/contact">Contact</Item>
              <Item to="/faq">FAQ</Item>
            </Section>

            <Section title="Legal">
              <Item to="/terms">Terms & Conditions</Item>
              <Item to="/privacy">Privacy Policy</Item>
              <Item to="/sitemap">Sitemap</Item>
            </Section>

            <Section title="Projects">
              {projects.map((p) => (
                <Item key={p.slug} to="/portfolio/$slug" params={{ slug: p.slug }}>
                  {p.name}
                </Item>
              ))}
            </Section>
          </div>

          <p className="mt-12 text-sm text-foreground/55">
            Looking for the machine-readable version? <a href="/sitemap.xml" className="underline">sitemap.xml</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}