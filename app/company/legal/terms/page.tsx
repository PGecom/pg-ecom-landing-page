import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { JsonLd } from "../../../components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service — PG Ecom",
  description:
    "Read PG Ecom's Terms of Service governing the use of our card issuing API, payment infrastructure, and related products and services.",
  openGraph: {
    title: "Terms of Service — PG Ecom",
    description:
      "Read PG Ecom's Terms of Service governing the use of our card issuing API, payment infrastructure, and related products and services.",
    url: "https://www.pgecom.com/company/legal/terms",
  },
  twitter: {
    title: "Terms of Service — PG Ecom",
    description:
      "Read PG Ecom's Terms of Service governing the use of our card issuing API, payment infrastructure, and related products and services.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/legal/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Legal", item: "https://www.pgecom.com/company/legal" },
            { "@type": "ListItem", position: 3, name: "Terms of Service", item: "https://www.pgecom.com/company/legal/terms" },
          ],
        }}
      />
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="/company/legal" className="text-sm text-[var(--primary)] hover:underline">&larr; Back to Legal</a>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: February 15, 2026</p>

          <div className="mt-12 prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                By accessing or using PG Ecom&apos;s services, including our card issuing API, payment infrastructure, ecommerce platform, prepaid top-up services, identity verification, and any related products (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, you must not use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Description of Services</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                PG Ecom provides a technology platform that enables businesses to issue, manage, and control virtual and physical payment cards through our API. Our Services include card issuance, card lifecycle management, transaction webhooks, transaction data access, and related infrastructure tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Eligibility</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You must be at least 18 years of age and represent a legally formed business entity to use our Services. By registering for an account, you represent and warrant that you have the authority to bind the entity you represent to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Account Registration</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                To access the Services, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify PG Ecom immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. API Usage</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Access to our API is subject to rate limits, usage policies, and technical documentation provided at the time of integration. You agree to use the API in accordance with our documentation and not to attempt to circumvent any security measures, rate limits, or access controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Fees and Payment</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Fees for the Services are described in your service agreement or on our pricing page. PG Ecom reserves the right to modify fees with 30 days prior written notice. You are responsible for all applicable taxes. Failure to pay may result in suspension or termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Prohibited Activities</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You may not use the Services for any unlawful purpose, including but not limited to: money laundering, terrorist financing, fraud, unauthorized access to financial systems, or any activity that violates applicable laws and regulations. PG Ecom reserves the right to suspend or terminate accounts engaged in prohibited activities without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Intellectual Property</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                All intellectual property rights in the Services, including software, APIs, documentation, trademarks, and content, are owned by PG Ecom or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Services in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Limitation of Liability</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, PG Ecom shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">10. Termination</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Either party may terminate these Terms with 30 days written notice. PG Ecom may terminate or suspend your access immediately if you breach these Terms. Upon termination, your right to use the Services ceases, and any outstanding fees become immediately due.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">11. Governing Law</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be resolved through binding arbitration or in the courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">12. Contact</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
                <a href="mailto:legal@pgecom.com" className="text-[var(--primary)] hover:underline">legal@pgecom.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
