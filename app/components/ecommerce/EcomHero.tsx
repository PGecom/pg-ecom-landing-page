"use client";

import { useTranslation } from "../../i18n";

export default function EcomHero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-700">{t.ecommerce.hero.badge}</span>
            </div>

            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1]">
              {t.ecommerce.hero.headingLine1}{" "}
              <span className="gradient-text">{t.ecommerce.hero.headingHighlight}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">{t.ecommerce.hero.description}</p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a href="#" className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200">
                {t.ecommerce.hero.ctaPrimary}
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all">
                {t.ecommerce.hero.ctaSecondary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Store Dashboard</div>
                  <div className="text-xs text-gray-400">Real-time overview</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-[10px] text-gray-400 uppercase">Revenue</div>
                  <div className="text-lg font-bold text-gray-900 mt-1">$12.4K</div>
                  <div className="text-[10px] text-emerald-600 font-medium">+12.5%</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-[10px] text-gray-400 uppercase">Orders</div>
                  <div className="text-lg font-bold text-gray-900 mt-1">384</div>
                  <div className="text-[10px] text-emerald-600 font-medium">+8.2%</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-[10px] text-gray-400 uppercase">Visitors</div>
                  <div className="text-lg font-bold text-gray-900 mt-1">2.1K</div>
                  <div className="text-[10px] text-emerald-600 font-medium">+15.3%</div>
                </div>
              </div>

              {/* Mini chart mockup */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-600">Sales Overview</span>
                  <span className="text-xs text-gray-400">Last 7 days</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { name: "Wireless Headphones", qty: "24 sold", amount: "$1,199.76" },
                  { name: "Smart Watch Pro", qty: "18 sold", amount: "$2,159.82" },
                  { name: "USB-C Hub", qty: "42 sold", amount: "$1,259.58" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">{item.name}</div>
                        <div className="text-[10px] text-gray-400">{item.qty}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 z-20 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">New order</div>
                  <div className="text-[10px] text-gray-400">$89.99 — just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
