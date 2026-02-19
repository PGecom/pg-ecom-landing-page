"use client";

import { useTranslation } from "../../i18n";

export default function CrmCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-extrabold text-gray-900">{t.crm.cta.heading}</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t.crm.cta.description}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://www.captisso.com/auth/signup" className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200">
            {t.crm.cta.ctaPrimary}
          </a>
          <a href="https://www.captisso.com/auth/signin" className="w-full sm:w-auto border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all">
            {t.crm.cta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
