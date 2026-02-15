"use client";

import { useTranslation } from "../../i18n";

export default function CoursesPricing() {
  const { t } = useTranslation();

  return (
    <section id="courses-pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.courses.pricing.sectionLabel}</span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.courses.pricing.heading}</h2>
          <p className="mt-4 text-lg text-gray-500">{t.courses.pricing.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.courses.pricing.tiers.map((tier, index) => {
            const isPopular = index === 1;
            const isFree = tier.price === "Free" || tier.price === "Gratuit" || tier.price === "Gratis";
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 ${
                  isPopular
                    ? "border-[var(--primary)] shadow-xl shadow-indigo-100 scale-105"
                    : "border-gray-100 hover:border-indigo-100 hover:shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t.courses.pricing.popular}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                    {!isFree && <span className="text-gray-500 text-sm">{t.courses.pricing.monthly}</span>}
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-full">
                      {tier.transactionFee}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://school.pgecom.com/auth/signup"
                  className={`block w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                    isPopular
                      ? "bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  {t.courses.pricing.getStarted}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
