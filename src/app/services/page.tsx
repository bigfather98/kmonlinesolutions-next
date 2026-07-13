import type { Metadata } from "next";
import ServicesPageClient from "./services-page-client";

export const metadata: Metadata = {
  title: "Web Design Services Philippines | KM Online Solutions",
  description:
    "Professional web design and development services in the Philippines. Business websites, eCommerce, SEO, hosting, and custom development.",
  openGraph: {
    title: "Web Design Services Philippines | KM Online Solutions",
    description:
      "Professional web design and development services in the Philippines. Business websites, eCommerce, SEO, hosting, and custom development.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
