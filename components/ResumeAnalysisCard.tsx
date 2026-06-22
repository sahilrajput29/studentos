'use client';

import { ResumeAnalysis } from '@/lib/dashboardData';
import Link from 'next/link';

interface ResumeAnalysisCardProps {
  analysis: ResumeAnalysis;
}

export default function ResumeAnalysisCard({ analysis }: ResumeAnalysisCardProps) {
  const getAtsScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getAtsScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-white truncate">{analysis.fileName}</h3>
          <p className="text-xs text-gray-500 mt-1">{analysis.analyzedAt}</p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${getAtsScoreColor(analysis.atsScore)}`}>
            {analysis.atsScore}
          </div>
          <p className="text-xs text-gray-400">ATS Score</p>
        </div>
      </div>

      <div className="mb-3">
        <div className="w-full bg-gray-800 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full ${getAtsScoreBg(analysis.atsScore)}`}
            style={{ width: `${analysis.atsScore}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-400">{analysis.improvements} improvements suggested</span>
        <Link
          href="/resume"
          className="text-blue-400 hover:text-blue-300 font-medium transition"
        >
          Review
        </Link>
      </div>
    </div>
  );
}
