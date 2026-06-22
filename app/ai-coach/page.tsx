'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ChatSidebar from '@/components/ChatSidebar';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';

import { ChatMessageData, Conversation } from '@/lib/types';

export default function AiCoachPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Career Roadmap Discussion',
      date: 'Today',
      messages: [],
      isActive: true,
    },
    {
      id: '2',
      title: 'Interview Preparation',
      date: 'Yesterday',
      messages: [],
    },
    {
      id: '3',
      title: 'Resume Review',
      date: '2 days ago',
      messages: [],
    },
  ]);

  const [currentConversationId, setCurrentConversationId] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentConversation = conversations.find((c) => c.id === currentConversationId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentConversation?.messages]);

  const handleSendMessage = async (userMessage: string, file: File | null) => {
    // Add user message
    const userMsgId = `msg-${Date.now()}`;
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setConversations((prevConversations) =>
      prevConversations.map((conv) => {
        if (conv.id === currentConversationId) {
          return {
            ...conv,
            messages: [
              ...conv.messages,
              {
                id: userMsgId,
                role: 'user',
                content: userMessage,
                timestamp: timeString,
              },
            ],
          };
        }
        return conv;
      })
    );

    setIsLoading(true);
    try {
      const messagesToSend = [
        ...(currentConversation?.messages || []),
        { role: 'user', content: userMessage }
      ];

      const formData = new FormData();
      formData.append('messages', JSON.stringify(messagesToSend));
      if (file) {
        formData.append('file', file);
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      const aiResponse = data.response || data.error || 'Sorry, I encountered an error.';
      const intent = data.intent || 'chat';
      const intentData = data.data || null;
      
      const aiMsgId = `msg-${Date.now()}`;
      setConversations((prevConversations) =>
        prevConversations.map((conv) => {
          if (conv.id === currentConversationId) {
            return {
              ...conv,
              messages: [
                ...conv.messages,
                {
                  id: aiMsgId,
                  role: 'assistant',
                  content: aiResponse,
                  timestamp: timeString,
                  intent,
                  data: intentData,
                },
              ],
            };
          }
          return conv;
        })
      );
    } catch (error) {
      console.error('Failed to get AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    const newId = `conv-${Date.now()}`;
    const today = new Date();
    const dateString = today.toLocaleDateString();

    const newConversation: Conversation = {
      id: newId,
      title: 'New Chat',
      date: 'Today',
      messages: [],
      isActive: true,
    };

    setConversations((prev) => [
      ...prev.map((c) => ({ ...c, isActive: false })),
      newConversation
    ]);
    setCurrentConversationId(newId);
  };

  const handleSelectConversation = (id: string) => {
    setConversations((prev) =>
      prev.map((c) => ({
        ...c,
        isActive: c.id === id,
      }))
    );
    setCurrentConversationId(id);
  };

  return (
    <main className="h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block">
          <ChatSidebar
            conversations={conversations}
            onSelectConversation={handleSelectConversation}
            onNewChat={handleNewChat}
          />
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {currentConversation?.messages && currentConversation.messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold mb-2">Welcome to AI Coach</h2>
                <p className="text-gray-400 text-center max-w-md">
                  I'm here to help you with career roadmaps, interview prep, resume review, and skill
                  development. Ask me anything!
                </p>
              </div>
            )}

            {currentConversation?.messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
                intent={message.intent}
                data={message.data}
              />
            ))}

            {isLoading && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <div className="bg-gray-800 rounded-lg rounded-bl-none px-4 py-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
}
