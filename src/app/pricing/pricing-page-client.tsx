"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Tier 1 - Basic",
    price: "₱ 5,999",
    subtitle: "Perfect for startups",
    features: [
      "Functional 1-Page Website",
      "Responsive Design",
      "Unlimited Bandwidth",
      "Cross Browser Compatibility",
      "Social Media Links",
      "Client Testimonial / Reviews",
      "Chat Integration (one choice)",
      "Contact Us Form",
      "1 Business Email Address",
    ],
    cta: "Order",
    href: "/contact-us",
    highlight: false,
  },
  {
    name: "Tier 2 - Advance",
    price: "₱ 10,999",
    subtitle: "Best for growing businesses",
    features: [
      "Everything From Basic",
      "Up To 5 Web Pages",
      "Search Engine Optimization (SEO)",
      "Product or Service Listing Page",
      "Facebook Page Integration",
      "Instagram Account Integration",
      "Chat Integration (Up to 5 choices)",
      "Booking Forms",
      "5 Business Email Address",
    ],
    cta: "Order",
    href: "/contact-us",
    highlight: true,
  },
  {
    name: "Tier 3 - Ecommerce",
    price: "₱ 19,999",
    subtitle: "For online stores",
    features: [
      "Everything From Advanced",
      "Up to 10 Web Pages",
      "Woocommerce",
      "List up to 50 Products",
      "Add To Cart Function",
      "Shopping Cart Page",
      "Customer Login",
      "Online Payment Integration",
      "Email Marketing",
    ],
    cta: "Order",
    href: "/contact-us",
    highlight: false,
  },
  {
    name: "Custom Development",
    price: "contact us",
    subtitle: "Tailored to your needs",
    features: [
      "Websites With Custom Functionality",
      "School Management System",
      "Patient Record Keeping",
      "Sales Management System",
      "Event Management System",
      "Restaurant Online Reservations",
      "Hotel Booking System",
      "Real Estate Management",
      "API Integrations",
    ],
    cta: "Inquire",
    href: "/contact-us",
    highlight: false,
  },
];

export default function PricingPageClient() {
  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 md:pt-24 md:pb-16 w-full">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">Pricing Plans</p>
            <h1 className="font-slab text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-none">
              PRICING
            </h1>
            <p className="font-slab text-lg text-muted mt-6 max-w-xl">
              Affordable web design packages for every business need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`${plan.highlight ? "offset-border bg-accent text-white" : "offset-border bg-paper text-ink"}`}
              >
                {plan.highlight && (
                  <div className="bg-ink text-paper text-center font-mono-custom text-xs font-bold py-2 tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className={`font-slab text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-ink"}`}>
                    {plan.name}
                  </h3>
                  <p className={`font-mono-custom text-xs mb-4 ${plan.highlight ? "text-white/70" : "text-muted"}`}>
                    {plan.subtitle}
                  </p>
                  <div className="mb-6">
                    <span className={`font-slab text-3xl font-bold ${plan.highlight ? "text-white" : "text-ink"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-slab text-sm">
                        <svg className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-accent"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlight ? "text-white/90" : "text-muted"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className={`block text-center w-full py-3 font-mono-custom text-sm font-bold border-2 transition-colors ${
                      plan.highlight
                        ? "border-paper bg-paper text-accent hover:bg-accent hover:text-paper hover:border-accent"
                        : "border-ink bg-accent text-white hover:bg-white hover:text-accent hover:border-accent"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
