'use client';

import { useState } from 'react';
import { InterviewExperience } from '@/lib/interviewData';

interface AddExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (experience: InterviewExperience) => void;
}

export default function AddExperienceModal({ isOpen, onClose, onAdd }: AddExperienceModalProps) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [rounds, setRounds] = useState('');
  const [questions, setQuestions] = useState('');
  const [tips, setTips] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExperience: InterviewExperience = {
      id: Date.now(),
      company,
      role,
      experienceLevel,
      rounds: rounds.split(',').map((s) => s.trim()).filter(Boolean),
      questions: questions.split('\n').map((s) => s.trim()).filter(Boolean),
      tips: tips.split('\n').map((s) => s.trim()).filter(Boolean),
      date: new Date().toISOString(),
    };
    onAdd(newExperience);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Share Interview Experience</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
              <input
                required
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="e.g. Google"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
              <input
                required
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                placeholder="e.g. Software Engineer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty</label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as any)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Rounds (comma separated)</label>
            <input
              required
              type="text"
              value={rounds}
              onChange={(e) => setRounds(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              placeholder="e.g. Online Assessment, System Design, Behavioral"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Questions (one per line)</label>
            <textarea
              required
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white h-24"
              placeholder="Design YouTube&#10;Optimize database queries"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Tips (one per line)</label>
            <textarea
              required
              value={tips}
              onChange={(e) => setTips(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white h-24"
              placeholder="Practice LeetCode hard problems&#10;Know system design patterns"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Share Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
