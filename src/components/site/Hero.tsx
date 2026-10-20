import { CalendarDays, Clock, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/config/event";
import { RegisterButton } from "./RegisterButton";
import { PaintStroke, Botanical } from "./Ornaments";
import heroImg from "@/assets/hero-festival.jpg";

const FACTS = [
  { icon: CalendarDays, label: "Date", value: EVENT.dateLabel },
  { icon: Clock, label: "Time", value: EVENT.timeLabel },
  { icon: MapPin, label: "Venue", value: `${EVENT.venue}, ${EVENT.venueArea}` },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <PaintStroke className="pointer-events-none absolute -left-24 top-10 w-[520px] text-turmeric/50" />
      <Botanical className="pointer-events-none absolute -right-10 bottom-0 hidden w-64 text-emerald/30 lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-10 md:px-8 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="animate-rise lg:col-span-7 lg:pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-vermilion">
              {EVENT.presenter} presents
            </p>
            <span className="rounded-full border border-emerald/40 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-emerald">
              {EVENT.entry}
            </span>
          </div>

          <h1 className="mt-5 font-display text-[clamp(4rem,13vw,10rem)] font-semibold leading-[0.85] tracking-[-0.03em] text-foreground">
            Rang <span className="italic text-festive">De</span>
            <br />
            Fest
          </h1>

          <p className="mt-6 font-display text-xl italic text-magenta md:text-2xl">{EVENT.tagline}</p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            An evening of colour, music, food and handpicked stalls — come together under the
            lights for a joyful festive night out with family and friends.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RegisterButton size="xl" />
            <Button asChild variant="ink" size="xl">
              <a href="#festival">
                Explore the Festival
                <ArrowDown />
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-festive opacity-90" aria-hidden />
          <figure className="relative overflow-hidden rounded-[2rem] shadow-photo">
            <img
              src={heroImg}
              alt="Festival night at a marketplace with marigold garlands, lanterns and guests in festive attire"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/90 px-5 py-4 backdrop-blur">
              <p className="font-display text-3xl font-semibold leading-none text-foreground">31.10</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-vermilion">
                {EVENT.timeLabel} · {EVENT.venueArea}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
