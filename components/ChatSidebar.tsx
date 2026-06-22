'use client';

interface Conversation {
  id: string;
  title: string;
  date: string;
  isActive?: boolean;
}

interface ChatSidebarProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
}

export default function ChatSidebar({
  conversations,
  onSelectConversation,
  onNewChat,
}: ChatSidebarProps) {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 h-screen flex flex-col">
      {/* New Chat Button */}
      <div className="p-4 border-b border-gray-800">
        <button
          onClick={onNewChat}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition flex items-center justify-center gap-2"
        >
          <span>+</span>
          New Chat
        </button>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelectConversation(conv.id)}
            className={`w-full text-left px-3 py-2 rounded-lg transition text-sm ${
              conv.isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <p className="truncate font-medium">{conv.title}</p>
            <p className={`text-xs mt-1 ${conv.isActive ? 'text-gray-300' : 'text-gray-500'}`}>
              {conv.date}
            </p>
          </button>
        ))}
      </div>

      {/* Settings Footer */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full text-left text-gray-400 hover:text-white px-3 py-2 text-sm transition rounded-lg hover:bg-gray-800">
          ⚙️ Settings
        </button>
      </div>
    </div>
  );
}
