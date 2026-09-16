import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | KM Online Solutions",
  description:
    "Terms of Service for KM Online Solutions: web design, development, and SEO services in the Philippines. Project terms, payments, revisions, and policies.",
  openGraph: {
    title: "Terms of Service | KM Online Solutions",
    description:
      "Terms governing web design and development services by KM Online Solutions in the Philippines.",
  },
};

const sections = [
  {
    title: "1. Services",
    body: [
      "KM Online Solutions (\"we,\" \"us,\" \"our\") provides website design, development, eCommerce, SEO, hosting assistance, and related digital services for businesses in the Philippines.",
      "Each project scope (pages, features, revisions, timelines, and deliverables) is defined in the proposal, quotation, or invoice agreed before work begins. Anything outside that scope is treated as an additional request and quoted separately.",
    ],
  },
  {
    title: "2. Quotations & Payments",
    body: [
      "All prices are quoted in Philippine Pesos (₱) unless stated otherwise. A quotation is valid for 14 days from the date issued.",
      "Unless agreed in writing, projects require a 50% down payment before work starts, with the remaining 50% due before launch or turnover. Monthly services (e.g., maintenance, hosting, SEO) are billed in advance.",
      "Late payments may pause work or suspend hosting and maintenance services until the balance is settled. Returned payments or chargebacks may incur processing fees.",
    ],
  },
  {
    title: "3. Revisions & Approvals",
    body: [
      "Each package includes the number of revision rounds stated in its proposal. Revisions mean adjustments to the agreed design direction, not a full redesign or a change of scope.",
      "Client feedback must be consolidated and submitted within 7 days of each review request. If feedback is delayed beyond 14 days, the project may be rescheduled and additional fees may apply.",
      "Final approval must be given in writing (email is acceptable) before launch. After launch, changes are billed as maintenance or a new task.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    body: [
      "You agree to provide all required content (text, images, logos, and access credentials) on time and to confirm that you own or are licensed to use everything you supply.",
      "You are responsible for the accuracy and legality of your content. We are not liable for claims arising from client-supplied text, images, products, or business practices.",
      "Delays in providing content, feedback, or approvals extend the project timeline accordingly.",
    ],
  },
  {
    title: "5. Timelines",
    body: [
      "Estimated timelines are provided in good faith and begin once the down payment and all required materials are received.",
      "Timelines may shift due to scope changes, delayed feedback, third-party services (e.g., domain registrars, payment gateways), or force majeure events.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "Upon full payment, you own the final website design and content created for you, excluding third-party assets, stock media, fonts, plugins, and open-source software, which remain under their respective licenses.",
      "We retain the right to display completed work in our portfolio, samples, case studies, and marketing unless you request otherwise in writing before launch.",
      "Until full payment is received, all drafts, code, and design files remain our property.",
    ],
  },
  {
    title: "7. Hosting, Domains & Third-Party Services",
    body: [
      "Where we manage hosting or domains on your behalf, you remain the registrant/owner and are responsible for renewal fees unless covered by a maintenance plan.",
      "We are not liable for downtime, data loss, or issues caused by third-party hosting providers, registrars, plugins, or platforms. We recommend regular backups, which are included only where stated in a maintenance plan.",
    ],
  },
  {
    title: "8. Warranties & Liability",
    body: [
      "We build and test websites to work on modern browsers and devices, but we do not guarantee uninterrupted, error-free operation, specific search rankings, or specific business results.",
      "To the maximum extent permitted by law, our total liability for any claim is limited to the amount you paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "Either party may terminate a project with written notice. The down payment is non-refundable and covers discovery, design, and reserved schedule time.",
      "If you terminate after work has started, you agree to pay for all completed work and work in progress up to the termination date. Completed, paid deliverables will be handed over; unpaid work will not be released.",
      "We may terminate or suspend services for non-payment, abusive conduct, or unlawful use of our services.",
    ],
  },
  {
    title: "10. Governing Law",
    body: [
      "These terms are governed by the laws of the Republic of the Philippines. Any dispute shall first be resolved through good-faith negotiation, and if unresolved, submitted to the proper courts of Quezon City, Metro Manila.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. The version published on this page at the time of your purchase or engagement applies to your project.",
    ],
  },
  {
    title: "12. Contact",
    body: [
      "For questions about these terms, contact us at connect@kmonlinesolutions.com or visit our contact page.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div>
      <section className="min-h-[40vh] flex items-center bg-paper border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 lg:pt-24 lg:pb-12 w-full">
          <p className="font-mono-custom text-xs text-ink mb-4 tracking-widest uppercase">
            Legal: Last updated September 2026
          </p>
          <h1 className="font-slab text-5xl lg:text-7xl font-bold text-ink leading-none">
            TERMS OF
            <br />
            SERVICE
          </h1>
          <p className="font-slab text-lg text-muted mt-6 max-w-xl">
            The ground rules for working with KM Online Solutions: clear scope,
            fair payments, and mutual responsibilities.
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
              <h2 className="font-slab text-xl font-bold mb-3">Questions about these terms?</h2>
              <p className="font-slab text-sm sm:text-base text-paper/80 leading-relaxed mb-6">
                Reach out before starting your project. We are happy to walk through
                scope, pricing, and timelines.
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
