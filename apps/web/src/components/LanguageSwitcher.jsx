import React from 'react';
import { useLanguage } from '@/hooks/useLanguage.js';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[hsl(var(--elevated-dark))] rounded-lg p-1 border border-[hsl(var(--border-color))] shadow-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-[hsl(var(--accent-color))] text-white shadow-md'
            : 'text-[hsl(var(--muted-text))] hover:text-[hsl(var(--primary-text))]'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 ${
          language === 'ru'
            ? 'bg-[hsl(var(--accent-color))] text-white shadow-md'
            : 'text-[hsl(var(--muted-text))] hover:text-[hsl(var(--primary-text))]'
        }`}
        aria-label="Switch to Russian"
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;