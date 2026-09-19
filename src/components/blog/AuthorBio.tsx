import Image from "next/image";
import { AUTHOR } from "@/lib/constants";

export default function AuthorBio() {
  return (
    <section
      aria-label={`About ${AUTHOR.name}`}
      itemScope
      itemType="https://schema.org/Person"
      className="offset-border my-10 flex flex-col gap-5 bg-white p-6 sm:flex-row sm:items-start"
    >
      <Image
        src={AUTHOR.avatar}
        alt={AUTHOR.avatarAlt}
        width={96}
        height={96}
        className="shrink-0 border-2 border-ink object-cover"
      />
      <div>
        <p className="font-mono-custom text-xs font-bold tracking-widest text-muted uppercase">
          Written by
        </p>
        <p className="font-slab text-xl font-bold text-ink" itemProp="name">
          {AUTHOR.name}
        </p>
        <p className="font-slab mt-2 leading-relaxed text-ink/90" itemProp="description">
          {AUTHOR.description}
        </p>
        <a itemProp="url" href={AUTHOR.website} className="sr-only">
          {AUTHOR.website}
        </a>
        <link itemProp="sameAs" href={AUTHOR.reddit} />
        <p className="mt-3 flex flex-wrap gap-4 font-mono-custom text-xs font-bold">
          <a
            href={AUTHOR.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-hover underline underline-offset-2 hover:text-ink"
          >
            Website
          </a>
          <a
            href={AUTHOR.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-hover underline underline-offset-2 hover:text-ink"
          >
            Reddit
          </a>
        </p>
      </div>
    </section>
  );
}
