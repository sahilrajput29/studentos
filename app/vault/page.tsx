'use client';

import { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AddExperienceModal from '@/components/AddExperienceModal';
import { interviewExperiences, companies as initialCompanies, roles as initialRoles, difficulties, InterviewExperience } from '@/lib/interviewData';

export default function InterviewVaultPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  
  const [allExperiences, setAllExperiences] = useState<InterviewExperience[]>(interviewExperiences);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('userInterviewExperiences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setAllExperiences([...parsed, ...interviewExperiences]);
        }
      } catch (e) {
        console.error('Failed to parse saved experiences');
      }
    }
  }, []);

  const handleAddExperience = (newExp: InterviewExperience) => {
    const updated = [newExp, ...allExperiences];
    setAllExperiences(updated);
    
    // Save to local storage (only user-added ones to avoid duplicating static data)
    const userAdded = updated.filter(exp => !interviewExperiences.find(ie => ie.id === exp.id));
    localStorage.setItem('userInterviewExperiences', JSON.stringify(userAdded));
  };

  const dynamicCompanies = useMemo(() => Array.from(new Set(allExperiences.map(e => e.company))).sort(), [allExperiences]);
  const dynamicRoles = useMemo(() => Array.from(new Set(allExperiences.map(e => e.role))).sort(), [allExperiences]);

  const filteredExperiences = useMemo(() => {
    return allExperiences.filter((exp) => {
      const matchesSearch =
        exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.questions.some((q) => q.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCompany = !selectedCompany || exp.company === selectedCompany;
      const matchesRole = !selectedRole || exp.role === selectedRole;
      const matchesDifficulty = !selectedDifficulty || exp.experienceLevel === selectedDifficulty;

      return matchesSearch && matchesCompany && matchesRole && matchesDifficulty;
    });
  }, [searchTerm, selectedCompany, selectedRole, selectedDifficulty]);

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

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
                <span className="text-sm text-gray-300">💬 Real Interview Experiences</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Interview Vault</h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Learn from real interview experiences. Filter by company, role, and difficulty level.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition whitespace-nowrap self-start md:mt-12"
            >
              + Share Experience
            </button>
          </div>

          <AddExperienceModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            onAdd={handleAddExperience} 
          />

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div>
              <input
                type="text"
                placeholder="Search by company, role, or questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
              />
            </div>

            {/* Filters Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Company Filter */}
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition"
              >
                <option value="">All Companies</option>
                {dynamicCompanies.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>

              {/* Role Filter */}
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition"
              >
                <option value="">All Roles</option>
                {dynamicRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition"
              >
                <option value="">All Difficulties</option>
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-400 text-sm">
            Showing {filteredExperiences.length} of {allExperiences.length} experiences
          </div>

          {/* Interview Cards Grid */}
          {filteredExperiences.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredExperiences.map((experience) => (
                <div
                  key={experience.id}
                  className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-700 transition duration-300"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{experience.company}</h3>
                      <p className="text-gray-400">{experience.role}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                        experience.experienceLevel
                      )}`}
                    >
                      {experience.experienceLevel}
                    </span>
                  </div>

                  {/* Rounds */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Interview Rounds:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.rounds.map((round, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                          {round}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Questions Asked:</h4>
                    <ul className="space-y-1">
                      {experience.questions.map((question, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-blue-400 font-bold mt-0.5">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Tips from the Experience:</h4>
                    <ul className="space-y-1">
                      {experience.tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-green-400 font-bold mt-0.5">✓</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Date */}
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500">
                      Interviewed on {new Date(experience.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-gray-400 text-lg">No experiences found</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
