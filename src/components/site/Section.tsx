import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-bold uppercase tracking-[0.32em] text-vermilion", className)}>{children}</p>
  );
}

export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl", className)}>
      {children}
    </h2>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-7xl px-5 md:px-8", className)}>{children}</div>;
}
