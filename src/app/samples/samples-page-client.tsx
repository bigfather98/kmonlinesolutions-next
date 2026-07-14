"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { categories, samples } from "@/data/portfolio";

export default function SamplesPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? samples
    : samples.filter((s) => s.category === activeCategory);

  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">Our Portfolio</p>
            <h1 className="font-slab text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-none -ml-1">
              OUR
              <br />
              SAMPLES
            </h1>
            <p className="font-slab text-lg text-muted mt-6 max-w-xl">
              Browse through our portfolio of professionally designed websites.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-mono-custom text-xs font-bold border-2 transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-white border-accent"
                    : "bg-paper text-ink border-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((sample) => (
                <motion.a
                  key={sample.title}
                  href={sample.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group block offset-border bg-paper"
                >
                  <div className="relative">
                    <Image
                      src={sample.src}
                      alt={sample.title}
                      width={600}
                      height={338}
                      className="w-full h-auto"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 font-mono-custom text-xs border-2 border-ink bg-paper text-ink">
                        {sample.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 border-t-2 border-ink">
                    <h3 className="font-slab font-bold text-ink">{sample.title}</h3>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
