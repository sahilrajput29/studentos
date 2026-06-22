'use client';

interface ResumeUploadAreaProps {
  onFileUpload: (file: File) => void;
  isLoading: boolean;
  uploadedFileName?: string;
}

export default function ResumeUploadArea({
  onFileUpload,
  isLoading,
  uploadedFileName,
}: ResumeUploadAreaProps) {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        onFileUpload(file);
      } else {
        alert('Please upload a PDF or DOCX file');
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        onFileUpload(file);
      } else {
        alert('Please upload a PDF or DOCX file');
      }
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
        {!uploadedFileName ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition cursor-pointer"
          >
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-lg font-semibold text-white mb-2">Upload Your Resume</h3>
            <p className="text-gray-400 text-sm mb-4">
              Drag and drop your resume here, or click to select a file
            </p>
            <p className="text-gray-500 text-xs mb-6">Supported formats: PDF, DOCX</p>

            <label className="inline-block">
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileInput}
                disabled={isLoading}
                className="hidden"
              />
              <span className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Analyzing...' : 'Choose File'}
              </span>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="font-semibold text-white text-sm">{uploadedFileName}</p>
                  <p className="text-gray-400 text-xs">File uploaded successfully</p>
                </div>
              </div>
            </div>

            <label className="block">
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileInput}
                disabled={isLoading}
                className="hidden"
              />
              <span className="block text-center bg-gray-800/50 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition cursor-pointer text-sm">
                Upload Different File
              </span>
            </label>

            <div className="text-xs text-gray-500 text-center">
              Your resume has been analyzed. See the results on the right.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
