import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

const ApologySection = () => {
  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-deep-red/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-pink/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-deep-red mb-4">
            <Heart size={24} className="animate-heartbeat" />
            <span className="font-playfair text-xl">Handwritten Letter</span>
          </div>
          <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-4">
            {loveContent.apology.title}
          </h1>
          <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
            {loveContent.apology.intro}
          </p>
        </motion.div>

        <div className="space-y-8">
          {loveContent.apology.sections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-rose-pink/40 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-6 left-6 w-12 h-12 bg-deep-red rounded-full flex items-center justify-center text-white shadow-lg">
                <Heart size={16} />
              </div>
              <div className="relative z-10">
                <h2 className="font-playfair text-2xl md:text-3xl text-burgundy mb-4">
                  {section.title}
                </h2>
                <p className="font-dancing text-xl text-deep-red leading-relaxed italic">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApologySection;