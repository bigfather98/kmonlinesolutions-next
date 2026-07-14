"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { featuredProjects } from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <section className="py-24 lg:py-32 bg-paper border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">Our Portfolio</p>
          <h2 className="font-slab text-4xl lg:text-6xl font-bold text-ink mb-4 leading-none">
            SAMPLE
            <br />
            PROJECTS
          </h2>
          <p className="font-slab text-muted max-w-2xl text-lg mb-12">
            Discover our portfolio of professionally designed, SEO-optimized websites for businesses in the Philippines.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 + i * 0.08}>
              <a href="/samples" className="block offset-border h-full">
                <div className="relative">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 font-mono-custom text-xs border-2 border-ink bg-paper text-ink">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t-2 border-ink">
                  <h3 className="font-slab font-bold text-ink">{project.title}</h3>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link
            href="/samples"
            className="inline-flex items-center px-8 py-3.5 font-mono-custom text-sm font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent"
          >
            VIEW ALL PROJECTS
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>

        <div className="mt-12 lg:hidden">
          <AnimatedSection delay={0.4}>
            <div className="offset-border p-6 bg-accent text-white text-center">
              <h3 className="font-slab text-xl font-bold mb-2">Start Your Project Today</h3>
              <p className="font-slab text-white/80 text-sm mb-5">Get a free consultation and quote for your website.</p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 font-mono-custom text-sm font-bold border-2 border-ink bg-white text-accent transition-colors hover:bg-accent hover:text-white"
              >
                GET FREE QUOTE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
