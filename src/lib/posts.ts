import { dbQuery } from "./db";
import type { Post, PostCardData } from "@/types";

const POST_COLUMNS = `
  id,
  slug,
  title,
  excerpt,
  body_markdown,
  featured_image,
  featured_image_alt,
  reading_time,
  status,
  published_at,
  created_at,
  updated_at
`;

const POST_CARD_COLUMNS = `
  slug,
  title,
  excerpt,
  featured_image,
  featured_image_alt,
  reading_time,
  published_at
`;

/**
 * Fetch a single published post by slug.
 * Returns null when the post does not exist, is not published,
 * or is scheduled for the future.
 */
export async function getPublishedPostBySlug(slug: string): Promise<Post | null> {
  const rows = await dbQuery<Post[]>(
    `SELECT ${POST_COLUMNS}
     FROM posts
     WHERE slug = ?
       AND status = 'published'
       AND published_at IS NOT NULL
       AND published_at <= NOW()
     LIMIT 1`,
    [slug],
  );
  return rows[0] ?? null;
}

/**
 * Fetch the latest published posts, excluding one slug.
 * Used for RelatedPosts — there are no categories or tags,
 * so "related" means latest-published excluding the current post.
 */
export async function getLatestPublishedPosts(
  excludeSlug: string,
  limit = 3,
): Promise<PostCardData[]> {
  const safeLimit = Math.max(1, Math.min(12, Math.floor(limit)));
  return dbQuery<PostCardData[]>(
    `SELECT ${POST_CARD_COLUMNS}
     FROM posts
     WHERE status = 'published'
       AND published_at IS NOT NULL
       AND published_at <= NOW()
       AND slug != ?
     ORDER BY published_at DESC
     LIMIT ${safeLimit}`,
    [excludeSlug],
  );
}

/** All published slugs — for sitemaps and static params. */
export async function getPublishedPostSlugs(): Promise<string[]> {
  const rows = await dbQuery<{ slug: string }[]>(
    `SELECT slug
     FROM posts
     WHERE status = 'published'
       AND published_at IS NOT NULL
       AND published_at <= NOW()
     ORDER BY published_at DESC`,
  );
  return rows.map((row) => row.slug);
}
