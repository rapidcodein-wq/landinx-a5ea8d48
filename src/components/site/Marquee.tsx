export function Marquee({ items }: { items: string[] }) {
  const all = [...items, ...items];
  return (
    <div className="marquee-track relative overflow-hidden border-y border-border/70 bg-secondary/40 py-6">
      <div className="marquee flex w-max gap-12 whitespace-nowrap [animation-play-state:running]">
        {all.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl text-foreground/70 md:text-4xl"
          >
            {t}
            <span className="ml-12 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
