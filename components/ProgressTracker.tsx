'use client';

import { ProgressItem } from '@/lib/dashboardData';

interface ProgressTrackerProps {
  items: ProgressItem[];
}

export default function ProgressTracker({ items }: ProgressTrackerProps) {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">Your Progress</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${item.color === 'bg-blue-500' ? 'text-blue-400' : item.color === 'bg-green-500' ? 'text-green-400' : item.color === 'bg-purple-500' ? 'text-purple-400' : 'text-yellow-400'}`}>
                  {item.percentage}%
                </p>
                <p className="text-xs text-gray-500">
                  {item.completed}/{item.total}
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${item.color}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition">
        View Detailed Stats
      </button>
    </div>
  );
}
