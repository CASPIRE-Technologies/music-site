'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Track, MusicVideo } from '@/types/artist';
import { latestRelease } from '@/data/artistData';

interface PlayerTrackState {
  title: string;
  albumTitle: string;
  coverImage: string;
  duration: string;
  audioUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
}

interface MusicPlayerContextType {
  currentTrack: PlayerTrackState | null;
  isPlaying: boolean;
  currentTime: number;
  durationSeconds: number;
  isDrawerOpen: boolean;
  activeVideo: MusicVideo | null;
  playTrack: (track: Partial<Track> & { title: string; albumTitle?: string; coverImage?: string }) => void;
  togglePlay: () => void;
  seekTo: (seconds: number) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  openVideoModal: (video: MusicVideo) => void;
  closeVideoModal: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<PlayerTrackState | null>({
    title: latestRelease.songTitle,
    albumTitle: latestRelease.albumTitle,
    coverImage: latestRelease.coverImage,
    duration: latestRelease.duration,
    audioUrl: latestRelease.previewAudioUrl,
    spotifyUrl: latestRelease.spotifyUrl,
    appleMusicUrl: latestRelease.appleMusicUrl,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<MusicVideo | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio();
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
      audioRef.current.onloadedmetadata = () => {
        setDurationSeconds(audioRef.current?.duration || 0);
      };
      audioRef.current.onended = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playTrack = (track: Partial<Track> & { title: string; albumTitle?: string; coverImage?: string }) => {
    const trackPayload: PlayerTrackState = {
      title: track.title,
      albumTitle: track.albumTitle || 'Chronicles of Dusk',
      coverImage: track.coverImage || latestRelease.coverImage,
      duration: track.duration || '3:45',
      audioUrl: track.previewAudioUrl || latestRelease.previewAudioUrl,
      spotifyUrl: track.spotifyUrl || latestRelease.spotifyUrl,
      appleMusicUrl: track.appleMusicUrl || latestRelease.appleMusicUrl,
    };

    setCurrentTrack(trackPayload);
    setIsDrawerOpen(true);
    setCurrentTime(0);
    setDurationSeconds(track.durationSeconds || 0);

    if (audioRef.current && trackPayload.audioUrl) {
      audioRef.current.src = trackPayload.audioUrl;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Auto-play restrictions fallback
          setIsPlaying(true);
        });
    } else {
      setIsPlaying(true);
    }
  };

  const seekTo = (seconds: number) => {
    if (!audioRef.current || !currentTrack?.audioUrl) return;

    if (!audioRef.current.src) {
      audioRef.current.src = currentTrack.audioUrl;
    }

    const nextTime = Math.max(
      0,
      Math.min(seconds, audioRef.current.duration || durationSeconds || seconds)
    );
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(true));
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current.src && currentTrack?.audioUrl) {
        audioRef.current.src = currentTrack.audioUrl;
      }
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(true));
    }
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openVideoModal = (video: MusicVideo) => {
    // If music is playing, pause when video is opened
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setActiveVideo(video);
  };

  const closeVideoModal = () => setActiveVideo(null);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        durationSeconds,
        isDrawerOpen,
        activeVideo,
        playTrack,
        togglePlay,
        seekTo,
        openDrawer,
        closeDrawer,
        openVideoModal,
        closeVideoModal,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
}
