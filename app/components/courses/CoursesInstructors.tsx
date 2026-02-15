"use client";

import type { ReactNode } from "react";
import { useTranslation } from "../../i18n";

const capabilityIcons: ReactNode[] = [
  // Rich Content Types
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 0a1.125 1.125 0 011.125-1.125h17.25a1.125 1.125 0 011.125 1.125m-19.5 0v1.5c0 .621.504 1.125 1.125 1.125m17.25 0h1.5m0 0a1.125 1.125 0 011.125 1.125M21.75 9v1.5m0 0a1.125 1.125 0 01-1.125 1.125m0 0h-1.5m0 0a1.125 1.125 0 01-1.125-1.125M18 7.25V5.625m0 0a1.125 1.125 0 00-1.125-1.125H6.375m0 0A1.125 1.125 0 005.25 5.625v1.5c0 .621.504 1.125 1.125 1.125" /></svg>,
  // Modular Structure
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" /></svg>,
  // Auto Certificates
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347" /></svg>,
  // Course Bundles
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
];

export default function CoursesInstructors() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">{t.courses.instructors.sectionLabel}</span>
            <h2 className="font-[family-name:var(--font-montserrat)] mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{t.courses.instructors.heading}</h2>
            <p className="mt-4 text-lg text-gray-500">{t.courses.instructors.description}</p>

            <div className="mt-8 space-y-4">
              {t.courses.instructors.capabilities.map((cap, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    {capabilityIcons[index]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{cap.title}</h3>
                    <p className="text-sm text-gray-500">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Course editor mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm font-semibold text-gray-900">Web Development Bootcamp</div>
                <div className="text-xs text-gray-500 mt-1">342 students · 4.9 rating</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Draft</span>
                <div className="w-10 h-5 bg-[var(--primary)] rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                </div>
                <span className="text-xs font-medium text-[var(--primary)]">Published</span>
              </div>
            </div>
            <div className="space-y-3">
              {["Introduction to HTML", "CSS Fundamentals", "JavaScript Basics", "React Essentials", "Final Project"].map((lesson, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[var(--primary)] text-xs font-bold flex items-center justify-center">{i + 1}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{lesson}</div>
                    <div className="text-xs text-gray-400">{i === 4 ? "Assignment" : "Video + Quiz"}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
