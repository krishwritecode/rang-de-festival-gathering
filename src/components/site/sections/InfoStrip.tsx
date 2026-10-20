import { EVENT } from "@/config/event";

export function InfoStrip() {
  const items = [EVENT.dateLabel, EVENT.timeLabel, `${EVENT.venue}, ${EVENT.venueArea}`, EVENT.entry];
  return (
    <div className="bg-primary text-primary-foreground">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 text-sm font-semibold tracking-wide md:justify-between md:px-8">
        {items.map((t, i) => (
          <li key={t} className="flex items-center gap-8">
            {i > 0 && <span aria-hidden className="hidden size-1.5 rounded-full bg-turmeric md:block" />}
            <span className={i === 3 ? "uppercase tracking-[0.2em] text-turmeric" : ""}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
