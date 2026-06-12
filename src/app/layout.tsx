import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import LanguageProvider from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'History Sense - Understand 5,000 Years of History',
  description: 'A journey through time to understand how our world came to be',
};

function AppContent({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContent>{children}</AppContent>
    </Suspense>
  );
}