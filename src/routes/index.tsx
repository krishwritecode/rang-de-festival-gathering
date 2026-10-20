import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { InfoStrip } from "@/components/site/sections/InfoStrip";
import { About } from "@/components/site/sections/About";
import { Activities } from "@/components/site/sections/Activities";
import { Atmosphere } from "@/components/site/sections/Atmosphere";
import { DressCode } from "@/components/site/sections/DressCode";
import { Tickets } from "@/components/site/sections/Tickets";
import { HowToPay } from "@/components/site/sections/HowToPay";
import { Details } from "@/components/site/sections/Details";
import { Venue } from "@/components/site/sections/Venue";
import { Stalls } from "@/components/site/sections/Stalls";
import { Faq } from "@/components/site/sections/Faq";
import { FinalCta } from "@/components/site/sections/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rang De Fest — 31 Oct 2026 · RETAJ Academy, Hyderabad" },
      {
        name: "description",
        content:
          "HYD Pop-Up presents Rang De Fest: a ticketed festive night (Early Bird Rs. 1,000, Standard Rs. 1,500), 6 PM onwards on 31 October 2026 at RETAJ Academy, Qasimabad, Hyderabad.",
      },
      { property: "og:title", content: "Rang De Fest — HYD Pop-Up" },
      {
        property: "og:description",
        content: "Bright. Enjoy. Festive Colours. Joy. 31 October 2026, RETAJ Academy, Qasimabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <InfoStrip />
        <About />
        <Activities />
        <Atmosphere />
        <DressCode />
        <Tickets />
        <HowToPay />
        <Details />
        <Venue />
        <Stalls />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
