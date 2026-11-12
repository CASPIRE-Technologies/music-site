'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Language, translations } from '@/i18n/translations';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (value: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language');
    if (saved === 'en' || saved === 'es') setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dataset.siteLanguage = language;
    window.localStorage.setItem('site-language', language);
    document.cookie = language === 'es'
      ? 'googtrans=/en/es; path=/'
      : 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }, [language]);

  useEffect(() => {
    if (!document.body) return;

    const originalText = new WeakMap<Text, string>();
    const translateDom = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();

      while (node) {
        const textNode = node as Text;
        const parent = textNode.parentElement;
        const rawText = originalText.get(textNode) ?? textNode.nodeValue ?? '';
        if (!originalText.has(textNode)) originalText.set(textNode, rawText);

        if (parent && !['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(parent.tagName)) {
          const trimmed = rawText.trim();
          const translated = translations[language][trimmed];
          if (translated && trimmed === rawText) textNode.nodeValue = translated;
          else if (language === 'en' && textNode.nodeValue !== rawText) textNode.nodeValue = rawText;
        }
        node = walker.nextNode();
      }
    };

    translateDom();
    const observer = new MutationObserver(translateDom);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () => {
        const nextLanguage = language === 'en' ? 'es' : 'en';
        window.localStorage.setItem('site-language', nextLanguage);
        document.cookie = nextLanguage === 'es'
          ? 'googtrans=/en/es; path=/'
          : 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        setLanguage(nextLanguage);
        window.dispatchEvent(
          new CustomEvent('site-language-change', { detail: nextLanguage })
        );
      },
      t: (valueToTranslate: string) => translations[language][valueToTranslate] || valueToTranslate,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
