import { useRef, useState } from 'react';
import Envelope from './components/Envelope';
import Dashboard from './components/Dashboard';
import VideoScreen from './components/VideoScreen';
import ApologySection from './components/ApologySection';
import MemoryGallery from './components/MemoryGallery';
import LoveReasons from './components/LoveReasons';
import MistakesSection from './components/MistakesSection';
import SurpriseSection from './components/SurpriseSection';
import PromiseSection from './components/PromiseSection';
import FinalLetter from './components/FinalLetter';
import FloatingHearts from './components/FloatingHearts';

type Section =
  | 'envelope' | 'dashboard' | 'video' | 'apology' | 'memories'
  | 'love-reasons' | 'mistakes' | 'surprise' | 'promises'
  | 'final-letter' | 'home';

const App = () => {
  const [view, setView] = useState<Section>('envelope');
  const videoRef = useRef<HTMLVideoElement>(null);

  // The video element is mounted from the start. Calling play() here, directly
  // inside the envelope click gesture, preserves the browser's user activation
  // so mobile Safari/Chrome can start the original video audio with the video.
  const openVideoFromFirstButton = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 0.85;
      const playback = video.play();
      if (playback && typeof playback.catch === 'function') {
        playback.catch(() => {
          // VideoScreen displays its visible play affordance if autoplay is blocked.
        });
      }
    }
    setView('video');
  };

  const goToDashboard = () => {
    videoRef.current?.pause();
    setView('dashboard');
  };

  return (
    <div className="min-h-screen font-poppins">
      {view !== 'video' && <FloatingHearts count={12} />}

      {view === 'envelope' && <Envelope onOpen={openVideoFromFirstButton} />}

      {view === 'dashboard' && (
        <Dashboard
          onSectionSelect={(section) => setView(section as Section)}
          onVideoClick={() => setView('video')}
        />
      )}

      {/* Keep mounted while hidden: the first envelope tap must invoke play()
          on this exact video element during the user's click gesture. */}
      <VideoScreen
        videoRef={videoRef}
        isVisible={view === 'video'}
        onClose={goToDashboard}
      />

      {view !== 'dashboard' && view !== 'envelope' && view !== 'video' && (
        <div className="relative min-h-screen">
          <button
            type="button"
            onClick={goToDashboard}
            className="section-back-button fixed top-4 left-4 z-40 rounded-full border border-rose-pink/40 bg-white/90 px-4 py-2 text-sm font-medium text-burgundy shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
          >
            ← Back to our little world
          </button>

          <div className="pt-16">
            {view === 'apology' && <ApologySection />}
            {view === 'memories' && <MemoryGallery />}
            {view === 'love-reasons' && <LoveReasons />}
            {view === 'mistakes' && <MistakesSection />}
            {view === 'surprise' && <SurpriseSection />}
            {view === 'promises' && <PromiseSection />}
            {view === 'final-letter' && <FinalLetter />}
            {view === 'home' && (
              <div className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center">
                  <h1 className="font-greatvibes text-5xl md:text-7xl text-burgundy mb-4">
                    Welcome to my little world, Baby ❤️
                  </h1>
                  <p className="font-poppins text-lg text-deep-red max-w-md mx-auto leading-relaxed">
                    Every little part of this place was made with you in mind.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
