import { RoadmapContent, ProjectsData } from './types';

export const roadmapData: RoadmapContent = {
  web: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  aiml: ['Python', 'NumPy', 'Pandas', 'Machine Learning', 'Deep Learning'],
  cyber: ['Networking', 'Linux', 'Web Security', 'Penetration Testing'],
  app: ['React Native', 'Flutter', 'Mobile UI/UX', 'App Architecture', 'API Integration'],
  cp: ['Data Structures', 'Algorithms', 'Competitive Coding', 'Problem Solving', 'Optimization'],
  swe: ['System Design', 'Software Architecture', 'Clean Code', 'Testing', 'DevOps'],
};

export const projectsData: ProjectsData = {
  web: [
    {
      name: 'Personal Portfolio',
      difficulty: 'Beginner',
      description: 'Showcase your projects and skills with a responsive website',
    },
    {
      name: 'Weather App',
      difficulty: 'Beginner',
      description: 'Build a weather app using APIs to fetch real-time data',
    },
    {
      name: 'Full Stack Blog',
      difficulty: 'Intermediate',
      description: 'Create a blog platform with user authentication and database',
    },
    {
      name: 'E-Commerce Store',
      difficulty: 'Advanced',
      description: 'Build a complete e-commerce platform with payments integration',
    },
  ],
  aiml: [
    {
      name: 'House Price Predictor',
      difficulty: 'Beginner',
      description: 'Predict house prices using linear regression and datasets',
    },
    {
      name: 'Resume Screening AI',
      difficulty: 'Intermediate',
      description: 'Build AI to classify and screen resumes automatically',
    },
    {
      name: 'Chatbot',
      difficulty: 'Intermediate',
      description: 'Create an intelligent chatbot using NLP techniques',
    },
    {
      name: 'Image Classifier',
      difficulty: 'Advanced',
      description: 'Build deep learning models to classify images with neural networks',
    },
  ],
  cyber: [
    {
      name: 'Port Scanner',
      difficulty: 'Beginner',
      description: 'Create a tool to scan network ports and identify services',
    },
    {
      name: 'Vulnerability Scanner',
      difficulty: 'Intermediate',
      description: 'Build a scanner to detect common security vulnerabilities',
    },
    {
      name: 'Password Strength Analyzer',
      difficulty: 'Beginner',
      description: 'Analyze and validate password strength with security rules',
    },
    {
      name: 'Network Monitoring Tool',
      difficulty: 'Advanced',
      description: 'Monitor network traffic and detect suspicious activities',
    },
  ],
  app: [
    {
      name: 'To-Do App',
      difficulty: 'Beginner',
      description: 'Create a task management app with add, edit, and delete features',
    },
    {
      name: 'Expense Tracker',
      difficulty: 'Beginner',
      description: 'Build an app to track expenses and visualize spending patterns',
    },
    {
      name: 'Fitness Tracker',
      difficulty: 'Intermediate',
      description: 'Track workouts, calories, and fitness goals with data visualization',
    },
    {
      name: 'Social Media App',
      difficulty: 'Advanced',
      description: 'Build a full-featured social app with posts, comments, and notifications',
    },
  ],
  swe: [
    {
      name: 'Task Management System',
      difficulty: 'Intermediate',
      description: 'Build a system to manage tasks with collaboration features',
    },
    {
      name: 'URL Shortener',
      difficulty: 'Intermediate',
      description: 'Create a service to shorten URLs and track analytics',
    },
    {
      name: 'Chat Application',
      difficulty: 'Intermediate',
      description: 'Build a real-time chat app with WebSocket connections',
    },
    {
      name: 'Student Management System',
      difficulty: 'Advanced',
      description: 'Create a comprehensive system for managing student data and records',
    },
  ],
  cp: [
    {
      name: 'Two Sum Problem',
      difficulty: 'Beginner',
      description: 'Solve classic array problems using hash maps and sorting',
    },
    {
      name: 'Graph Algorithms',
      difficulty: 'Intermediate',
      description: 'Master BFS, DFS, and shortest path algorithms',
    },
    {
      name: 'Dynamic Programming',
      difficulty: 'Intermediate',
      description: 'Solve optimization problems using DP techniques',
    },
    {
      name: 'Advanced Data Structures',
      difficulty: 'Advanced',
      description: 'Implement segment trees, heaps, and advanced structures',
    },
  ],
};

export const goalLabels: { [key: string]: string } = {
  web: 'Web Development',
  aiml: 'AI/ML Engineer',
  cyber: 'Cybersecurity',
  app: 'App Development',
  cp: 'Competitive Programming',
  swe: 'Software Engineer',
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Intermediate':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Advanced':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};
