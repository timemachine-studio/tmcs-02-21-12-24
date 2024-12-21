import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, AlertCircle } from 'lucide-react';
import { useAudioRecording } from '../../hooks/useAudioRecording';

interface VoiceRecorderProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function VoiceRecorder({ onSendMessage, disabled }: VoiceRecorderProps) {
  const { isRecording, startRecording, stopRecording, error } = useAudioRecording();
  const [showError, setShowError] = useState(false);

  const handleToggleRecording = async () => {
    try {
      setShowError(false);
      if (isRecording) {
        const transcription = await stopRecording();
        if (transcription.trim()) {
          await onSendMessage(transcription);
        }
      } else if (!disabled) { // Only start recording if not disabled
        await startRecording();
      }
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleToggleRecording}
        disabled={disabled && !isRecording} // Allow stopping even when disabled
        className={`p-3 rounded-full transition-colors disabled:opacity-50 
          ${isRecording 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-purple-600 hover:bg-purple-700'}`}
        type="button" // Prevent form submission
      >
        {isRecording ? (
          <Square className="w-5 h-5 text-white" />
        ) : (
          <Mic className="w-5 h-5 text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {showError && error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap"
          >
            <div className="flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-red-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}