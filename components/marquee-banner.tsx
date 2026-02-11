"use client";

export default function MarqueeBanner() {
  const items = [
    "GOLD",
    "DIAMOND",
    "PLATINUM",
    "RINGS",
    "NECKLACES",
    "EARRINGS",
    "BRACELETS",
    "BANGLES",
    "PENDANTS",
    "CHAINS",
  ];

  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-4">
      <div className="animate-marquee flex w-max gap-8">
        {[...items, ...items].map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="text-sm tracking-[0.3em] text-muted-foreground">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
