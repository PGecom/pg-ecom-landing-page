"use client";

import { useTranslation } from "../../i18n";

export default function PrepaidPricing() {
  const { t } = useTranslation();

  return (
    <section id="prepaid-pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.prepaid.pricing.sectionLabel}</span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.prepaid.pricing.heading}</h2>
          <p className="mt-4 text-lg text-gray-500">{t.prepaid.pricing.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.prepaid.pricing.tiers.map((tier, index) => {
            const isPopular = index === 1;
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
                    <span className="bg-[var(--primary)] text-white text-xs font-semibold px-4 py-1 rounded-full">
                      {t.prepaid.pricing.popular}
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tier.description}</p>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                    {tier.price !== "Free" && tier.price !== "Gratuit" && tier.price !== "Gratis" && (
                      <span className="text-sm text-gray-500">{t.prepaid.pricing.monthly}</span>
                    )}
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://prepaid.pgecom.com/signup"
                  className={`mt-8 block w-full text-center font-semibold py-3 rounded-xl transition-colors ${
                    isPopular
                      ? "bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  {t.prepaid.pricing.getStarted}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
