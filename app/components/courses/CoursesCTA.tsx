"use client";

import { useTranslation } from "../../i18n";

export default function CoursesCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900">
          {t.courses.cta.heading}
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {t.courses.cta.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-violet-200"
          >
            {t.courses.cta.ctaPrimary}
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all"
          >
            {t.courses.cta.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust items */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {t.courses.cta.trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
