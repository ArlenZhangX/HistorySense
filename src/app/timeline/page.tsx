'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { eras } from '@/data/eras';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import EraCard from '@/components/EraCard';
import Navigation from '@/components/Navigation';
import RecallPrompt from '@/components/RecallPrompt';
import SequenceChallenge from '@/components/SequenceChallenge';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TimelinePage() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { progress, markEraComplete, progressPercent } = useLearningProgress();
  const cardRefs = useRef<(HTMLDivElement | null)[]>(new Array(eras.length).fill(null));
  const isChinese = i18n.language === 'zh' || i18n.language === 'zh-CN' || i18n.language === 'zh-TW';

  useEffect(() => {
    if (progress.lastVisited) {
      const index = eras.findIndex(e => e.id === progress.lastVisited);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [progress.lastVisited]);

  useEffect(() => {
    if (progress.completedEras.length === eras.length && progress.completedEras.length > 0) {
      router.push('/finish');
    }
  }, [progress.completedEras.length, router]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      for (let i = cardRefs.current.length - 1; i >= 0; i--) {
        const card = cardRefs.current[i];
        if (card) {
          const cardTop = card.offsetTop;
          const cardHeight = card.offsetHeight;
          if (scrollPosition >= cardTop && scrollPosition <= cardTop + cardHeight) {
            setCurrentIndex(i);
            markEraComplete(eras[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [markEraComplete]);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < eras.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-parchment-light pb-24">
      <header className="fixed top-0 left-0 right-0 glass px-4 sm:px-6 lg:px-8 py-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button onClick={handleHome} className="flex items-center gap-2 hover:text-history-600 transition-colors cursor-pointer">
            <span className="text-2xl">📜</span>
            <span className="font-serif font-bold text-history-800">History Sense</span>
          </button>
          <nav className="hidden sm:flex items-center gap-6">
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ink-dark mb-4">
              {t('timeline.title') || 'The Journey Through Time'}
            </h1>
            <p className="text-ink-light max-w-xl mx-auto mb-6">
              {t('timeline.description') || 'Scroll through 11 major eras that shaped human civilization. Each card reveals a key turning point in history.'}
            </p>
            
            <div className="w-full max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm text-history-600 mb-2">
                <span>{t('timeline.progress')}</span>
                <span>{progressPercent()}%</span>
              </div>
              <div className="h-2 bg-history-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-history-600 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent()}%` }}
                />
              </div>
              <p className="text-xs text-history-400 mt-2">
                {progress.completedEras.length} {t('timeline.of')} {eras.length} {t('timeline.eras') || 'eras completed'}
              </p>
            </div>
          </header>

          <div className="space-y-16">
            {eras.map((era, index) => (
              <div
                key={era.id}
                ref={el => { cardRefs.current[index] = el; }}
                className={`transition-all duration-300 ${
                  currentIndex === index ? 'scale-[1.02]' : 'opacity-80'
                }`}
              >
                <EraCard 
                  era={era} 
                  index={index}
                  total={eras.length}
                  isCompleted={progress.completedEras.includes(era.id)}
                  isChinese={isChinese}
                />
                
                {index < eras.length - 1 && (
                  <div className="mt-8">
                    <RecallPrompt 
                      eraName={isChinese ? era.nameZh : era.name} 
                      eraSummary={isChinese ? era.summaryZh : era.summary}
                      isChinese={isChinese}
                    />
                  </div>
                )}

                {(index === 2 || index === 5 || index === 8) && (
                  <div className="mt-12">
                    <SequenceChallenge isChinese={isChinese} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigation
        currentIndex={currentIndex}
        total={eras.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onHome={handleHome}
        isChinese={isChinese}
      />
    </div>
  );
}