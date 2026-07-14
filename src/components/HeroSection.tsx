"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const processSteps = [
  {
    label: "Strategy",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
  },
  {
    label: "Design",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    label: "Launch",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    label: "Growth",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-paper border-b-2 border-ink">
      {/* Dot grid background */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-2/5 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
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

            <div className="flex flex-wrap items-center gap-3 mt-10 font-mono-custom">
              {processSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1.5 border-2 border-ink px-2.5 py-1.5 bg-paper">
                  <span className="text-muted">{step.icon}</span>
                  <span className="text-xs font-bold text-ink">{step.label}</span>
                  <span className="text-[10px] text-muted">{String(i + 1).padStart(2, "0")}/04</span>
                </div>
              ))}
              <span className="text-xs text-muted">Trusted by businesses across the Philippines</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:flex md:col-span-2 justify-center relative py-6"
          >
            <div className="relative my-2" style={{ transform: 'rotate(6deg)' }}>
              <div className="absolute inset-0 offset-border bg-ink/5 translate-x-2 translate-y-2" />
              <div className="relative offset-border w-full max-w-sm bg-white overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b-2 border-ink bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-red-500 border border-red-700" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600" />
                  <span className="w-3 h-3 rounded-full bg-green-500 border border-green-700" />
                </div>
                <Image
                  src="/images/restaurant-philippines-website.webp"
                  alt="Website design showcase"
                  width={450}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
