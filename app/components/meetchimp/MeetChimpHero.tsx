"use client";

import { useTranslation } from "../../i18n";

export default function MeetChimpHero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-sky-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700">{t.meetchimp.hero.badge}</span>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1]">
            {t.meetchimp.hero.headingLine1}{" "}
            <span className="gradient-text">{t.meetchimp.hero.headingHighlight}</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">{t.meetchimp.hero.description}</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.meetchimp.com/auth/signup" className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200">
              {t.meetchimp.hero.ctaPrimary}
            </a>
            <a href="https://www.meetchimp.com/auth/signin" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all">
              {t.meetchimp.hero.ctaSecondary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {t.meetchimp.metrics.map((metric, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
