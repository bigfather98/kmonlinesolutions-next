import type { Metadata } from "next";
import SamplesPageClient from "./samples-page-client";

export const metadata: Metadata = {
  title: "Web Design Portfolio in Manila Philippines | KM Online Solutions Samples",
  description:
    "Browse our portfolio of 8 professionally designed websites for businesses in the Philippines. See web design samples for spas, restaurants, real estate, law firms, and eCommerce stores.",
  openGraph: {
    title: "Web Design Portfolio in Manila Philippines | KM Online Solutions",
    description:
      "Portfolio of professionally designed websites for Philippine businesses. Spas, restaurants, real estate, eCommerce.",
  },
};

export default function SamplesPage() {
  return <SamplesPageClient />;
}
