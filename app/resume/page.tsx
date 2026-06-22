'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ResumeUploadArea from '@/components/ResumeUploadArea';
import ResumeAnalysisResults from '@/components/ResumeAnalysisResults';
import { AnalysisResult } from '@/lib/resumeData';

export default function ResumePage() {
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    setUploadedFileName(file.name);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/analyze-resume', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze resume');
      }
      setAnalysis(data);
    } catch (error: any) {
      console.error('Analysis error:', error);
      alert(error.message || 'Failed to analyze resume. Please ensure it is a valid PDF and try again.');
    } finally {
      setIsLoading(false);
    }
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
              <span className="text-sm text-gray-300">📄 AI-Powered Resume Analysis</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Resume Analyzer</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Get instant feedback on your resume. Improve your ATS score and land more interviews.
            </p>
          </div>

          {/* Upload and Analysis Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upload Area */}
            <ResumeUploadArea
              onFileUpload={handleFileUpload}
              isLoading={isLoading}
              uploadedFileName={uploadedFileName}
            />

            {/* Analysis Results */}
            <ResumeAnalysisResults analysis={analysis} />
          </div>
        </div>
      </div>
    </main>
  );
}
