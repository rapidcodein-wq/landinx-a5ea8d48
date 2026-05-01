import brandingMonolith from "@/assets/proj/branding-monolith.jpg";
import logoSystem from "@/assets/proj/logo-system.jpg";
import packaging from "@/assets/proj/packaging.jpg";
import coffeeBrand from "@/assets/proj/coffee-brand.jpg";
import podcastBrand from "@/assets/proj/podcast-brand.jpg";
import weddingBrand from "@/assets/proj/wedding-brand.jpg";

import saasDashboard from "@/assets/proj/saas-dashboard.jpg";
import ecomFashion from "@/assets/proj/ecom-fashion.jpg";
import beautyEcom from "@/assets/proj/beauty-ecom.jpg";
import restaurantWeb from "@/assets/proj/restaurant-web.jpg";
import realestateWeb from "@/assets/proj/realestate-web.jpg";
import architecturePort from "@/assets/proj/architecture-port.jpg";
import webflowBuild from "@/assets/proj/webflow-build.jpg";
import webDev from "@/assets/proj/web-dev.jpg";

import mobileFintech from "@/assets/proj/mobile-fintech.jpg";
import fitnessApp from "@/assets/proj/fitness-app.jpg";
import musicApp from "@/assets/proj/music-app.jpg";
import logisticsApp from "@/assets/proj/logistics-app.jpg";
import travelPlatform from "@/assets/proj/travel-platform.jpg";
import healthtech from "@/assets/proj/healthtech.jpg";
import edtech from "@/assets/proj/edtech.jpg";
import web3Finance from "@/assets/proj/web3-finance.jpg";
import aiChatbot from "@/assets/proj/ai-chatbot.jpg";
import ngoPlatform from "@/assets/proj/ngo-platform.jpg";

import uxResearch from "@/assets/proj/ux-research.jpg";
import strategyWorkshop from "@/assets/proj/strategy-workshop.jpg";
import contentStrategy from "@/assets/proj/content-strategy.jpg";
import seoGrowth from "@/assets/proj/seo-growth.jpg";
import emailDesign from "@/assets/proj/email-design.jpg";

import motionReel from "@/assets/proj/motion-reel.jpg";
import videoProduction from "@/assets/proj/video-production.jpg";
import photography from "@/assets/proj/photography.jpg";
import illustration from "@/assets/proj/illustration.jpg";
import sneakerCampaign from "@/assets/proj/sneaker-campaign.jpg";
import socialCampaign from "@/assets/proj/social-campaign.jpg";
import eventLaunch from "@/assets/proj/event-launch.jpg";

export const CATEGORIES = [
  "All",
  "Branding",
  "Web Design",
  "Web Development",
  "Mobile & App",
  "UI/UX",
  "Strategy & SEO",
  "Motion & Video",
  "Marketing",
] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All">;

export type Project = {
  slug: string;
  name: string;
  client: string;
  year: number;
  category: Category;
  service: string;
  img: string;
  tags: string[];
  description: string;
  results: string[];
};

