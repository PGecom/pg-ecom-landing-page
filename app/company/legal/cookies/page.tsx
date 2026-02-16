import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { JsonLd } from "../../../components/JsonLd";

export const metadata: Metadata = {
  title: "Cookie Policy — PG Ecom",
  description:
    "Learn how PG Ecom uses cookies and similar tracking technologies on our website and services, and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy — PG Ecom",
    description:
      "Learn how PG Ecom uses cookies and similar tracking technologies on our website and services, and how you can manage your preferences.",
    url: "https://www.pgecom.com/company/legal/cookies",
  },
  twitter: {
    title: "Cookie Policy — PG Ecom",
    description:
      "Learn how PG Ecom uses cookies and similar tracking technologies on our website and services, and how you can manage your preferences.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/legal/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Legal", item: "https://www.pgecom.com/company/legal" },
            { "@type": "ListItem", position: 3, name: "Cookie Policy", item: "https://www.pgecom.com/company/legal/cookies" },
          ],
        }}
      />
      <Navbar />
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="/company/legal" className="text-sm text-[var(--primary)] hover:underline">&larr; Back to Legal</a>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: February 15, 2026</p>

          <div className="mt-12 prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. What Are Cookies</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience. PG Ecom uses cookies and similar technologies (such as local storage and pixel tags) on our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Types of Cookies We Use</h2>
              <div className="mt-3 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                  <p className="mt-1 text-sm text-gray-600">Required for the website to function properly. These include session cookies, authentication tokens, and security cookies. Cannot be disabled.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                  <p className="mt-1 text-sm text-gray-600">Remember your preferences such as language selection, region, and display settings to provide a personalized experience.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <p className="mt-1 text-sm text-gray-600">Help us understand how visitors interact with our website by collecting information about page visits, traffic sources, and user behavior in an aggregated and anonymous form.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                  <p className="mt-1 text-sm text-gray-600">Used to deliver relevant advertisements and track campaign effectiveness. These cookies may be set by our advertising partners.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. How We Use Cookies</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">We use cookies to:</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Keep you signed in to your account</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Remember your language and locale preferences</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Analyze website traffic and usage patterns</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Improve website performance and user experience</span></li>
                <li className="flex gap-2"><span className="text-[var(--primary)] font-bold">&bull;</span><span>Protect against fraud and unauthorized access</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Managing Cookies</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, though this may affect website functionality. You can also opt out of analytics and marketing cookies through the cookie consent banner displayed on your first visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Third-Party Cookies</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages, such as analytics providers and advertising networks. We do not control these cookies and recommend reviewing the privacy policies of these third parties for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Updates to This Policy</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We may update this Cookie Policy to reflect changes in technology, legislation, or our business practices. Changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                For questions about our use of cookies, contact us at{" "}
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
