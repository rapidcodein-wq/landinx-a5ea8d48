import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { Reveal, RevealStagger, RevealItem } from "@/components/site/Reveal";
import { projects as allProjects } from "@/lib/projects";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { HeroStripe } from "@/components/site/HeroStripe";
import abstractLime from "@/assets/abstract-lime.jpg";
import caseBottle from "@/assets/case-bottle.jpg";
import caseWatch from "@/assets/case-watch.jpg";
import caseBlackBottle from "@/assets/case-black-bottle.jpg";
import caseBuilding from "@/assets/case-building.jpg";
import manLaptop from "@/assets/man-laptop.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/70">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

function PrimaryCTA({ children, variant = "dark", to = "/contact" }: { children: React.ReactNode; variant?: "dark" | "lime"; to?: string }) {
  const styles =
    variant === "lime"
      ? "bg-accent text-accent-foreground hover:bg-lime-deep"
      : "bg-foreground text-background hover:bg-foreground/85";
  return (
    <Link
      to={to as any}
      className={`group inline-flex items-center gap-3 rounded-full py-3 pl-6 pr-2 text-sm font-medium transition-all duration-300 ${styles}`}
    >
      {children}
      <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-background/15 text-current transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-4" strokeWidth={2} />
      </span>
    </Link>
  );
}

function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  return (
    <section ref={ref} className="relative overflow-hidden px-4 pt-10 pb-32">
      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs">
            <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-background">New</span>
            <span className="text-foreground/70">No. 1 Studio of 2025</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display text-center text-[clamp(3rem,9vw,8.5rem)] leading-[0.95]"
        >
          Premium Agency
          <br />
          for{" "}
          <span className="relative inline-block align-middle">
            <span className="relative z-10 inline-flex translate-y-1 items-center overflow-hidden rounded-full border border-border bg-background px-4">
              <motion.img
                style={{ scale: portraitScale, y: portraitY }}
                src={heroPortrait}
                alt=""
                width={120}
                height={56}
                className="h-14 w-28 rounded-full object-cover md:h-20 md:w-40"
              />
            </span>
          </span>{" "}
          <em className="not-italic text-foreground/90">Creatives.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mx-auto mt-8 max-w-xl text-center text-base text-foreground/70 md:text-lg"
        >
          We specialize in crafting unique digital presence that helps businesses grow and stand out in their industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <PrimaryCTA>Connect With Us</PrimaryCTA>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary">
            What is X Studio?
          </a>
        </motion.div>
      </motion.div>

      {/* Wispr-style animated gradient stripe */}
      <HeroStripe />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>About X Studio</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Building Stronger Brands{" "}
            <em className="text-foreground/60">Creating Impressions!</em>
          </h2>
          <p className="mt-6 max-w-md text-foreground/70">
            Delivering high-quality, on-demand designs with precision. Elevate your brand effortlessly, one snap at a time.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <PrimaryCTA>View About X Studio</PrimaryCTA>
            <div className="flex items-center gap-2 text-xs text-foreground/60">
              <div className="flex -space-x-2">
                {[gallery3, gallery1, gallery2].map((g, i) => (
                  <img key={i} src={g} alt="" className="size-7 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              200+ Agencies Rated
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.4 }}
               transition={{ duration: 0.9, ease: "easeOut" }}
               className="rounded-3xl border border-border bg-card p-6"
             >
               <div className="text-xs uppercase tracking-widest text-foreground/50">Revenue</div>
               <div className="mt-2 font-display text-4xl">$0 → $500K</div>
               <p className="mt-2 text-sm text-foreground/60">In just six months across our partner roster.</p>
               <div className="mt-6 h-24 overflow-hidden rounded-2xl bg-secondary">
                 <motion.div
                   className="h-full rounded-2xl bg-gradient-to-r from-accent to-accent/30"
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   viewport={{ once: true, amount: 0.4 }}
                   transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                 />
               </div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.4 }}
               transition={{ duration: 0.9, ease: "easeOut" }}
               className="rounded-3xl border border-border bg-foreground p-6 text-background"
             >
               <div className="text-xs uppercase tracking-widest text-background/60">New Customers</div>
               <div className="mt-2 font-display text-4xl">+47% Growth</div>
               <p className="mt-2 text-sm text-background/70">Compounding monthly across funnels.</p>
               <div className="mt-6 grid grid-cols-7 items-end gap-1.5 h-24">
                 {[30, 45, 38, 60, 52, 78, 95].map((h, i) => (
                   <motion.div
                     key={i}
                     className="rounded-sm bg-accent origin-bottom"
                     style={{ height: `${h}%` }}
                     initial={{ scaleY: 0, opacity: 0 }}
                     whileInView={{ scaleY: 1, opacity: 1 }}
                     viewport={{ once: true, amount: 0.4 }}
                     transition={{ duration: 1.1, delay: 0.4 + i * 0.32, ease: [0.22, 1, 0.36, 1] }}
                   />
                 ))}
               </div>
             </motion.div>
            <div className="sm:col-span-2 overflow-hidden rounded-3xl border border-border">
              <img src={heroPortrait} alt="Working portrait" loading="lazy" className="h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cases = [
  { img: caseBottle, name: "Crimson Studio", tag: "NEW", text: "Achieved a steep increase in sales within six months through a customized strategy.", stats: ["30% Increase in Sales", "40% Boost in Retention"] },
  { img: caseWatch, name: "Raven Company Inc", text: "Streamlined operations, reducing costs with our automation solutions.", stats: ["25% Conversion Rates", "50% Reduced CPA"] },
  { img: caseBlackBottle, name: "Gotham Wonder", tag: "FRESH", text: "Boosted customer engagement with a digital presence and targeted campaigns.", stats: ["60% Increased Traffic", "35% Growth in Sales"] },
  { img: caseBuilding, name: "Sling Interactive", text: "Expanded market reach, tapping into new demographics with a driven approach.", stats: ["20% Market Share", "45% Enhanced Visibility"] },
];

