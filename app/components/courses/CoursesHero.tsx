"use client";

import { useTranslation } from "../../i18n";

export default function CoursesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          </svg>
          {t.courses.hero.badge}
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
          {t.courses.hero.headingLine1}{" "}
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            {t.courses.hero.headingHighlight}
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {t.courses.hero.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#courses-pricing"
            className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-violet-200"
          >
            {t.courses.hero.ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all"
          >
            {t.courses.hero.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust items */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {t.courses.hero.trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Metrics bar */}
      <div className="max-w-3xl mx-auto mt-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{t.courses.metrics.studentsValue}</div>
            <div className="text-sm text-gray-500 mt-1">{t.courses.metrics.students}</div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              {t.courses.metrics.studentsChange}
            </span>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{t.courses.metrics.revenueValue}</div>
            <div className="text-sm text-gray-500 mt-1">{t.courses.metrics.revenue}</div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              {t.courses.metrics.revenueChange}
            </span>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{t.courses.metrics.completionValue}</div>
            <div className="text-sm text-gray-500 mt-1">{t.courses.metrics.completion}</div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              {t.courses.metrics.completionChange}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
