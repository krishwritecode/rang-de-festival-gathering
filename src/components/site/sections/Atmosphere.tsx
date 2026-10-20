import friends from "@/assets/atmos-friends.jpg";
import food from "@/assets/atmos-food.jpg";
import stall from "@/assets/atmos-stall.jpg";
import { Container, Eyebrow, SectionHeading } from "../Section";

export function Atmosphere() {
  return (
    <section aria-labelledby="atmos-title" className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>The atmosphere</Eyebrow>
          <SectionHeading>
            <span id="atmos-title">Lights, laughter and <span className="italic text-vermilion">long evenings.</span></span>
          </SectionHeading>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <figure className="overflow-hidden rounded-[1.75rem] shadow-photo md:col-span-5 md:row-span-2">
            <img src={friends} alt="Friends in white outfits and colourful dupattas laughing under string lights" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </figure>
          <figure className="overflow-hidden rounded-[1.75rem] shadow-photo md:col-span-7">
            <img src={food} alt="A festive street food stall with snacks and warm lights" width={1280} height={960} loading="lazy" className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </figure>
          <figure className="overflow-hidden rounded-[1.75rem] shadow-photo md:col-span-7">
            <img src={stall} alt="A stall of bangles and embroidered fabrics lit by lanterns" width={1280} height={960} loading="lazy" className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </figure>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Illustrative imagery of a festive evening.</p>
      </Container>
    </section>
  );
}
