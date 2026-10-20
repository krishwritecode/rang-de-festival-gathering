import { EVENT } from "@/config/event";
import { Container } from "../Section";
import { RegisterButton } from "../RegisterButton";
import { PaintStroke } from "../Ornaments";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-20 text-center text-ink-foreground md:py-28">
          <PaintStroke className="pointer-events-none absolute -bottom-16 left-1/2 w-[700px] -translate-x-1/2 text-magenta/40" />
          <p className="relative text-xs font-bold uppercase tracking-[0.32em] text-turmeric">{EVENT.dateLabel} · {EVENT.entry}</p>
          <h2 id="cta-title" className="relative mt-5 font-display text-5xl font-semibold leading-none md:text-8xl">
            Come add your <span className="italic text-festive">colour.</span>
          </h2>
          <div className="relative mt-10 flex justify-center">
            <RegisterButton size="xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
