"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { ht } from "./locales/ht";
import { es } from "./locales/es";

// Deeply widen literal types from `as const` so translation files can use any string
// Preserves readonly modifiers from the source type
type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepStringify<U>[]
    : T extends object
      ? { readonly [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Translations = DeepStringify<typeof en>;

export type Locale = "en" | "fr" | "ht" | "es";

export const locales: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "\u{1F1FA}\u{1F1F8}" },
  fr: { label: "Fran\u00e7ais", flag: "\u{1F1EB}\u{1F1F7}" },
  ht: { label: "Krey\u00f2l", flag: "\u{1F1ED}\u{1F1F9}" },
  es: { label: "Espa\u00f1ol", flag: "\u{1F1EA}\u{1F1F8}" },
};

const translationMap: Record<Locale, Translations> = { en, fr, ht, es };

type TranslationContextType = {
  t: Translations;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pg-locale") as Locale;
      if (saved && saved in translationMap) return saved;
    }
    return "en";
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("pg-locale", newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  const t = translationMap[locale];

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
