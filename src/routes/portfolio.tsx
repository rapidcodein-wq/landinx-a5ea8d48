import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { RevealStagger, RevealItem } from "@/components/site/Reveal";
import { projects, CATEGORIES, type Project } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — X Studio" },
      { name: "description", content: "Selected projects from X Studio: brand systems, e-commerce, SaaS and high-converting landing pages." },
      { property: "og:title", content: "Portfolio — X Studio" },
      { property: "og:description", content: "Selected projects from X Studio." },
    ],
  }),
  component: PortfolioPage,
});

const filters = CATEGORIES;
type Filter = (typeof filters)[number];

function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");
  const visible: Project[] = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section className="px-4 pt-16 pb-12 md:pt-24">
          <div className="mx-auto max-w-7xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/70">
              <span className="size-1.5 rounded-full bg-accent" /> Portfolio
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95]">
              Selected Projects <em className="text-foreground/60">that ship.</em>
            </h1>

            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    active === f
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-foreground/70 hover:border-foreground/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <RevealItem key={p.slug}>
                  <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="overflow-hidden rounded-3xl bg-secondary">
                      <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <div className="flex gap-2 text-xs text-foreground/60">
                        <span className="rounded-full border border-border px-2.5 py-1">{p.year}</span>
                        <span className="rounded-full border border-border px-2.5 py-1">{p.category}</span>
                      </div>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
            {visible.length === 0 && (
              <p className="py-24 text-center text-foreground/60">No projects in this category yet — check back soon.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}