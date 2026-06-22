'use client';

import { SavedRoadmap } from '@/lib/dashboardData';
import Link from 'next/link';

interface RoadmapCardProps {
  roadmap: SavedRoadmap;
}

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{roadmap.title}</h3>
          <p className="text-sm text-gray-400">{roadmap.goal}</p>
        </div>
        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium">
          {roadmap.progress}%
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>{roadmap.progress}% complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${roadmap.progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <span>{roadmap.year}</span>
        <span>•</span>
        <span>{roadmap.branch}</span>
        <span>•</span>
        <span>Updated {roadmap.lastUpdated}</span>
      </div>

      <Link
        href="/roadmap"
        className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-center text-sm font-medium transition"
      >
        Continue Roadmap
      </Link>
    </div>
  );
}
