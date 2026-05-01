import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — X Studio" },
      { name: "description", content: "How X Studio collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — X Studio" },
      { property: "og:description", content: "How X Studio handles your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="px-4 pt-16 pb-24 md:pt-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-foreground/55">Last updated: May 2026</p>

          <div className="mt-10 space-y-8 text-foreground/80">
            <section>
              <h2 className="font-display text-2xl text-foreground">1. Information we collect</h2>
              <p className="mt-3">We collect information you give us directly (name, email, phone, project details when you contact us) and basic analytics data when you visit our site (pages viewed, browser, device type).</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">2. How we use it</h2>
              <p className="mt-3">To respond to your enquiries, deliver the services you've engaged us for, send occasional project updates, and improve the site. We never sell your data.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">3. Cookies</h2>
              <p className="mt-3">We use a minimal set of cookies for essential site functionality and anonymised analytics. You can accept or decline cookies via the banner shown on your first visit, and clear them at any time in your browser settings.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">4. Sharing</h2>
              <p className="mt-3">We share data only with trusted service providers (hosting, email, analytics) who are bound by their own privacy obligations. We never share your data with marketers or third parties for advertising.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">5. Your rights</h2>
              <p className="mt-3">You can request access to, correction of, or deletion of your personal data at any time by emailing us. We respond within 30 days.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">6. Security</h2>
              <p className="mt-3">We use industry-standard encryption (HTTPS, encrypted backups) and limit internal access to personal data on a need-to-know basis.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground">7. Contact</h2>
              <p className="mt-3">Privacy questions? Email <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}