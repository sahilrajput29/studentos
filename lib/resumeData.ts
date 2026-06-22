export interface ResumeAnalysis {
  atsScore: number;
  missingSkills: string[];
  strengths: string[];
  weaknesses: string[];
  improvementSuggestions: string[];
  learningResources: {
    skill: string;
    resources: string[];
  }[];
}

export interface AnalysisResult extends ResumeAnalysis {
  fileName: string;
  analyzedAt: string;
}

export const getMockAnalysis = (fileName: string): AnalysisResult => {
  return {
    fileName,
    analyzedAt: new Date().toISOString(),
    atsScore: 78,
    missingSkills: ['AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Machine Learning'],
    strengths: [
      'Strong foundation in core programming languages',
      'Clear project descriptions with quantifiable results',
      'Good mix of technical and soft skills',
      'Relevant internship experience listed',
      'Well-organized educational background',
    ],
    weaknesses: [
      'Missing specific metrics and impact numbers',
      'No mention of certifications or continuous learning',
      'Weak action verbs in some bullet points',
      'Limited mention of leadership or team contributions',
      'No GitHub profile or portfolio link',
    ],
    improvementSuggestions: [
      'Add quantifiable achievements (e.g., "Improved performance by 40%")',
      'Include links to GitHub, portfolio, or personal projects',
      'Add relevant certifications and achievements',
      'Use stronger action verbs (Led, Architected, Optimized)',
      'Highlight leadership and collaboration experiences',
      'Add technical skills section with specific technologies',
      'Include metrics for project improvements',
      'Mention awards or recognition received',
    ],
    learningResources: [
      {
        skill: 'AWS',
        resources: ['AWS Certified Solutions Architect Associate', 'A Cloud Guru', 'Linux Academy'],
      },
      {
        skill: 'Docker',
        resources: ['Docker for Developers Course', 'Play with Docker', 'Docker Documentation'],
      },
      {
        skill: 'Kubernetes',
        resources: ['Kubernetes by Google', 'Linux Foundation CKA', 'Kubernetes Official Docs'],
      },
      {
        skill: 'GraphQL',
        resources: ['GraphQL Full Stack Course', 'Apollo GraphQL', 'GraphQL Official Tutorial'],
      },
      {
        skill: 'Machine Learning',
        resources: ['Andrew Ng ML Course', 'Fast.ai', 'Google ML Crash Course'],
      },
    ],
  };
};
