'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  children: React.ReactNode;
  onChange?: (tabId: string) => void;
}

interface TabPanelProps {
  tabId: string;
  children: React.ReactNode;
}

export function Tabs({ tabs, defaultTab, children, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');

  const handleChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className="border-b border-history-100">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleChange(tab.id)}
            className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-history-700 bg-white'
                : 'text-history-500 hover:text-history-700 hover:bg-history-50'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-history-600" />
            )}
          </button>
        ))}
      </nav>
      <div className="p-6 bg-white">
        {children}
      </div>
    </div>
  );
}

export function TabPanel({ tabId, children }: TabPanelProps) {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
}
