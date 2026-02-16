import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "About PG Ecom — Financial Infrastructure for Business",
  description:
    "Learn about PG Ecom's mission to make card issuing, ecommerce, identity verification, and financial infrastructure accessible to businesses of all sizes worldwide.",
  openGraph: {
    title: "About PG Ecom — Financial Infrastructure for Business",
    description:
      "Learn about PG Ecom's mission to make card issuing, ecommerce, identity verification, and financial infrastructure accessible to businesses of all sizes worldwide.",
    url: "https://www.pgecom.com/company/about",
  },
  twitter: {
    title: "About PG Ecom — Financial Infrastructure for Business",
    description:
      "Learn about PG Ecom's mission to make card issuing, ecommerce, identity verification, and financial infrastructure accessible to businesses of all sizes worldwide.",
  },
  alternates: { canonical: "https://www.pgecom.com/company/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Company", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 3, name: "About Us", item: "https://www.pgecom.com/company/about" },
          ],
        }}
      />
      <Navbar />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">About Us</span>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Building the financial infrastructure for modern businesses
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            PG Ecom is a technology company on a mission to make card issuing, ecommerce, identity verification, and digital financial services accessible to businesses of all sizes — anywhere in the world.
          </p>

          <div className="mt-16 space-y-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                We believe every business should have access to enterprise-grade financial tools. Whether you need to issue virtual and physical cards, launch an online store, verify customer identities, or build a course platform — PG Ecom provides the infrastructure to make it happen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">What We Do</h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Our platform spans multiple products: card issuing with whitelabel capabilities, ecommerce storefronts, prepaid top-up distribution, identity verification, and course management. Each product is built with the same principles — developer-friendly APIs, multilingual support, and transparent pricing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                We envision a world where launching a financial product is as simple as signing up for an account. From startups to enterprises, from Port-au-Prince to Paris — we are building the tools that power the next generation of businesses.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <a href="https://app.pgecom.com/signup" className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all text-center">
              Get started
            </a>
            <a href="mailto:info@pgecom.com" className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all text-center">
              Contact us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
