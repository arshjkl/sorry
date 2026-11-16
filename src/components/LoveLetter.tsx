import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

interface LoveLetterProps {
  onClose: () => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-blush p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-rose-pink/40 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-deep-red/20 rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-pink/30 rounded-full blur-xl" />
          <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-baby-pink/40 rounded-full blur-md" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-deep-red">
                <Heart size={24} className="animate-heartbeat" />
                <span className="font-playfair text-xl">For My Baby</span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/50 hover:bg-deep-red/20 flex items-center justify-center text-deep-red transition-colors"
              >
                <Heart size={18} />
              </button>
            </div>

            <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-6 text-center">
              {loveContent.finalLetter.title}
            </h1>

            <div className="bg-cream-white/60 p-8 rounded-2xl border border-baby-pink/30 mb-8 relative">
              <div className="absolute -top-3 left-4 bg-deep-red w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg">
                <Sparkles size={16} />
              </div>
              <p className="font-dancing text-xl md:text-2xl text-deep-red leading-relaxed italic">
                {loveContent.finalLetter.message}
              </p>
            </div>

            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl text-burgundy mb-4">
                {loveContent.finalLetter.question}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert(loveContent.finalLetter.response1)}
                className="heart-button flex-1 sm:w-auto"
              >
                {loveContent.finalLetter.button1}
              </button>
              <button
                onClick={() => alert(loveContent.finalLetter.response2)}
                className="bg-baby-pink text-deep-red px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-rose-pink/50 flex-1 sm:w-auto"
              >
                {loveContent.finalLetter.button2}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoveLetter;