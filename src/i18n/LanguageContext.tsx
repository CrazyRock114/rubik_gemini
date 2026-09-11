import React, { createContext, useContext, useState, useEffect } from 'react';
import type { SupportedLanguage, TranslationSchema } from './types';
import { LOCALES } from './locales';

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationSchema;
}

const STORAGE_KEY = 'rubik_preferred_language';

function detectInitialLanguage(): SupportedLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
    if (saved && LOCALES[saved]) {
      return saved;
    }

    const browserLang = navigator.language || '';
    const lower = browserLang.toLowerCase();

    if (lower.startsWith('de')) return 'de';
    if (lower.startsWith('fr')) return 'fr';
    if (lower.startsWith('it')) return 'it';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('ko')) return 'ko';
    if (lower.includes('tw') || lower.includes('hk') || lower.includes('mo') || lower.includes('hant')) {
      return 'zh-TW';
    }
    if (lower.startsWith('zh')) return 'zh-CN';
    return 'en';
  } catch {
    return 'en';
  }
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(detectInitialLanguage);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage error
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = LOCALES[language] || LOCALES.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useTranslation(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
