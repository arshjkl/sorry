import { motion } from 'framer-motion';
import { Heart, Ear, MessageCircle, Gift, Zap, Check, Shield, Star, Sparkles } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

const IconMap: Record<string, any> = {
  Ear,
  MessageCircle,
  Heart,
  Gift,
  Zap,
  Check,
  Shield,
  Star,
  Sparkles,
};

const PromiseSection = () => {
  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-deep-red/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-pink/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-4">
            Not Just Words, Baby. I Want To Show You.
          </h1>
          <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
            Promises I want to keep, every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveContent.promises.map((promise) => {
            const Icon = IconMap[promise.icon] || Heart;
            return (
              <motion.div
                key={promise.id}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-rose-pink/40 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-6 right-6 w-14 h-14 bg-deep-red/10 rounded-full flex items-center justify-center text-deep-red group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-playfair text-xl md:text-2xl text-burgundy mb-4 font-semibold">
                    {promise.title}
                  </h3>
                  <p className="font-dancing text-lg text-deep-red leading-relaxed italic">
                    {promise.content}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-deep-red/30 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;