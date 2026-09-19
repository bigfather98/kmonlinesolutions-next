import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { getAllPublishedPosts } from "@/lib/posts";
import Breadcrumb from "@/components/blog/Breadcrumb";
import PostCard from "@/components/blog/PostCard";

const BLOG_URL = `${SITE.url}/blog`;

// Database-driven listing: render on demand so new posts appear immediately
// and the build never needs database access.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on web design, SEO, and e-commerce for small businesses in the Philippines.",
  alternates: { canonical: BLOG_URL },
  openGraph: {
    title: "Blog | KM Online Solutions",
    description:
      "Expert insights on web design, SEO, and e-commerce for small businesses in the Philippines.",
    url: BLOG_URL,
    siteName: SITE.name,
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPublishedPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KM Online Solutions Blog",
    url: BLOG_URL,
    blogPost: posts.map((post, i) => ({
      "@type": "BlogPosting",
      position: i + 1,
      headline: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <p className="font-mono-custom text-xs tracking-widest text-ink uppercase">
        Blog &amp; Insights
      </p>
      <h1 className="font-slab mt-2 text-4xl font-bold text-ink lg:text-6xl">
        LATEST
        <br />
        ARTICLES
      </h1>
      <p className="font-slab mt-4 mb-12 max-w-2xl text-lg text-muted">
        Expert insights, trends, and tips to help your business thrive online!
      </p>

      {posts.length === 0 ? (
        <p className="font-slab text-lg text-muted">
          No articles published yet. Check back soon.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
