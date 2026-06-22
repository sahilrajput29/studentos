'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import WelcomeCard from '@/components/WelcomeCard';
import RoadmapCard from '@/components/RoadmapCard';
import InterviewCard from '@/components/InterviewCard';
import ResumeAnalysisCard from '@/components/ResumeAnalysisCard';
import ProgressTracker from '@/components/ProgressTracker';
import {
  mockSavedRoadmaps,
  mockRecentInterviews,
  mockResumeAnalyses,
  mockProgress,
} from '@/lib/dashboardData';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Card */}
          <WelcomeCard user={user} />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Saved Roadmaps */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Saved Roadmaps</h2>
                  <a href="/roadmap" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    View All →
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockSavedRoadmaps.slice(0, 2).map((roadmap) => (
                    <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                  ))}
                </div>
              </div>

              {/* Resume Analysis History */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Resume Analysis History</h2>
                  <a href="/resume" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    View All →
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockResumeAnalyses.slice(0, 2).map((analysis) => (
                    <ResumeAnalysisCard key={analysis.id} analysis={analysis} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Progress Tracker */}
            <div>
              <ProgressTracker items={mockProgress} />
            </div>
          </div>

          {/* Recently Viewed Interviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recently Viewed Interview Experiences</h2>
              <a href="/vault" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                Explore All →
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockRecentInterviews.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{mockSavedRoadmaps.length}</div>
              <p className="text-gray-400">Roadmaps Created</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{mockRecentInterviews.length}</div>
              <p className="text-gray-400">Interviews Viewed</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{mockResumeAnalyses.length}</div>
              <p className="text-gray-400">Resumes Analyzed</p>
            </div>
            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {Math.round(mockProgress.reduce((sum, item) => sum + item.percentage, 0) / mockProgress.length)}%
              </div>
              <p className="text-gray-400">Overall Progress</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
