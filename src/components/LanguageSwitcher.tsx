'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;
  const isChinese = currentLang === 'zh' || currentLang === 'zh-CN' || currentLang === 'zh-TW';

  const toggleLanguage = () => {
    const newLang = isChinese ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-history-200 hover:border-history-300 hover:bg-history-50 transition-all duration-300 text-sm font-medium text-history-600"
    >
      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-history-100">
        {isChinese ? '中' : 'EN'}
      </span>
      <span className="hidden sm:inline">
        {isChinese ? '中文' : 'English'}
      </span>
    </button>
  );
}