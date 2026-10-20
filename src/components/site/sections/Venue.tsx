import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT, VENUE_MAP_URL } from "@/config/event";
import { Container, Eyebrow, SectionHeading } from "../Section";
import { Botanical } from "../Ornaments";

export function Venue() {
  return (
    <section id="venue" className="scroll-mt-24 pb-24 md:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-secondary px-7 py-14 md:px-14 md:py-20">
          <Botanical className="pointer-events-none absolute -right-6 -top-6 w-48 text-emerald/25" />
          <Eyebrow>Venue</Eyebrow>
          <SectionHeading>{EVENT.venue}</SectionHeading>
          <p className="mt-4 flex items-center gap-2 text-lg text-muted-foreground">
            <MapPin className="size-5 text-magenta" aria-hidden /> {EVENT.venueArea}
          </p>
          <div className="mt-8">
            {VENUE_MAP_URL ? (
              <Button asChild variant="ink" size="xl">
                <a href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer">
                  Open in Maps <ArrowUpRight />
                </a>
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">Map directions will be shared closer to the event.</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
