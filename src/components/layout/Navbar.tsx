'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, Menu, X, Music2 } from 'lucide-react';
import { useMusicPlayer } from '@/context/MusicPlayerContext';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'MUSIC', href: '/music' },
  { name: 'VIDEOS', href: '/videos' },
  { name: 'EVENTS', href: '/events' },
  { name: 'ABOUT', href: '/about' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currentTrack, isPlaying, togglePlay, openDrawer } = useMusicPlayer();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          scrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Artist Name */}
          <button
            onClick={toggleLanguage}
            aria-label="Change language"
            className="hidden lg:inline-flex self-center relative -left-4 items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-[10px] font-semibold tracking-[0.18em] text-zinc-300 hover:border-[#C9A86C] hover:text-[#C9A86C] transition-colors"
          >
            <span className={language === 'en' ? 'text-[#C9A86C]' : ''}>EN</span>
            <span className="text-zinc-600">/</span>
            <span className={language === 'es' ? 'text-[#C9A86C]' : ''}>ES</span>
          </button>

          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-white group-hover:text-[#DFC28D] transition-colors duration-300">
              CRISTINA CASADO
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#C9A86C] font-sans -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Official Site
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 py-1',
                    isActive
                      ? 'text-[#C9A86C]'
                      : 'text-zinc-300 hover:text-white'
                  )}
                >
                  {t(item.name)}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A86C]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action: LISTEN NOW & Mini Status */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => {
                if (isPlaying) {
                  openDrawer();
                } else {
                  togglePlay();
                  openDrawer();
                }
              }}
              className="group relative left-4 self-center shrink-0 whitespace-nowrap flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-[#C9A86C]/40 bg-[#121212]/80 hover:bg-[#C9A86C] text-white hover:text-black transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-[#C9A86C]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex h-2 w-2">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A86C] opacity-75 group-hover:bg-black" />
                )}
                <span
                  className={cn(
                    'relative inline-flex rounded-full h-2 w-2',
                    isPlaying ? 'bg-[#C9A86C] group-hover:bg-black' : 'bg-zinc-500'
                  )}
                />
              </span>

              <span className="text-xs uppercase tracking-[0.18em] font-semibold">
                {isPlaying ? t('NOW PLAYING') : t('LISTEN NOW')}
              </span>

              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Listen Icon + Hamburger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => {
                togglePlay();
                openDrawer();
              }}
              aria-label="Toggle music player"
              className="p-2 rounded-full border border-white/10 bg-white/5 text-[#C9A86C] hover:bg-white/10"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-white hover:text-[#C9A86C] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between px-8 pt-28 pb-12 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86C] font-mono">
                {t('Navigation Menu')}
              </span>
              {navLinks.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-2xl font-serif tracking-[0.18em] uppercase transition-colors block py-1',
                        isActive
                          ? 'text-[#C9A86C] font-medium'
                          : 'text-zinc-300 hover:text-white'
                      )}
                    >
                      {t(item.name)}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  togglePlay();
                  openDrawer();
                }}
                className="w-full flex items-center justify-center space-x-3 py-3.5 rounded-full bg-[#C9A86C] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg"
              >
                <Music2 className="w-4 h-4" />
                <span>{isPlaying ? t('OPEN AUDIO DRAWER') : t('PLAY LATEST SINGLE')}</span>
              </button>

              <div className="flex justify-center space-x-6 pt-2 text-zinc-400 text-xs tracking-wider">
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9A86C]"
                >
                  SPOTIFY
                </a>
                <span>•</span>
                <a
                  href="https://music.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9A86C]"
                >
                  APPLE MUSIC
                </a>
                <span>•</span>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9A86C]"
                >
                  YOUTUBE
                </a>
              </div>

              <button
                onClick={toggleLanguage}
                className="self-center rounded-full border border-white/15 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-zinc-300"
              >
                {language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
