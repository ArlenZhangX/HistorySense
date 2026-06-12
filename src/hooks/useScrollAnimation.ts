import { useState, useEffect, useRef, useCallback } from 'react';

export function useScrollAnimation(options: {
  threshold?: number;
  rootMargin?: string;
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return { ref, isVisible };
}

export function useParallaxScroll(intensity: number = 10) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollPercent = rect.top / window.innerHeight;
        setOffset(scrollPercent * intensity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return { ref, offset };
}
