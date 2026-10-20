import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STALL_WHATSAPP, stallWhatsAppUrl } from "@/config/event";
import { Container, Eyebrow } from "../Section";

export function Stalls() {
  return (
    <section id="stalls" className="scroll-mt-24 bg-teal py-20 text-primary-foreground md:py-24">
      <Container className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
        <div className="max-w-xl">
          <Eyebrow className="text-turmeric">For vendors & creators</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">Book your stall.</h2>
          <p className="mt-4 text-lg opacity-90">
            Want to sell, cook or showcase at Rang De Fest? Message us on WhatsApp to book a stall.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button asChild variant="ink" size="xl" className="bg-card text-foreground">
            <a href={stallWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp {STALL_WHATSAPP.display}
            </a>
          </Button>
          <span className="text-sm opacity-80">Or call {STALL_WHATSAPP.display}</span>
        </div>
      </Container>
    </section>
  );
}
