import React, { useState, useEffect } from 'react';
import { ChatMessage } from './components/chat/ChatMessage';
import { ChatInput } from './components/chat/ChatInput';
import { ShowHistory } from './components/chat/ShowHistory';
import { BrandLogo } from './components/brand/BrandLogo';
import { InitialLoader } from './components/loading/InitialLoader';
import { useChat } from './hooks/useChat';
import { LoadingContainer } from './components/loading/LoadingContainer';

export default function App() {
  const { messages, showHistory, isLoading, setShowHistory, handleSendMessage } = useChat();
  const lastMessage = messages[messages.length - 1];
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Extended loading time for better effect visibility
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <InitialLoader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative h-screen flex flex-col">
        <BrandLogo />
        <LoadingContainer isVisible={isLoading} />
        <div className="absolute top-4 right-4 z-10">
          <ShowHistory showHistory={showHistory} onToggle={() => setShowHistory(!showHistory)} />
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          {showHistory ? (
            <div className="w-full max-w-4xl space-y-4">
              {messages.map((message) => (
                <ChatMessage 
                  key={message.id} 
                  {...message}
                />
              ))}
            </div>
          ) : (
            lastMessage && (
              <ChatMessage 
                {...lastMessage}
              />
            )
          )}
        </div>
        <div className="p-4">
          <ChatInput 
            onSendMessage={handleSendMessage} 
            isLoading={isLoading} 
          />
        </div>
      </main>
    </div>
  );
}