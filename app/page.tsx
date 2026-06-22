'use client';

import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
            <span className="text-sm text-gray-300">✨ AI-Powered Career Growth</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">
            Your AI Career
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Copilot
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build roadmaps, ace interviews, and accelerate your journey to your dream internship or job. All powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-200">
              Get Started Free
            </button>
            <button className="border border-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition duration-200">
              Explore Interview Vault
            </button>
          </div>

          <div className="text-gray-500 text-sm">
            No credit card required. Start building your career today.
          </div>
        </div>
      </section>

      {/* Internship Features Section */}
      <section className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need To Land Your Next Internship
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools designed to help you prepare, practice, and excel at every stage of your internship journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Career Navigator Card */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-gray-950/50 hover:from-gray-900/80 hover:to-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition">
                <span className="text-2xl">🧭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Career Navigator</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Personalized roadmap tailored to your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Weekly goals with actionable tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Real-time skill tracking and progress</span>
                </li>
              </ul>
            </div>

            {/* Interview Vault Card */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-gray-950/50 hover:from-gray-900/80 hover:to-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interview Vault</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Real interview experiences from students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Company-wise search and filtering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>OA and interview questions database</span>
                </li>
              </ul>
            </div>

            {/* Resume Analyzer Card */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-gray-950/50 hover:from-gray-900/80 hover:to-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Resume Analyzer</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>ATS feedback and optimization tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Missing skills detection and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Personalized improvement suggestions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools designed for engineering students seeking technical excellence and career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalized Roadmaps</h3>
              <p className="text-gray-400 leading-relaxed">
                AI-generated learning paths tailored to your skills, target roles, and timeline. Stay focused and make measurable progress.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interview Preparation</h3>
              <p className="text-gray-400 leading-relaxed">
                Practice with AI-powered mock interviews. Get real-time feedback on your technical explanations and communication.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl p-8 transition duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Career Acceleration</h3>
              <p className="text-gray-400 leading-relaxed">
                Get curated opportunities, insider tips, and strategies to land your target internship or job faster than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">S</span>
                </div>
                <span className="font-bold">StudentOS</span>
              </div>
              <p className="text-gray-500 text-sm">
                Your AI career copilot for engineering students.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
            <p>&copy; 2026 StudentOS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}