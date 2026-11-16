import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Video, Link, MessageSquare, Image as ImageIcon, Sparkles, Gift, BookHeart, ArrowUpRight } from 'lucide-react';
import { loveContent } from '@/data/loveContent';

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  onClick: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, subtitle, color, onClick }) => (
  <motion.button
    type="button"
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="glass-card group relative flex min-h-40 w-full flex-col items-center justify-center overflow-hidden p-5 text-center shadow-lg transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-cherry-red sm:min-h-48 sm:p-6 md:p-7"
  >
    <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-bl-full bg-deep-red/10 sm:h-24 sm:w-24" />
    <div className={`relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14 ${color}`}>
      {icon}
    </div>
    <h3 className="relative z-10 mb-1 font-playfair text-base font-semibold leading-snug text-burgundy sm:text-lg">{title}</h3>
    <p className="relative z-10 max-w-xs text-xs leading-relaxed text-deep-red/90 sm:text-sm">{subtitle}</p>
    <ArrowUpRight className="absolute right-3 top-3 text-deep-red/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
  </motion.button>
);

interface DashboardProps {
  onSectionSelect: (section: string) => void;
  onVideoClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSectionSelect, onVideoClick }) => {
  const sections = [
    { id: 'home', title: 'Home', subtitle: 'Welcome back to your world', icon: <Heart size={23} />, color: 'bg-deep-red' },
    { id: 'apology', title: loveContent.apology.title, subtitle: 'My heartfelt apology to you', icon: <MessageSquare size={23} />, color: 'bg-cherry-red' },
    { id: 'memories', title: loveContent.memories.title, subtitle: 'Our precious moments together', icon: <ImageIcon size={23} />, color: 'bg-rose-pink' },
    { id: 'love-reasons', title: 'A Million Reasons Why I Love You', subtitle: 'Every little thing about you', icon: <Sparkles size={23} />, color: 'bg-baby-pink' },
    { id: 'mistakes', title: 'Things I Wish I Did Better', subtitle: 'What I understand and want to change', icon: <BookHeart size={23} />, color: 'bg-burgundy' },
    { id: 'surprise', title: loveContent.surprises.title, subtitle: 'Hidden surprises for you', icon: <Gift size={23} />, color: 'bg-deep-red' },
    { id: 'video', title: 'Our Video ❤️', subtitle: 'A special video just for you', icon: <Video size={23} />, color: 'bg-cherry-red', onVideo: true },
    { id: 'promises', title: 'My Promises to You', subtitle: 'Commitments I want to keep', icon: <Link size={23} />, color: 'bg-rose-pink' },
    { id: 'final-letter', title: 'Final Love Letter', subtitle: 'My deepest feelings for you', icon: <Heart size={23} />, color: 'bg-burgundy' },
  ];

  return (
    <main className="relative min-h-[100svh] overflow-hidden px-3 py-8 sm:px-5 sm:py-10 md:px-8 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-blush via-baby-pink to-rose-pink/30" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="absolute text-deep-red/15" style={{ left: `${12 + i * 17}%`, top: `${8 + i * 15}%`, fontSize: `${28 + i * 7}px`, animation: `float ${6 + i * 2}s ease-in-out infinite`, animationDelay: `${i * 1.2}s` }}>❤️</div>
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-8 px-2 text-center sm:mb-10 md:mb-12">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cherry-red sm:text-xs">A little world made just for you</p>
          <h1 className="mb-2 font-greatvibes text-4xl leading-tight text-burgundy sm:text-5xl md:text-6xl">{loveContent.welcomeMessage}</h1>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-deep-red sm:text-base">Choose where you'd like to go, Baby ❤️</p>
        </motion.header>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-3 xl:grid-cols-3">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              icon={section.icon}
              title={section.title}
              subtitle={section.subtitle}
              color={section.color}
              onClick={section.onVideo ? onVideoClick : () => onSectionSelect(section.id)}
            />
          ))}
        </div>
        <p className="mt-8 text-center font-dancing text-xl text-burgundy/80 sm:text-2xl">Made with all my heart, for my Baby 🎀</p>
      </div>
    </main>
  );
};

export default Dashboard;
