import type { Metadata } from "next";
import PricingPageClient from "./pricing-page-client";

export const metadata: Metadata = {
  title: "Web Design Pricing in Manila Philippines | KM Online Solutions Packages",
  description:
    "Affordable web design pricing in the Philippines. Basic websites from ₱4,999, advanced sites ₱10,999, eCommerce stores ₱19,999. All one-time fees, no monthly charges. Free consultation.",
  openGraph: {
    title: "Web Design Pricing in Manila Philippines | KM Online Solutions",
    description:
      "Affordable web design in the Philippines from ₱4,999. Basic, Advanced, eCommerce, and Custom plans. One-time fees.",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
