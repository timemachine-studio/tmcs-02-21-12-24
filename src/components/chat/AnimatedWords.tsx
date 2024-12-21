import React from 'react';
import { motion } from 'framer-motion';
import { wordAnimationVariants } from '../../utils/animations';
import { ANIMATION_CONFIG } from '../../utils/constants';

interface AnimatedWordsProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedWords({ text, className, style }: AnimatedWordsProps) {
  const words = text.split(' ');

  return (
    <motion.div
      variants={wordAnimationVariants.container}
      initial="hidden"
      animate="visible"
      className={className}
      style={style}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={wordAnimationVariants.word}
          style={{ 
            display: 'inline-block', 
            marginRight: '0.25em',
            whiteSpace: 'pre-wrap'
          }}
          className="opacity-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}