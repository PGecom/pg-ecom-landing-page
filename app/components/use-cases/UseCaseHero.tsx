"use client";

import { useTranslation } from "../../i18n";

type UseCaseSlug = "expenseManagement" | "fleetCards" | "travelPlatforms" | "loyaltyPrograms" | "chargeCards";

export default function UseCaseHero({ slug }: { slug: UseCaseSlug }) {
  const { t } = useTranslation();
  const hero = t.useCases[slug].hero;

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-indigo-700">{hero.badge}</span>
        </div>

        <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1]">
          {hero.headingLine1}{" "}
          <span className="gradient-text">{hero.headingHighlight}</span>
        </h1>

        <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">{hero.description}</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.pgecom.com/signup" className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200">
            {hero.ctaPrimary}
          </a>
          <a href="mailto:info@pgecom.com" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all">
            {hero.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
