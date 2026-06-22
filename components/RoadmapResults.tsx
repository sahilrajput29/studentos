'use client';

import { RoadmapResultsProps } from '@/lib/types';
import ProjectRecommendations  from './ProjectRecommendations';

export default function RoadmapResults({
  year,
  branch,
  goal,
  skills,
  projects,
  roadmapGenerated,
  getGoalLabel,
}: RoadmapResultsProps) {

  return (
    <div className="lg:col-span-2">
      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
        {roadmapGenerated && year && branch && goal ? (
          <div className="w-full">
            {/* Header with Tags */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Your Personalized Roadmap</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  Year: <span className="text-white font-semibold">{year.charAt(0).toUpperCase() + year.slice(1)}</span>
                </span>
                <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  Branch: <span className="text-white font-semibold">{branch.toUpperCase()}</span>
                </span>
                <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  Goal: <span className="text-white font-semibold">{getGoalLabel(goal)}</span>
                </span>
              </div>
            </div>

            {/* Skills/Topics Grid */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Key Skills & Topics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 hover:from-gray-800/60 hover:to-gray-900/60 border border-gray-700 rounded-lg p-4 transition duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">{skill}</p>
                        <p className="text-gray-400 text-sm mt-1">
                          {index === 0 && 'Foundation & Basics'}
                          {index === 1 && 'Core Concepts'}
                          {index === 2 && 'Intermediate Skills'}
                          {index === 3 && 'Advanced Topics'}
                          {index === 4 && 'Specialization'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">12-Week Timeline</h4>
              <div className="space-y-3">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold text-sm">Week 1-4: Foundation</p>
                  <p className="text-gray-400 text-xs mt-1">Build strong fundamentals with {skills[0]} and {skills[1]}</p>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold text-sm">Week 5-8: Development</p>
                  <p className="text-gray-400 text-xs mt-1">Master {skills[2]} and {skills[3]} through projects</p>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <p className="text-white font-semibold text-sm">Week 9-12: Specialization</p>
                  <p className="text-gray-400 text-xs mt-1">Deep dive into {skills[4]} and interview preparation</p>
                </div>
              </div>
            </div>

            {/* Recommended Projects */}
            <ProjectRecommendations projects={projects} />
          </div>
        ) : (
          <div className="h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-400 text-lg">Your roadmap will appear here</p>
              <p className="text-gray-500 text-sm mt-2">Select all fields and click "Generate Roadmap"</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
