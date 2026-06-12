'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLang(i18n.language);
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <html lang={lang === 'zh' || lang === 'zh-CN' || lang === 'zh-TW' ? 'zh-CN' : 'en'}>
      <body className="min-h-screen bg-parchment-light">{children}</body>
    </html>
  );
}