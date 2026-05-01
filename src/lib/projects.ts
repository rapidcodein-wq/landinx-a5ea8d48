import caseWatch from "@/assets/case-watch.jpg";
import caseBlackBottle from "@/assets/case-black-bottle.jpg";
import caseBottle from "@/assets/case-bottle.jpg";
import caseBuilding from "@/assets/case-building.jpg";

export type Project = {
  slug: string;
  name: string;
  year: number;
  category: "E-Commerce" | "Agency" | "SaaS" | "Landing Page";
  img: string;
  tags: string[];
  description: string;
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "way-fields",
    name: "Way Fields",
    year: 2024,
    category: "E-Commerce",
    img: caseWatch,
    tags: ["Brand", "Shopify", "Art Direction"],
    description:
      "A heritage-modern e-commerce experience for a boutique watch label. We rebuilt the brand system, photography direction and Shopify storefront end-to-end.",
    results: ["+38% conversion rate", "+62% average order value", "1.2s LCP on mobile"],
  },
  {
    slug: "raven-studio",
    name: "Raven Studio",
    year: 2025,
    category: "Agency",
    img: caseBlackBottle,
    tags: ["Identity", "Website", "Motion"],
    description:
      "A confident black-and-bone identity and editorial site for a multidisciplinary agency. Designed to feel like a magazine, built to ship like a product.",
    results: ["+210% inbound leads", "Featured on Awwwards", "92 Lighthouse score"],
  },
  {
    slug: "white-stag",
    name: "White Stag",
    year: 2024,
    category: "SaaS",
    img: caseBottle,
    tags: ["Product Design", "SaaS", "Webflow"],
    description:
      "Marketing site, design system and onboarding flow for a vertical SaaS in the hospitality space. Clean, dense UI with a warm editorial feel.",
    results: ["+47% trial signups", "−31% churn in onboarding", "Shipped in 6 weeks"],
  },
  {
    slug: "sling-interactive",
    name: "Sling Interactive",
    year: 2023,
    category: "Landing Page",
    img: caseBuilding,
    tags: ["Landing Page", "Framer", "Copy"],
    description: "A high-conversion launch page for an interactive media studio's flagship product, built in Framer.",
    results: ["+58% demo bookings", "Top 10 Product Hunt launch"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}