// Mock data for dashboard
export interface SavedRoadmap {
  id: string;
  title: string;
  goal: string;
  year: string;
  branch: string;
  progress: number;
  createdAt: string;
  lastUpdated: string;
}

export interface RecentInterview {
  id: string;
  company: string;
  role: string;
  difficulty: string;
  viewedAt: string;
  rating?: number;
}

export interface ResumeAnalysis {
  id: string;
  fileName: string;
  atsScore: number;
  analyzedAt: string;
  improvements: number;
}

export interface ProgressItem {
  id: string;
  title: string;
  category: string;
  completed: number;
  total: number;
  percentage: number;
  color: string;
}

export const mockSavedRoadmaps: SavedRoadmap[] = [
  {
    id: '1',
    title: 'Web Development Roadmap',
    goal: 'Web Development',
    year: 'Second Year',
    branch: 'CSE',
    progress: 65,
    createdAt: '2 weeks ago',
    lastUpdated: '3 days ago',
  },
  {
    id: '2',
    title: 'AI/ML Career Path',
    goal: 'AI-ML Engineer',
    year: 'Third Year',
    branch: 'AI-ML',
    progress: 45,
    createdAt: '1 month ago',
    lastUpdated: '1 week ago',
  },
  {
    id: '3',
    title: 'Competitive Programming',
    goal: 'Competitive Programming',
    year: 'First Year',
    branch: 'CSE',
    progress: 30,
    createdAt: '2 months ago',
    lastUpdated: '2 weeks ago',
  },
];

export const mockRecentInterviews: RecentInterview[] = [
  {
    id: '1',
    company: 'Google',
    role: 'Software Engineer',
    difficulty: 'Advanced',
    viewedAt: 'Today',
    rating: 4,
  },
  {
    id: '2',
    company: 'Microsoft',
    role: 'Intern',
    difficulty: 'Intermediate',
    viewedAt: 'Yesterday',
    rating: 5,
  },
  {
    id: '3',
    company: 'Amazon',
    role: 'SDE Intern',
    difficulty: 'Intermediate',
    viewedAt: '2 days ago',
    rating: 4,
  },
  {
    id: '4',
    company: 'Meta',
    role: 'Software Engineer',
    difficulty: 'Advanced',
    viewedAt: '1 week ago',
    rating: 3,
  },
];

export const mockResumeAnalyses: ResumeAnalysis[] = [
  {
    id: '1',
    fileName: 'Resume_2024.pdf',
    atsScore: 82,
    analyzedAt: 'Today',
    improvements: 3,
  },
  {
    id: '2',
    fileName: 'Resume_Final.docx',
    atsScore: 75,
    analyzedAt: '5 days ago',
    improvements: 5,
  },
  {
    id: '3',
    fileName: 'Resume_v2.pdf',
    atsScore: 68,
    analyzedAt: '2 weeks ago',
    improvements: 7,
  },
];

export const mockProgress: ProgressItem[] = [
  {
    id: '1',
    title: 'Skills Learned',
    category: 'Learning',
    completed: 12,
    total: 20,
    percentage: 60,
    color: 'bg-blue-500',
  },
  {
    id: '2',
    title: 'Projects Completed',
    category: 'Projects',
    completed: 5,
    total: 10,
    percentage: 50,
    color: 'bg-green-500',
  },
  {
    id: '3',
    title: 'Interview Prep',
    category: 'Interviews',
    completed: 8,
    total: 15,
    percentage: 53,
    color: 'bg-purple-500',
  },
  {
    id: '4',
    title: 'DSA Problems',
    category: 'DSA',
    completed: 45,
    total: 100,
    percentage: 45,
    color: 'bg-yellow-500',
  },
];
