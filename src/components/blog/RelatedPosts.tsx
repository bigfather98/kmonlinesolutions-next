import PostCard from "./PostCard";
import type { PostCardData } from "@/types";

interface RelatedPostsProps {
  posts: PostCardData[];
}

/**
 * "Related" = latest published posts excluding the current post.
 * There are no category or tag relationships.
 */
export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;
  return (
    <aside aria-label="Related posts" className="mt-16">
      <p className="mb-2 font-mono-custom text-xs tracking-widest text-ink uppercase">
        Keep reading
      </p>
      <h2 className="font-slab mb-8 text-3xl font-bold text-ink">Latest Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </aside>
  );
}
