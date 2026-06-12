'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => setShowFeatures(true), 500);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-history overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px), rgba(149, 120, 97, 0.12) 0%, transparent 50%)`,
          transition: 'background 0.4s ease-out',
        }}
      />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 glass px-4 sm:px-6 lg:px-8 py-4 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:text-history-600 transition-colors">
              <span className="text-2xl">📜</span>
              <span className="font-serif font-bold text-history-800">History Sense</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6">
              <Link 
                href="/timeline" 
                className="text-history-600 hover:text-history-800 transition-colors text-sm font-medium"
              >
                {t('common.timeline')}
              </Link>
              <Link 
                href="/frameworks" 
                className="text-history-600 hover:text-history-800 transition-colors text-sm font-medium"
              >
                {t('common.frameworks')}
              </Link>
              <LanguageSwitcher />
            </nav>
          </div>
        </header>

        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-history-100 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-history-700 text-sm font-medium tracking-wide">
                  {t('landing.tagline')}
                </span>
              </div>
            </div>

            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ink-dark mb-6 leading-tight"
              style={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                transitionDelay: '0.15s',
              }}
            >
              {t('landing.title', { interpolation: { escapeValue: false } })}
            </h1>

            <p 
              className="text-lg sm:text-xl text-ink-light max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                transitionDelay: '0.3s',
              }}
            >
              {t('landing.subtitle')}
            </p>

            <div 
              style={{
                transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: isLoaded ? 1 : 0,
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                transitionDelay: '0.45s',
              }}
            >
              <Link 
                href="/timeline" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-primary text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-history-700 via-history-600 to-history-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {t('common.startLearning')}
                  </span>
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            <p 
              className="mt-8 text-sm text-history-500"
              style={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                transitionDelay: '0.6s',
              }}
            >
              {t('landing.designedFor')}
            </p>
          </div>

          <section 
            className={`max-w-5xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 ${
              showFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } transition-all duration-1000`}
          >
            {[1, 2, 3, 4].map((featureIndex, index) => (
              <div 
                key={featureIndex}
                className="card-elevated text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">
                  {featureIndex === 1 ? '📚' : featureIndex === 2 ? '💡' : featureIndex === 3 ? '🎯' : '🌐'}
                </div>
                <h3 className="font-serif font-bold text-ink-dark mb-2">
                  {t(`landing.feature${featureIndex}.title`)}
                </h3>
                <p className="text-sm text-ink-light">
                  {t(`landing.feature${featureIndex}.description`)}
                </p>
              </div>
            ))}
          </section>

          <section className="max-w-3xl mx-auto mt-24 px-4">
            <div className="bg-parchment rounded-3xl p-8 sm:p-12 shadow-soft border border-history-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-dark mb-4">
                  {t('landing.howItWorks')}
                </h2>
                <p className="text-ink-light">
                  {t('landing.designedFor')}
                </p>
              </div>
              
              <div className="space-y-6">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold shadow-sm">
                      {step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink-dark mb-1">
                        {t(`landing.step${step}.title`)}
                      </h4>
                      <p className="text-sm text-ink-light">
                        {t(`landing.step${step}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mt-24 px-4 text-center">
            <blockquote className="text-xl sm:text-2xl text-ink italic mb-8">
              {t('landing.quote')}
            </blockquote>
            <p className="text-history-500">{t('landing.quoteAttribution')}</p>
          </section>
        </main>

        <footer className="border-t border-history-100 mt-24 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">📜</span>
              <span className="font-serif font-bold text-history-800">History Sense</span>
            </div>
            <p className="text-sm text-history-500">
              {t('landing.footer')}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}