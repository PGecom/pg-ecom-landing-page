import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { JsonLd } from "../../../components/JsonLd";

export const metadata: Metadata = {
  title: "AML Policy — PG Ecom",
  description:
    "PG Ecom's Anti-Money Laundering (AML) policy outlining our compliance framework, KYC procedures, and commitment to preventing financial crime.",
  openGraph: {
    title: "AML Policy — PG Ecom",
    description:
      "PG Ecom's Anti-Money Laundering (AML) policy outlining our compliance framework, KYC procedures, and commitment to preventing financial crime.",
    url: "https://www.pgecom.com/company/legal/aml",
  },
  twitter: {
    title: "AML Policy — PG Ecom",
    description:
      "PG Ecom's Anti-Money Laundering (AML) policy outlining our compliance framework, KYC procedures, and commitment to preventing financial crime.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/legal/aml" },
};

export default function AmlPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Legal", item: "https://www.pgecom.com/company/legal" },
            { "@type": "ListItem", position: 3, name: "AML Policy", item: "https://www.pgecom.com/company/legal/aml" },
          ],
        }}
      />
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="/company/legal" className="text-sm text-[var(--primary)] hover:underline">&larr; Back to Legal</a>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Anti-Money Laundering Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: February 15, 2026</p>

          <div className="mt-12 prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Purpose</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                PG Ecom is committed to the highest standards of Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) compliance. This policy establishes the framework and procedures we follow to detect, prevent, and report suspicious activities in accordance with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Know Your Customer (KYC)</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                All customers must complete our KYC verification process before accessing card issuing and payment services. This includes:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Individual Verification:</strong> Government-issued photo identification, proof of address, and date of birth verification.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Business Verification (KYB):</strong> Business registration documents, articles of incorporation, beneficial ownership disclosure, and proof of business address.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Enhanced Due Diligence:</strong> Additional verification for high-risk customers, politically exposed persons (PEPs), and businesses in higher-risk jurisdictions.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Transaction Monitoring</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We maintain systems to monitor transactions for suspicious patterns, including unusual transaction volumes, rapid movement of funds, transactions inconsistent with customer profiles, and structuring activities designed to avoid reporting thresholds. Flagged transactions are reviewed by our compliance team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Sanctions Screening</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                All customers and transactions are screened against international sanctions lists, including OFAC, EU sanctions lists, UN sanctions lists, and other applicable national and regional sanctions programs. Matches are escalated for immediate review and action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Suspicious Activity Reporting</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                When suspicious activity is identified, PG Ecom files Suspicious Activity Reports (SARs) with the appropriate financial intelligence units as required by law. Employees are prohibited from disclosing the existence of a SAR to any person, including the subject of the report.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Record Keeping</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We maintain records of all customer identification documents, transaction records, and compliance activities for the minimum period required by applicable regulations. These records are stored securely and made available to regulatory authorities upon lawful request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Employee Training</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                All PG Ecom employees receive regular AML/CTF training appropriate to their roles. Training covers identification of suspicious activities, reporting obligations, sanctions compliance, and updates to relevant laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Compliance Officer</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                PG Ecom maintains a designated Compliance Officer responsible for overseeing the implementation of this AML policy, ensuring regulatory compliance, and serving as the primary point of contact for regulatory inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Contact</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                For questions about our AML compliance program, contact our Compliance team at{" "}
                <a href="mailto:compliance@pgecom.com" className="text-[var(--primary)] hover:underline">compliance@pgecom.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
