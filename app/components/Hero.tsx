"use client";

import { useTranslation } from "../i18n";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-indigo-700">{t.hero.badge}</span>
            </div>

            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1]">
              {t.hero.headingLine1}{" "}
              <span className="gradient-text">{t.hero.headingHighlight}</span>{" "}
              {t.hero.headingLine2}
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">{t.hero.description}</p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a href="#" className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-indigo-200">
                {t.hero.ctaPrimary}
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-all">
                {t.hero.ctaSecondary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                {t.hero.trustPci}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                {t.hero.trustInstant}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                {t.hero.trustApiReady}
              </div>
            </div>
          </div>

          {/* Card Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] rounded-2xl p-6 shadow-2xl shadow-indigo-300/40 text-white">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-bold text-xs">PG</span>
                    </div>
                    <span className="font-[family-name:var(--font-montserrat)] font-bold text-sm">PG Ecom</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-white/60 bg-white/10 px-2 py-0.5 rounded-full">{t.hero.cardVirtual}</span>
                </div>
                <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-500 mb-6 flex items-center justify-center">
                  <div className="w-6 h-4 border border-yellow-600/30 rounded-sm" />
                </div>
                <div className="font-mono text-lg tracking-[0.2em] mb-6">4242 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 8219</div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] text-white/50 uppercase">{t.hero.cardCardholder}</div>
                    <div className="text-sm font-medium mt-0.5">Acme Corporation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-white/50 uppercase">{t.hero.cardExpires}</div>
                    <div className="text-sm font-medium mt-0.5">12/28</div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/30" />
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-full max-w-sm z-0">
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 shadow-xl text-white opacity-60 scale-90 rotate-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">PG</span>
                      </div>
                      <span className="text-xs font-bold">PG Ecom</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{t.hero.cardPhysical}</span>
                  </div>
                  <div className="w-9 h-6 rounded bg-gradient-to-br from-yellow-300/80 to-yellow-500/80 mb-4" />
                  <div className="font-mono text-sm tracking-[0.15em] text-white/60">4242 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 3741</div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 z-20 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">{t.hero.badgeApproved}</div>
                  <div className="text-[10px] text-gray-400">{t.hero.badgeApprovedDetail}</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 left-8 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 z-20" style={{ animation: "float 3s ease-in-out 1s infinite" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">{t.hero.badgeTopUp}</div>
                  <div className="text-[10px] text-gray-400">{t.hero.badgeTopUpDetail}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
