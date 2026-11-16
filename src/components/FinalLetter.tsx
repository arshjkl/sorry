import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

const FinalLetter = () => {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-deep-red/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-pink/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-rose-pink/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-deep-red/30 rounded-full blur-xl -translate-y-1/3" />
          <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-rose-pink/30 rounded-full blur-xl translate-y-1/3" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 text-deep-red mb-8">
              <Heart size={24} className="animate-heartbeat" />
              <span className="font-playfair text-xl">My Love Letter</span>
              <Heart size={24} className="animate-heartbeat" style={{ animationDelay: '0.5s' }} />
            </div>

            <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-8">
              {loveContent.finalLetter.title}
            </h1>

            <div className="bg-cream-white p-10 rounded-2xl border border-baby-pink/30 mb-10 relative overflow-hidden">
              <div className="absolute -top-4 left-6 bg-deep-red w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
                <Sparkles size={16} />
              </div>
              <p className="font-dancing text-xl md:text-2xl text-deep-red leading-relaxed italic">
                {loveContent.finalLetter.message}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl text-burgundy mb-4">
                {loveContent.finalLetter.question}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setResponse(loveContent.finalLetter.response1)}
                className="heart-button w-full sm:w-auto"
              >
                {loveContent.finalLetter.button1}
              </button>
              <button
                onClick={() => setResponse(loveContent.finalLetter.response2)}
                className="bg-baby-pink text-deep-red px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-rose-pink/50 w-full sm:w-auto"
              >
                {loveContent.finalLetter.button2}
              </button>
            </div>

            {response && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 rounded-2xl bg-deep-red/10 border border-deep-red/20"
              >
                <div className="flex items-center gap-3 justify-center">
                  <Heart size={20} className="text-deep-red animate-bounce" />
                  <p className="font-poppins text-lg text-deep-red font-medium">{response}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalLetter;