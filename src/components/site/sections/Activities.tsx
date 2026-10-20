import { ShoppingBag, UtensilsCrossed, Store, Users, Sparkles } from "lucide-react";
import { Container, Eyebrow, SectionHeading } from "../Section";

const ITEMS = [
  { title: "Shopping Stalls", text: "Clothing, jewellery, accessories and festive finds to browse all evening.", icon: ShoppingBag, tone: "bg-magenta text-primary-foreground", span: "md:col-span-4 md:row-span-2" },
  { title: "Food Stalls", text: "Street snacks, sweets and drinks to keep the night going.", icon: UtensilsCrossed, tone: "bg-turmeric text-foreground", span: "md:col-span-2" },
  { title: "Multiple Vendors", text: "A wide mix of local sellers in one place.", icon: Store, tone: "bg-card text-foreground border border-border", span: "md:col-span-2" },
  { title: "Creators Meetup", text: "Meet the creators and makers of Hyderabad in person.", icon: Users, tone: "bg-teal text-primary-foreground", span: "md:col-span-3" },
  { title: "Games & Fun Activities", text: "Playful activities for friends and families to enjoy together.", icon: Sparkles, tone: "bg-vermilion text-primary-foreground", span: "md:col-span-3" },
];

export function Activities() {
  return (
    <section id="activities" className="scroll-mt-24 bg-secondary/60 py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>What's on</Eyebrow>
            <SectionHeading>Something for everyone.</SectionHeading>
          </div>
          <p className="max-w-sm text-muted-foreground">Five ways to spend the evening — wander, taste, meet and play.</p>
        </div>
        <div className="mt-14 grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-6">
          {ITEMS.map(({ title, text, icon: Icon, tone, span }, i) => (
            <article key={title} className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-500 hover:-translate-y-1 ${tone} ${span}`}>
              <div className="flex items-start justify-between">
                <Icon className="size-7 opacity-90" aria-hidden />
                <span className="font-display text-sm italic opacity-70">0{i + 1}</span>
              </div>
              <div className={i === 0 ? "mt-24" : "mt-10"}>
                <h3 className={`font-display font-semibold leading-tight ${i === 0 ? "text-5xl md:text-6xl" : "text-3xl"}`}>{title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed opacity-85">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
