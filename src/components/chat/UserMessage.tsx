import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { MessageProps } from '../../types/chat';
import { slideInFromLeft } from '../../utils/animations';

export function UserMessage({ content }: MessageProps) {
  return (
    <motion.div
      {...slideInFromLeft}
      className="flex items-start gap-2 px-4 py-2"
    >
      <User className="w-4 h-4 mt-1 text-gray-400" />
      <p className="text-sm text-gray-400">{content}</p>
    </motion.div>
  );
}