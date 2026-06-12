'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface RecallPromptProps {
  eraName: string;
  eraSummary: string;
  onComplete?: () => void;
  isChinese?: boolean;
}

export default function RecallPrompt({ eraName, eraSummary, onComplete, isChinese }: RecallPromptProps) {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const handleSubmit = () => {
    if (input.trim()) {
      setSubmitted(true);
      onComplete?.();
    }
  };

  const handleReset = () => {
    setInput('');
    setSubmitted(false);
  };

  return (
    <div className="bg-parchment rounded-2xl p-8 shadow-soft border border-history-100 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-history-100 rounded-full mb-4">
          <svg className="w-4 h-4 text-history-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm text-history-600 font-medium uppercase tracking-wider">{t('recall.title') || 'Recall Exercise'}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-ink-dark">
          {isChinese ? `${t('recall.prompt')} ${eraName}` : `Summarize the ${eraName}`}
        </h3>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-history-700 mb-3">
          {t('recall.prompt')}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('recall.placeholder')}
          disabled={submitted}
          className="w-full h-32 px-5 py-4 bg-white border border-history-200 rounded-xl resize-none focus:ring-2 focus:ring-history-400 focus:border-transparent transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          rows={4}
        />
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        {!submitted ? (
          <>
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="btn-primary"
            >
              {t('common.submit')}
            </button>
            <button
              onClick={() => setShowExample(!showExample)}
              className="btn-secondary"
            >
              {showExample ? (isChinese ? '隐藏示例' : 'Hide Example') : (isChinese ? '显示示例' : 'Show Example')}
            </button>
          </>
        ) : (
          <button
            onClick={handleReset}
            className="btn-primary"
          >
            {t('common.tryAgain')}
          </button>
        )}
      </div>

      {showExample && (
        <div className="bg-history-50 rounded-xl p-5 animate-slide-up border border-history-100">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-history-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-history-500 uppercase tracking-wider">{t('recall.example')}</span>
          </div>
          <p className="text-ink italic">
            "{eraSummary}"
          </p>
        </div>
      )}

      {submitted && (
        <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl animate-scale-in">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-700 font-medium">{isChinese ? '做得好！您的总结已记录。' : 'Great job! Your summary has been recorded.'}</p>
          </div>
        </div>
      )}
    </div>
  );
}