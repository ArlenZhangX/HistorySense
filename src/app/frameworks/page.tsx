'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import FrameworkView from '@/components/FrameworkView';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function FrameworksPage() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  const isChinese = i18n.language === 'zh' || i18n.language === 'zh-CN' || i18n.language === 'zh-TW';

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setShowContent(true), 200);
  }, []);

  if (!mounted) {
    return null;
  }

  const frameworkItems = isChinese ? [
    { icon: '⚙️', title: '技术', desc: '追踪工具和创新如何改变人类的生活、工作和相互联系方式。' },
    { icon: '🏛️', title: '权力', desc: '展示权威和治理结构如何从部落演变为全球体系。' },
    { icon: '💰', title: '经济', desc: '追溯人类如何从狩猎采集到数字平台生产、分配和消费商品。' },
    { icon: '💡', title: '思想', desc: '探索信仰和意识形态如何从神话到现代意识形态塑造社会。' },
  ] : [
    { icon: '⚙️', title: 'Technology', desc: 'Tracks how tools and innovations change how humans live, work, and connect with each other.' },
    { icon: '🏛️', title: 'Power', desc: 'Shows how authority and governance structures evolve from tribes to global systems.' },
    { icon: '💰', title: 'Economy', desc: 'Traces how humans produce, distribute, and consume goods from hunting to digital platforms.' },
    { icon: '💡', title: 'Ideas', desc: 'Explores how beliefs and ideologies shape societies from myths to modern ideologies.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-history">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/timeline"
            className="flex items-center gap-2 text-history-600 hover:text-history-800 transition-colors font-medium group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('common.previous')}</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-history-100 rounded-full text-sm text-history-600 font-medium">
              {isChinese ? '框架模式' : 'Framework Mode'}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div 
          className={`mb-10 transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ink-dark mb-4">
            {isChinese ? '通过不同视角看历史' : 'See History Through Different Lenses'}
          </h1>
          <p className="text-lg text-ink leading-relaxed">
            {isChinese ? '历史不遵循单一路径。通过技术、权力、经济和思想探索相同的事件，了解这些力量如何相互联系并塑造人类文明。' : 'History doesnt follow a single path. Explore the same events through technology, power, economy, and ideas to understand how these forces interconnect and shape human civilization.'}
          </p>
        </div>

        <div 
          className={`transition-all duration-700 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FrameworkView initialCategory="technology" />
        </div>

        <div 
          className={`mt-12 p-8 bg-parchment rounded-2xl border border-history-100 transition-all duration-700 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-history-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2 className="text-xl font-serif font-bold text-history-800">
              {isChinese ? '理解四个框架' : 'Understanding the Four Frameworks'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworkItems.map((item, index) => (
              <div 
                key={index} 
                className="p-5 bg-white rounded-xl border border-history-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-history-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-history-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className={`mt-10 flex justify-center transition-all duration-700 delay-400 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/timeline"
            className="btn-primary flex items-center"
          >
            <span>{isChinese ? '继续时间线' : 'Continue to Timeline'}</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}