'use client';

import { ProjectRecommendationsProps } from '@/lib/types';
import { getDifficultyColor } from '@/lib/roadmapData';

export default function ProjectRecommendations({ projects }: ProjectRecommendationsProps) {
  return (
    <div className="mt-8 pt-8 border-t border-gray-700">
      <h4 className="text-lg font-semibold text-gray-300 mb-4">Recommended Projects</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-900/60 border border-gray-700 rounded-lg p-4 transition duration-300"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h5 className="text-white font-semibold text-sm">{project.name}</h5>
              <span className={`px-2 py-1 rounded text-xs font-semibold border ${getDifficultyColor(project.difficulty)} whitespace-nowrap`}>
                {project.difficulty}
              </span>
            </div>
            <p className="text-gray-400 text-xs">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
