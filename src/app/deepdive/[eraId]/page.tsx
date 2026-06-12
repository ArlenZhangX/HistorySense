'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { eras, getEraById } from '@/data/eras';
import { getDeepDiveByEraId } from '@/data/deepDives';
import DeepDive from '@/components/DeepDive';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function DeepDivePage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  const eraId = params.eraId as string;
  const era = getEraById(eraId);
  const deepDive = getDeepDiveByEraId(eraId);
  const isChinese = i18n.language === 'zh' || i18n.language === 'zh-CN' || i18n.language === 'zh-TW';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!era || !deepDive) {
    return (
      <div className="min-h-screen bg-parchment-light flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-ink-dark mb-4">
            {isChinese ? '时代未找到' : 'Era Not Found'}
          </h1>
          <p className="text-ink-light mb-6">
            {isChinese ? '请求的时代不存在。' : 'The requested era does not exist.'}
          </p>
          <Link 
            href="/timeline"
            className="inline-flex items-center px-6 py-3 bg-history-700 text-white rounded-lg font-medium hover:bg-history-800 transition-colors"
          >
            {t('common.home')}
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = eras.findIndex(e => e.id === eraId);
  const prevEra = currentIndex > 0 ? eras[currentIndex - 1] : null;
  const nextEra = currentIndex < eras.length - 1 ? eras[currentIndex + 1] : null;

  const eraName = isChinese ? era.nameZh : era.name;
  const eraSummary = isChinese ? era.summaryZh : era.summary;
  const prevEraName = prevEra ? (isChinese ? prevEra.nameZh : prevEra.name) : '';
  const nextEraName = nextEra ? (isChinese ? nextEra.nameZh : nextEra.name) : '';

  return (
    <div className="min-h-screen bg-parchment-light">
      <header className="bg-white border-b border-history-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/timeline"
            className="text-history-600 hover:text-history-800 transition-colors font-medium"
          >
            ← {t('common.timeline')}
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-history-500">
              {String(currentIndex + 1).padStart(2, '0')} / {String(eras.length).padStart(2, '0')}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <span className="text-sm text-history-500 mb-2 block">
            {era.timeRange}
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ink-dark mb-4">
            {eraName}
          </h1>
          <p className="text-lg text-ink leading-relaxed">
            {eraSummary}
          </p>
        </div>

        <DeepDive deepDive={deepDive} eraName={eraName} isChinese={isChinese} />

        <div className="mt-8 flex items-center justify-between">
          {prevEra ? (
            <Link
              href={`/deepdive/${prevEra.id}`}
              className="flex items-center gap-2 text-history-600 hover:text-history-800 transition-colors"
            >
              <span className="text-history-400">←</span>
              <div>
                <span className="block text-xs text-history-400">{t('common.previous')}</span>
                <span className="font-medium">{prevEraName}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextEra ? (
            <Link
              href={`/deepdive/${nextEra.id}`}
              className="flex items-center gap-2 text-history-600 hover:text-history-800 transition-colors text-right"
            >
              <div>
                <span className="block text-xs text-history-400">{t('common.next')}</span>
                <span className="font-medium">{nextEraName}</span>
              </div>
              <span className="text-history-400">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}