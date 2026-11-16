import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Eye, Shield, Link, Zap, Check, Smile } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

const IconMap: Record<string, any> = {
  Smile,
  Heart,
  Sparkles,
  Star,
  Eye,
  Shield,
  Link,
  Zap,
  Check,
};

const LoveReasons = () => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-deep-red/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-rose-pink/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-4">
            A Million Reasons Why I Love You, Baby
          </h1>
          <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
            Every little thing about you makes my heart skip a beat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveContent.loveReasons.map((reason) => {
            const isFlipped = flipped.has(reason.id);
            const Icon = IconMap[reason.icon] || Heart;
            return (
              <motion.div
                key={reason.id}
                whileHover={{ y: -5 }}
                className="perspective-1000 cursor-pointer"
                onClick={() => toggleFlip(reason.id)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reason.id * 0.05 }}
                  className={`relative h-64 rounded-3xl p-6 shadow-xl border-2 transition-transform duration-500 preserve-3d ${
                    isFlipped
                      ? 'rotateY-180'
                      : ''
                  } ${isFlipped ? 'bg-deep-red' : 'bg-white/80 backdrop-blur-md border-rose-pink/40'}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Front */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 backface-hidden"
                    style={{ transform: 'rotateY(0deg)' }}
                  >
                    <div className="w-16 h-16 rounded-full bg-baby-pink flex items-center justify-center mb-6 shadow-lg">
                      <Icon size={32} className="text-deep-red" />
                    </div>
                    <h3 className="font-playfair text-xl md:text-2xl text-burgundy font-semibold">
                      {reason.front}
                    </h3>
                  </motion.div>
                  {/* Back */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm">
                      <Heart size={32} className="text-white" />
                    </div>
                    <h3 className="font-playfair text-xl md:text-2xl text-white font-semibold mb-4">
                      {reason.front}
                    </h3>
                    <p className="font-dancing text-lg text-white/90 leading-relaxed italic">
                      {reason.back}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoveReasons;