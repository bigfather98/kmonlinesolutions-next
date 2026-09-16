import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | KM Online Solutions",
  description:
    "Privacy Policy for KM Online Solutions: how we collect, use, and protect your personal data in compliance with the Philippine Data Privacy Act of 2012.",
  openGraph: {
    title: "Privacy Policy | KM Online Solutions",
    description:
      "How KM Online Solutions collects, uses, and protects your personal data.",
  },
};

const sections = [
  {
    title: "1. Who We Are",
    body: [
      "KM Online Solutions (\"we,\" \"us,\" \"our\") is a web design and development provider based in Eastwood, Quezon City, Metro Manila, Philippines. You can reach our Data Protection contact at connect@kmonlinesolutions.com.",
      "This Privacy Policy explains what personal data we collect through kmonlinesolutions.com, why we collect it, and the choices you have. It complies with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173).",
    ],
  },
  {
    title: "2. Data We Collect",
    body: [
      "Contact and inquiry data: name, email address, phone number, company name, and project details you submit through our contact forms or by email.",
      "Project data: content, credentials, and business information you share with us to deliver web design, development, hosting, or SEO services.",
      "Technical data: pages visited, device and browser type, approximate location, and interactions, collected via privacy-friendly analytics (Vercel Analytics) to improve our website.",
    ],
  },
  {
    title: "3. How We Use Your Data",
    body: [
      "To respond to inquiries, prepare quotations, and provide customer support.",
      "To deliver contracted services, including designing, building, launching, and maintaining your website.",
      "To improve our website, services, and content, and to detect and prevent spam, abuse, or security incidents.",
      "We do not sell your personal data. We do not use your data for unrelated marketing without your consent.",
    ],
  },
  {
    title: "4. Legal Basis & Consent",
    body: [
      "We process your data based on your consent (when you submit a form or contact us), the need to perform a contract or take pre-contract steps (quotations, projects), and our legitimate interest in operating and securing this website.",
      "You may withdraw consent at any time by emailing connect@kmonlinesolutions.com. Withdrawal does not affect processing already completed.",
    ],
  },
  {
    title: "5. Cookies & Analytics",
    body: [
      "We use a minimal set of cookies and local storage required for the site to function (e.g., remembering form state). We do not use advertising trackers.",
      "We use Vercel Analytics to understand aggregate visits (such as popular pages) without identifying you personally. Analytics data is processed in aggregate and retained according to Vercel's retention policies.",
    ],
  },
  {
    title: "6. How We Share Data",
    body: [
      "We share data only as needed to operate our services: hosting and infrastructure providers (e.g., Vercel), email delivery for contact-form notifications, and analytics as described above.",
      "We may disclose data when required by Philippine law, court order, or a government authority, or to protect our rights, clients, and the public against fraud or abuse.",
      "Project subcontractors, if any, are bound by confidentiality and process data only on our instructions.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "Inquiries: retained for up to 24 months to follow up on potential projects, then deleted or anonymized.",
      "Client project records and invoices: retained for up to 5 years for accounting, warranty, and legal purposes.",
      "You may request earlier deletion (see Your Rights below), unless retention is required by law.",
    ],
  },
  {
    title: "8. Data Security",
    body: [
      "We apply reasonable organizational and technical safeguards, including access controls, encrypted connections (HTTPS/TLS), and limited internal access, to protect your data.",
      "No method of transmission or storage is 100% secure. If a breach affecting your data occurs, we will notify you and the National Privacy Commission as required by law.",
    ],
  },
  {
    title: "9. Your Rights",
    body: [
      "Under the Data Privacy Act of 2012, you have the right to be informed, to access, to correct, to erase or block, to data portability, and to object to processing of your personal data.",
      "To exercise these rights, email connect@kmonlinesolutions.com with the subject “Data Privacy Request.” We will respond within a reasonable period and may ask for proof of identity to protect your data.",
      "If you believe your rights were violated, you may file a complaint with the National Privacy Commission (privacy.gov.ph).",
    ],
  },
  {
    title: "10. Children's Privacy",
    body: [
      "Our services are directed at businesses and are not intended for children under 16. We do not knowingly collect data from children. If you believe a child provided us data, contact us and we will delete it promptly.",
    ],
  },
  {
    title: "11. Third-Party Links",
    body: [
      "Our website links to third-party sites (e.g., Facebook, Instagram, Reddit). Their privacy practices are governed by their own policies, and we encourage you to review them.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy to reflect service or legal changes. The “Last updated” date at the top shows the current version. Material changes will be highlighted on this page.",
    ],
  },
  {
    title: "13. Contact Us",
    body: [
      "KM Online Solutions, Eastwood, Quezon City, Metro Manila, Philippines. Email: connect@kmonlinesolutions.com | Phone: 09267640444.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 lg:pt-24 lg:pb-12 w-full">
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">
            Legal: Last updated September 2026
          </p>
          <h1 className="font-slab text-5xl lg:text-7xl font-bold text-ink leading-none">
            PRIVACY
            <br />
            POLICY
          </h1>
          <p className="font-slab text-lg text-muted mt-6 max-w-xl">
            How we collect, use, and protect your data, in compliance with the
            Philippine Data Privacy Act of 2012.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title} className="offset-border p-6 sm:p-8 bg-paper">
                <h2 className="font-slab text-xl font-bold text-ink mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="font-slab text-muted text-sm sm:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <div className="offset-border p-6 sm:p-8 bg-ink text-paper">
              <h2 className="font-slab text-xl font-bold mb-3">Exercise your privacy rights</h2>
              <p className="font-slab text-sm sm:text-base text-paper/80 leading-relaxed mb-6">
                Email connect@kmonlinesolutions.com with the subject “Data Privacy
                Request” for access, correction, or deletion requests.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3.5 font-mono-custom text-sm font-bold border-2 border-paper bg-accent text-white transition-colors hover:bg-paper hover:text-ink"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
