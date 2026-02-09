"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const productIcons: ReactNode[] = [
  // Card Issuing
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  // Prepaid Top Up (wallet)
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>,
  // Identity Verification (ID badge)
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg>,
  // Digital Wallets (phone)
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  // Courses Management (academic cap)
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
  // Ecommerce (shopping cart)
  <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>,
  // Developer API (code)
  <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  // Compliance (shield)
  <svg key="7" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
];

const productLinks = [
  "#features",    // Card Issuing
  "/prepaid",     // Prepaid Top Up
  "/identity",    // Identity Verification
  "#features",    // Digital Wallets
  "/courses",     // Courses Management
  "/ecommerce",   // Ecommerce
  "#features",    // Developer API
  "#features",    // Compliance
];

const companyIcons: ReactNode[] = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
];

const tutorialGradients = [
  "from-indigo-400 to-purple-500",
  "from-purple-400 to-pink-500",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 200);
  };

  // Close mega menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PG</span>
            </div>
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-900">
              PG Ecom
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {t.navbar.home}
            </a>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  megaOpen ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t.navbar.products}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {t.navbar.resources}
            </a>
          </div>

          {/* Auth Buttons + Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {t.navbar.logIn}
            </a>
            <a
              href="#"
              className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              {t.navbar.signUp}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`hidden md:block absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-200 origin-top ${
          megaOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-12 gap-8">
            {/* Column 1: Our Products */}
            <div className="col-span-4">
              <h3 className="text-sm font-semibold text-[var(--primary)] mb-5">
                {t.navbar.ourProducts}
              </h3>
              <div className="space-y-1">
                {t.navbar.productItems.map((item, index) => (
                  <a
                    key={index}
                    href={productLinks[index]}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      {productIcons[index]}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="col-span-3">
              <h3 className="text-sm font-semibold text-[var(--primary)] mb-5">
                {t.navbar.company}
              </h3>
              <div className="space-y-1">
                {t.navbar.companyItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      {companyIcons[index]}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                        {item.title}
                        {item.badge && (
                          <span className="text-[10px] font-semibold text-green-600 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Resources / Video Tutorials */}
            <div className="col-span-5 bg-gray-50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-[var(--primary)] mb-5">
                {t.navbar.resources}
              </h3>
              <div className="space-y-5">
                {t.navbar.tutorials.map((tutorial, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Thumbnail */}
                    <div className={`w-28 h-20 rounded-xl bg-gradient-to-br ${tutorialGradients[index]} flex-shrink-0 flex flex-col justify-center px-3`}>
                      <span className="text-[10px] text-white/80 font-medium">
                        {tutorial.part}
                      </span>
                      <span className="text-xs text-white font-semibold leading-tight mt-0.5">
                        {tutorial.title}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900">
                        {tutorial.heading}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">
                        {tutorial.description}
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] mt-2 hover:gap-1.5 transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        {t.navbar.watchVideo}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 mt-6 transition-colors"
              >
                {t.navbar.allVideoTutorials}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {/* Mobile Products accordion */}
          <div className="py-3 border-b border-gray-50">
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-gray-700"
            >
              {t.navbar.products}
              <svg
                className={`w-4 h-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {megaOpen && (
              <div className="mt-3 space-y-1 pl-1">
                {t.navbar.productItems.map((item, index) => (
                  <a
                    key={index}
                    href={productLinks[index]}
                    className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                      {productIcons[index]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50">{t.navbar.home}</a>
          <a href="#dashboard" className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50">{t.navbar.resources}</a>

          <div className="pt-4 flex flex-col gap-2">
            <LanguageSwitcher />
            <a href="#" className="text-sm font-medium text-gray-600 py-2">{t.navbar.logIn}</a>
            <a href="#" className="bg-[var(--primary)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center">
              {t.navbar.signUp}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
