'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import RoadmapForm from '@/components/RoadmapForm';
import RoadmapResults from '@/components/RoadmapResults';
import { Project } from '@/lib/types';
import { goalLabels } from '@/lib/roadmapData';

export default function RoadmapPage() {
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [goal, setGoal] = useState('');
  const [roadmapGenerated, setRoadmapGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleGenerateRoadmap = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!year || !branch || !goal) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ year, branch, goal }),
      });
      const data = await response.json();
      setSkills(data.skills || []);
      setProjects(data.projects || []);
      setRoadmapGenerated(true);
    } catch (error) {
      console.error('Failed to generate roadmap:', error);
    } finally {
      setLoading(false);
    }
  };

  const getGoalLabel = (selectedGoal: string) => {
    return goalLabels[selectedGoal] || selectedGoal;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
              <span className="text-sm text-gray-300">🧭 AI Career Navigator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              AI Career Navigator
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Generate a personalized roadmap based on your year, branch, and career goal.
            </p>
          </div>

          {/* Form and Results Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Component */}
            <RoadmapForm
              year={year}
              branch={branch}
              goal={goal}
              loading={loading}
              onYearChange={setYear}
              onBranchChange={setBranch}
              onGoalChange={setGoal}
              onSubmit={handleGenerateRoadmap}
            />

            {/* Results Component */}
            <RoadmapResults
              year={year}
              branch={branch}
              goal={goal}
              skills={skills}
              projects={projects}
              roadmapGenerated={roadmapGenerated}
              getGoalLabel={getGoalLabel}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
