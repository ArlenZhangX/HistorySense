'use client';

import { useTranslation } from 'react-i18next';

interface NavigationProps {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
  isChinese?: boolean;
}

export default function Navigation({
  currentIndex,
  total,
  onPrevious,
  onNext,
  onHome,
}: NavigationProps) {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass px-4 py-4 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <button
          onClick={onHome}
          className="flex items-center gap-2 text-history-600 hover:text-history-800 transition-all duration-300 text-sm font-medium group"
        >
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span>{t('common.home')}</span>
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-5 py-2.5 bg-history-700 text-white rounded-xl font-medium transition-all duration-300 hover:bg-history-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('common.previous')}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-10 h-10 bg-history-100 rounded-full flex items-center justify-center text-history-700 font-bold text-sm">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-history-400">/</span>
            <span className="w-10 h-10 bg-history-50 rounded-full flex items-center justify-center text-history-500 font-medium text-sm">
              {String(total).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={onNext}
            disabled={currentIndex === total - 1}
            className="flex items-center gap-2 px-5 py-2.5 bg-history-700 text-white rounded-xl font-medium transition-all duration-300 hover:bg-history-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
          >
            <span>{t('common.next')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="w-20" />
      </div>
    </nav>
  );
}