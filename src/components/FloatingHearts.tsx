import React from 'react';
import { motion } from 'framer-motion';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 15 }) => {
  const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '🎀', '🌸'];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 10;
        const randomDuration = 4 + Math.random() * 6;
        const randomSize = 12 + Math.random() * 24;
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];

        return (
          <motion.div
            key={i}
            className="text-rose-pink"
            style={{
              left: `${randomLeft}%`,
              top: '100%',
              fontSize: `${randomSize}px`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -100 - randomSize,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              delay: randomDelay,
              duration: randomDuration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {randomHeart}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;