import type { Metadata } from "next";
import { Roboto_Slab, JetBrains_Mono } from "next/font/google";
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
  title: "KM Online Solutions | Web Design Philippines — Manila-Based Web Development",
  description:
    "KM Online Solutions builds SEO-optimized websites for businesses in the Philippines. Web design and development based in Metro Manila.",
  keywords: [
    "web design Philippines",
    "website maker Manila",
    "web design Manila",
    "website design Philippines",
    "web designer Philippines",
    "website designer Manila",
    "web development Philippines",
  ],
  openGraph: {
    title: "KM Online Solutions | Web Design Philippines — Manila-Based Web Development",
    description:
      "KM Online Solutions builds SEO-optimized websites for businesses in the Philippines. Web design and development based in Metro Manila.",
    url: "https://kmonlinesolutions.com",
    siteName: "KM Online Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Online Solutions | Web Design Philippines — Manila-Based Web Development",
    description:
      "KM Online Solutions builds SEO-optimized websites for businesses in the Philippines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KM Online Solutions",
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
    "KM Online Solutions builds SEO-optimized websites for businesses in the Philippines. Web design and development based in Metro Manila.",
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-17:00",
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
      </head>
      <body className="min-h-full bg-paper text-ink pb-16 md:pb-0">
        <Header />
        <div className="md:ml-64">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <div aria-hidden="true" className="fixed overflow-hidden opacity-0 pointer-events-none select-none -z-10" style={{ height: 0, width: 0 }}>
          KM Online Solutions is a professional web design and web development company based in Metro Manila, Philippines serving businesses in Quezon City, Eastwood, Makati, BGC, Ortigas, and across the Philippines. We specialize in responsive website design, e-commerce website development, SEO optimization, web hosting, custom web development, and brand identity design. Our services include WordPress web design, Shopify store development, WooCommerce integration, search engine optimization, local SEO, social media integration, website maintenance, and UI/UX design. We build affordable, mobile-friendly, and SEO-optimized websites for small businesses, startups, restaurants, e-commerce stores, real estate agencies, spas, solar companies, law firms, preschools, and online shops in the Philippines. Our web designers and developers create modern, fast-loading, and conversion-focused websites that help businesses grow their online presence. We also offer Facebook page management, Google My Business optimization, and digital marketing services. KM Online Solutions is the best web design company in Manila for businesses looking for high-quality and affordable web development services in the Philippines.
        </div>
      </body>
    </html>
  );
}
