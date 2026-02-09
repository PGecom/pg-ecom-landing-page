"use client";

import { useTranslation } from "../i18n";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Card Management Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.dashboard.cardMgmtLabel}</span>
            <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.dashboard.cardMgmtHeading}</h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{t.dashboard.cardMgmtDescription}</p>
            <ul className="mt-8 space-y-4">
              {t.dashboard.cardMgmtBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 mt-8 text-[var(--primary)] font-semibold hover:gap-3 transition-all">
              {t.dashboard.exploreDashboard}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Card Management Mockup */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">{t.dashboard.activeCards}</h3>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{t.dashboard.filterAll}</span>
                <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">{t.dashboard.filterVirtual}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{t.dashboard.filterPhysical}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: t.dashboard.statTotalCards, value: "1,284" },
                { label: t.dashboard.statMonthlySpend, value: "$482K" },
                { label: t.dashboard.statActiveToday, value: "847" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-3">
                  <div className="text-[10px] text-gray-400 uppercase">{stat.label}</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                { name: "Marketing Team", last4: "8219", status: "active" as const, spent: "$12,450", limit: "$15,000", pct: 83 },
                { name: "Engineering", last4: "4102", status: "active" as const, spent: "$8,200", limit: "$20,000", pct: 41 },
                { name: "Sales Travel", last4: "7653", status: "active" as const, spent: "$3,100", limit: "$10,000", pct: 31 },
                { name: "Office Supplies", last4: "2891", status: "frozen" as const, spent: "$950", limit: "$2,000", pct: 47 },
              ].map((card) => (
                <div key={card.last4} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-7 rounded-md flex items-center justify-center text-white text-[8px] font-bold ${card.status === "frozen" ? "bg-gray-400" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`}>
                    &bull;&bull;&bull;{card.last4}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 truncate">{card.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${card.status === "active" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}`}>
                        {card.status === "active" ? t.dashboard.statusActive : t.dashboard.statusFrozen}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${card.pct > 75 ? "bg-amber-500" : "bg-indigo-500"}`} style={{ width: `${card.pct}%` }} />
                      </div>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap">{card.spent} / {card.limit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 text-sm text-[var(--primary)] font-semibold py-2 border border-indigo-100 rounded-xl hover:bg-indigo-50 transition-colors">
              {t.dashboard.issueNewCard}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
