"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Our website was outdated and not generating leads. Kirk redesigned it beautifully, and now we're getting more inquiries than ever. Truly the best web design service in the Philippines!",
    author: "Alexander Engel",
    role: "Project Manager",
  },
  {
    quote: "We needed a professional website for our business, and KM Online Solutions has exceeded our expectations. The design is sleek, mobile-friendly, and optimized for SEO.",
    author: "Miguel Santos",
    role: "Business Owner",
  },
  {
    quote: "From start to finish, the team was incredibly responsive and knowledgeable. Our website now loads fast, ranks well on Google, and looks stunning.",
    author: "Elene Claes",
    role: "Marketing Manager",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-ink border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono-custom text-xs text-paper mb-4 tracking-widest uppercase">Testimonials</p>
          <h2 className="font-slab text-4xl md:text-5xl lg:text-6xl font-bold text-paper mb-4 leading-none">
            WHAT OUR
            <br />
            CLIENTS SAY
          </h2>
          <p className="font-slab text-paper/60 max-w-2xl text-lg mb-16">
            See what our happy clients have to say about our top-rated website design services in the Philippines!
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[280px] offset-border bg-paper p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-slab text-lg md:text-xl text-ink leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <p className="font-slab font-bold text-ink">{testimonials[current].author}</p>
                <p className="font-mono-custom text-xs text-muted mt-1">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border-2 border-paper text-paper hover:bg-paper hover:text-ink transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 transition-all border border-paper ${
                    i === current ? "w-8 bg-accent border-accent" : "w-2 bg-transparent hover:bg-paper/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 border-2 border-paper text-paper hover:bg-paper hover:text-ink transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
