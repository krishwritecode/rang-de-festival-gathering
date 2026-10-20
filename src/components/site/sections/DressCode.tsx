import { DRESS_CODE } from "@/config/event";
import { Container, Eyebrow } from "../Section";

const SWATCHES = ["bg-magenta", "bg-vermilion", "bg-turmeric", "bg-teal", "bg-emerald"];

export function DressCode() {
  return (
    <section aria-labelledby="dress-title" className="bg-ink py-24 text-ink-foreground md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow className="text-turmeric">Dress code</Eyebrow>
          <h2 id="dress-title" className="mt-4 font-display text-5xl font-semibold leading-none tracking-tight md:text-7xl">
            Wear <span className="italic">white.</span>
            <br />
            Add <span className="italic text-festive">colour.</span>
          </h2>
        </div>
        <div>
          <p className="font-display text-2xl leading-snug md:text-3xl">{DRESS_CODE}</p>
          <div className="mt-8 flex gap-2" aria-hidden>
            {SWATCHES.map((c) => (
              <span key={c} className={`h-16 flex-1 rounded-full ${c}`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