function Results() {
  return (
    <section className="bg-foreground px-4 py-24 text-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-background/70">
              <span className="size-1.5 rounded-full bg-accent" /> Results
            </div>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
              Delivering Tangible Results{" "}
              <em className="text-background/60">That Propel Your Success</em>
            </h2>
          </div>
          <div className="md:pl-12">
            <p className="text-background/70">
              At the core of everything we do lies a commitment to delivering measurable outcomes that drive your success.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-6 pr-2 text-sm font-medium text-accent-foreground hover:bg-lime-deep">
              Book a 15-min call
              <span className="grid size-9 place-items-center rounded-full bg-foreground/10 text-current">↗</span>
            </Link>
          </div>
        </div>

        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <RevealItem key={c.name}>
              <article className="lift group h-full rounded-3xl border border-background/10 bg-background/[0.04] p-4 hover:border-background/25 hover:bg-background/[0.08]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-background/10">
                <img src={c.img} alt={c.name} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                {c.tag && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase text-accent-foreground">{c.tag}</span>
                )}
              </div>
              <h3 className="mt-5 font-display text-2xl">{c.name}</h3>
              <p className="mt-2 text-sm text-background/60">{c.text}</p>
              <div className="mt-4 space-y-1.5 border-t border-background/10 pt-4">
                {c.stats.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm">
                    <span className="text-accent">→</span> {s}
                  </div>
                ))}
              </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

const stages = [
  { n: "01", title: "Kickoff", text: "We align with you to understand your goals, vision, and expectations through in-depth discussions and thorough research.", bullets: ["Comprehensive Consultation", "Project Roadmap"] },
  { n: "02", title: "Execution", text: "With a clear strategy in place, our team works efficiently and collaboratively to bring ideas to life.", bullets: ["Seamless Integration", "Real Time Collaboration"] },
  { n: "03", title: "Handoff", text: "We provide all the assets, documentation, and support needed for a smooth, confident launch.", bullets: ["Ongoing Support", "Documentation"] },
];

