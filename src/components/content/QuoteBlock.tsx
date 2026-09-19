import type { ReactNode } from "react";

export default function QuoteBlock({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-ink pl-6 font-slab text-lg text-muted italic">
      {children}
    </blockquote>
  );
}
