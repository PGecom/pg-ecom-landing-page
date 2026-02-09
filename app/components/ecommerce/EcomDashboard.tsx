"use client";

import { useTranslation } from "../../i18n";

export default function EcomDashboard() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.ecommerce.dashboard.sectionLabel}</span>
            <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.ecommerce.dashboard.heading}</h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{t.ecommerce.dashboard.description}</p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs text-gray-400 uppercase">{t.ecommerce.dashboard.metrics.totalRevenue}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">{t.ecommerce.dashboard.metrics.totalRevenueValue}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs text-gray-400 uppercase">{t.ecommerce.dashboard.metrics.totalOrders}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">{t.ecommerce.dashboard.metrics.totalOrdersValue}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs text-gray-400 uppercase">{t.ecommerce.dashboard.metrics.conversionRate}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">{t.ecommerce.dashboard.metrics.conversionRateValue}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs text-gray-400 uppercase">{t.ecommerce.dashboard.metrics.avgOrderValue}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">{t.ecommerce.dashboard.metrics.avgOrderValueValue}</div>
              </div>
            </div>
          </div>

          {/* Chart Mockup */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">Revenue Overview</h3>
              <div className="flex gap-2">
                <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">Monthly</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">Weekly</span>
              </div>
            </div>

            {/* Bar chart mockup */}
            <div className="flex items-end gap-2 h-48 mb-6">
              {[
                { h: 45, label: "Jan" },
                { h: 60, label: "Feb" },
                { h: 40, label: "Mar" },
                { h: 75, label: "Apr" },
                { h: 55, label: "May" },
                { h: 85, label: "Jun" },
                { h: 70, label: "Jul" },
                { h: 90, label: "Aug" },
                { h: 65, label: "Sep" },
                { h: 80, label: "Oct" },
                { h: 95, label: "Nov" },
                { h: 88, label: "Dec" },
              ].map((bar) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-md transition-all hover:from-indigo-600 hover:to-purple-500"
                    style={{ height: `${bar.h}%` }}
                  />
                  <span className="text-[9px] text-gray-400">{bar.label}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
              <div>
                <div className="text-[10px] text-gray-400 uppercase">Avg. Daily</div>
                <div className="text-sm font-bold text-gray-900">$4,152</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase">Peak Day</div>
                <div className="text-sm font-bold text-gray-900">$8,947</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase">Growth</div>
                <div className="text-sm font-bold text-emerald-600">+23.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
