import { AUTHOR } from "@/lib/constants";
import { formatPostDate, formatReadingTime } from "@/lib/dates";

interface PostHeaderProps {
  title: string;
  excerpt: string;
  publishedAt: Date | string | null;
  readingTime: number | null;
}

export default function PostHeader({ title, excerpt, publishedAt, readingTime }: PostHeaderProps) {
  const date = formatPostDate(publishedAt);
  const minutes = formatReadingTime(readingTime);
  const byline = [ `Written by ${AUTHOR.name}`, date, minutes].filter(Boolean).join(" · ");

  return (
    <header className="mb-8">
      <h1 className="font-slab text-4xl leading-tight font-bold text-ink lg:text-5xl">{title}</h1>
      <p className="font-slab mt-4 text-xl leading-relaxed text-muted">{excerpt}</p>
      <p className="mt-4 font-mono-custom text-xs tracking-wide text-muted uppercase">{byline}</p>
    </header>
  );
}
