"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    title: "Why Your Business Needs a Professional Website in 2025",
    excerpt: "Discover why having a professional website is crucial for business growth in the digital age.",
    date: "March 15, 2025",
  },
  {
    title: "SEO Tips for Small Businesses in the Philippines",
    excerpt: "Learn practical SEO strategies to help your small business rank higher on Google.",
    date: "February 28, 2025",
  },
  {
    title: "eCommerce vs Physical Store: Which is Right for You?",
    excerpt: "Compare the benefits of online and physical retail to determine the best approach for your business.",
    date: "January 20, 2025",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 lg:py-32 bg-paper border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">Blog &amp; Insights</p>
          <h2 className="font-slab text-4xl lg:text-6xl font-bold text-ink mb-4 leading-none">
            LATEST
            <br />
            ARTICLES
          </h2>
          <p className="font-slab text-muted max-w-2xl text-lg mb-16">
            Stay updated with expert insights, trends, and tips to help your business thrive online!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <AnimatedSection delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <div className="offset-border p-8 bg-ink text-paper h-full">
              <p className="font-mono-custom text-xs text-paper/60 mb-3">{posts[0].date}</p>
              <h3 className="font-slab text-2xl lg:text-3xl font-bold mb-3">{posts[0].title}</h3>
              <p className="font-slab text-paper/80 leading-relaxed mb-6">{posts[0].excerpt}</p>
              <Link
                href="/"
                className="font-mono-custom text-xs font-bold text-accent hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                READ ARTICLE
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {posts.slice(1).map((post, i) => (
            <AnimatedSection key={post.title} delay={0.25 + i * 0.1}>
              <div className="offset-border p-6 bg-paper h-full flex flex-col">
                <p className="font-mono-custom text-xs text-muted mb-3">{post.date}</p>
                <h3 className="font-slab text-xl font-bold text-ink mb-2">{post.title}</h3>
                <p className="font-slab text-muted text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <Link
                  href="/"
                  className="font-mono-custom text-xs font-bold text-accent hover:text-ink inline-flex items-center gap-1 transition-colors"
                >
                  READ ARTICLE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
