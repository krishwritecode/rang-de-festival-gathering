import { useState } from "react";
import { Menu, X } from "lucide-react";
import { EVENT } from "@/config/event";
import { RegisterButton } from "./RegisterButton";

const NAV = [
  { href: "#festival", label: "Festival" },
  { href: "#details", label: "Details" },
  { href: "#venue", label: "Venue" },
];

function OrganizerMark() {
  return (
    <div className="flex items-center gap-3 leading-none">
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        {EVENT.organizers[0]}
      </span>
      <span aria-hidden className="h-5 w-px bg-foreground/25" />
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-teal">
        {EVENT.organizers[1]}
      </span>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" aria-label={`${EVENT.name} home`}>
          <OrganizerMark />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <RegisterButton size="lg" />
        </nav>
        <button
          className="rounded-full p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border/60 bg-background px-5 pb-6 pt-2 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-4 font-display text-2xl text-foreground"
            >
              {n.label}
            </a>
          ))}
          <RegisterButton size="xl" className="mt-6 w-full" />
        </nav>
      )}
    </header>
  );
}
