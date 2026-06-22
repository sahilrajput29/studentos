'use client';

import { User } from '@/lib/AuthContext';
import Link from 'next/link';

interface WelcomeCardProps {
  user: User | null;
}

export default function WelcomeCard({ user }: WelcomeCardProps) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {greeting}, {user?.name || 'Student'}! 👋
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Let's accelerate your career today. Here's your learning dashboard.
          </p>
          <div className="flex gap-4">
            <Link
              href="/roadmap"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition"
            >
              Build Roadmap
            </Link>
            <Link
              href="/ai-coach"
              className="border border-gray-700 hover:bg-gray-900 px-6 py-2 rounded-lg font-semibold transition"
            >
              Ask AI Coach
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl">
          <span className="text-4xl">🚀</span>
        </div>
      </div>
    </div>
  );
}
