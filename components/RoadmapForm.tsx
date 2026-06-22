'use client';

import { RoadmapFormProps } from '@/lib/types';

export default function RoadmapForm({
  year,
  branch,
  goal,
  loading,
  onYearChange,
  onBranchChange,
  onGoalChange,
  onSubmit,
}: RoadmapFormProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Year Dropdown */}
          <div>
            <label htmlFor="year" className="block text-sm font-semibold mb-2">
              Year
            </label>
            <select
              id="year"
              value={year}
              onChange={(e) => onYearChange(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500 transition text-sm"
            >
              <option value="">Select year</option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="fourth">Fourth Year</option>
            </select>
          </div>

          {/* Branch Dropdown */}
          <div>
            <label htmlFor="branch" className="block text-sm font-semibold mb-2">
              Branch
            </label>
            <select
              id="branch"
              value={branch}
              onChange={(e) => onBranchChange(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500 transition text-sm"
            >
              <option value="">Select branch</option>
              <option value="cse">CSE</option>
              <option value="aiml">AI/ML</option>
              <option value="ece">ECE</option>
              <option value="it">IT</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Career Goal Dropdown */}
          <div>
            <label htmlFor="goal" className="block text-sm font-semibold mb-2">
              Career Goal
            </label>
            <select
              id="goal"
              value={goal}
              onChange={(e) => onGoalChange(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-500 transition text-sm"
            >
              <option value="">Select goal</option>
              <option value="web">Web Development</option>
              <option value="aiml">AI/ML Engineer</option>
              <option value="cyber">Cybersecurity</option>
              <option value="app">App Development</option>
              <option value="cp">Competitive Programming</option>
              <option value="swe">Software Engineer</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            disabled={!year || !branch || !goal || loading}
            className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-8 flex items-center justify-center gap-2"
          >
            {loading && (
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {loading ? 'Generating...' : 'Generate Roadmap'}
          </button>
        </form>
      </div>
    </div>
  );
}
