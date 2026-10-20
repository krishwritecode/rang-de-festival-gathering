import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DRESS_CODE, EVENT, STALL_WHATSAPP } from "@/config/event";
import { Container, Eyebrow, SectionHeading } from "../Section";

const FAQS = [
  { q: "How much are tickets?", a: "Early Bird tickets are Rs. 1,000 (until 25 October 2026); Standard tickets are Rs. 1,500." },
  { q: "How do I pay?", a: "Pay via Easypaisa or JazzCash to 0327-1004195, then send your name, contact number and payment screenshot on WhatsApp to 0327-1004195. Registration is confirmed only after payment is verified." },
  { q: "When and where is it?", a: `${EVENT.dateLabel}, ${EVENT.timeLabel}, at ${EVENT.venue}, ${EVENT.venueAddress}.` },
  { q: "How do I register?", a: "Use any Register Now button on this page. Complete the form, pay, and send your payment proof on WhatsApp." },
  { q: "Is there a dress code?", a: `${DRESS_CODE}.` },
  { q: "How can I book a stall?", a: `Message us on WhatsApp at ${STALL_WHATSAPP.display}.` },
  { q: "What can I do there?", a: "Shopping stalls, food stalls, multiple vendors, a creators meetup and games & fun activities." },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading>Good to know.</SectionHeading>
        </div>
        <Accordion type="single" collapsible className="lg:col-span-8">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="py-6 text-left font-display text-xl font-semibold hover:no-underline md:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
