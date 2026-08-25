import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KM Online Solutions | Website Creator in Manila Philippines",
  description:
    "KM Online Solutions is a Manila-based website creator building SEO-optimized, mobile-responsive websites for Philippine businesses. Learn about our services, pricing, and portfolio.",
  openGraph: {
    title: "About KM Online Solutions | Website Creator in Manila Philippines",
    description:
      "KM Online Solutions is a Manila-based website creator building SEO-optimized websites for Philippine businesses.",
  },
};

export default function KnowledgeBasePage() {
  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 lg:pt-24 lg:pb-12 w-full">
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">About Us</p>
          <h1 className="font-slab text-5xl lg:text-7xl font-bold text-ink leading-none">
            ABOUT
            <br />
            KM ONLINE
            <br />
            SOLUTIONS
          </h1>
          <p className="font-slab text-lg text-muted mt-6 max-w-xl">
            A Manila-based website creator building SEO-optimized, mobile-responsive websites for Philippine businesses since day one.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="font-slab text-3xl font-bold text-ink mb-6">Who We Are</h2>
            <div className="space-y-4 font-slab text-muted leading-relaxed">
              <p>
                KM Online Solutions is a website creator in Manila, Philippines. We build SEO-optimized, mobile-responsive websites for businesses in Metro Manila and across the Philippines. Our team specializes in creating professional, affordable websites that rank on Google and attract local customers.
              </p>
              <p>
                Based in Eastwood, Quezon City, we serve businesses of all sizes — from startups needing their first website to established companies requiring custom web applications. Our clients include spas, restaurants, real estate agents, law firms, solar companies, preschools, and eCommerce brands.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-slab text-3xl font-bold text-ink mb-6">Our Services</h2>
            <div className="space-y-4 font-slab text-muted leading-relaxed">
              <p>
                KM Online Solutions offers 8 core web design and development services for Philippine businesses:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Business Website Design</strong> — Professional, SEO-optimized websites starting at ₱4,999</li>
                <li><strong>Landing Page Design</strong> — High-converting pages for maximum leads and sales</li>
                <li><strong>Web Hosting</strong> — Reliable high-speed hosting with 99.9% uptime in the Philippines</li>
                <li><strong>eCommerce Development</strong> — Secure online stores with WooCommerce and payment gateways from ₱19,999</li>
                <li><strong>Website Redesign</strong> — Modern redesigns with improved SEO and user experience</li>
                <li><strong>Custom Development</strong> — Tailor-made solutions for schools, clinics, hotels, and real estate</li>
                <li><strong>Database Management</strong> — Secure database design, migration, and management</li>
                <li><strong>AI Automation</strong> — AI-powered workflow automation to save time and reduce errors</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-slab text-3xl font-bold text-ink mb-6">Pricing</h2>
            <div className="space-y-4 font-slab text-muted leading-relaxed">
              <p>
                All pricing is a one-time fee with no monthly charges. Website design in the Philippines starts at ₱4,999 for a basic one-page site. Advanced multi-page websites start at ₱10,999. eCommerce stores start at ₱19,999. Custom development projects are quoted individually based on requirements.
              </p>
              <p>
                Every website includes responsive design, cross-browser compatibility, and SEO optimization. Advanced and eCommerce plans include additional features like social media integration, booking forms, product listings, and online payment processing.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-slab text-3xl font-bold text-ink mb-6">Technology</h2>
            <div className="space-y-4 font-slab text-muted leading-relaxed">
              <p>
                KM Online Solutions uses modern web technologies to build fast, secure, and responsive websites. Our primary stack includes Next.js 16 with React 19, TypeScript 5, and Tailwind CSS 4. eCommerce sites use WooCommerce with WordPress. All sites are deployed on Vercel for optimal performance and reliability.
              </p>
              <p>
                We use Framer Motion for smooth animations, Nodemailer for contact form emails, and Vercel Analytics for traffic tracking. Our websites are built with accessibility in mind, including skip links, semantic HTML, and proper ARIA attributes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-slab text-3xl font-bold text-ink mb-6">Portfolio</h2>
            <div className="space-y-4 font-slab text-muted leading-relaxed">
              <p>
                KM Online Solutions has delivered web design projects across multiple industries in the Philippines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Spa Business</strong> — Basic website for a spa in the Philippines</li>
                <li><strong>Clothing Shop</strong> — eCommerce website for an online clothing store</li>
                <li><strong>Real Estate Agent</strong> — Advanced website for a real estate professional</li>
                <li><strong>Solar Company</strong> — Custom website for a solar energy company</li>
                <li><strong>Preschool Business</strong> — Basic website for a preschool education center</li>
                <li><strong>Law Firm</strong> — Advanced website for a legal practice</li>
                <li><strong>Restaurant Business</strong> — Basic website for a restaurant</li>
                <li><strong>Cosmetic Brand</strong> — eCommerce website for a beauty brand</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-slab text-3xl font-bold text-ink mb-6">Location</h2>
            <div className="space-y-4 font-slab text-muted leading-relaxed">
              <p>
                KM Online Solutions is based in Eastwood, Quezon City, Metro Manila, Philippines. We serve businesses throughout Metro Manila and across the Philippines. Our office is located at postal code 1110, with geocoordinates 14.6108458, 121.0768112.
              </p>
              <p>
                Contact us at connect@kmonlinesolutions.com or call +63 926 764 0444. We are open Monday through Saturday, 9:00 AM to 5:00 PM (GMT+8).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
