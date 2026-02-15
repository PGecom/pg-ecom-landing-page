"use client";

import { useTranslation } from "../i18n";

export default function Whitelabel() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">
            {t.whitelabel.sectionLabel}
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            {t.whitelabel.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.whitelabel.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.whitelabel.features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="relative mx-auto w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    index === 0
                      ? "bg-gradient-to-br from-purple-50 to-indigo-50"
                      : index === 1
                        ? "bg-gradient-to-br from-blue-50 to-cyan-50"
                        : "bg-gradient-to-br from-indigo-50 to-purple-50"
                  }`}
                >
                  {index === 0 && (
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-5 w-56 shadow-xl">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <span className="text-white text-xs font-bold">YB</span>
                        </div>
                        <span className="text-white text-xs font-bold">Your Brand</span>
                      </div>
                      <div className="w-8 h-5 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 mb-4" />
                      <div className="font-mono text-white text-xs tracking-widest mb-4">
                        4242 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 1234
                      </div>
                      <div className="flex justify-between text-white/60 text-[10px]">
                        <span>YOUR COMPANY</span>
                        <span>12/28</span>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="bg-white rounded-xl shadow-xl p-4 w-64">
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                        <div className="w-6 h-6 bg-indigo-600 rounded-md" />
                        <span className="text-xs font-bold text-gray-900">Your Dashboard</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-indigo-50 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-indigo-600">1.2K</div>
                          <div className="text-[9px] text-gray-400">Cards</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-green-600">$48K</div>
                          <div className="text-[9px] text-gray-400">Spend</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-2 text-center">
                          <div className="text-sm font-bold text-purple-600">847</div>
                          <div className="text-[9px] text-gray-400">Active</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-100 rounded-full w-full" />
                        <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                        <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-center space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">YB</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2.5 bg-gray-300 rounded-full w-28 mx-auto" />
                        <div className="h-2 bg-gray-200 rounded-full w-36 mx-auto" />
                      </div>
                      <div className="flex justify-center gap-2 pt-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100" />
                        <div className="w-8 h-8 rounded-full bg-purple-100" />
                        <div className="w-8 h-8 rounded-full bg-blue-100" />
                        <div className="w-8 h-8 rounded-full bg-cyan-100" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
