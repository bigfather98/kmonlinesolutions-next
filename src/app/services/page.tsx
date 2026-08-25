import type { Metadata } from "next";
import ServicesPageClient from "./services-page-client";

export const metadata: Metadata = {
  title: "Web Design Services in Manila Philippines | KM Online Solutions",
  description:
    "KM Online Solutions offers 8 web design and development services in the Philippines: business websites, landing pages, eCommerce, SEO, hosting, custom development, database management, and AI automation. Starting at ₱4,999.",
  openGraph: {
    title: "Web Design Services in Manila Philippines | KM Online Solutions",
    description:
      "8 web design services for Philippine businesses: business websites, eCommerce, SEO, hosting, custom development. Starting at ₱4,999.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
