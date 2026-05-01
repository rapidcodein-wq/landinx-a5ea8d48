import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Landin Studio" },
      { name: "description", content: "Answers about pricing, process, timelines, revisions, technologies and support at Landin." },
      { property: "og:title", content: "FAQ — Landin Studio" },
      { property: "og:description", content: "Answers about pricing, process, timelines and support at Landin." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What kinds of projects do you take on?", a: "Brand systems, marketing websites, e-commerce builds, SaaS product design, and high-conversion landing pages. If you need a small, senior team that ships, you're in the right place." },
  { q: "How much does a typical project cost?", a: "Brand sprints start around $4–8k, full website builds $10–25k, and end-to-end product engagements scale from there. We always quote a fixed price after a 30-min scoping call." },
  { q: "How does your process work?", a: "Three stages: Kickoff (discovery + roadmap), Execution (collaborative design and build), Handoff (assets, docs, ongoing support). You're talking to the same senior people the entire time." },
  { q: "What are typical timelines?", a: "Landing pages: 1–2 weeks. Marketing sites: 3–5 weeks. Brand + site: 6–8 weeks. Product engagements: monthly retainer. We commit to a date in writing." },
  { q: "How many revisions are included?", a: "Unlimited within the agreed scope. We work in tight feedback loops so you're never surprised at the end." },
  { q: "What technologies do you build with?", a: "React, TanStack Start, Next.js, Framer, Webflow, Shopify and Tailwind CSS. We pick the stack that best fits your team's ability to maintain it after launch." },
  { q: "Do you offer ongoing support after launch?", a: "Yes — we offer monthly care plans for hosting, updates, A/B testing and content changes. Most clients stay on for 6+ months after launch." },
  { q: "Can you work with our existing brand?", a: "Absolutely. About half of our work extends and refines existing brand systems rather than starting from scratch." },
  { q: "Do you do SEO?", a: "We bake technical SEO (semantic HTML, Core Web Vitals, structured data, sitemaps) into every site. For ongoing content SEO we partner with specialist consultants we trust." },
  { q: "How do payments work?", a: "50% to start, 50% on launch for fixed-scope projects. Retainers are billed monthly upfront. We accept bank transfer, Stripe and Wise." },
  { q: "Where are you based?", a: "Ahmedabad, India — but we work remotely with teams across Europe, North America and Asia. Calls are scheduled to overlap your timezone." },
  { q: "How do we get started?", a: "Send us a note via the contact page or WhatsApp. We'll reply within 24 hours and book a 30-minute discovery call." },
];

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section className="px-4 pt-16 pb-10 md:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95]">
              Frequently <em className="text-foreground/60">Asked.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70 md:text-lg">
              Quick answers to the questions we hear most. Don't see yours? <a href="/contact" className="underline">Get in touch</a>.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-xl md:text-2xl">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/75">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}