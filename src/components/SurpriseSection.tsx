import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

const SurpriseSection = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const showRandomMessage = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1000);
    setCurrentMessage(Math.floor(Math.random() * loveContent.surprises.messages.length));
  };

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-4">
            {loveContent.surprises.title}
          </h1>
          <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
            {loveContent.surprises.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-rose-pink/40 shadow-2xl relative overflow-hidden"
        >
          {/* Surprise message card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 min-h-[120px] flex items-center justify-center"
          >
            <div className={`bg-white p-8 rounded-2xl border-2 border-deep-red/30 shadow-lg max-w-sm mx-auto transform transition-all duration-300 ${
              showHearts ? 'scale-105 rotate-1' : ''
            }`}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart size={20} className="text-deep-red animate-bounce" />
                <span className="font-playfair text-xl text-deep-red">💌</span>
                <Heart size={20} className="text-deep-red animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <p className="font-dancing text-xl md:text-2xl text-burgundy leading-relaxed italic">
                {loveContent.surprises.messages[currentMessage]}
              </p>
            </div>
          </motion.div>

          {/* Floating hearts decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-deep-red/20 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-pink/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

          <button
            onClick={showRandomMessage}
            className="heart-button w-full md:w-auto mx-auto"
          >
            {loveContent.surprises.buttonText}
          </button>

          {/* Clickable hearts grid */}
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentMessage((i - 1) % loveContent.surprises.messages.length)}
                className="w-12 h-12 rounded-full bg-deep-red/10 hover:bg-deep-red flex items-center justify-center text-white transition-all hover:scale-110 shadow-md hover:shadow-deep-red/50"
              >
                <Heart size={20} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurpriseSection;