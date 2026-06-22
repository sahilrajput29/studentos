'use client';

import { RecentInterview } from '@/lib/dashboardData';
import Link from 'next/link';

interface InterviewCardProps {
  interview: RecentInterview;
}

export default function InterviewCard({ interview }: InterviewCardProps) {
  const getDifficultyColor = (difficulty: string) => {
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

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-600'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-white">{interview.company}</h3>
          <p className="text-sm text-gray-400">{interview.role}</p>
        </div>
        <span className={`border px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(interview.difficulty)}`}>
          {interview.difficulty}
        </span>
      </div>

      {interview.rating && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400">Rating:</span>
          {renderStars(interview.rating)}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{interview.viewedAt}</p>
        <Link
          href="/vault"
          className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded transition text-gray-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
