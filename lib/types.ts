export interface RoadmapContent {
  [key: string]: string[];
}

export interface Project {
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

export interface ProjectsData {
  [key: string]: Project[];
}

export interface RoadmapFormProps {
  year: string;
  branch: string;
  goal: string;
  loading: boolean;
  onYearChange: (value: string) => void;
  onBranchChange: (value: string) => void;
  onGoalChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface RoadmapResultsProps {
  year: string;
  branch: string;
  goal: string;
  skills: string[];
  projects: Project[];
  roadmapGenerated: boolean;
  getGoalLabel: (goal: string) => string;
}

export interface ProjectRecommendationsProps {
  projects: Project[];
}

export type AiIntent = 'chat' | 'roadmap' | 'resume' | 'projects' | 'interview';

export interface ChatMessageData {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  intent?: AiIntent;
  data?: any;
}

export interface Conversation {
  id: string;
  title: string;
  date: string;
  messages: ChatMessageData[];
  isActive?: boolean;
}
