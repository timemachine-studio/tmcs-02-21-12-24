import React from 'react';
import { AIMessage } from './AIMessage';
import { UserMessage } from './UserMessage';
import { Message } from '../../types/chat';

export function ChatMessage({ content, isAI }: Message) {
  if (isAI) {
    return <AIMessage content={content} />;
  }
  return <UserMessage content={content} />;
}