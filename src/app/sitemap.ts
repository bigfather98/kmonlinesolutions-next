import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kmonlinesolutions.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/samples`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/why-your-business-needs-a-professional-website-in-2025`, lastModified: new Date("2025-03-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog/seo-tips-for-small-businesses-in-the-philippines`, lastModified: new Date("2025-02-28"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog/ecommerce-vs-physical-store-which-is-right-for-you`, lastModified: new Date("2025-01-20"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
