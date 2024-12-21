import { useState, useCallback } from 'react';
import { Message } from '../types/chat';
import { generateAIResponse } from '../services/ai/geminiService';
import { INITIAL_MESSAGE } from '../config/constants';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      content,
      isAI: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get AI response
      const aiResponse = await generateAIResponse([...messages, userMessage]);
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        content: aiResponse,
        isAI: true
      }]);
    } catch (error) {
      console.error('Failed to generate AI response:', error);
      // Add error handling UI if needed
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    showHistory,
    isLoading,
    setShowHistory,
    handleSendMessage
  };
}