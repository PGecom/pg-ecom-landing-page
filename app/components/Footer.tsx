"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const linkSections = [
    { key: "product" as const, links: t.footer.links.product },
    { key: "useCases" as const, links: t.footer.links.useCases },
    { key: "resources" as const, links: t.footer.links.resources },
    { key: "legal" as const, links: t.footer.links.legal },
  ];

  const linkRoutes: Record<string, (string | null)[]> = {
    product: ["/", "/prepaid", "/identity", null, "/ecommerce", "/courses", null, null],
    useCases: ["/use-cases/expense-management", "/use-cases/fleet-cards", "/use-cases/travel-platforms", "/use-cases/loyalty-programs", "/use-cases/charge-cards"],
    resources: [null, null, null, null, null],
    legal: [null, null, null, null, null],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-white">{t.footer.ctaHeading}</h2>
            <p className="mt-4 text-lg text-gray-400">{t.footer.ctaDescription}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.pgecom.com/signup" className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
                {t.footer.ctaPrimary}
              </a>
              <a href="mailto:info@pgecom.com" className="w-full sm:w-auto border border-gray-600 hover:border-gray-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
                {t.footer.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Image src="/pgecom-logo-transparent.png" alt="PG Ecom" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">{t.footer.brandDescription}</p>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">{t.footer.stayUpdated}</h4>
              <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
                <button type="submit" className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  {t.footer.subscribe}
                </button>
              </form>
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.key}>
              <h4 className="text-sm font-semibold text-white mb-4">{t.footer.linkCategories[section.key]}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, idx) => (
                  <li key={link}>
                    <a href={linkRoutes[section.key]?.[idx] ?? "#"} className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <a href="http://twitter.com/pgecommerce" className="text-gray-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
              <a href="https://facebook.com/pgecom" className="text-gray-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
              <a href="http://instagram.com/pgecom" className="text-gray-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="mailto:info@pgecom.com" className="hover:text-white transition-colors">info@pgecom.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
