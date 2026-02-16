import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Legal — Terms, Privacy Policy & Compliance",
  description:
    "PG Ecom legal information including Terms of Service, Privacy Policy, AML Policy, Cookie Policy, and GDPR compliance documentation for all products and services.",
  openGraph: {
    title: "PG Ecom — Legal Documents & Policies",
    description:
      "PG Ecom legal information including Terms of Service, Privacy Policy, AML Policy, Cookie Policy, and GDPR compliance documentation for all products and services.",
    url: "https://www.pgecom.com/company/legal",
  },
  twitter: {
    title: "PG Ecom — Legal Documents & Policies",
    description:
      "PG Ecom legal information including Terms of Service, Privacy Policy, AML Policy, Cookie Policy, and GDPR compliance documentation for all products and services.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/legal" },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Company", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 3, name: "Legal", item: "https://www.pgecom.com/company/legal" },
          ],
        }}
      />
      <Navbar />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">Legal</span>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Terms & Policies
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Transparency is important to us. Below you will find our legal documents and policies.
          </p>

          <div className="mt-12 space-y-4">
            {[
              {
                title: "Terms of Service",
                description: "The terms that govern your use of PG Ecom's products and services.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
              },
              {
                title: "Privacy Policy",
                description: "How we collect, use, and protect your personal data.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
              },
              {
                title: "AML Policy",
                description: "Our Anti-Money Laundering policy and compliance framework.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>,
              },
              {
                title: "Cookie Policy",
                description: "Information about how we use cookies and similar technologies.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>,
              },
              {
                title: "GDPR Compliance",
                description: "Our commitment to data protection under the General Data Protection Regulation.",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
              },
            ].map((doc) => (
              <div key={doc.title} className="flex items-start gap-4 bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                  {doc.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{doc.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              For legal inquiries, contact us at{" "}
              <a href="mailto:legal@pgecom.com" className="text-[var(--primary)] hover:underline">legal@pgecom.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
