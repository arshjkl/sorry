import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

const MistakesSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-deep-red/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-pink/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-deep-red mb-4">
            <Heart size={24} className="animate-heartbeat" />
          </div>
          <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-4">
            I Know I Could Have Done Better...
          </h1>
          <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
            Reflecting on what I can improve, for us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-rose-pink/40 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-6 left-6 w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-white shadow-lg">
            <Sparkles size={16} />
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setCurrent((c) => (c === 0 ? loveContent.mistakes.length - 1 : c - 1))}
                disabled={loveContent.mistakes.length <= 1}
                className="opacity-50 disabled:opacity-20 text-deep-red bg-white/60 p-3 rounded-full hover:bg-deep-red hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <span className="font-poppins text-sm text-deep-red font-medium">
                {current + 1} / {loveContent.mistakes.length}
              </span>
              <button
                onClick={() => setCurrent((c) => (c === loveContent.mistakes.length - 1 ? 0 : c + 1))}
                disabled={loveContent.mistakes.length <= 1}
                className="opacity-50 disabled:opacity-20 text-deep-red bg-white/60 p-3 rounded-full hover:bg-deep-red hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h3 className="font-playfair text-2xl md:text-3xl text-burgundy mb-6 font-semibold">
                {loveContent.mistakes[current].title}
              </h3>
              <div className="bg-cream-white p-6 rounded-2xl border border-baby-pink/30 mb-8 relative overflow-hidden">
                <p className="font-dancing text-xl text-deep-red leading-relaxed italic">
                  {loveContent.mistakes[current].front}
                </p>
              </div>
              <div className="bg-deep-red/10 p-6 rounded-2xl border border-rose-pink/30">
                <p className="font-poppins text-lg text-deep-red leading-relaxed">
                  {loveContent.mistakes[current].back}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MistakesSection;