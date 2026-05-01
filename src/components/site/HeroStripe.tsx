import { motion } from "framer-motion";

const words = [
  "Branding",
  "Web Design",
  "Development",
  "Strategy",
  "Identity",
  "Motion",
  "Framer",
  "Launch",
  "Growth",
  "Studio",
  "Creative",
  "Direction",
];

export function HeroStripe() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 overflow-hidden"
    >
      {/* Soft top/bottom fade so the stripe blends into the page */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]">
        {/* Animated gradient bands */}
        <motion.div
          initial={{ x: "-10%" }}
          animate={{ x: ["-10%", "10%", "-10%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.92 0.12 95 / 0) 0%, oklch(0.88 0.16 80 / 0.55) 14%, oklch(0.86 0.18 50 / 0.6) 28%, oklch(0.82 0.2 25 / 0.55) 42%, oklch(0.78 0.22 350 / 0.55) 56%, oklch(0.82 0.18 300 / 0.55) 70%, oklch(0.88 0.18 220 / 0.55) 84%, oklch(0.92 0.12 180 / 0) 100%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          initial={{ x: "5%" }}
          animate={{ x: ["5%", "-8%", "5%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-70 mix-blend-screen"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.9 0.18 130 / 0.5) 20%, oklch(0.85 0.2 200 / 0.55) 50%, oklch(0.85 0.2 320 / 0.5) 80%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle grain over the stripe */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,oklch(0_0_0)_1px,transparent_0)] [background-size:4px_4px]" />
      </div>

      {/* Floating words */}
      <div className="absolute inset-0">
        {words.map((w, i) => {
          const top = 10 + ((i * 13) % 80);
          const left = (i * 17) % 95;
          const delay = (i % 6) * 0.6;
          const dur = 9 + (i % 5);
          return (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0, 0.8, 0.8, 0], y: [8, -6, -6, -14] }}
              transition={{
                duration: dur,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
              style={{ top: `${top}%`, left: `${left}%` }}
              className="absolute font-display text-sm tracking-tight text-foreground/55 md:text-base"
            >
              {w}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
