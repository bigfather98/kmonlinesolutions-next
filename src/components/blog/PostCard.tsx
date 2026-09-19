import Link from "next/link";
import { formatPostDate, formatReadingTime } from "@/lib/dates";
import type { PostCardData } from "@/types";

export default function PostCard({ post }: { post: PostCardData }) {
  const date = formatPostDate(post.published_at);
  const minutes = formatReadingTime(post.reading_time);

  return (
    <article className="offset-border-sm flex h-full flex-col bg-paper p-6">
      {post.featured_image && (
        <Link
          href={`/blog/${post.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="mb-4 block overflow-hidden border-2 border-ink"
        >
          {/* Plain img: thumbnails may be local or remote with unknown dimensions. */}
          <img
            src={post.featured_image}
            alt=""
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
        </Link>
      )}
      <p className="mb-2 font-mono-custom text-xs text-muted">
        {[date, minutes].filter(Boolean).join(" · ")}
      </p>
      <h3 className="font-slab text-xl font-bold text-ink">
        <Link href={`/blog/${post.slug}`} className="hover:text-accent-hover hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="font-slab mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1 font-mono-custom text-xs font-bold text-accent-hover hover:text-ink"
      >
        READ ARTICLE
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}
