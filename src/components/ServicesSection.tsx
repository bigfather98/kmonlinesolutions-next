"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Business Website Design",
    description: "Establish your online presence with a professionally designed, SEO-optimized, and mobile-friendly business website.",
  },
  {
    title: "Landing Page Design",
    description: "High-converting landing pages optimized for maximum leads and sales.",
  },
  {
    title: "Web Hosting Services",
    description: "Reliable high-speed hosting in the Philippines with 99.9% uptime guarantee.",
  },
  {
    title: "eCommerce Development",
    description: "Secure online stores with shopping cart, payment gateways, and seamless checkout.",
  },
  {
    title: "Website Redesign",
    description: "Revamp outdated websites with modern design, better SEO, and improved UX.",
  },
  {
    title: "Custom Development",
    description: "Tailor-made websites with custom functionality to match your exact business needs.",
  },
  {
    title: "Database Management",
    description: "Secure and efficient database design, migration, and management for your business applications.",
  },
  {
    title: "AI Automation",
    description: "Integrate AI-powered automation into your workflows to save time, reduce errors, and scale faster.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-paper border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">What We Offer</p>
          <h2 className="font-slab text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-4 leading-none -ml-1">
            WEBSITE DESIGN
            <br />
            SERVICES
          </h2>
          <p className="font-slab text-muted max-w-2xl text-lg mb-8">
            We offer a full range of website design and development services tailored for businesses in the Philippines.
          </p>
          <p className="font-slab text-xl font-bold text-ink mb-4">
            Join our growing list of satisfied clients today!
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 font-mono-custom text-sm font-bold border-2 border-ink bg-accent text-white transition-colors hover:bg-white hover:text-accent hover:border-accent"
          >
            EXPLORE ALL SERVICES
          </Link>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.1} className="md:col-span-2 md:row-span-2">
            <div className="offset-border p-8 bg-ink text-paper h-full">
              <h3 className="font-slab text-2xl md:text-3xl font-bold mb-4">{services[0].title}</h3>
              <p className="font-slab text-paper/80 leading-relaxed">{services[0].description}</p>
            </div>
          </AnimatedSection>

          {services.slice(1, 7).map((service, i) => (
            <AnimatedSection key={service.title} delay={0.15 + i * 0.05}>
              <div className="offset-border p-6 bg-paper h-full">
                <h3 className="font-slab text-lg font-bold text-ink mb-2">{service.title}</h3>
                <p className="font-slab text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}

          {services.slice(7).map((service, i) => (
            <AnimatedSection key={service.title} delay={0.4 + i * 0.05}>
              <div className="offset-border p-6 bg-paper h-full">
                <h3 className="font-slab text-lg font-bold text-ink mb-2">{service.title}</h3>
                <p className="font-slab text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
