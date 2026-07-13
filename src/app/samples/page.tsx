import type { Metadata } from "next";
import SamplesPageClient from "./samples-page-client";

export const metadata: Metadata = {
  title: "Web Design Portfolio Philippines | KM Online Solutions Samples",
  description:
    "Browse our portfolio of professionally designed websites for businesses in the Philippines. See our web design samples and projects.",
  openGraph: {
    title: "Web Design Portfolio Philippines | KM Online Solutions Samples",
    description:
      "Browse our portfolio of professionally designed websites for businesses in the Philippines.",
  },
};

export default function SamplesPage() {
  return <SamplesPageClient />;
}
