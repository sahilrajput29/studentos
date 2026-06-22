'use client';

import { AnalysisResult } from '@/lib/resumeData';

interface ResumeAnalysisResultsProps {
  analysis: AnalysisResult | null;
}

export default function ResumeAnalysisResults({
  analysis,
}: ResumeAnalysisResultsProps) {
  if (!analysis) {
    return (
      <div className="lg:col-span-2">
        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm min-h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-400 text-lg">Analysis results will appear here</p>
            <p className="text-gray-500 text-sm mt-2">Upload your resume to get started</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-2">
      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm space-y-8">
        {/* ATS Score Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Resume Analysis Results</h3>
          
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-300">ATS Compatibility Score</h4>
              <span className="text-3xl font-bold text-white">{analysis.atsScore}%</span>
            </div>
            
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  analysis.atsScore >= 80
                    ? 'bg-green-500'
                    : analysis.atsScore >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${analysis.atsScore}%` }}
              />
            </div>
            
            <p className="text-gray-400 text-sm mt-3">
              {analysis.atsScore >= 80
                ? 'Great! Your resume is well-optimized for ATS systems.'
                : analysis.atsScore >= 60
                ? 'Good! Your resume has good ATS compatibility. Some improvements needed.'
                : 'Needs work! Focus on the suggestions below to improve ATS score.'}
            </p>
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">✓ Strengths</h4>
          <div className="space-y-2">
            {analysis.strengths.map((strength, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <span className="text-green-400 font-bold mt-0.5">•</span>
                <p className="text-gray-300 text-sm">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div>
          <h4 className="text-lg font-semibold text-red-400 mb-4">⚠ Weaknesses</h4>
          <div className="space-y-2">
            {analysis.weaknesses.map((weakness, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <span className="text-red-400 font-bold mt-0.5">×</span>
                <p className="text-gray-300 text-sm">{weakness}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-4">📚 Missing Skills</h4>
          <div className="flex flex-wrap gap-2">
            {analysis.missingSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">💡 Improvement Suggestions</h4>
          <div className="space-y-2">
            {analysis.improvementSuggestions.map((suggestion, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
              >
                <span className="text-blue-400 font-bold mt-0.5">{idx + 1}.</span>
                <p className="text-gray-300 text-sm">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div>
          <h4 className="text-lg font-semibold text-purple-400 mb-4">🎓 Recommended Learning Resources</h4>
          <div className="space-y-4">
            {analysis.learningResources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4"
              >
                <h5 className="font-semibold text-purple-400 mb-2 text-sm">{resource.skill}</h5>
                <ul className="space-y-1">
                  {resource.resources.map((res, ridx) => (
                    <li key={ridx} className="text-gray-400 text-xs flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">→</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
