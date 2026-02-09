"use client";

import { useTranslation } from "../../i18n";

export default function IdPricing() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.identity.pricing.sectionLabel}</span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.identity.pricing.heading}</h2>
          <p className="mt-4 text-lg text-gray-500">{t.identity.pricing.description}</p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.identity.pricing.tiers.map((tier, index) => {
            const isPopular = index === 1;
            const isBestValue = index === 2;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 ${
                  isPopular
                    ? "border-[var(--primary)] shadow-xl shadow-indigo-100"
                    : "border-gray-100 hover:border-indigo-100 hover:shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t.identity.pricing.popular}
                    </span>
                  </div>
                )}
                {isBestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t.identity.pricing.bestValue}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-base font-semibold text-gray-900">{tier.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-gray-900">{tier.price}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-sm font-medium text-gray-700">{tier.credits} {t.identity.pricing.credits}</span>
                    {tier.bonusCredits && (
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {tier.bonusCredits} {t.identity.pricing.bonus}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{tier.costPerCredit} {t.identity.pricing.perCredit}</div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors ${
                    isPopular
                      ? "bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  {t.identity.pricing.getStarted}
                </a>
              </div>
            );
          })}
        </div>

        {/* Credit Usage Guide */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">{t.identity.pricing.creditUsage.heading}</h3>
          <div className="space-y-3">
            {t.identity.pricing.creditUsage.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-indigo-50 text-[var(--primary)] font-bold text-sm flex items-center justify-center">
                    {item.credits}x
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
