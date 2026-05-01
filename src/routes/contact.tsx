import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { EMAIL, EMAIL_HREF, LOCATION, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Xstudio — Let's Work Together" },
      { name: "description", content: "Reach out and we'll get back to you within 24 hours. Call, WhatsApp, or send us a message." },
      { property: "og:title", content: "Contact Xstudio — Let's Work Together" },
      { property: "og:description", content: "Reach out and we'll get back to you within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string" && !fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Message sent!", { description: "We'll get back to you soon." });
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section className="px-4 pt-16 pb-10 md:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95]">
              Let's Work <em className="text-foreground/60">Together.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70 md:text-lg">
              Reach out and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="font-display text-3xl">Get in touch</h2>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href={EMAIL_HREF} className="flex items-start gap-3 hover:text-foreground/80">
                      <Mail className="size-5 text-accent" />
                      <div>
                        <div className="text-xs uppercase tracking-widest text-foreground/50">Email</div>
                        <div className="mt-0.5">{EMAIL}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={PHONE_TEL} className="flex items-start gap-3 hover:text-foreground/80">
                      <Phone className="size-5 text-accent" />
                      <div>
                        <div className="text-xs uppercase tracking-widest text-foreground/50">Phone</div>
                        <div className="mt-0.5">{PHONE_DISPLAY}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-foreground/80">
                      <MessageCircle className="size-5 text-accent" />
                      <div>
                        <div className="text-xs uppercase tracking-widest text-foreground/50">WhatsApp</div>
                        <div className="mt-0.5">{PHONE_DISPLAY}</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="size-5 text-accent" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/50">Location</div>
                      <div className="mt-0.5">{LOCATION}</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/85">
                    <Phone className="size-4" /> Call Us
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white" style={{ backgroundColor: "#25D366" }}>
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-background p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Phone (optional)" name="phone" type="tel" error={errors.phone} className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-foreground/60">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/85 disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-widest text-foreground/60">{label}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}