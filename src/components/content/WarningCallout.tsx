import type { ReactNode } from "react";

export default function WarningCallout({ children }: { children: ReactNode }) {
  return (
    <aside
      className="offset-border-sm my-8 border-l-8 border-l-red-700 bg-red-50 p-6"
      role="alert"
    >
      <p className="mb-2 font-mono-custom text-xs font-bold tracking-widest text-red-700 uppercase">
        Warning
      </p>
      <div className="font-slab text-ink leading-relaxed [&>p:last-child]:mb-0">{children}</div>
    </aside>
  );
}
