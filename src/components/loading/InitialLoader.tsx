import React from 'react';
import { motion } from 'framer-motion';
import { Title } from './Title';
import { JapaneseText } from './JapaneseText';
import { LoadingEffects } from './LoadingEffects';
import { DigitalRain } from './DigitalRain';
import { PremiumLoadingBar } from './PremiumLoadingBar';

export function InitialLoader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
    >
      <LoadingEffects />
      <DigitalRain />
      <JapaneseText />

      <div className="relative z-10 p-8 w-full max-w-2xl">
        <div className="text-center space-y-6"> {/* Reduced space between elements */}
          <Title />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-center text-purple-300 font-bold"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              fontFamily: 'Montserrat'
            }}
          >
            Traveling to the future
          </motion.p>

          <div className="relative mx-auto max-w-md">
            <PremiumLoadingBar />
          </div>

          <div className="text-center space-y-2 mt-8"> {/* Added margin top */}
            {['Initializing quantum protocols...', 'Calibrating temporal coordinates...', 'Stabilizing wormhole...'].map((text, index) => (
              <motion.p
                key={text}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="text-sm text-purple-300/80 font-mono"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}