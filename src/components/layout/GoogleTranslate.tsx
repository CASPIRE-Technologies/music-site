'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string
        ) => unknown;
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const applySavedLanguage = () => {
      const savedLanguage = window.localStorage.getItem('site-language');
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');

      if (!select) return false;

      select.value = savedLanguage === 'es' ? 'es' : 'en';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    };

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );

        let attempts = 0;
        const applyTimer = window.setInterval(() => {
          attempts += 1;
          if (applySavedLanguage() || attempts > 20) {
            window.clearInterval(applyTimer);
          }
        }, 100);
      }
    };

    const handleLanguageChange = () => {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      const savedLanguage = window.localStorage.getItem('site-language');
      if (select) {
        select.value = savedLanguage === 'es' ? 'es' : 'en';
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };
    window.addEventListener('site-language-change', handleLanguageChange);

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      delete window.googleTranslateElementInit;
      window.removeEventListener('site-language-change', handleLanguageChange);
    };
  }, []);

  return (
    <div id="google_translate_element" className="google-translate-hidden" />
  );
}
