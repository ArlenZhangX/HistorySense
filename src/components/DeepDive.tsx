'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DeepDive as DeepDiveType } from '@/data/types';

type TabType = 'background' | 'catalyst' | 'consequences' | 'legacy';

interface DeepDiveProps {
  deepDive: DeepDiveType;
  eraName: string;
  isChinese?: boolean;
}

export default function DeepDive({ deepDive, eraName, isChinese }: DeepDiveProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('background');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'background', label: t('common.background') },
    { key: 'catalyst', label: t('common.catalyst') },
    { key: 'consequences', label: t('common.consequences') },
    { key: 'legacy', label: t('common.legacy') },
  ];

  const background = isChinese ? deepDive.backgroundZh : deepDive.background;
  const catalyst = isChinese ? deepDive.catalystZh : deepDive.catalyst;
  const consequences = isChinese ? deepDive.consequencesZh : deepDive.consequences;
  const legacy = isChinese ? deepDive.legacyZh : deepDive.legacy;
  const uniqueContributions = isChinese ? deepDive.uniqueContributionsZh : deepDive.uniqueContributions;

  const renderContent = () => {
    switch (activeTab) {
      case 'background':
        return (
          <div className="animate-fade-in">
            <p className="text-lg text-ink leading-relaxed mb-8">
              {background}
            </p>
            {uniqueContributions && (
              <div className="mt-8 space-y-4">
                <h4 className="text-sm font-semibold text-history-600 uppercase tracking-wider">
                  {isChinese ? '独特贡献' : 'Unique Contributions'}
                </h4>
                {uniqueContributions.map((contribution, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-parchment rounded-xl border-l-4 border-history-400 hover:shadow-sm transition-shadow"
                  >
                    <p className="text-ink-light">{contribution}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'catalyst':
        return (
          <div className="animate-fade-in">
            <div className="p-6 bg-history-50 rounded-xl mb-6 border-l-4 border-amber-400">
              <p className="text-lg text-ink leading-relaxed">
                {catalyst}
              </p>
            </div>
          </div>
        );
      case 'consequences':
        return (
          <div className="animate-fade-in">
            <ul className="space-y-4">
              {consequences.map((consequence, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-parchment rounded-xl hover:shadow-sm transition-shadow">
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="text-ink-light pt-1">{consequence}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'legacy':
        return (
          <div className="animate-fade-in">
            <p className="text-lg text-ink leading-relaxed mb-6">
              {legacy}
            </p>
            {deepDive.legacyQuestions && (
              <div className="mt-8 p-6 bg-history-50 rounded-xl">
                <h4 className="text-sm font-semibold text-history-600 uppercase tracking-wider mb-4">
                  {isChinese ? '思考这个问题' : 'Reflect on This'}
                </h4>
                <ul className="space-y-3">
                  {deepDive.legacyQuestions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-history-500">❓</span>
                      <span className="text-ink-light italic">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-parchment rounded-2xl overflow-hidden shadow-soft border border-history-100">
      <div className="bg-gradient-primary px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-semibold text-white">
              {t('common.deepDive')}: {eraName}
            </h3>
            <p className="text-sm text-history-200 mt-1">
              {isChinese ? '探索背景、催化剂、结果和遗产' : 'Explore the background, catalyst, consequences, and legacy'}
            </p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-b border-history-100">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 relative ${
                activeTab === tab.key
                  ? 'text-history-700 bg-white shadow-sm'
                  : 'text-history-500 hover:text-history-700 hover:bg-history-50'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-history-600 rounded-t-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6 sm:p-8 bg-white">
        {renderContent()}
      </div>
    </div>
  );
}