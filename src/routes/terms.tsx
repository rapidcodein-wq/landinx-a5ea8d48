import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Xstudio" },
      { name: "description", content: "The terms and conditions that govern your use of the Xstudio website and services." },
      { property: "og:title", content: "Terms & Conditions — Xstudio" },
      { property: "og:description", content: "Terms and conditions for using Xstudio services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="px-4 pt-16 pb-24 md:pt-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl">Terms & Conditions</h1>
          <p className="mt-4 text-sm text-foreground/55">Last updated: May 2026</p>

          <div className="prose-landin mt-10 space-y-8 text-foreground/80">
            <section>
              <h2 className="font-display text-2xl text-foreground">1. Agreement</h2>
              <p className="mt-3">By engaging Xstudio (&quot;we&quot;, &quot;us&quot;) for services, you agree to these terms. If you don't agree, please don't use our services.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">2. Services</h2>
              <p className="mt-3">We provide creative, design and development services as agreed in a separate statement of work. Scope, deliverables and timelines are defined per engagement.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">3. Payments</h2>
              <p className="mt-3">Unless otherwise agreed, we invoice 50% to begin work and 50% on completion. Retainers are billed monthly in advance. Late payments accrue interest at 1.5% per month.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">4. Intellectual Property</h2>
              <p className="mt-3">All deliverables transfer to you upon final payment. We retain the right to display non-confidential work in our portfolio and case studies.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">5. Confidentiality</h2>
              <p className="mt-3">We treat all information you share as confidential and will sign a mutual NDA on request.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">6. Liability</h2>
              <p className="mt-3">Our total liability for any claim is limited to the fees paid for the engagement giving rise to the claim. We are not liable for indirect or consequential damages.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">7. Termination</h2>
              <p className="mt-3">Either party may terminate an engagement with 14 days' written notice. You'll be billed for work completed up to the termination date.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">8. Governing Law</h2>
              <p className="mt-3">These terms are governed by the laws of India. Any disputes will be resolved in the courts of Ahmedabad.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">9. Contact</h2>
              <p className="mt-3">Questions about these terms? Email hello@xstudio.com.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}