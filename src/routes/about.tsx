import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/Reveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Landin — Premium Creative Agency" },
      { name: "description", content: "Landin is a remote creative studio in Ahmedabad shipping brand systems, websites and motion for ambitious teams." },
      { property: "og:title", content: "About Landin — Premium Creative Agency" },
      { property: "og:description", content: "Meet the team behind Landin and the work we do for ambitious brands." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Aarav Mehta", role: "Founder & Creative Director", img: gallery3 },
  { name: "Isha Kapoor", role: "Head of Design", img: gallery1 },
  { name: "Rohan Shah", role: "Lead Engineer", img: gallery4 },
];

const stats = [
  { v: "900+", l: "Projects" },
  { v: "5+", l: "Years" },
  { v: "200+", l: "Clients" },
  { v: "98%", l: "Satisfaction" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section className="px-4 pt-16 pb-20 md:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/70">
              <span className="size-1.5 rounded-full bg-accent" /> About Landin
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95]">
              We Are Landin · <em className="text-foreground/60">A Premium Creative Agency</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/70 md:text-lg">
              A small, senior team building brands, websites and digital products that actually move the needle for ambitious founders.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">Our story</h2>
              <p className="mt-6 text-foreground/75">
                Landin started as a two-person experiment in 2020 — a designer and an engineer who were tired of bloated agency processes. Five years later, we still operate the same way: small team, senior people, no junior handoffs, and a clear bias for shipping.
              </p>
              <p className="mt-4 text-foreground/75">
                We work with founders, marketing leads and product teams who care about craft. From brand systems to launch sites to internal tools, every project is led by the same people who quoted it.
              </p>
            </Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={heroPortrait} alt="Landin team at work" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-foreground px-4 py-20 text-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-5xl md:text-7xl">{s.v}</div>
                <div className="mt-2 text-sm uppercase tracking-widest text-background/60">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/70">
                <span className="size-1.5 rounded-full bg-accent" /> The Team
              </span>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
                Senior people, <em className="text-foreground/60">no handoffs.</em>
              </h2>
            </div>
            <RevealStagger className="grid gap-5 md:grid-cols-3">
              {team.map((m) => (
                <RevealItem key={m.name}>
                  <article className="lift overflow-hidden rounded-3xl border border-border bg-card">
                    <img src={m.img} alt={m.name} className="aspect-[4/5] w-full object-cover" />
                    <div className="p-6">
                      <h3 className="font-display text-2xl">{m.name}</h3>
                      <p className="mt-1 text-sm text-foreground/60">{m.role}</p>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealStagger>
            <img src={gallery2} alt="" hidden />
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-foreground p-10 text-background md:p-16">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Start a project <em className="text-background/60">with us.</em>
            </h2>
            <p className="mt-4 max-w-xl text-background/70">Tell us about your goals — we'll come back within 24 hours.</p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-6 pr-2 text-sm font-medium text-accent-foreground hover:bg-lime-deep"
            >
              Start a Project With Us
              <span className="grid size-9 place-items-center rounded-full bg-foreground/10 transition group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}