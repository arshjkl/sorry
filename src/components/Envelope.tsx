import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => (
  <main className="envelope-screen min-h-[100svh] flex items-center justify-center bg-soft-blush px-5 py-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="relative w-full max-w-md text-center"
    >
      <div className="relative inline-block mb-2" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-64 h-40 max-[380px]:w-56 max-[380px]:h-36 rounded-xl bg-rose-pink shadow-2xl overflow-hidden border border-white/60"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-baby-pink/70 to-deep-red/15" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-deep-red/10" />
          <div className="absolute left-0 right-0 top-0 h-24 bg-baby-pink/80" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 72%)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-baby-pink bg-deep-red text-white shadow-xl">
              <Heart size={27} fill="currentColor" />
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cherry-red">A little something, made with love</p>
        <h1 className="font-greatvibes text-5xl sm:text-6xl md:text-7xl leading-tight text-burgundy mb-3">
          {loveContent.openingTitle}
        </h1>
        <p className="font-poppins text-base sm:text-lg text-deep-red mb-7 max-w-sm mx-auto leading-relaxed">
          {loveContent.openingSubtitle}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="heart-button min-h-14 w-full max-w-xs justify-center inline-flex items-center gap-3 text-base sm:text-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-rose-pink"
        >
          {loveContent.openButton}
          <ArrowRight size={20} />
        </button>
        <p className="mt-4 text-xs text-burgundy/65">A little surprise is waiting for you, Baby ❤️</p>
      </div>
    </motion.div>
  </main>
);

export default Envelope;
