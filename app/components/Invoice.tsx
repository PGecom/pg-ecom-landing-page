"use client";

import type { ReactNode } from "react";
import { useTranslation } from "../i18n";

const apiIcons: ReactNode[] = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  // Balance Management (wallet icon)
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
];

export default function Invoice() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.invoice.sectionLabel}</span>
            <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.invoice.heading}</h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{t.invoice.description}</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {t.invoice.apiItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    {apiIcons[index]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor Mockup - code stays untranslated */}
          <div className="bg-[#0c2e4e] rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#0a2640] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex gap-1 ml-4">
                <div className="text-[11px] text-white/80 bg-white/10 px-3 py-1 rounded-t-md">issue-card.ts</div>
                <div className="text-[11px] text-white/30 px-3 py-1">webhook.ts</div>
              </div>
            </div>
            <div className="p-5 font-mono text-[13px] leading-6 overflow-x-auto">
              <div><span className="text-purple-400">import</span><span className="text-gray-300"> PGEcom </span><span className="text-purple-400">from</span><span className="text-green-400"> &apos;pgecom&apos;</span><span className="text-gray-500">;</span></div>
              <div className="h-4" />
              <div><span className="text-purple-400">const</span><span className="text-blue-300"> pg</span><span className="text-gray-300"> = </span><span className="text-purple-400">new</span><span className="text-yellow-300"> PGEcom</span><span className="text-gray-300">(</span><span className="text-green-400">&apos;sk_live_...&apos;</span><span className="text-gray-300">)</span><span className="text-gray-500">;</span></div>
              <div className="h-4" />
              <div><span className="text-gray-500">{"// Create a cardholder"}</span></div>
              <div><span className="text-purple-400">const</span><span className="text-blue-300"> cardholder</span><span className="text-gray-300"> = </span><span className="text-purple-400">await</span><span className="text-gray-300"> pg.</span><span className="text-yellow-300">issuing</span><span className="text-gray-300">.</span><span className="text-yellow-300">cardholders</span><span className="text-gray-300">.</span><span className="text-blue-300">create</span><span className="text-gray-300">({"{"}</span></div>
              <div><span className="text-gray-300">  </span><span className="text-cyan-300">name</span><span className="text-gray-500">: </span><span className="text-green-400">&apos;Acme Corporation&apos;</span><span className="text-gray-500">,</span></div>
              <div><span className="text-gray-300">  </span><span className="text-cyan-300">type</span><span className="text-gray-500">: </span><span className="text-green-400">&apos;company&apos;</span><span className="text-gray-500">,</span></div>
              <div><span className="text-gray-300">{"})"}</span><span className="text-gray-500">;</span></div>
              <div className="h-4" />
              <div><span className="text-gray-500">{"// Issue a virtual card"}</span></div>
              <div><span className="text-purple-400">const</span><span className="text-blue-300"> card</span><span className="text-gray-300"> = </span><span className="text-purple-400">await</span><span className="text-gray-300"> pg.</span><span className="text-yellow-300">issuing</span><span className="text-gray-300">.</span><span className="text-yellow-300">cards</span><span className="text-gray-300">.</span><span className="text-blue-300">create</span><span className="text-gray-300">({"{"}</span></div>
              <div><span className="text-gray-300">  </span><span className="text-cyan-300">cardholder</span><span className="text-gray-500">: </span><span className="text-gray-300">cardholder.</span><span className="text-cyan-300">id</span><span className="text-gray-500">,</span></div>
              <div><span className="text-gray-300">  </span><span className="text-cyan-300">currency</span><span className="text-gray-500">: </span><span className="text-green-400">&apos;usd&apos;</span><span className="text-gray-500">,</span></div>
              <div><span className="text-gray-300">  </span><span className="text-cyan-300">type</span><span className="text-gray-500">: </span><span className="text-green-400">&apos;virtual&apos;</span><span className="text-gray-500">,</span></div>
              <div><span className="text-gray-300">  </span><span className="text-cyan-300">spending_controls</span><span className="text-gray-500">: </span><span className="text-gray-300">{"{"}</span></div>
              <div><span className="text-gray-300">    </span><span className="text-cyan-300">spending_limits</span><span className="text-gray-500">: </span><span className="text-gray-300">[{"{"}</span></div>
              <div><span className="text-gray-300">      </span><span className="text-cyan-300">amount</span><span className="text-gray-500">: </span><span className="text-orange-300">500000</span><span className="text-gray-500">,</span></div>
              <div><span className="text-gray-300">      </span><span className="text-cyan-300">interval</span><span className="text-gray-500">: </span><span className="text-green-400">&apos;monthly&apos;</span></div>
              <div><span className="text-gray-300">    {"}]"}</span></div>
              <div><span className="text-gray-300">  {"}"}</span></div>
              <div><span className="text-gray-300">{"})"}</span><span className="text-gray-500">;</span></div>
              <div className="h-4" />
              <div><span className="text-gray-300">console.</span><span className="text-blue-300">log</span><span className="text-gray-300">(card.</span><span className="text-cyan-300">id</span><span className="text-gray-300">)</span><span className="text-gray-500">;</span></div>
              <div><span className="text-gray-500">{"// => ic_1NmO..."}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
