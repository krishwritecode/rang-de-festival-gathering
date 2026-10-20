import { EVENT, STALL_WHATSAPP } from "@/config/event";
import { Container } from "./Section";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col justify-between gap-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-semibold text-foreground">{EVENT.name}</p>
          <p className="mt-1">Organised by {EVENT.organizers.join(" & ")}</p>
        </div>
        <div className="md:text-right">
          <p>{EVENT.dateLabel} · {EVENT.timeLabel}</p>
          <p>{EVENT.venue}, {EVENT.venueArea}</p>
          <p>Stalls: WhatsApp {STALL_WHATSAPP.display}</p>
        </div>
      </Container>
    </footer>
  );
}
