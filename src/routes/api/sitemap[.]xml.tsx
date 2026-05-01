import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/api/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const base = "https://landinx.lovable.app";
        const staticPaths = ["/", "/about", "/portfolio", "/contact", "/faq", "/terms", "/privacy", "/sitemap"];
        const urls = [
          ...staticPaths.map((p) => `${base}${p}`),
          ...projects.map((p) => `${base}/portfolio/${p.slug}`),
        ];
        const today = new Date().toISOString().slice(0, 10);
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
          `\n</urlset>\n`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});