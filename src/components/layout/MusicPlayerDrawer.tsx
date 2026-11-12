'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Volume2,
  VolumeX,
  ExternalLink,
  Music,
  Share2,
} from 'lucide-react';
import { useMusicPlayer } from '@/context/MusicPlayerContext';
import { cn } from '@/lib/utils';

export default function MusicPlayerDrawer() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    durationSeconds,
    isDrawerOpen,
    togglePlay,
    seekTo,
    openDrawer,
    closeDrawer,
  } =
    useMusicPlayer();
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (seconds: number) => {
    const safeSeconds = Math.max(0, Math.floor(seconds || 0));
    return `${Math.floor(safeSeconds / 60)}:${String(safeSeconds % 60).padStart(2, '0')}`;
  };

  const progress = useMemo(
    () => (durationSeconds > 0 ? Math.min(100, (currentTime / durationSeconds) * 100) : 0),
    [currentTime, durationSeconds]
  );

  if (!currentTrack) return null;

  return (
    <>
      {/* Floating Mini Bottom Bar (When drawer is closed) */}
      <AnimatePresence>
        {!isDrawerOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 z-40 bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80 flex items-center justify-between"
          >
            <div
              onClick={openDrawer}
              className="flex items-center space-x-3 cursor-pointer overflow-hidden flex-1"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <Image
                  src={currentTrack.coverImage}
                  alt={currentTrack.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col truncate">
                <span className="text-xs font-semibold text-white truncate">
                  {currentTrack.title}
                </span>
                <span className="text-[10px] text-zinc-400 truncate">
                  {currentTrack.albumTitle}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                className="w-10 h-10 rounded-full bg-[#C9A86C] text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>
              <button
                onClick={openDrawer}
                aria-label="Expand player"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Player Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-end justify-center"
            onClick={closeDrawer}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#121212] border-t border-white/15 rounded-t-3xl p-6 md:p-8 shadow-2xl relative"
            >
              {/* Drag / Minimize indicator */}
              <div className="flex justify-center -mt-2 mb-4">
                <button
                  onClick={closeDrawer}
                  className="w-12 h-1.5 bg-zinc-600 rounded-full hover:bg-[#C9A86C] transition-colors"
                  aria-label="Close player drawer"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                  <Music className="w-3.5 h-3.5" />
                  <span>Now Streaming</span>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-1 rounded-full text-zinc-400 hover:text-white"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Center Artwork & Metadata */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
                  <Image
                    src={currentTrack.coverImage}
                    alt={currentTrack.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex flex-col text-center md:text-left flex-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C9A86C] mb-1">
                    {currentTrack.albumTitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">
                    {currentTrack.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-4">
                    Composed & Performed by Cristina Casado • Official Release
                  </p>

                  {/* Streaming links badge row */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
                    {currentTrack.spotifyUrl && (
                      <a
                        href={currentTrack.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-black transition-colors"
                      >
                        <span>Spotify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {currentTrack.appleMusicUrl && (
                      <a
                        href={currentTrack.appleMusicUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] px-3 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:bg-pink-500 hover:text-black transition-colors"
                      >
                        <span>Apple Music</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Scrubber / Progress */}
              <div className="mb-6">
                <div
                  className="w-full h-1.5 bg-zinc-800 rounded-full cursor-pointer relative group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.max(
                      0,
                      Math.min(100, (clickX / rect.width) * 100)
                    );
                    seekTo((newProgress / 100) * durationSeconds);
                  }}
                  role="slider"
                  aria-label="Seek through track"
                  aria-valuemin={0}
                  aria-valuemax={durationSeconds}
                  aria-valuenow={currentTime}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      seekTo(currentTime + (e.key === 'ArrowRight' ? 5 : -5));
                    }
                  }}
                >
                  <div
                    className="h-full bg-[#C9A86C] rounded-full group-hover:bg-[#DFC28D] transition-all relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>
                    {durationSeconds > 0 ? formatTime(durationSeconds) : currentTrack.duration}
                  </span>
                </div>
              </div>

              {/* Main Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-red-400" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>

                <div className="flex items-center space-x-6">
                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-[#C9A86C] text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-[#C9A86C]/20"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: currentTrack.title,
                        text: `Listen to "${currentTrack.title}" by Cristina Casado`,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="p-2 text-zinc-400 hover:text-[#C9A86C] transition-colors"
                  aria-label="Share track"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
