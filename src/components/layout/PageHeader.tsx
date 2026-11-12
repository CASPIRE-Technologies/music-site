'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  align = 'center',
}: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,108,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div
          className={`flex flex-col ${
            align === 'center' ? 'items-center text-center' : 'items-start text-left'
          }`}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-3 inline-block"
          >
            {t(badge)}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.08em] uppercase text-white mb-4"
          >
            {t(title)}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-zinc-400 text-sm md:text-base max-w-2xl font-light leading-relaxed"
            >
              {t(subtitle)}
            </motion.p>
          )}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A86C]/60 to-transparent mt-8"
          />
        </div>
      </div>
    </div>
  );
}
