"use client";

import { motion } from "framer-motion";

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

export default function ServicesPage() {
  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">What We Do</p>
            <h1 className="font-slab text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-none -ml-1">
              OUR
              <br />
              SERVICES
            </h1>
            <p className="font-slab text-lg text-muted mt-6 max-w-xl">
              Comprehensive web design and digital solutions tailored for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="offset-border p-6 bg-paper"
              >
                <h3 className="font-slab text-lg font-bold text-ink mb-2">{service.title}</h3>
                <p className="font-slab text-muted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
