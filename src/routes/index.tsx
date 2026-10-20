import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rang De Fest — 31 Oct 2026 · RETAJ Academy, Hyderabad" },
      {
        name: "description",
        content:
          "HYD Pop-Up presents Rang De Fest: a free-entry festive night, 6 PM–12 AM on 31 October 2026 at RETAJ Academy, Qasimabad, Hyderabad.",
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
        <section id="festival" className="scroll-mt-24" />
        <section id="details" className="scroll-mt-24" />
        <section id="venue" className="scroll-mt-24" />
      </main>
    </div>
  );
}
