import { useEffect, useRef, useState, type RefObject } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Heart, Loader2, Maximize, Minimize, Pause, Play,
  RefreshCw, Volume2, VolumeX, ArrowRight,
} from 'lucide-react';
import { loveContent } from '@/data/loveContent';

interface VideoScreenProps {
  onClose: () => void;
  isVisible: boolean;
  videoRef: RefObject<HTMLVideoElement>;
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${minutes}:${String(remaining).padStart(2, '0')}`;
};

const getVideoType = (src: string) => {
  const extension = src.split('.').pop()?.split('?')[0]?.toLowerCase();
  if (extension === 'webm') return 'video/webm';
  if (extension === 'mov') return 'video/quicktime';
  return 'video/mp4';
};

const VideoScreen = ({ onClose, isVisible, videoRef }: VideoScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [ended, setEnded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const src = loveContent.video.src;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => setCurrentTime(video.currentTime);
    const onMetadata = () => {
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
      setIsLoading(false);
    };
    const onCanPlay = () => setIsLoading(false);
    const onWaiting = () => setIsLoading(true);
    const onPlay = () => { setIsPlaying(true); setEnded(false); setHasError(false); };
    const onPause = () => setIsPlaying(false);
    const onEnded = () => { setIsPlaying(false); setEnded(true); };
    const onError = () => { setIsLoading(false); setHasError(true); setIsPlaying(false); };

    video.addEventListener('timeupdate', onTime);
    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('durationchange', onMetadata);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);

    const onFullscreen = () => setIsFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener('fullscreenchange', onFullscreen);

    return () => {
      video.pause();
      document.removeEventListener('fullscreenchange', onFullscreen);
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('durationchange', onMetadata);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = isMuted;
    video.loop = loveContent.video.loop;
  }, [volume, isMuted, videoRef]);

  useEffect(() => {
    if (!isVisible) {
      videoRef.current?.pause();
    }
  }, [isVisible, videoRef]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) { video.pause(); return; }
    try { video.muted = isMuted; await video.play(); setHasError(false); }
    catch { setHasError(true); }
  };

  const replay = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setEnded(false);
    try { await video.play(); setHasError(false); }
    catch { setHasError(true); }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await container.requestFullscreen();
    } catch { /* Fullscreen is not available in every mobile browser. */ }
  };

  const seek = (value: string) => {
    const video = videoRef.current;
    if (video && duration) video.currentTime = (Number(value) / 100) * duration;
  };

  const back = () => {
    videoRef.current?.pause();
    onClose();
  };

  return (
    <main
      ref={containerRef}
      aria-hidden={!isVisible}
      className={`video-screen fixed inset-0 z-[70] min-h-[100svh] overflow-y-auto bg-gradient-to-br from-burgundy via-deep-red to-cherry-red px-3 py-4 sm:px-5 sm:py-6 md:px-8 ${isVisible ? 'video-screen-visible' : 'video-screen-hidden'}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Heart className="absolute left-5 top-10 text-rose-pink/25 sm:left-10" size={34} />
        <Heart className="absolute right-5 top-20 text-baby-pink/25 sm:right-10" size={28} />
        <Heart className="absolute bottom-10 left-8 text-rose-pink/25" size={30} />
        <Heart className="absolute bottom-16 right-8 text-baby-pink/25" size={24} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center">
        <button
          type="button"
          onClick={back}
          className="mb-4 inline-flex min-h-11 w-fit items-center gap-2 self-start rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20 sm:mb-6"
        >
          <ArrowLeft size={17} /> Back to our little world
        </button>

        <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-center sm:mb-6">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-baby-pink/80 sm:text-xs">A little surprise, made for you</p>
          <h1 className="mb-2 font-greatvibes text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {loveContent.video.title}
          </h1>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-baby-pink/90 sm:text-sm md:text-base">
            {loveContent.video.subtitle}
          </p>
        </motion.header>

