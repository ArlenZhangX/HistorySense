export interface Era {
  id: string;
  name: string;
  nameZh: string;
  timeRange: string;
  summary: string;
  summaryZh: string;
  keyIdeas: string[];
  keyIdeasZh: string[];
  keywords: string[];
  keywordsZh: string[];
  reflectionQuestion: string;
  reflectionQuestionZh: string;
  historicalSnapshot?: string;
  historicalSnapshotZh?: string;
  connectionToModern?: string;
  connectionToModernZh?: string;
}

export interface DeepDive {
  eraId: string;
  background: string;
  backgroundZh: string;
  catalyst: string;
  catalystZh: string;
  consequences: string[];
  consequencesZh: string[];
  legacy: string;
  legacyZh: string;
  uniqueContributions?: string[];
  uniqueContributionsZh?: string[];
  legacyQuestions?: string[];
}

export type FrameworkCategory = 'technology' | 'power' | 'economy' | 'ideas';

export interface FrameworkConcept {
  id: string;
  category: FrameworkCategory;
  concept: string;
  conceptZh: string;
  explanation: string;
  explanationZh: string;
  historicalExample: string;
  historicalExampleZh: string;
  insight: string;
  insightZh: string;
}

export interface Framework {
  category: FrameworkCategory;
  title: string;
  titleZh: string;
  developments: string[];
  developmentsZh: string[];
  explanation: string;
  explanationZh: string;
}

export interface LearningProgress {
  completedEras: string[];
  currentEraIndex: number;
  lastVisited: string;
  totalTimeSpent: number;
}
