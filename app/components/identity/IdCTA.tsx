"use client";

import { useTranslation } from "../../i18n";

export default function IdCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900">
          {t.identity.cta.heading}
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {t.identity.cta.description}
        </p>

        {/* Benefits */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {t.identity.cta.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.idverificationhub.com/auth/register"
            className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200"
          >
            {t.identity.cta.ctaPrimary}
          </a>
          <a
            href="https://www.idverificationhub.com/auth/login"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all"
          >
            {t.identity.cta.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
