"use client";

import type { ReactNode } from "react";
import { useTranslation } from "../i18n";

const useCaseStyles: { icon: ReactNode; color: string }[] = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>,
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Integrations() {
  const { t } = useTranslation();

  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.integrations.sectionLabel}</span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.integrations.heading}</h2>
          <p className="mt-4 text-lg text-gray-500">{t.integrations.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.integrations.items.map((useCase, index) => {
            const useCaseLinks = [
              "/use-cases/expense-management",
              "/use-cases/fleet-cards",
              "/use-cases/travel-platforms",
              "/use-cases/loyalty-programs",
              "#",
              "/use-cases/charge-cards",
            ];
            return (
            <div key={index} className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${useCaseStyles[index].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCaseStyles[index].color} text-white flex items-center justify-center mb-4`}>
                {useCaseStyles[index].icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{useCase.description}</p>
              <a href={useCaseLinks[index]} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[var(--primary)] hover:gap-2 transition-all">
                {t.integrations.learnMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
