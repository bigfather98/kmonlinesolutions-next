import type { ReactNode } from "react";

interface CitationBlockProps {
  statement: ReactNode;
  source: string | null;
  url: string | null;
}

export default function CitationBlock({ statement, source, url }: CitationBlockProps) {
  return (
    <figure className="offset-border-sm my-8 border-l-8 border-l-accent bg-white p-6">
      <blockquote className="font-slab text-ink leading-relaxed">{statement}</blockquote>
      {(source || url) && (
        <figcaption className="mt-4 border-t-2 border-ink/10 pt-3 font-mono-custom text-xs text-muted">
          <span className="mr-2 inline-block bg-ink px-2 py-0.5 font-bold text-paper">SOURCE</span>
          {url && source ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent-hover underline underline-offset-2 hover:text-ink"
            >
              {source}
            </a>
          ) : (
            <span className="font-bold">{source ?? url}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
