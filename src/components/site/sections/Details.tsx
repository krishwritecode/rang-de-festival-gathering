import { EVENT } from "@/config/event";
import { Container, Eyebrow, SectionHeading } from "../Section";
import { RegisterButton } from "../RegisterButton";

export function Details() {
  const facts = [
    { k: "Date", v: EVENT.dateLabel, sub: "Saturday evening" },
    { k: "Time", v: EVENT.timeLabel, sub: "Doors open at 6 PM" },
    { k: "Venue", v: EVENT.venue, sub: EVENT.venueArea },
  ];
  return (
    <section id="details" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Eyebrow>Event details</Eyebrow>
        <SectionHeading>Save the date.</SectionHeading>
        <dl className="mt-14 grid border-y border-border md:grid-cols-3">
          {facts.map((f, i) => (
            <div key={f.k} className={`py-8 md:px-8 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : "md:pl-0"}`}>
              <dt className="text-xs font-bold uppercase tracking-[0.25em] text-teal">{f.k}</dt>
              <dd className="mt-3 font-display text-3xl font-semibold md:text-4xl">{f.v}</dd>
              <dd className="mt-2 text-muted-foreground">{f.sub}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <RegisterButton size="xl" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">{EVENT.entry}</span>
        </div>
      </Container>
    </section>
  );
}
