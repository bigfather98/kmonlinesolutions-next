import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact KM Online Solutions | Website Creator in Manila Philippines",
  description:
    "Get in touch with KM Online Solutions, a website creator in Manila, Philippines. We build SEO-optimized, mobile-responsive websites for businesses starting at ₱4,999. Free consultation available.",
  openGraph: {
    title: "Contact KM Online Solutions | Website Creator in Manila Philippines",
    description:
      "Get in touch with KM Online Solutions, a Manila-based website creator. We build SEO-optimized websites for Philippine businesses.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
