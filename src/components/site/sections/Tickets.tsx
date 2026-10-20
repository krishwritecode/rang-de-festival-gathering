import { Check } from "lucide-react";
import { PAYMENT, TICKETS } from "@/config/event";
import { Container, Eyebrow, SectionHeading } from "../Section";
import { RegisterButton } from "../RegisterButton";

export function Tickets() {
  return (
    <section id="tickets" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Eyebrow>Tickets</Eyebrow>
        <SectionHeading>Pick your pass.</SectionHeading>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Choose a ticket, fill in the registration form, then pay via {PAYMENT.methods.join(" or ")}.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TICKETS.map((t) => (
            <article
              key={t.id}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] p-8 shadow-photo transition-transform duration-300 hover:-translate-y-1 md:p-10 ${
                t.featured ? "bg-ink text-ink-foreground" : "border border-border bg-card"
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-turmeric px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                  Early Bird
                </span>
              )}
              <h3 className="font-display text-3xl font-semibold">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-turmeric" : "text-teal"} font-semibold`}>{t.note}</p>
              <p className="mt-8 font-display text-6xl font-semibold leading-none md:text-7xl">
                <span className={t.featured ? "text-festive" : "text-magenta"}>{t.priceLabel}</span>
              </p>
              <p className={`mt-2 text-sm ${t.featured ? "opacity-75" : "text-muted-foreground"}`}>per person</p>
              <ul className="mt-8 space-y-2 text-sm">
                {["Entry to Rang De Fest", "Confirmed after payment verification"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check className="size-4 text-emerald" aria-hidden /> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <RegisterButton size="xl" label={`Get ${t.name} Ticket`} className="w-full sm:w-auto" />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Mention your selected ticket type in the registration form.
        </p>
      </Container>
    </section>
  );
}
