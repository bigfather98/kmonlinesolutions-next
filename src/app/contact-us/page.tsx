import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact KM Online Solutions | Web Design Philippines",
  description:
    "Get in touch with KM Online Solutions for web design, development, and SEO services in the Philippines. Free consultation available.",
  openGraph: {
    title: "Contact KM Online Solutions | Web Design Philippines",
    description:
      "Get in touch with KM Online Solutions for web design and development services in the Philippines.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
