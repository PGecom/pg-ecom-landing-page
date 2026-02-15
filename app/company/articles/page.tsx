import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "News, writings, press releases, and resources from PG Ecom.",
  openGraph: {
    title: "PG Ecom - Articles",
    description: "News, writings, press releases, and resources from PG Ecom.",
    url: "https://www.pgecom.com/company/articles",
  },
  alternates: { canonical: "https://www.pgecom.com/company/articles" },
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">Articles</span>
          <h1 className="font-[family-name:var(--font-montserrat)] mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            News & Resources
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            Stay up to date with the latest news, product updates, and insights from PG Ecom.
          </p>

          <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-100 p-12">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-[var(--primary)] flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Coming Soon</h2>
            <p className="mt-3 text-gray-500 max-w-md mx-auto">
              We are working on bringing you insightful articles about card issuing, ecommerce, fintech, and building digital businesses. Check back soon.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-400">
              Want to be notified when we publish? Reach out at{" "}
              <a href="mailto:info@pgecom.com" className="text-[var(--primary)] hover:underline">info@pgecom.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
