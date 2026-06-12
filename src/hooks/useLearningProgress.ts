import { useState, useEffect, useCallback } from 'react';
import { LearningProgress } from '@/data/types';

const STORAGE_KEY = 'history-sense-progress';

const defaultProgress: LearningProgress = {
  completedEras: [],
  currentEraIndex: 0,
  lastVisited: '',
  totalTimeSpent: 0,
};

export function useLearningProgress() {
  const [progress, setProgress] = useState<LearningProgress>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProgress;
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markEraComplete = useCallback((eraId: string) => {
    setProgress(prev => {
      if (!prev.completedEras.includes(eraId)) {
        return {
          ...prev,
          completedEras: [...prev.completedEras, eraId],
          lastVisited: eraId,
        };
      }
      return { ...prev, lastVisited: eraId };
    });
  }, []);

  const setCurrentEraIndex = useCallback((index: number) => {
    setProgress(prev => ({ ...prev, currentEraIndex: index }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  const progressPercent = useCallback(() => {
    const totalEras = 11;
    return Math.round((progress.completedEras.length / totalEras) * 100);
  }, [progress.completedEras.length]);

  return {
    progress,
    markEraComplete,
    setCurrentEraIndex,
    resetProgress,
    progressPercent,
  };
}
