"use client";

import { useTranslation } from "../i18n";

const providers = [
  { name: "Stripe Issuing", initials: "St", color: "from-purple-500 to-indigo-600" },
  { name: "Marqeta", initials: "Mq", color: "from-orange-500 to-red-500" },
  { name: "Flutterwave", initials: "Fw", color: "from-yellow-500 to-orange-500" },
  { name: "Adyen", initials: "Ad", color: "from-green-500 to-emerald-600" },
  { name: "Galileo", initials: "Ga", color: "from-blue-500 to-cyan-600" },
  { name: "i2c", initials: "i2", color: "from-pink-500 to-rose-600" },
];

export default function BringYourProvider() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">
            {t.byop.sectionLabel}
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            {t.byop.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.byop.description}
          </p>
        </div>

        {/* Central Platform Badge */}
        <div className="flex items-center justify-center mb-12">
          <div className="relative z-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl px-8 py-6 shadow-2xl shadow-indigo-300/30">
            <div className="text-white text-center">
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                {t.byop.platformLabel}
              </div>
              <div className="font-[family-name:var(--font-montserrat)] text-2xl font-bold mt-1">PG Ecom</div>
              <div className="text-xs opacity-60 mt-1">{t.byop.platformSubtext}</div>
            </div>
          </div>
        </div>

        {/* Connector lines visual */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-8 bg-gradient-to-b from-indigo-300 to-gray-200" />
        </div>

        {/* Provider Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${provider.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white font-bold text-sm">{provider.initials}</span>
              </div>
              <div className="font-semibold text-gray-900">{provider.name}</div>
              <div className="text-xs text-gray-400 mt-1">{t.byop.providerSupported}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.byop.benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                <p className="text-sm text-gray-500 mt-0.5">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
