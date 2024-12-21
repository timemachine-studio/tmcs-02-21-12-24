import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { MessageProps } from '../../types/chat';
import { textGlowStyle } from '../../utils/animations';
import { AnimatedWords } from './AnimatedWords';
import { ErrorMessage } from './ErrorMessage';
import { ResponseCards } from './ResponseCards';

const WORDS_PER_CARD = 15;

export function AIMessage({ content }: MessageProps) {
  const isError = content.includes('API key');
  const words = content.split(' ');
  const needsCards = words.length > WORDS_PER_CARD;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center min-h-[200px] w-full"
    >
      <div className="text-center max-w-4xl mx-auto px-8">
        {isError ? (
          <ErrorMessage content={content} />
        ) : needsCards ? (
          <ResponseCards content={content} wordsPerCard={WORDS_PER_CARD} />
        ) : (
          <AnimatedWords 
            text={content}
            className="ai-message text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            style={textGlowStyle}
          />
        )}
      </div>
    </motion.div>
  );
}