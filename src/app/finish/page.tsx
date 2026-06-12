'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { eras } from '@/data/eras';

export default function FinishPage() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { progress, resetProgress, progressPercent } = useLearningProgress();
  
  const isChinese = i18n.language === 'zh' || i18n.language === 'zh-CN' || i18n.language === 'zh-TW';

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setShowContent(true), 300);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleRestart = () => {
    resetProgress();
  };

  const achievements = isChinese ? [
    { icon: '🏛️', title: '古代知识', desc: '探索了古代文明' },
    { icon: '⚡', title: '现代理解', desc: '理解了现代革命' },
    { icon: '🔮', title: '未来准备', desc: '为未来做好准备' },
  ] : [
    { icon: '🏛️', title: 'Ancient Knowledge', desc: 'Explored ancient civilizations' },
    { icon: '⚡', title: 'Modern Understanding', desc: 'Understood modern revolutions' },
    { icon: '🔮', title: 'Future Ready', desc: 'Prepared for what comes next' },
  ];

  const learnedItems = isChinese ? [
    '从古代文明到人工智能时代的世界历史主要阶段',
    '技术、权力、经济和思想如何塑造我们的世界',
    '改变历史进程的关键转折点',
    '历史为何重要以及它如何与今天联系',
  ] : [
    'The major stages of world history from ancient civilizations to the AI era',
    'How technology, power, economy, and ideas have shaped our world',
    'Key turning points that changed the course of history',
    'Why history matters and how it connects to today',
  ];

  return (
    <div className="min-h-screen bg-gradient-history py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div 
          className={`text-center mb-10 transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-elevated animate-scale-in">
              <span className="text-5xl">🎉</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce">
              100%
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ink-dark mb-4">
            {t('finish.title')}
          </h1>
          <p className="text-xl text-ink leading-relaxed">
            {t('finish.description')}
          </p>
        </div>

        <div 
          className={`bg-parchment rounded-2xl p-8 shadow-soft border border-history-100 mb-8 transition-all duration-1000 delay-100 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-lg font-serif font-semibold text-history-700 mb-6 text-center">
            {isChinese ? '你的学习旅程' : 'Your Learning Journey'}
          </h2>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold text-history-600 mb-2">
                {progress.completedEras.length}
              </div>
              <div className="text-sm text-history-500">{t('finish.erasCompleted')}</div>
              <div className="text-xs text-history-400 mt-1">
                {isChinese ? `共 ${eras.length} 个` : `Out of ${eras.length} total`}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-5xl font-bold text-history-600 mb-2">
                {progressPercent()}%
              </div>
              <div className="text-sm text-history-500">{isChinese ? '完成度' : 'Completion'}</div>
              <div className="text-xs text-history-400 mt-1">
                {isChinese ? '已达成进度' : 'Progress achieved'}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm text-history-600 mb-3">
              <span>{isChinese ? '进度条' : 'Progress Bar'}</span>
              <span className="font-semibold">{progressPercent()}%</span>
            </div>
            <div className="h-4 bg-history-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-history-500 via-history-600 to-history-700 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent()}%` }}
              />
            </div>
          </div>
        </div>

        <div 
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 transition-all duration-1000 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-soft border border-history-100 hover:shadow-md hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">{achievement.icon}</div>
              <h4 className="font-semibold text-ink-dark mb-1">{achievement.title}</h4>
              <p className="text-sm text-history-500">{achievement.desc}</p>
            </div>
          ))}
        </div>

        <div 
          className={`bg-history-50 rounded-2xl p-8 mb-8 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-lg font-serif font-semibold text-history-800 mb-4">
            {isChinese ? '你学到了什么' : 'What You\'ve Learned'}
          </h3>
          <ul className="space-y-4">
            {learnedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-history-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-history-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-ink-light pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div 
          className={`bg-white rounded-2xl p-8 mb-8 border border-history-100 transition-all duration-1000 delay-400 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <svg className="w-12 h-12 text-history-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg text-ink italic mb-2">
              {isChinese ? '"历史不仅仅是过去。它关乎理解我们如何走到今天——以及我们可能走向何方。"' : '"History is not just about the past. It\'s about understanding how we got here—and where we might be going next."'}
            </p>
            <p className="text-sm text-history-500">— {isChinese ? '你的历史感之旅' : 'Your History Sense Journey'}</p>
          </div>
        </div>

        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            href="/timeline"
            onClick={handleRestart}
            className="w-full sm:w-auto btn-primary text-center"
          >
            {t('finish.restart')}
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto btn-secondary text-center"
          >
            {t('common.home')}
          </Link>
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-1000 delay-600 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm text-history-400 mb-2">
            {isChinese ? '与朋友分享你的成就！' : 'Share your achievement with friends!'}
          </p>
          <p className="text-history-500">
            {isChinese ? '你已经培养了历史感 ✨' : 'You\'ve developed your History Sense ✨'}
          </p>
        </div>
      </div>
    </div>
  );
}