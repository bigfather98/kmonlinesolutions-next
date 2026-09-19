import type { ReactNode } from "react";

export default function NoteCallout({ children }: { children: ReactNode }) {
  return (
    <aside className="offset-border-sm my-8 border-l-8 border-l-accent bg-accent/10 p-6" role="note">
      <p className="mb-2 font-mono-custom text-xs font-bold tracking-widest text-accent-hover uppercase">
        Note
      </p>
      <div className="font-slab text-ink leading-relaxed [&>p:last-child]:mb-0">{children}</div>
    </aside>
  );
}
