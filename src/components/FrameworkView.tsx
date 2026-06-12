'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FrameworkCategory, FrameworkConcept } from '@/data/types';
import { frameworks, getConceptsByCategory } from '@/data/frameworks';

type ViewMode = 'timeline' | 'technology' | 'power' | 'economy' | 'ideas';

interface FrameworkViewProps {
  initialCategory?: FrameworkCategory;
}

export default function FrameworkView({ initialCategory = 'technology' }: FrameworkViewProps) {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<FrameworkCategory>(initialCategory);
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  
  const isChinese = i18n.language === 'zh' || i18n.language === 'zh-CN' || i18n.language === 'zh-TW';

  const currentFramework = frameworks.find(f => f.category === activeCategory);
  const concepts = getConceptsByCategory(activeCategory) as FrameworkConcept[];

  const handleCategoryChange = (category: FrameworkCategory) => {
    setActiveCategory(category);
    setExpandedConcept(null);
  };

  const title = isChinese ? currentFramework?.titleZh : currentFramework?.title;
  const explanation = isChinese ? currentFramework?.explanationZh : currentFramework?.explanation;
  const developments = isChinese ? currentFramework?.developmentsZh : currentFramework?.developments;

  return (
    <div className="bg-parchment rounded-2xl overflow-hidden shadow-sm border border-history-100">
      <div className="bg-history-700 px-6 py-4">
        <h3 className="text-lg font-serif font-semibold text-white mb-1">
          {t('common.framework')}: {title}
        </h3>
        <p className="text-sm text-history-200">
          {isChinese ? '通过不同视角探索历史' : 'Explore history through different lenses'}
        </p>
      </div>

      <div className="border-b border-history-100">
        <nav className="flex">
          {frameworks.map((framework) => {
            const fwTitle = isChinese ? framework.titleZh : framework.title;
            return (
              <button
                key={framework.category}
                onClick={() => handleCategoryChange(framework.category)}
                className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 relative ${
                  activeCategory === framework.category
                    ? 'text-history-700 bg-white'
                    : 'text-history-500 hover:text-history-700 hover:bg-history-50'
                }`}
              >
                {fwTitle}
                {activeCategory === framework.category && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-history-600" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-6 bg-white">
        <p className="text-ink leading-relaxed mb-8">
          {explanation}
        </p>

        {activeCategory === 'technology' && (
          <TechnologyView 
            concepts={concepts} 
            developments={developments || []}
            expandedConcept={expandedConcept}
            onToggle={setExpandedConcept}
            isChinese={isChinese}
          />
        )}

        {activeCategory === 'power' && (
          <PowerView 
            concepts={concepts}
            developments={developments || []}
            expandedConcept={expandedConcept}
            onToggle={setExpandedConcept}
            isChinese={isChinese}
          />
        )}

        {activeCategory === 'economy' && (
          <EconomyView 
            concepts={concepts}
            developments={developments || []}
            expandedConcept={expandedConcept}
            onToggle={setExpandedConcept}
            isChinese={isChinese}
          />
        )}

        {activeCategory === 'ideas' && (
          <IdeasView 
            concepts={concepts}
            expandedConcept={expandedConcept}
            onToggle={setExpandedConcept}
            isChinese={isChinese}
          />
        )}
      </div>
    </div>
  );
}

function TechnologyView({
  concepts,
  developments,
  expandedConcept,
  onToggle,
  isChinese,
}: {
  concepts: FrameworkConcept[];
  developments: string[];
  expandedConcept: string | null;
  onToggle: (id: string | null) => void;
  isChinese: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {developments.map((dev, idx) => (
            <div key={dev} className="flex items-center">
              <div className="px-4 py-3 bg-history-100 rounded-lg font-medium text-history-700 hover:bg-history-200 transition-colors cursor-pointer"
                onClick={() => onToggle(expandedConcept === concepts[idx]?.id ? null : concepts[idx]?.id || null)}>
                {dev}
              </div>
              {idx < developments.length - 1 && (
                <span className="mx-2 text-history-400 text-xl">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
            isExpanded={expandedConcept === concept.id}
            onToggle={() => onToggle(expandedConcept === concept.id ? null : concept.id)}
            isChinese={isChinese}
          />
        ))}
      </div>
    </div>
  );
}

function PowerView({
  concepts,
  developments,
  expandedConcept,
  onToggle,
  isChinese,
}: {
  concepts: FrameworkConcept[];
  developments: string[];
  expandedConcept: string | null;
  onToggle: (id: string | null) => void;
  isChinese: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <div className="relative">
          {developments.map((dev, idx) => {
            const indent = idx * 40;
            return (
              <div key={dev} className="relative" style={{ marginLeft: `${indent}px` }}>
                <div 
                  className="px-4 py-3 bg-history-100 rounded-lg font-medium text-history-700 hover:bg-history-200 transition-colors cursor-pointer"
                  onClick={() => onToggle(expandedConcept === concepts[idx]?.id ? null : concepts[idx]?.id || null)}
                >
                  {dev}
                </div>
                {idx < developments.length - 1 && (
                  <div className="absolute left-1/2 -bottom-4 w-0.5 h-4 bg-history-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
            isExpanded={expandedConcept === concept.id}
            onToggle={() => onToggle(expandedConcept === concept.id ? null : concept.id)}
            isChinese={isChinese}
          />
        ))}
      </div>
    </div>
  );
}

function EconomyView({
  concepts,
  developments,
  expandedConcept,
  onToggle,
  isChinese,
}: {
  concepts: FrameworkConcept[];
  developments: string[];
  expandedConcept: string | null;
  onToggle: (id: string | null) => void;
  isChinese: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center overflow-x-auto pb-4">
        <div className="flex items-center gap-4">
          {developments.map((dev, idx) => (
            <div key={dev} className="flex items-center">
              <div className="w-32 h-24 bg-gradient-to-br from-history-500 to-history-700 rounded-xl flex items-center justify-center text-white font-bold text-center p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => onToggle(expandedConcept === concepts[idx]?.id ? null : concepts[idx]?.id || null)}>
                {dev}
              </div>
              {idx < developments.length - 1 && (
                <span className="mx-2 text-history-400 text-xl">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
            isExpanded={expandedConcept === concept.id}
            onToggle={() => onToggle(expandedConcept === concept.id ? null : concept.id)}
            isChinese={isChinese}
          />
        ))}
      </div>
    </div>
  );
}

function IdeasView({
  concepts,
  expandedConcept,
  onToggle,
  isChinese,
}: {
  concepts: FrameworkConcept[];
  expandedConcept: string | null;
  onToggle: (id: string | null) => void;
  isChinese: boolean;
}) {
  const categories = isChinese ? ['早期', '中期', '现代'] : ['Early', 'Middle', 'Modern'];
  const groupedConcepts = [
    concepts.slice(0, 2),
    concepts.slice(2, 4),
    concepts.slice(4, 6),
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((period, groupIdx) => (
          <div key={period} className="space-y-4">
            <h4 className="text-sm font-medium text-history-600 uppercase tracking-wider text-center">
              {period}
            </h4>
            <div className="space-y-4">
              {groupedConcepts[groupIdx]?.map((concept) => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  isExpanded={expandedConcept === concept.id}
                  onToggle={() => onToggle(expandedConcept === concept.id ? null : concept.id)}
                  isChinese={isChinese}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConceptCard({
  concept,
  isExpanded,
  onToggle,
  isChinese,
}: {
  concept: FrameworkConcept;
  isExpanded: boolean;
  onToggle: () => void;
  isChinese: boolean;
}) {
  const conceptName = isChinese ? concept.conceptZh : concept.concept;
  const explanation = isChinese ? concept.explanationZh : concept.explanation;
  const historicalExample = isChinese ? concept.historicalExampleZh : concept.historicalExample;
  const insight = isChinese ? concept.insightZh : concept.insight;

  return (
    <div 
      className={`bg-parchment rounded-xl border border-history-100 overflow-hidden transition-all duration-300 cursor-pointer ${
        isExpanded ? 'ring-2 ring-history-400' : 'hover:shadow-md'
      }`}
      onClick={onToggle}
    >
      <div className="p-4">
        <h5 className="font-medium text-history-700 mb-2">{conceptName}</h5>
        <p className="text-sm text-history-600">
          {isExpanded ? explanation : `${explanation.slice(0, 80)}...`}
        </p>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-history-200 animate-fade-in space-y-3">
            <div>
              <span className="text-xs font-medium text-history-500 uppercase tracking-wider">
                {isChinese ? '历史案例' : 'Historical Example'}
              </span>
              <p className="text-sm text-ink-light mt-1">{historicalExample}</p>
            </div>
            <div className="p-3 bg-history-50 rounded-lg">
              <span className="text-xs font-medium text-history-600">
                {isChinese ? '洞察' : 'Insight'}
              </span>
              <p className="text-sm text-history-700 italic mt-1">{insight}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}