        <section className="rounded-2xl border border-white/25 bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:rounded-[2rem] sm:p-3 md:p-4">
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl bg-black sm:rounded-2xl">
              <video
                ref={videoRef}
                className="h-full w-full object-contain"
                preload="auto"
                playsInline
                loop={loveContent.video.loop}
                onClick={togglePlay}
              >
                <source src={src} type={getVideoType(src)} />
                Your browser does not support HTML5 video.
              </video>

              {hasError && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/85 px-4 text-center text-white">
                  <Heart size={38} className="mb-3 text-rose-pink" />
                  <h2 className="mb-2 font-playfair text-lg sm:text-2xl">Your video needs a little attention</h2>
                  <p className="max-w-lg text-xs leading-relaxed text-white/85 sm:text-sm">
                    Check that the video exists in <code>public/media/videos/</code> and the filename in <code>src/data/loveContent.ts</code> matches exactly.
                  </p>
                  <p className="mt-2 break-all text-[10px] text-white/60 sm:text-xs">{src}</p>
                  <button type="button" onClick={() => { setHasError(false); setIsLoading(true); videoRef.current?.load(); }} className="heart-button mt-4 min-h-11">Try Again</button>
                </div>
              )}

              {isLoading && !hasError && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
                  <Loader2 className="h-9 w-9 animate-spin text-white sm:h-10 sm:w-10" />
                </div>
              )}

              {!isLoading && !isPlaying && !ended && (
                <button type="button" onClick={togglePlay} aria-label="Play video with sound" className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-deep-red shadow-2xl transition hover:scale-110 sm:h-20 sm:w-20">
                    <Play size={30} fill="currentColor" />
                  </span>
                </button>
              )}

              {ended && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/65 px-4 text-center sm:gap-4">
                  <Heart size={38} className="animate-heartbeat text-baby-pink sm:h-11 sm:w-11" fill="currentColor" />
                  <p className="font-playfair text-lg text-white sm:text-2xl">That little surprise was just for you, Baby ❤️</p>
                  <button type="button" onClick={onClose} className="heart-button inline-flex min-h-12 items-center gap-2 text-sm sm:text-base">
                    Continue to My Little World <ArrowRight size={17} />
                  </button>
                  <button type="button" onClick={replay} className="inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-xs text-white/90 underline underline-offset-4 sm:text-sm">
                    <RefreshCw size={14} /> Watch again
                  </button>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-2 pb-2 pt-5 sm:px-4 sm:pb-4 sm:pt-7">
                <input
                  aria-label="Video progress"
                  type="range" min="0" max="100" step="0.1"
                  value={duration ? (currentTime / duration) * 100 : 0}
                  onChange={(event) => seek(event.target.value)}
                  className="mb-2 h-2 w-full cursor-pointer accent-rose-pink sm:mb-3"
                />
                <div className="flex min-h-8 items-center gap-2 text-white sm:gap-3">
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-white/15" type="button" onClick={togglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                    {isPlaying ? <Pause size={19} /> : <Play size={19} />}
                  </button>
                  <span className="whitespace-nowrap text-[10px] tabular-nums sm:text-xs">{formatTime(currentTime)} / {formatTime(duration)}</span>
                  <div className="flex-1" />
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-white/15" type="button" onClick={() => { const next = !isMuted; setIsMuted(next); if (videoRef.current) videoRef.current.muted = next; }} aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
                    {isMuted || volume === 0 ? <VolumeX size={19} /> : <Volume2 size={19} />}
                  </button>
                  <input
                    aria-label="Volume" type="range" min="0" max="1" step="0.05" value={volume}
                    onChange={(event) => { const next = Number(event.target.value); setVolume(next); setIsMuted(next === 0); if (videoRef.current) { videoRef.current.volume = next; videoRef.current.muted = next === 0; } }}
                    className="hidden w-20 cursor-pointer accent-rose-pink sm:block"
                  />
                  <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-white/15" type="button" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
                    {isFullscreen ? <Minimize size={19} /> : <Maximize size={19} />}
                  </button>
                </div>
              </div>
          </div>
        </section>
        <p className="mt-3 text-center text-[10px] text-white/65 sm:mt-4 sm:text-xs">Your video and its original sound play together. ❤️</p>
      </div>
    </main>
  );
};

export default VideoScreen;
