"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-paper border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-3"
          >
            <p className="font-mono-custom text-xs text-ink mb-6 tracking-widest uppercase">
              Manila PH &mdash; Web Design &amp; Development
            </p>

            <h1 className="font-slab text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-ink -ml-1 md:-ml-2">
              WE BUILD
              <br />
              WEBSITES
              <br />
              THAT WORK
            </h1>

            <p className="font-slab text-lg md:text-xl text-muted leading-relaxed mt-8 mb-8 max-w-xl">
              Professional Website Design &amp; SEO Services for Businesses in the Philippines.
              We create user-friendly, SEO-optimized websites to help Filipino businesses grow online.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-3.5 font-mono-custom text-sm font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent"
              >
                VIEW PRICING
              </Link>
              <Link
                href="/samples"
                className="inline-flex items-center px-8 py-3.5 font-mono-custom text-sm font-bold border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                SEE OUR WORK
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-10 font-mono-custom text-xs text-muted">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 border-2 border-ink bg-accent"
                    style={{ opacity: 1 - i * 0.15 }}
                  />
                ))}
              </div>
              <span>Trusted by businesses across the Philippines</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:flex md:col-span-2 justify-center relative"
          >
            <div className="offset-border w-full max-w-sm">
              <Image
                src="/images/restaurant-philippines-website.webp"
                alt="Website design showcase"
                width={450}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
