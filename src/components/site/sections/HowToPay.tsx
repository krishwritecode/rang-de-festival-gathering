import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PAYMENT, STALL_WHATSAPP, WHATSAPP_URL } from "@/config/event";
import { Container, Eyebrow } from "../Section";
import { RegisterButton } from "../RegisterButton";

const STEPS = [
  { t: "Select your ticket", d: "Early Bird (Rs. 1,000, until 25 Oct) or Standard (Rs. 1,500)." },
  { t: "Complete the registration form", d: "Fill in your details and selected ticket type." },
  { t: `Send payment`, d: `Pay via ${PAYMENT.methods.join(" or ")} to ${PAYMENT.number}.` },
  { t: "Share payment proof", d: `Send your name, contact number and payment screenshot on WhatsApp to ${STALL_WHATSAPP.display}.` },
  { t: "Wait for confirmation", d: "We confirm your spot once your payment has been verified." },
];

export function HowToPay() {
  return (
    <section id="pay" className="scroll-mt-24 bg-magenta py-24 text-primary-foreground md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow className="text-turmeric">Register & pay</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">How to register & pay.</h2>
          <div className="mt-8 rounded-2xl bg-card/15 p-6 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-turmeric">{PAYMENT.methods.join(" · ")}</p>
            <p className="mt-2 font-display text-4xl font-semibold">{PAYMENT.number}</p>
          </div>
          <p className="mt-6 rounded-2xl border border-primary-foreground/40 p-4 text-sm font-semibold">
            Your registration is not confirmed until your payment is verified by our team.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <RegisterButton size="xl" label="Register & Pay" variant="ink" className="w-full" />
            <Button asChild size="xl" variant="ink" className="w-full bg-card text-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Send Payment Proof on WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <ol className="space-y-4 lg:col-span-7">
          {STEPS.map((s, i) => (
            <li key={s.t} className="flex gap-5 rounded-2xl bg-card p-6 text-foreground">
              <span className="font-display text-4xl font-semibold leading-none text-vermilion">{i + 1}</span>
              <div>
                <p className="font-display text-xl font-semibold">{s.t}</p>
                <p className="mt-1 text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
