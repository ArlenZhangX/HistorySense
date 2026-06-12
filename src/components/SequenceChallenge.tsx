'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoricalEvent, getRandomChallenge } from '@/data/sequenceData';

interface SequenceChallengeProps {
  onComplete?: () => void;
  isChinese?: boolean;
}

export default function SequenceChallenge({ onComplete, isChinese }: SequenceChallengeProps) {
  const { t } = useTranslation();
  const [challenge, setChallenge] = useState(() => getRandomChallenge(isChinese));
  const [userOrder, setUserOrder] = useState<HistoricalEvent[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCorrectOrder, setShowCorrectOrder] = useState(false);

  useEffect(() => {
    const shuffled = [...challenge.events].sort(() => Math.random() - 0.5);
    setUserOrder(shuffled);
  }, [challenge]);

  const correctOrder = [...challenge.events].sort((a, b) => a.year - b.year);

  const handleDragStart = (index: number) => {
    if (!isSubmitted) {
      setDraggedIndex(index);
    }
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!isSubmitted && draggedIndex !== null && draggedIndex !== index) {
      const newOrder = [...userOrder];
      const draggedItem = newOrder[draggedIndex];
      newOrder.splice(draggedIndex, 1);
      newOrder.splice(index, 0, draggedItem);
      setUserOrder(newOrder);
      setDraggedIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  const isCorrect = () => {
    return userOrder.every((event, index) => event.id === correctOrder[index].id);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    onComplete?.();
  };

  const handleReset = () => {
    const newChallenge = getRandomChallenge(isChinese);
    setChallenge(newChallenge);
    setIsSubmitted(false);
    setShowCorrectOrder(false);
  };

  const getYearDisplay = (year: number) => {
    if (year < 0) {
      return isChinese ? `公元前 ${Math.abs(year)} 年` : `${Math.abs(year)} BCE`;
    }
    return isChinese ? `公元 ${year} 年` : `${year} CE`;
  };

  return (
    <div className="bg-parchment rounded-2xl p-8 shadow-soft border border-history-100 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-history-100 rounded-full mb-4">
          <svg className="w-4 h-4 text-history-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-sm text-history-600 font-medium uppercase tracking-wider">{t('sequence.title')}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-ink-dark">
          {t('sequence.instructions')}
        </h3>
        <p className="text-ink-light mt-2">
          {challenge.title}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {userOrder.map((event, index) => (
          <div
            key={`${event.id}-${index}`}
            draggable={!isSubmitted}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={handleDrop}
            className={`p-5 rounded-xl border-2 transition-all duration-300 ${
              isSubmitted
                ? event.id === correctOrder[index]?.id
                  ? 'bg-green-50 border-green-300'
                  : 'bg-red-50 border-red-300'
                : draggedIndex === index
                ? 'bg-history-200 border-history-400 shadow-lg scale-[1.02]'
                : 'bg-white border-history-200 hover:border-history-300 hover:shadow-md cursor-grab active:cursor-grabbing'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                  isSubmitted
                    ? event.id === correctOrder[index]?.id
                      ? 'bg-green-200 text-green-700'
                      : 'bg-red-200 text-red-700'
                    : 'bg-history-100 text-history-600'
                }`}>
                  {index + 1}
                </span>
                <div>
                  <span className="font-semibold text-ink-dark">{event.title}</span>
                  <p className="text-sm text-history-500 mt-0.5">{event.description}</p>
                </div>
              </div>
              {isSubmitted && (
                <span className="px-3 py-1 bg-history-50 rounded-full text-sm font-medium text-history-600">
                  {getYearDisplay(event.year)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            className="btn-primary"
          >
            {t('sequence.check')}
          </button>
        ) : (
          <>
            <button
              onClick={() => setShowCorrectOrder(!showCorrectOrder)}
              className="btn-secondary"
            >
              {showCorrectOrder ? (isChinese ? '隐藏正确答案' : 'Hide Correct Order') : (isChinese ? '显示正确答案' : 'Show Correct Order')}
            </button>
            <button
              onClick={handleReset}
              className="btn-primary"
            >
              {isChinese ? '新挑战' : 'New Challenge'}
            </button>
          </>
        )}
      </div>

      {isSubmitted && (
        <div className={`p-5 rounded-xl text-center border ${
          isCorrect() ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'
        }`}>
          {isCorrect() ? (
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-green-700 font-semibold">{isChinese ? '完美！您的顺序是正确的！' : 'Perfect! You got the order right!'}</p>
                <p className="text-green-600 text-sm mt-1">{isChinese ? '历史感很强！' : 'Great sense of history!'}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-amber-700 font-semibold">{t('sequence.incorrect')}</p>
            </div>
          )}
        </div>
      )}

      {showCorrectOrder && (
        <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-200 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">{isChinese ? '正确的时间顺序' : 'Correct Chronological Order'}</span>
          </div>
          <div className="space-y-3">
            {correctOrder.map((event, index) => (
              <div key={event.id} className="flex items-center gap-4 p-3 bg-white rounded-lg">
                <span className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center text-blue-700 font-bold">
                  {index + 1}
                </span>
                <span className="text-blue-800 font-medium">{event.title}</span>
                <span className="text-blue-500 text-sm ml-auto">({getYearDisplay(event.year)})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}