function Process() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            We Simplify The Journey{" "}
            <em className="text-foreground/60">From Design To Launch.</em>
          </h2>
        </div>

        <RevealStagger className="grid gap-5 md:grid-cols-3">
          {stages.map((s) => (
            <RevealItem key={s.n}>
              <div className="lift h-full rounded-3xl border border-border bg-card p-7 hover:border-foreground/30">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-foreground/50">Stage {s.n}</span>
                <span className="font-display text-5xl text-foreground/15">{s.n}</span>
              </div>
              <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/65">{s.text}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

const features = [
  { tag: "PRO", title: "Boost Your Revenue", sub: "Increase Profits", desc: "Unlock new revenue streams with data-driven strategies and marketing." },
  { tag: "NEW", title: "Customizable Assets", sub: "Editable Designs", desc: "Modify and personalize design elements to fit your brand's identity." },
  { tag: "NEW", title: "Bug-Less Development", sub: "Optimized Code", desc: "Bug-less development ensures your website runs smooth and fast." },
  { tag: "NEW", title: "Award-Winning Designs", sub: "Recognized Design", desc: "Award-winning designs showcase creativity that sets us apart." },
  { tag: "PRO", title: "Lightning Fast Delivery", sub: "Quick Turnaround", desc: "Deliverables are ready when you need them, with great quality." },
  { tag: "NEW", title: "Mobile Friendly", sub: "Responsive", desc: "Mobile-friendly design ensures your site looks stunning across devices." },
];

function Features() {
  return (
    <section className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Unlimited Design Features{" "}
            <em className="text-foreground/60">Delivered In A Second!</em>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative bg-background p-7 transition hover:bg-card">
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">{f.tag}</span>
              </div>
              <h3 className="mt-6 font-display text-3xl">{f.title}</h3>
              <div className="mt-1 text-sm text-foreground/50">{f.sub}</div>
              <p className="mt-3 text-sm text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = ["Enhanced UX", "Boosted Conversions", "Fast Loading", "SEO Optimized", "Customizable", "Scalable", "Increased Engagement", "Expandable", "Secure", "User-Friendly"];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>X Studio Benefits</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            We Don't Just Design,{" "}
            <em className="text-foreground/60">We Build.</em>
            <br />
            If You Can Dream It, We Can Ship It.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {items.map((i) => (
              <span key={i} className="rounded-full border border-border bg-background px-4 py-2 text-sm hover:border-foreground">
                <span className="mr-1.5 text-accent">✦</span>
                {i}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <PrimaryCTA variant="lime">Contact Now</PrimaryCTA>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-foreground p-8 text-background">
            <img src={abstractLime} alt="" loading="lazy" className="mx-auto h-72 w-full rounded-2xl object-cover" />
            <h3 className="mt-6 font-display text-3xl">Submit Unlimited Requests</h3>
            <p className="mt-2 text-sm text-background/70">
              Enjoy the freedom to submit unlimited requests without restrictions. Whether design tweaks or full sprints, we're here at every step.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/contact" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground">Book Appointment</Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background">What is X Studio? →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  // Duplicate the full list once so the -50% keyframe loops seamlessly.
  const loop = [...allProjects, ...allProjects];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
              Selected Projects{" "}
              <em className="text-foreground/60">That Propel Your Brand.</em>
            </h2>
          </div>
          <Link to="/portfolio" className="text-sm font-medium underline underline-offset-4">View Portfolio →</Link>
        </div>
      </div>

      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Selected projects carousel"
      >
        <div className="flex w-max gap-5 animate-marquee-slow group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group/card block w-[78vw] max-w-[360px] shrink-0 sm:w-[44vw] md:w-[34vw] lg:w-[26vw]"
              aria-label={`${p.name} — ${p.category}, ${p.year}`}
            >
              <div className="overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover/card:scale-[1.06]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <div className="flex gap-2 text-xs text-foreground/60">
                  <span className="rounded-full border border-border px-2.5 py-1">{p.year}</span>
                  <span className="rounded-full border border-border px-2.5 py-1">{p.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { tag: "Development", title: "Full Website Sprint", price: "$240", time: "2–3 Week", desc: "We focus on key milestones to ship a quality site fast.", inc: ["Design + Framer Development", "Interactive Elements"] },
  { tag: "Design", title: "Full Design Package", price: "$499", time: "3–4 Week", desc: "Custom logos, brand guidelines, web design and marketing.", inc: ["Files + Branding Assets", "Easy to Edit and Access"], featured: true },
  { tag: "Development", title: "Full Stack Development", price: "$799", time: "4–6 Week", desc: "Scalable solutions for simple sites or complex apps.", inc: ["HTML + JS + React Code", "Database and Back-End"] },
];

function Services() {
  return (
    <section className="bg-foreground px-4 py-24 text-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-background/70">
              <span className="size-1.5 rounded-full bg-accent" /> Our Services
            </div>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
              Get High-Quality{" "}
              <em className="text-background/60">Clear Services Remotely.</em>
            </h2>
          </div>
          <p className="text-background/70 md:pl-12">
            Discover our range of services designed to elevate your brand and propel your business to the next level.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className={`rounded-3xl p-7 ${s.featured ? "bg-accent text-accent-foreground" : "border border-background/10 bg-background/[0.04]"}`}>
              <div className={`text-xs uppercase tracking-widest ${s.featured ? "text-accent-foreground/70" : "text-background/50"}`}>{s.tag}</div>
              <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
              <p className={`mt-3 text-sm ${s.featured ? "text-accent-foreground/80" : "text-background/65"}`}>{s.desc}</p>
              <div className={`my-6 flex items-end justify-between border-t pt-6 ${s.featured ? "border-accent-foreground/20" : "border-background/15"}`}>
                <div>
                  <div className="font-display text-4xl">{s.price}</div>
                  <div className={`text-xs ${s.featured ? "text-accent-foreground/70" : "text-background/60"}`}>/ Project</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl">{s.time}</div>
                  <div className={`text-xs ${s.featured ? "text-accent-foreground/70" : "text-background/60"}`}>Timeline</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {s.inc.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`grid size-5 place-items-center rounded-full text-[10px] ${s.featured ? "bg-accent-foreground text-accent" : "bg-accent text-accent-foreground"}`}>✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium ${s.featured ? "bg-foreground text-background" : "bg-background text-foreground"}`}>
                Book an Appointment →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const pricing = [
  { tag: "Most Pick", name: "Basic", price: "$99", was: "$450", desc: "Designed to offer great value while providing essential features to get started.", points: ["100+ Projects", "75+ Revisions", "All templates unlocked", "Unlimited Licenses", "Lifetime Updates", "Email support", "30-Days Money-back Guarantee"] },
  { tag: "Recommended", name: "Premium", price: "$2,599", desc: "For businesses looking for advanced features and premium support.", points: ["650+ Projects", "250+ Revisions", "All templates unlocked", "Unlimited Licenses", "Lifetime Updates", "Priority support", "30-Days Money-back Guarantee"], featured: true },
];

function Pricing() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Plans for all businesses,{" "}
            <em className="text-foreground/60">Personal, Agencies, Startups.</em>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pricing.map((p) => (
            <article key={p.name} className={`relative rounded-3xl border p-8 ${p.featured ? "border-foreground bg-foreground text-background" : "border-border bg-card"}`}>
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${p.featured ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}>{p.tag}</span>
                <span className={`font-display text-2xl ${p.featured ? "text-background" : ""}`}>{p.name}</span>
              </div>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display text-7xl">{p.price}</span>
                <span className={p.featured ? "text-background/60" : "text-foreground/60"}>/ Month</span>
                {p.was && <span className="ml-2 text-foreground/40 line-through">{p.was}</span>}
              </div>
              <p className={`mt-4 text-sm ${p.featured ? "text-background/70" : "text-foreground/65"}`}>{p.desc}</p>
              <ul className={`mt-6 space-y-3 border-t pt-6 text-sm ${p.featured ? "border-background/15" : "border-border"}`}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5">
                    <span className="grid size-5 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium ${p.featured ? "bg-accent text-accent-foreground" : "bg-foreground text-background"}`}>
                Book an Appointment →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "John Smith", role: "CEO", co: "Innovate Solutions", img: gallery3, text: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence." },
  { name: "Emily Davis", role: "Product Manager", co: "Nexus Digital", img: gallery1, text: "The team understood our complex requirements and provided a user-friendly, high-performing site that stands out in the market." },
  { name: "David Lee", role: "Founder", co: "GreenLeaf Enterprises", img: gallery4, text: "Innovative solutions that streamlined our operations. The website is both functional and visually stunning." },
  { name: "Mark Thompson", role: "Creative Director", co: "PixelWorks Studio", img: gallery2, text: "Blown away by the creative approach and attention to detail. They turned our ideas into a stunning website." },
];

function Testimonials() {
  return (
    <section className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Testimonial</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Customer Reviews About{" "}
            <em className="text-foreground/60">Work, Usability and Design.</em>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl border border-border bg-background p-8">
              <blockquote className="font-display text-2xl leading-snug">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img src={r.img} alt={r.name} loading="lazy" className="size-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-foreground/60">{r.role} · {r.co}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What do I need to get started?", a: "Just an idea and a goal. Book a 15-minute discovery call and we'll handle the rest from kickoff to launch." },
  { q: "What kind of customization is available?", a: "Everything is fully customizable — typography, palette, layout, animation. We tailor each build to your brand." },
  { q: "How easy is it to edit for beginners?", a: "Components are organized and documented so non-developers can update copy and assets confidently." },
  { q: "Tell me more about the money-back guarantee?", a: "If you're not satisfied within 30 days of delivery, we'll refund the full project fee — no questions asked." },
  { q: "Do I need to know how to code?", a: "No. We deliver a finished product and provide training so your team can take over with zero coding knowledge." },
  { q: "What will I get after the project?", a: "A production-ready website, source files, brand guidelines, documentation and 60 days of post-launch support." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Frequently{" "}
            <em className="text-foreground/60">Asked Questions</em>
          </h2>
          <p className="mt-6 text-foreground/70">
            Have questions? Our FAQ has you covered with quick answers to the most common inquiries.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-border rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-xl md:text-2xl">{f.q}</span>
                    <span className={`grid size-9 place-items-center rounded-full border border-border transition ${isOpen ? "rotate-45 bg-accent" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-foreground/70">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-foreground p-10 text-background md:p-20">
        <SectionLabel>Join Us Now</SectionLabel>
        <h2 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
          Each Project we Undertake{" "}
          <em className="text-background/60">is a Unique Opportunity.</em>
        </h2>
        <p className="mt-6 max-w-xl text-background/70">
          Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-6 pr-2 text-sm font-medium text-accent-foreground hover:bg-lime-deep">
            Book an Appointment
            <span className="grid size-9 place-items-center rounded-full bg-foreground/10 transition group-hover:rotate-45">↗</span>
          </Link>
          <span className="text-sm text-background/60">Made remotely with 💚 — Westhill Studio</span>
        </div>

        <img src={manLaptop} alt="" loading="lazy" className="mt-12 h-72 w-full rounded-3xl object-cover opacity-90" />
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Marquee items={["Crimson", "Raven Co.", "Gotham", "Sling", "White Stag", "Way Fields", "Westhill", "Pixel Works"]} />
        <About />
        <Results />
        <Process />
        <Features />
        <Benefits />
        <Portfolio />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
