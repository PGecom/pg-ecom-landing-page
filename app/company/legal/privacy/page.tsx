import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { JsonLd } from "../../../components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy — PG Ecom",
  description:
    "Learn how PG Ecom collects, uses, stores, and protects your personal data when you use our card issuing API and financial infrastructure services.",
  openGraph: {
    title: "Privacy Policy — PG Ecom",
    description:
      "Learn how PG Ecom collects, uses, stores, and protects your personal data when you use our card issuing API and financial infrastructure services.",
    url: "https://www.pgecom.com/company/legal/privacy",
  },
  twitter: {
    title: "Privacy Policy — PG Ecom",
    description:
      "Learn how PG Ecom collects, uses, stores, and protects your personal data when you use our card issuing API and financial infrastructure services.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Legal", item: "https://www.pgecom.com/company/legal" },
            { "@type": "ListItem", position: 3, name: "Privacy Policy", item: "https://www.pgecom.com/company/legal/privacy" },
          ],
        }}
      />
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="/company/legal" className="text-sm text-[var(--primary)] hover:underline">&larr; Back to Legal</a>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: February 15, 2026</p>

          <div className="mt-12 prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                PG Ecom (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our card issuing API, payment infrastructure, and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">We collect the following types of information:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Account Information:</strong> Name, email address, business name, phone number, and billing details provided during registration.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Identity Verification Data:</strong> Government-issued identification, business registration documents, and beneficial ownership information required for KYC/KYB compliance.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Transaction Data:</strong> Card transaction details, amounts, merchant information, and timestamps processed through our platform.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Technical Data:</strong> IP addresses, browser type, device information, API usage logs, and cookies collected automatically.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">We use your information to:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Provide, maintain, and improve our Services</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Process transactions and manage card programs</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Comply with legal obligations including KYC, AML, and regulatory requirements</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Detect and prevent fraud, unauthorized access, and other harmful activities</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Communicate with you about your account, updates, and support</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Data Sharing</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We do not sell your personal data. We may share information with: card network partners (Visa, Mastercard) as required for card issuance and processing; banking partners for fund settlement; regulatory authorities as required by law; and service providers who assist in delivering our Services under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We implement industry-standard security measures including encryption at rest and in transit, access controls, regular security audits, and PCI DSS compliance. While no system is completely secure, we take reasonable measures to protect your data from unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Data Retention</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We retain your information for as long as your account is active and as required to fulfill legal obligations, resolve disputes, and enforce our agreements. Transaction records are retained in accordance with applicable financial regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Your Rights</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data (subject to legal retention requirements); object to or restrict certain processing; and data portability. To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@pgecom.com" className="text-[var(--primary)] hover:underline">privacy@pgecom.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. International Transfers</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers, including standard contractual clauses and adequacy decisions where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Changes to This Policy</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Services after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">10. Contact</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                For questions or concerns about this Privacy Policy, contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@pgecom.com" className="text-[var(--primary)] hover:underline">privacy@pgecom.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
