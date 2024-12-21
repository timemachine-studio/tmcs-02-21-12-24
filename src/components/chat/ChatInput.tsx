import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { VoiceRecorder } from './VoiceRecorder';
import { ChatInputProps } from '../../types/chat';
import { LoadingSpinner } from '../loading/LoadingSpinner';

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      await onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask TimeMachine CS..."
          disabled={isLoading}
          className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
        />
        <VoiceRecorder 
          onSendMessage={onSendMessage}
          disabled={isLoading || message.trim().length > 0}
        />
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <LoadingSpinner size="md" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
}