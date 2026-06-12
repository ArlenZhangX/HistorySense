'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Era } from '@/data/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface EraCardProps {
  era: Era;
  index: number;
  total: number;
  isCompleted?: boolean;
  isChinese?: boolean;
}

export default function EraCard({ era, index, total, isCompleted, isChinese }: EraCardProps) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const name = isChinese ? era.nameZh : era.name;
  const summary = isChinese ? era.summaryZh : era.summary;
  const keyIdeas = isChinese ? era.keyIdeasZh : era.keyIdeas;
  const keywords = isChinese ? era.keywordsZh : era.keywords;
  const reflectionQuestion = isChinese ? era.reflectionQuestionZh : era.reflectionQuestion;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`era-card shadow-soft hover:shadow-medium ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '700ms' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-history-100 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-history-700">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          {isCompleted && (
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1 animate-scale-in">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              {t('common.complete')}
            </span>
          )}
        </div>
        <div className="px-3 py-1.5 bg-history-50 rounded-full">
          <span className="text-sm text-history-600 font-medium">{era.timeRange}</span>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-dark mb-4 tracking-tight">
        {name}
      </h2>

      <p className="text-lg text-ink leading-relaxed mb-8">
        {summary}
      </p>

      <div className="mb-8">
        <h3 className="text-sm font-semibold text-history-600 uppercase tracking-wider mb-4">
          {t('common.keyIdeas')}
        </h3>
        <ul className="space-y-3">
          {keyIdeas.map((idea, idx) => (
            <li 
              key={idx} 
              className="flex items-start gap-3 group"
            >
              <span className="flex-shrink-0 w-7 h-7 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-sm font-semibold shadow-sm transition-transform duration-300 group-hover:scale-110">
                {idx + 1}
              </span>
              <span className="text-ink-light pt-0.5">{idea}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-semibold text-history-600 uppercase tracking-wider mb-4">
          {t('common.keywords')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span 
              key={keyword}
              className="tag"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 bg-history-50 rounded-xl mb-6 border-l-4 border-history-300">
        <p className="text-ink italic text-center">
          "{reflectionQuestion}"
        </p>
      </div>

      <Link
        href={`/deepdive/${era.id}`}
        className="group inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-primary text-white rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {t('common.deepDive')} {name}
        </span>
        <svg 
          className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}