export const projects: Project[] = [
  // ============ BRANDING (6) ============
  { slug: "monolith-identity", name: "Monolith", client: "Monolith Coffee Co.", year: 2025, category: "Branding", service: "Brand Identity System", img: brandingMonolith, tags: ["Identity", "Print", "Stationery"], description: "Full identity system for a third-wave coffee roaster — monogram, stationery, packaging templates and a tone of voice guide.", results: ["+180% brand recall in surveys", "Featured in Brand New", "Roll-out across 14 cafés"] },
  { slug: "axiom-logo", name: "Axiom Mark", client: "Axiom Capital", year: 2024, category: "Branding", service: "Logo Design & Mark", img: logoSystem, tags: ["Logo", "Mark", "Wordmark"], description: "A confident geometric mark for a quantitative investment firm — engineered to read at every size from app icon to lobby signage.", results: ["Adopted as primary mark within 2 weeks", "Trademarked in 12 jurisdictions"] },
  { slug: "obsidian-packaging", name: "Obsidian", client: "Obsidian Spirits", year: 2024, category: "Branding", service: "Packaging Design", img: packaging, tags: ["Packaging", "Foil Stamp", "Premium"], description: "Matte black box with gold foil monogram and embossed maker's mark for a small-batch single-malt — built for the unboxing moment.", results: ["+44% retail sell-through", "Award: Dieline Honourable Mention"] },
  { slug: "harvest-coffee", name: "Harvest Roasters", client: "Harvest Co.", year: 2025, category: "Branding", service: "Subscription Brand & Packaging", img: coffeeBrand, tags: ["Packaging", "DTC", "Brand"], description: "Full DTC subscription brand — bag system, label illustrations, unboxing inserts and a launch campaign that filled their waitlist.", results: ["+3,200 subscribers in 30 days", "92% retention at month 3"] },
  { slug: "frequency-podcast", name: "Frequency", client: "Frequency Network", year: 2025, category: "Branding", service: "Podcast Brand & Cover Art", img: podcastBrand, tags: ["Audio", "Identity", "Cover Art"], description: "Brand identity, episode cover system and audio bumpers for a culture & business podcast network.", results: ["#7 on Apple Podcasts (Business)", "+412% download growth in 90 days"] },
  { slug: "amour-weddings", name: "Amour", client: "Amour Studio", year: 2024, category: "Branding", service: "Boutique Wedding Brand", img: weddingBrand, tags: ["Identity", "Web", "Print"], description: "Romantic, editorial brand identity and website for a luxury wedding planning boutique.", results: ["+86% inquiry rate", "ADR up 3.2× in first quarter"] },

  // ============ WEB DESIGN (4) ============
  { slug: "lumen-fashion", name: "Lumen Atelier", client: "Lumen Atelier", year: 2025, category: "Web Design", service: "E-Commerce Website Design", img: ecomFashion, tags: ["E-commerce", "Shopify", "Editorial"], description: "Editorial fashion storefront with magazine-style PDPs, predictive search and a styled lookbook system.", results: ["+38% conversion rate", "+62% AOV", "1.2s LCP on mobile"] },
  { slug: "noir-restaurant", name: "Noir Brasserie", client: "Noir Brasserie", year: 2024, category: "Web Design", service: "Hospitality Website", img: restaurantWeb, tags: ["Hospitality", "Booking", "Editorial"], description: "Reservations, menu, private dining and gift cards — wrapped in a confident black-and-bone editorial design.", results: ["+58% online reservations", "Reduced phone bookings load 40%"] },
  { slug: "marble-real-estate", name: "Marble Residences", client: "Marble Residences", year: 2025, category: "Web Design", service: "Luxury Real Estate Website", img: realestateWeb, tags: ["Real Estate", "Luxury", "CMS"], description: "A cinematic property browser with map view, virtual tours and a private agent CRM portal.", results: ["+71% qualified leads", "Avg. session 4m 12s"] },
  { slug: "concrete-architecture", name: "Concrete Studio", client: "Concrete Studio", year: 2024, category: "Web Design", service: "Architecture Portfolio", img: architecturePort, tags: ["Portfolio", "Architecture", "Editorial"], description: "Brutalist-inspired portfolio for an award-winning architecture practice — every project deserves its own museum room.", results: ["3 inbound RFPs in week 1", "Featured on Awwwards"] },

  // ============ WEB DEVELOPMENT (4) ============
  { slug: "atlas-saas", name: "Atlas SaaS Marketing", client: "Atlas Analytics", year: 2025, category: "Web Development", service: "Next.js Marketing Site", img: saasDashboard, tags: ["Next.js", "MDX", "CMS"], description: "Marketing site, docs, blog and changelog built on Next.js with a custom MDX content system.", results: ["98 Lighthouse score", "+47% trial signups", "Shipped in 6 weeks"] },
  { slug: "drift-webflow", name: "Drift Studio Site", client: "Drift Studio", year: 2024, category: "Web Development", service: "Webflow CMS Build", img: webflowBuild, tags: ["Webflow", "CMS", "Animation"], description: "Editor-friendly Webflow build with a CMS-driven case study system and bespoke scroll-tied animations.", results: ["Shipped in 3 weeks", "Editing time cut by 80%"] },
  { slug: "ledger-platform", name: "Ledger Platform", client: "Ledger Inc.", year: 2025, category: "Web Development", service: "Custom Platform Engineering", img: webDev, tags: ["TypeScript", "Postgres", "Engineering"], description: "Custom internal platform — auth, billing, role-based access and a full design system implementation.", results: ["Replaced 3 SaaS tools", "$11k/mo infra savings"] },
  { slug: "kindred-ngo", name: "Kindred Foundation", client: "Kindred Foundation", year: 2024, category: "Web Development", service: "Donation Platform", img: ngoPlatform, tags: ["Stripe", "CMS", "Accessibility"], description: "Donation platform with recurring giving, campaign pages and an accessible donor portal — WCAG AA throughout.", results: ["+162% recurring donations", "WCAG 2.1 AA certified"] },

  // ============ MOBILE & APP (6) ============
  { slug: "vault-fintech", name: "Vault Banking App", client: "Vault Bank", year: 2025, category: "Mobile & App", service: "Mobile Banking App", img: mobileFintech, tags: ["iOS", "Android", "Fintech"], description: "End-to-end product design for a challenger bank — onboarding, accounts, payments, cards, support.", results: ["4.8★ App Store rating", "+220% MAU in 6 months"] },
  { slug: "pulse-fitness", name: "Pulse Fitness App", client: "Pulse Athletics", year: 2024, category: "Mobile & App", service: "Fitness & Wellness App", img: fitnessApp, tags: ["Health", "Wearables", "iOS"], description: "Workout planning, wearables sync and AI-coached programs — designed and built end-to-end.", results: ["Top 25 Health & Fitness — US", "78% week-4 retention"] },
  { slug: "wave-music", name: "Wave Music", client: "Wave Audio", year: 2025, category: "Mobile & App", service: "Music Streaming App", img: musicApp, tags: ["Audio", "Streaming", "Mobile"], description: "Indie-first music streaming app with curated stations, offline listening and a creator royalty dashboard.", results: ["1.2M downloads in launch quarter", "Featured by Apple"] },
  { slug: "shipline-logistics", name: "Shipline", client: "Shipline Logistics", year: 2024, category: "Mobile & App", service: "Logistics & Delivery App", img: logisticsApp, tags: ["Logistics", "B2B", "Realtime"], description: "Driver and dispatch apps with realtime tracking, proof-of-delivery and a route-optimisation engine.", results: ["−24% delivery time", "+38% driver NPS"] },
  { slug: "wanderlust-travel", name: "Wanderlust", client: "Wanderlust Travel", year: 2025, category: "Mobile & App", service: "Travel Booking Platform", img: travelPlatform, tags: ["Travel", "Cross-platform", "Maps"], description: "Cross-platform travel app — flights, stays, experiences and a beautifully designed itinerary builder.", results: ["+54% booking conversion", "Featured: Google Play Best of"] },
  { slug: "cipher-ai", name: "Cipher AI Assistant", client: "Cipher AI", year: 2025, category: "Mobile & App", service: "AI Chatbot Product", img: aiChatbot, tags: ["AI", "LLM", "Product"], description: "Conversational AI assistant with multi-modal inputs, memory and a polished onboarding flow.", results: ["+19% paid conversion", "$2.1M ARR in year one"] },

  // ============ UI/UX (3) ============
  { slug: "vitals-healthtech", name: "Vitals Health", client: "Vitals Health", year: 2025, category: "UI/UX", service: "Healthtech Product Design", img: healthtech, tags: ["Healthtech", "B2B", "Design System"], description: "Patient portal and clinician dashboard for a remote-care platform — strict accessibility and design-system rigour.", results: ["−31% support tickets", "HIPAA-aligned design system"] },
  { slug: "scholar-edtech", name: "Scholar", client: "Scholar Learning", year: 2024, category: "UI/UX", service: "EdTech Learning Platform", img: edtech, tags: ["EdTech", "Web", "Mobile"], description: "Self-paced learning platform with cohort-based modes, certificates and instructor analytics.", results: ["+47% course completion", "+92 NPS"] },
  { slug: "compass-ux", name: "Compass UX Audit", client: "Compass Co.", year: 2025, category: "UI/UX", service: "UX Research & Audit", img: uxResearch, tags: ["Research", "Audit", "Discovery"], description: "Six-week research and audit engagement — usability testing, journey mapping and a prioritised roadmap.", results: ["−38% checkout drop-off after fixes", "12-month roadmap delivered"] },

  // ============ STRATEGY & SEO (4) ============
  { slug: "north-star-strategy", name: "North Star Strategy", client: "North Star Co.", year: 2025, category: "Strategy & SEO", service: "Brand & Product Strategy", img: strategyWorkshop, tags: ["Workshop", "Strategy", "Positioning"], description: "Two-week strategy sprint — positioning, messaging architecture and a 12-month go-to-market roadmap.", results: ["Closed Series A within 90 days", "Sales cycle cut by 22%"] },
  { slug: "summit-seo", name: "Summit SEO Engine", client: "Summit Apparel", year: 2024, category: "Strategy & SEO", service: "Technical SEO & Growth", img: seoGrowth, tags: ["SEO", "Technical", "Content"], description: "Technical SEO overhaul, internal linking strategy and a 60-piece content programme — all measured in revenue.", results: ["+312% organic traffic", "+186% organic revenue"] },
  { slug: "field-notes-content", name: "Field Notes", client: "Field Notes Quarterly", year: 2025, category: "Strategy & SEO", service: "Editorial Content Strategy", img: contentStrategy, tags: ["Editorial", "Content", "Strategy"], description: "Editorial strategy, voice guide and a quarterly publishing calendar for a B2B thought-leadership programme.", results: ["+58% LinkedIn followers", "12 inbound press features"] },
  { slug: "envelope-email", name: "Envelope", client: "Envelope DTC", year: 2024, category: "Strategy & SEO", service: "Email & Lifecycle Design", img: emailDesign, tags: ["Email", "Lifecycle", "Klaviyo"], description: "Welcome, abandoned cart, post-purchase and winback flows — designed, written and engineered in Klaviyo.", results: ["+27% revenue from email", "+41% open rate vs. baseline"] },

  // ============ MOTION & VIDEO (4) ============
  { slug: "kinetic-reel", name: "Kinetic Reel", client: "Kinetic Type Co.", year: 2025, category: "Motion & Video", service: "Motion Design Reel", img: motionReel, tags: ["Motion", "3D", "Brand"], description: "Brand motion system — logo build, transitions, lower thirds and a launch sizzle reel.", results: ["7M+ views in launch month", "Adopted across all brand video"] },
  { slug: "cinemark-launch", name: "Cinemark Launch Film", client: "Cinemark Studio", year: 2024, category: "Motion & Video", service: "Brand Film Production", img: videoProduction, tags: ["Film", "Production", "Direction"], description: "60-second brand film — directed, shot and finished — used as the cornerstone of a Series B raise.", results: ["Closed $40M Series B", "Festival selection: SXSW"] },
  { slug: "atelier-photography", name: "Atelier Editorial", client: "Atelier Magazine", year: 2025, category: "Motion & Video", service: "Editorial Photography", img: photography, tags: ["Photography", "Editorial", "Direction"], description: "Cover and editorial photography direction for a fashion magazine's annual portfolio issue.", results: ["Cover of the year — Folio Awards", "Sell-out newsstand issue"] },
  { slug: "story-illustration", name: "Story Illustrations", client: "Story App", year: 2024, category: "Motion & Video", service: "Custom Illustration System", img: illustration, tags: ["Illustration", "System", "Brand"], description: "Custom illustration system — characters, scenes and 60+ spot illustrations for a children's reading app.", results: ["+44% session length", "Featured: App Store Kids"] },

  // ============ MARKETING (5) ============
  { slug: "stride-sneakers", name: "Stride Campaign", client: "Stride Athletics", year: 2025, category: "Marketing", service: "Product Launch Campaign", img: sneakerCampaign, tags: ["Campaign", "Launch", "Creative"], description: "Cross-channel launch campaign for a flagship sneaker drop — creative, paid media, PR and a sold-out launch event.", results: ["Sold out in 11 minutes", "+5.2M earned impressions"] },
  { slug: "lens-social", name: "Lens Social Studio", client: "Lens Lifestyle", year: 2024, category: "Marketing", service: "Social Media Production", img: socialCampaign, tags: ["Social", "Content", "Production"], description: "Monthly social content engine — 60 assets / month including reels, carousels and editorial photography.", results: ["+220% follower growth", "+84% engagement rate"] },
  { slug: "summit-event", name: "Summit '25 Conference", client: "Summit Conference", year: 2025, category: "Marketing", service: "Event Brand & Site", img: eventLaunch, tags: ["Event", "Brand", "Web"], description: "Event identity, ticketing site, on-site signage and post-event follow-up assets for a 2,000-seat conference.", results: ["Sold out in 6 days", "94 attendee NPS"] },
  { slug: "ledger-web3", name: "Ledger Web3", client: "Ledger Web3", year: 2025, category: "Marketing", service: "Web3 Brand Launch", img: web3Finance, tags: ["Web3", "Brand", "Launch"], description: "Brand identity, narrative, marketing site and launch campaign for a regulated DeFi platform.", results: ["$28M in deposits — first 30 days", "Top of CryptoSlate launch board"] },
  { slug: "obsidian-pr", name: "Obsidian PR Push", client: "Obsidian Spirits", year: 2024, category: "Marketing", service: "PR & Influencer Campaign", img: packaging, tags: ["PR", "Influencer", "Creative"], description: "Influencer seeding programme and PR push for a premium spirits launch — 80 hand-picked tastemakers, one beautifully made box.", results: ["120+ pieces of organic coverage", "+44% DTC sales lift"] },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
