'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string, file: File | null) => void;
  isLoading?: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() || selectedFile) {
      onSendMessage(input, selectedFile);
      setInput('');
      setSelectedFile(null);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() || selectedFile) {
        handleSubmit(e);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm p-4"
    >
      {selectedFile && (
        <div className="mb-3 flex items-center gap-2 bg-gray-800/80 w-max px-3 py-1.5 rounded-md border border-gray-700">
          <span className="text-xl">📄</span>
          <span className="text-sm text-gray-300 truncate max-w-[200px]">{selectedFile.name}</span>
          <button
            type="button"
            onClick={() => setSelectedFile(null)}
            className="ml-2 text-gray-500 hover:text-white transition"
          >
            ✕
          </button>
        </div>
      )}
      <div className="flex gap-4 items-end">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition disabled:opacity-50 flex-shrink-0"
          title="Attach PDF Resume"
        >
          📎
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setSelectedFile(file);
            if (fileInputRef.current) fileInputRef.current.value = '';
          }}
        />

        <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus-within:border-blue-500 transition">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question or request..."
            disabled={isLoading}
            rows={1}
            className="w-full bg-transparent text-white placeholder-gray-500 resize-none outline-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || (!input.trim() && !selectedFile)}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-medium transition"
        >
          {isLoading ? (
            <span className="inline-block">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          ) : (
            <span>Send</span>
          )}
        </button>
      </div>
    </form>
  );
}
