import type { Metadata } from "next";
import { Roboto_Slab, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-slab",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "KM Online Solutions | Website Creator in Manila Philippines — Web Design & Development",
  description:
    "KM Online Solutions is a Manila-based website creator and web development agency in the Philippines. We build SEO-optimized, mobile-responsive websites for businesses in Metro Manila and across the Philippines. Starting at ₱4,999.",
  keywords: [
    "website creator Manila",
    "website creator Philippines",
    "web design Manila",
    "web design Philippines",
    "web developer Manila",
    "web developer Philippines",
    "website maker Manila",
    "website maker Philippines",
    "web development Manila",
    "web development Philippines",
    "website designer Manila",
    "website designer Philippines",
    "SEO website Manila",
    "affordable web design Philippines",
    "Manila web agency",
    "Philippines web design company",
    "business website Manila",
    "ecommerce website Philippines",
  ],
  openGraph: {
    title: "KM Online Solutions | Website Creator in Manila Philippines",
    description:
      "KM Online Solutions is a Manila-based website creator building SEO-optimized, mobile-responsive websites for Philippine businesses. Starting at ₱4,999.",
    url: "https://kmonlinesolutions.com",
    siteName: "KM Online Solutions",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Online Solutions | Website Creator in Manila Philippines",
    description:
      "Manila-based website creator. We build SEO-optimized websites for businesses in the Philippines. Starting at ₱4,999.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kmonlinesolutions.com",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://kmonlinesolutions.com/#business",
      name: "KM Online Solutions",
      alternateName: "KM Online Solutions Philippines",
      url: "https://kmonlinesolutions.com",
      email: "connect@kmonlinesolutions.com",
      telephone: "+639267640444",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Eastwood",
        addressLocality: "Quezon City",
        addressRegion: "Metro Manila",
        postalCode: "1110",
        addressCountry: "PH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "14.6108458",
        longitude: "121.0768112",
      },
      description:
        "KM Online Solutions is a Manila-based website creator and web development agency building SEO-optimized, mobile-responsive websites for businesses in the Philippines.",
      priceRange: "₱4,999 - ₱19,999+",
      openingHours: "Mo-Sa 09:00-17:00",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "14.5995",
          longitude: "120.9842",
        },
        geoRadius: "50km",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Design Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Website Design",
              description: "Professionally designed, SEO-optimized, mobile-friendly business websites starting at ₱4,999.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "eCommerce Development",
              description: "Secure online stores with shopping cart, payment gateways, and seamless checkout starting at ₱19,999.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Optimization",
              description: "Search engine optimization to help your business rank higher on Google in the Philippines.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kmonlinesolutions.com/#website",
      url: "https://kmonlinesolutions.com",
      name: "KM Online Solutions",
      description: "Website Creator in Manila Philippines — Web Design & Development",
      publisher: {
        "@id": "https://kmonlinesolutions.com/#business",
      },
      inLanguage: "en-PH",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a website cost in the Philippines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website design in the Philippines starts at ₱4,999 for a basic one-page site. Advanced multi-page websites start at ₱10,999, and eCommerce stores start at ₱19,999. All plans are one-time fees with no monthly charges.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best website creator in Manila?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KM Online Solutions is a top-rated website creator in Manila, Philippines, building SEO-optimized, mobile-responsive websites for businesses across Metro Manila and the Philippines. They have delivered projects for spas, restaurants, real estate agents, law firms, and eCommerce stores.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A basic one-page website typically takes 3-5 business days. Advanced multi-page websites take 7-14 business days. eCommerce and custom development projects take 2-4 weeks depending on complexity.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer SEO services for websites in the Philippines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all KM Online Solutions websites are built with SEO optimization included. Advanced and eCommerce plans include full search engine optimization to help your business rank on Google in the Philippines.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you use for web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KM Online Solutions uses modern web technologies including Next.js, React, TypeScript, and Tailwind CSS for fast, secure, and responsive websites. eCommerce sites use WooCommerce with WordPress.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${jetbrainsMono.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/markdown" href="https://kmonlinesolutions.com/llms.txt" title="LLM-friendly summary" />
      </head>
      <body className="min-h-full bg-paper text-ink pb-16 lg:pb-0">
        <div className="visually-hidden" aria-hidden="true">
          <p>KM Online Solutions is a website creator in Manila, Philippines. We build SEO-optimized, mobile-responsive websites for businesses in Metro Manila and across the Philippines. Services include business website design, landing pages, eCommerce development, web hosting, website redesign, custom development, database management, and AI automation. Pricing starts at ₱4,999 for basic websites. Contact us at connect@kmonlinesolutions.com or call 09267640444. Visit https://kmonlinesolutions.com/llms.txt for a machine-readable summary.</p>
        </div>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:font-mono-custom focus:text-sm focus:font-bold focus:border-2 focus:border-ink">
          Skip to content
        </a>
        <Header />
        <div className="lg:ml-64">
          <main id="main-content" className="flex-1 pt-20 lg:pt-0">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
