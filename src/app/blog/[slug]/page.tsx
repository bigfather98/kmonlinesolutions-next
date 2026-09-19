import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { SITE, AUTHOR } from "@/lib/constants";
import { getPublishedPostBySlug, getLatestPublishedPosts } from "@/lib/posts";
import Breadcrumb from "@/components/blog/Breadcrumb";
import PostHeader from "@/components/blog/PostHeader";
import FeaturedImage from "@/components/blog/FeaturedImage";
import PostContent from "@/components/blog/PostContent";
import ShareButtons from "@/components/blog/ShareButtons";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Dedupe the post lookup shared by generateMetadata and the page.
const getPost = cache((slug: string) => getPublishedPostBySlug(slug));

function toAbsoluteUrl(src: string | null): string | null {
  if (!src) return null;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE.url}${src.startsWith("/") ? "" : "/"}${src}`;
}

function toIso(value: Date | string | null): string | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const canonical = `${SITE.url}/blog/${post.slug}`;
  const image = toAbsoluteUrl(post.featured_image);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: SITE.name,
      type: "article",
      publishedTime: toIso(post.published_at),
      modifiedTime: toIso(post.updated_at),
      authors: [AUTHOR.name],
      ...(image ? { images: [{ url: image, alt: post.featured_image_alt ?? post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getLatestPublishedPosts(post.slug, 3);
  const canonical = `${SITE.url}/blog/${post.slug}`;
  const image = toAbsoluteUrl(post.featured_image);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(image ? { image } : {}),
    datePublished: toIso(post.published_at),
    dateModified: toIso(post.updated_at),
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      description: AUTHOR.description,
      url: AUTHOR.website,
      sameAs: [AUTHOR.reddit],
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <article>
        <PostHeader
          title={post.title}
          excerpt={post.excerpt}
          publishedAt={post.published_at}
          readingTime={post.reading_time}
        />
        <FeaturedImage src={post.featured_image} alt={post.featured_image_alt} />
        <PostContent markdown={post.body_markdown} />
        <ShareButtons url={canonical} title={post.title} />
        <AuthorBio />
      </article>
      <RelatedPosts posts={related} />
    </div>
  );
}
