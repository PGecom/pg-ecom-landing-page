"use client";

import { useTranslation } from "../../i18n";

type UseCaseSlug = "expenseManagement" | "fleetCards" | "travelPlatforms" | "loyaltyPrograms" | "chargeCards";

export default function UseCaseCTA({ slug }: { slug: UseCaseSlug }) {
  const { t } = useTranslation();
  const cta = t.useCases[slug].cta;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-bold text-gray-900">
          {cta.heading}
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {cta.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.pgecom.com/signup"
            className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200"
          >
            {cta.ctaPrimary}
          </a>
          <a
            href="mailto:info@pgecom.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all"
          >
            {cta.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
