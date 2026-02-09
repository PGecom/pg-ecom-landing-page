"use client";

import { useTranslation } from "../../i18n";

const providerColors: Record<string, string> = {
  MonCash: "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Moncash Business": "bg-yellow-50 text-yellow-700 border-yellow-200",
  Natcash: "bg-orange-50 text-orange-700 border-orange-200",
  Visa: "bg-blue-50 text-blue-700 border-blue-200",
  Mastercard: "bg-red-50 text-red-700 border-red-200",
  Sogebank: "bg-green-50 text-green-700 border-green-200",
  BUH: "bg-teal-50 text-teal-700 border-teal-200",
  PayPal: "bg-blue-50 text-blue-700 border-blue-200",
  Stripe: "bg-purple-50 text-purple-700 border-purple-200",
  Square: "bg-gray-50 text-gray-700 border-gray-200",
  Wise: "bg-green-50 text-green-700 border-green-200",
};

export default function EcomIntegrations() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.ecommerce.integrations.sectionLabel}</span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.ecommerce.integrations.heading}</h2>
          <p className="mt-4 text-lg text-gray-500">{t.ecommerce.integrations.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.ecommerce.integrations.categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.providers.map((provider) => (
                  <span
                    key={provider}
                    className={`text-sm font-medium px-4 py-2 rounded-xl border ${providerColors[provider] || "bg-gray-50 text-gray-700 border-gray-200"}`}
                  >
                    {provider}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
