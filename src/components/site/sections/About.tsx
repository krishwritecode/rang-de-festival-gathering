import { Container, Eyebrow, SectionHeading } from "../Section";

const PILLARS = [
  { word: "Community", text: "Neighbours, families and friends gathering in one place for a night out together.", color: "text-magenta" },
  { word: "Creativity", text: "Local makers and creators showing what they make, cook and design.", color: "text-vermilion" },
  { word: "Culture", text: "A festive setting inspired by colour, music and South Asian tradition.", color: "text-teal" },
  { word: "Celebration", text: "Six hours of food, shopping, games and joyful company under the lights.", color: "text-emerald" },
];

export function About() {
  return (
    <section id="festival" className="scroll-mt-24 py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>About the festival</Eyebrow>
          <SectionHeading>
            A night painted in <span className="italic text-magenta">every colour.</span>
          </SectionHeading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Rang De Fest is a festive pop-up evening by HYD Pop-Up at RETAJ Academy — a place to
            shop, eat, meet and celebrate with Hyderabad.
          </p>
        </div>
        <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {PILLARS.map((p, i) => (
            <li key={p.word} className="border-t border-border pt-6">
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
              <h3 className={`mt-2 font-display text-3xl font-semibold ${p.color}`}>{p.word}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
