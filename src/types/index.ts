export interface Service {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  src: string;
  href?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
}

export type PostStatus = "draft" | "published";

/** A row from the `posts` table. `body_markdown` is the source of truth for article content. */
export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body_markdown: string;
  featured_image: string | null;
  featured_image_alt: string | null;
  reading_time: number | null;
  status: PostStatus;
  published_at: Date | string | null;
  created_at: Date | string;
  updated_at: Date | string;
}

/** Minimal post data for cards and related-post lists. */
export type PostCardData = Pick<
  Post,
  "slug" | "title" | "excerpt" | "featured_image" | "featured_image_alt" | "reading_time" | "published_at"
>;

export interface Author {
  name: string;
  description: string;
  avatar: string;
  avatarAlt: string;
  reddit: string;
  website: string;
}
