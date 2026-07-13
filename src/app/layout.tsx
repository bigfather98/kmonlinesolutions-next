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
  alternates: {
    canonical: "https://kmonlinesolutions.com",
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:font-mono-custom focus:text-sm focus:font-bold focus:border-2 focus:border-ink">
          Skip to content
        </a>
        <Header />
        <div className="md:ml-64">
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
