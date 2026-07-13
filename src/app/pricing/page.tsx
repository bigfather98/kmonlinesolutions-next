import type { Metadata } from "next";
import PricingPageClient from "./pricing-page-client";

export const metadata: Metadata = {
  title: "Web Design Pricing Philippines | KM Online Solutions Packages",
  description:
    "Affordable web design packages in the Philippines. Starting at ₱5,999. Basic, Advanced, E-Commerce, and Custom development plans.",
  openGraph: {
    title: "Web Design Pricing Philippines | KM Online Solutions Packages",
    description:
      "Affordable web design packages in the Philippines. Starting at ₱5,999.",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
