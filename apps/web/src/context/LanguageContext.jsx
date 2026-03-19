import React, { createContext, useState, useEffect } from 'react';
import en from '../translations/en.js';
import ru from '../translations/ru.js';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved ? saved : 'en';
  });

  const translations = language === 'ru' ? ru : en;

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};