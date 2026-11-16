import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Heart } from 'lucide-react';
import { loveContent } from '@/data/loveContent';
import { memoryImages } from '@/generated/imageManifest';

const MemoryGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<(typeof memoryImages)[number] | null>(null);

  const categoryLabels: Record<string, string> = {
    all: 'All Memories',
    her: 'Her ✨',
    me: 'Me 🤍',
    special: 'Little Moments 💌',
    us: 'Us ❤️',
    memories: 'Memories',
  };
  const categories = useMemo(
    () => ['all', ...Array.from(new Set(memoryImages.map((image) => image.category)))],
    [],
  );

  const filteredImages = selectedCategory === 'all'
    ? memoryImages
    : memoryImages.filter((image) => image.category === selectedCategory);

  return (
    <section className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-greatvibes text-4xl md:text-6xl text-burgundy mb-4">
            {loveContent.memories.title}
          </h1>
          <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
            {loveContent.memories.subtitle}
          </p>
        </motion.header>

        {memoryImages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-deep-red text-white shadow-lg'
                    : 'bg-white/70 text-deep-red border border-rose-pink/40 hover:bg-deep-red hover:text-white'
                }`}
              >
                {categoryLabels[category] ?? category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}

        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredImages.map((image, index) => (
              <motion.button
                type="button"
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.3) }}
                whileHover={{ y: -7, rotate: 0 }}
                onClick={() => setLightboxImage(image)}
                className="polaroid-frame text-left"
              >
                <img
                  src={image.src}
                  alt={image.caption || 'A special memory'}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg sm:h-72"
                />
                <p className="font-dancing text-lg text-deep-red mt-3 text-center">
                  {image.caption || 'A little memory ❤️'}
                </p>
                <Heart size={17} className="text-cherry-red mx-auto mt-1" />
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-6 rounded-3xl bg-white/55 border border-rose-pink/30">
            <ImageIcon size={58} className="mx-auto text-rose-pink mb-5" />
            <h2 className="font-playfair text-2xl text-burgundy mb-3">Our memories are waiting here ❤️</h2>
            <p className="font-poppins text-deep-red max-w-lg mx-auto leading-relaxed">
              Add your pictures to <code>public/images/her/</code>, <code>public/images/us/</code>,
              <code> public/images/memories/</code>, or <code>public/images/special/</code>.
              Restart the dev server if it is already running.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] text-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close photo"
                onClick={() => setLightboxImage(null)}
                className="absolute -top-3 -right-3 z-10 rounded-full bg-white p-2 text-burgundy shadow-lg"
              >
                <X size={22} />
              </button>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption || 'A special memory'}
                className="max-w-full max-h-[78vh] object-contain rounded-xl border-4 border-white/40 shadow-2xl"
              />
              <p className="font-dancing text-2xl text-white mt-4">
                {lightboxImage.caption || 'A little memory ❤️'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
