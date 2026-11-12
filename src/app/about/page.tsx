'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Sparkles,
  Milestone,
  Quote,
  Music2,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import {
  artistProfile,
  careerMilestones,
  pressCritiquesData,
  notableCollaborators,
  originalSongsCatalog,
  blogPostsData,
} from '@/data/artistData';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Biography & Artistry"
        title="ABOUT CRISTINA CASADO"
        subtitle="A journey of authentic storytelling, multi-instrumental artistry, and the vibrant fusion of Anglo-Saxon and young Dominican pop."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 space-y-28">
        {/* Section 1 & 2: Cinematic Intro & Full Biography */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={artistProfile.profilePortrait}
                alt={artistProfile.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            {/* Professional Statement Quote card */}
            <div className="mt-6 p-6 rounded-2xl bg-[#141414] border border-white/10">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono mb-2">
                <Quote className="w-4 h-4 text-[#C9A86C]" />
                <span>{t('Professional Statement')}</span>
              </div>
              <p className="font-serif italic text-sm text-zinc-300 leading-relaxed">
                &ldquo;{artistProfile.quote}&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A86C] font-mono mt-3 block">
                — {artistProfile.quoteAuthor}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Behind the Music')}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
              {t('DISCOVERING THE SOUND THAT RESONATES')}
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              {artistProfile.bioFull.map((p, idx) => (
                <p key={idx}>{t(p)}</p>
              ))}
            </div>

            {/* Quick Fact sheet */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  {t('GENRES')}
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  {t('Pop & Latin Pop')}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  {t('BASES')}
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  {t('Punta Cana & Miami')}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  {t('INSTRUMENTS')}
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  {t('Piano, Guitar, Vocals')}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  {t('MANAGEMENT')}
                </span>
                <span className="text-xs text-white font-medium block mt-1">
                  {t('Independent Artist')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comments & Critiques (Official Press Reviews) */}
        <section className="relative py-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              {t('Respected Insights')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase text-white tracking-wide">
              {t('COMMENTS & CRITIQUES')}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-light leading-relaxed">
              The buzz created by critics and shared by fans shapes her continued development as a music artist.
            </p>
            <div className="w-16 h-0.5 bg-[#C9A86C]/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressCritiquesData.map((critique) => (
              <motion.div
                key={critique.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-[#121212]/80 border border-white/10 hover:border-[#C9A86C]/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono block mb-3">
                    {critique.section}
                  </span>
                  <Quote className="w-6 h-6 text-[#C9A86C]/60 mb-3" />
                  <p className="font-serif italic text-base sm:text-lg text-zinc-200 leading-relaxed">
                    &ldquo;{critique.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-white font-medium tracking-wide block">
                    — {critique.author}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Animated Vertical Career Timeline */}
        <section className="relative py-12">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              {t('Timeline')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase text-white tracking-wide">
              {t('CAREER MILESTONES')}
            </h3>
            <div className="w-16 h-0.5 bg-[#C9A86C]/50 mx-auto mt-4" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2" />

            <div className="space-y-12">
              {careerMilestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-8`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#C9A86C] z-10" />

                    {/* Content Card */}
                    <div className="ml-10 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C9A86C]/40 transition-colors">
                      <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono mb-1">
                        <Milestone className="w-3.5 h-3.5" />
                        <span>
                          {item.year} &bull; {item.tag}
                        </span>
                      </div>
                      <h4 className="font-serif text-xl font-light text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#DFC28D] font-mono mt-0.5 mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Original Songs & Repertoire */}
        <section className="p-8 md:p-12 rounded-3xl bg-[#121212]/70 border border-white/10 backdrop-blur-xl">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              {t('Songwriting Repertoire')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light uppercase text-white tracking-wide">
              {t('ORIGINAL SONGS CATALOG')}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-light">
              From pop ballad confessions to alternative acoustic anthems, here are some of Cristina’s written and performed original tracks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {originalSongsCatalog.map((song, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#C9A86C]/50 transition-all flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <Music2 className="w-4 h-4 text-[#C9A86C] group-hover:scale-110 transition-transform" />
                <span className="text-xs text-white font-medium group-hover:text-[#DFC28D] transition-colors line-clamp-2">
                  {song}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Notable Collaborations */}
        <section className="text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
            Creative Alliances & Team
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light uppercase text-white tracking-wide mb-8">
            COLLABORATORS & MANAGEMENT
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {notableCollaborators.map((collab, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C9A86C]/30 transition-colors text-left"
              >
                <h5 className="font-medium text-white text-base">
                  {collab.name}
                </h5>
                <p className="text-xs text-[#DFC28D] mt-1 font-mono">
                  {collab.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Stories & Newsletter Updates */}
        <section className="relative py-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
              {t('From the Artist Blog')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light uppercase text-white tracking-wide">
              {t('LATEST STORIES & UPDATES')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <div
                key={post.id}
                className="p-8 rounded-3xl bg-[#121212]/80 border border-white/10 hover:border-[#C9A86C]/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86C] font-mono block mb-2">
                    {post.date} &bull; {post.readTime}
                  </span>
                  <h4 className="font-serif text-xl font-light text-white mb-3">
                    {post.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
