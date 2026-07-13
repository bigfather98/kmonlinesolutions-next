"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "SEO-Optimized",
    description: "Built with search engines in mind to help you rank higher on Google.",
  },
  {
    title: "Mobile-Responsive",
    description: "Beautifully adapted for all devices — phones, tablets, and desktops.",
  },
  {
    title: "Fast & Secure",
    description: "Optimized for speed with SSL security to protect your visitors.",
  },
  {
    title: "Affordable Pricing",
    description: "Professional quality web design at prices that won't break the bank.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-paper border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">
            Why Choose Us
          </p>
          <h2 className="font-slab text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-4 leading-none -ml-1">
            FEATURES THAT
            <br />
            SET US APART
          </h2>
          <p className="font-slab text-muted max-w-2xl text-lg mb-16">
            At KM Online Solutions, we create SEO-optimized websites designed to rank high on Google
            and attract your ideal customers. We can focus our SEO in the Philippines to enable localization.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="offset-border p-8 bg-accent text-white h-full">
              <h3 className="font-slab text-3xl font-bold mb-4">{features[0].title}</h3>
              <p className="font-slab text-white/80 leading-relaxed">{features[0].description}</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6">
            {features.slice(1).map((feature, i) => (
              <AnimatedSection key={feature.title} delay={0.15 + i * 0.1}>
                <div className="offset-border p-6 bg-paper h-full">
                  <h3 className="font-slab text-xl font-bold text-ink mb-2">{feature.title}</h3>
                  <p className="font-slab text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
