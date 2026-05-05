// Dual-target config:
//  - On Vercel (VERCEL=1 env var, set automatically by Vercel): use Nitro adapter for SSR.
//  - Everywhere else (Lovable platform, local dev): use the default Cloudflare Worker build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  plugins: isVercel ? [nitro()] : [],
});
