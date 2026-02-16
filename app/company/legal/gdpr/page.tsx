import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { JsonLd } from "../../../components/JsonLd";

export const metadata: Metadata = {
  title: "GDPR Compliance — PG Ecom",
  description:
    "PG Ecom's commitment to data protection under the General Data Protection Regulation (GDPR), including your rights and how we process personal data.",
  openGraph: {
    title: "GDPR Compliance — PG Ecom",
    description:
      "PG Ecom's commitment to data protection under the General Data Protection Regulation (GDPR), including your rights and how we process personal data.",
    url: "https://www.pgecom.com/company/legal/gdpr",
  },
  twitter: {
    title: "GDPR Compliance — PG Ecom",
    description:
      "PG Ecom's commitment to data protection under the General Data Protection Regulation (GDPR), including your rights and how we process personal data.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/legal/gdpr" },
};

export default function GdprPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Legal", item: "https://www.pgecom.com/company/legal" },
            { "@type": "ListItem", position: 3, name: "GDPR Compliance", item: "https://www.pgecom.com/company/legal/gdpr" },
          ],
        }}
      />
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="/company/legal" className="text-sm text-[var(--primary)] hover:underline">&larr; Back to Legal</a>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            GDPR Compliance
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: February 15, 2026</p>

          <div className="mt-12 prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Our Commitment</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                PG Ecom is committed to complying with the General Data Protection Regulation (GDPR) and ensuring that all personal data is processed lawfully, fairly, and transparently. This page outlines how we meet our obligations under the GDPR when processing the personal data of individuals in the European Economic Area (EEA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Lawful Basis for Processing</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">We process personal data under the following legal bases:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Contract Performance:</strong> Processing necessary to provide our card issuing and payment services as agreed in our service terms.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Legal Obligation:</strong> Processing required for compliance with financial regulations, AML/KYC requirements, and tax obligations.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Legitimate Interest:</strong> Processing for fraud prevention, service improvement, and security purposes where our interests do not override your rights.</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span><strong>Consent:</strong> Processing for marketing communications and non-essential cookies, which you may withdraw at any time.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Your Rights Under GDPR</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">As an EEA data subject, you have the following rights:</p>
              <div className="mt-3 space-y-3">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Right of Access</h3>
                  <p className="mt-1 text-sm text-gray-600">Request a copy of the personal data we hold about you.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Right to Rectification</h3>
                  <p className="mt-1 text-sm text-gray-600">Request correction of inaccurate or incomplete personal data.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Right to Erasure</h3>
                  <p className="mt-1 text-sm text-gray-600">Request deletion of your personal data, subject to legal retention requirements.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Right to Restrict Processing</h3>
                  <p className="mt-1 text-sm text-gray-600">Request that we limit how we use your data in certain circumstances.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Right to Data Portability</h3>
                  <p className="mt-1 text-sm text-gray-600">Receive your data in a structured, machine-readable format and transfer it to another controller.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Right to Object</h3>
                  <p className="mt-1 text-sm text-gray-600">Object to processing based on legitimate interest or for direct marketing purposes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Data Protection Measures</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect personal data, including: encryption of data in transit and at rest, role-based access controls, regular security assessments, data minimization practices, and privacy-by-design principles in our product development.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. International Data Transfers</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                When we transfer personal data outside the EEA, we ensure adequate protection through: EU Standard Contractual Clauses (SCCs), adequacy decisions by the European Commission, or other approved transfer mechanisms. We conduct transfer impact assessments where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Data Breach Notification</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours where feasible, and affected individuals without undue delay where the breach is likely to result in a high risk to their rights and freedoms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Data Protection Officer</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                PG Ecom has designated a Data Protection Officer (DPO) to oversee GDPR compliance. You can contact our DPO at{" "}
                <a href="mailto:dpo@pgecom.com" className="text-[var(--primary)] hover:underline">dpo@pgecom.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Supervisory Authority</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You have the right to lodge a complaint with your local data protection supervisory authority if you believe your personal data has been processed in violation of the GDPR. We encourage you to contact us first so we can address your concerns directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Contact</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                For GDPR-related inquiries or to exercise your rights, contact us at{" "}
                <a href="mailto:dpo@pgecom.com" className="text-[var(--primary)] hover:underline">dpo@pgecom.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
