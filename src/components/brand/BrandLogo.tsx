import React from 'react';
import { motion } from 'framer-motion';
import { useGlowAnimation } from '../../hooks/useGlowAnimation';

export function BrandLogo() {
  const { glowStyle, pulseVariants } = useGlowAnimation();

  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate="animate"
      className="fixed top-6 left-6 z-50"
    >
      <h1 
        className="text-2xl font-bold text-purple-400"
        style={glowStyle}
      >
        TimeMachine
      </h1>
    </motion.div>
  );
}