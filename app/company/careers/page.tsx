import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join PG Ecom and help build the financial infrastructure for modern businesses. We're always looking for talented people.",
  openGraph: {
    title: "Careers at PG Ecom",
    description: "Join PG Ecom and help build the financial infrastructure for modern businesses.",
    url: "https://www.pgecom.com/company/careers",
  },
  alternates: { canonical: "https://www.pgecom.com/company/careers" },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">Careers</span>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Build the future of fintech with us
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            We are building the financial infrastructure that powers businesses around the world. If you are passionate about fintech, ecommerce, and making technology accessible — we would love to hear from you.
          </p>

          <div className="mt-16 space-y-8">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900">Why PG Ecom?</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Remote-First", description: "Work from anywhere in the world. We believe talent has no borders." },
                  { title: "Impact at Scale", description: "Your work powers card programs, storefronts, and financial tools used by businesses globally." },
                  { title: "Modern Stack", description: "Next.js, TypeScript, React, Node.js — we use the tools you love." },
                  { title: "Growth", description: "We invest in your development. Learn, grow, and take on new challenges." },
                ].map((perk) => (
                  <div key={perk.title} className="bg-white rounded-xl p-4 border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900">{perk.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-[var(--primary)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Open Positions</h2>
              <p className="mt-3 text-gray-500 max-w-md mx-auto">
                We are always looking for talented engineers, designers, and business professionals. Send your resume and a note about what excites you about PG Ecom.
              </p>
              <a href="mailto:careers@pgecom.com" className="mt-6 inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all">
                Apply now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
