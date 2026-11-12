'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Info,
  X,
  Compass,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { tourEventsData, pastEventsData } from '@/data/artistData';
import { TourEvent } from '@/types/artist';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'UPCOMING' | 'PAST'>('UPCOMING');
  const [selectedEvent, setSelectedEvent] = useState<TourEvent | null>(null);

  const displayedEvents =
    activeTab === 'UPCOMING' ? tourEventsData : pastEventsData;

  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Live Performances & Tour"
        title="CONCERTS & SHOWS"
        subtitle="Experience Cristina Casado live in concert. Featuring acoustic intimacies, live band arrangements, and heartfelt bilingual vocal performances."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        {/* Upcoming vs Past Tabs */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <button
            onClick={() => setActiveTab('UPCOMING')}
            className={`px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all ${
              activeTab === 'UPCOMING'
                ? 'bg-[#C9A86C] text-black font-semibold shadow-lg shadow-[#C9A86C]/20'
                : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            UPCOMING SHOWS ({tourEventsData.length})
          </button>
          <button
            onClick={() => setActiveTab('PAST')}
            className={`px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all ${
              activeTab === 'PAST'
                ? 'bg-[#C9A86C] text-black font-semibold shadow-lg shadow-[#C9A86C]/20'
                : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            PAST PERFORMANCES
          </button>
        </div>

        {/* Events List */}
        {displayedEvents.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl bg-[#121212] border border-white/10 max-w-md mx-auto">
            <Compass className="w-12 h-12 text-[#C9A86C] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white font-light">
              No Current Dates Scheduled
            </h3>
            <p className="text-xs text-zinc-400 mt-2">
              Subscribe to the official newsletter to receive instantaneous alerts when new tour cities are added.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {displayedEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="group p-6 md:p-8 rounded-3xl bg-[#121212]/70 border border-white/10 hover:border-[#C9A86C]/40 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Event Poster Thumbnail */}
                {event.eventPhoto && (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-[#C9A86C]/40 transition-colors">
                    <Image
                      src={event.eventPhoto}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Date Block */}
                <div className="lg:w-44 shrink-0 flex items-center lg:block space-x-4 lg:space-x-0">
                  <div className="text-2xl sm:text-3xl font-serif font-light text-white group-hover:text-[#DFC28D] transition-colors">
                    {event.displayDate}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                    {event.time}
                  </div>
                </div>

                {/* Event Name & Venue */}
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono block mb-1">
                    {event.tourName}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-400 mt-2">
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A86C]" />
                      <span>
                        {event.venue} &bull; {event.city}, {event.country}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center space-x-4 shrink-0 pt-2 lg:pt-0">
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-mono px-3.5 py-1.5 rounded-full border ${
                      event.status === 'SOLD OUT'
                        ? 'border-red-500/40 text-red-400 bg-red-950/20'
                        : event.status === 'PAST'
                        ? 'border-zinc-700 text-zinc-400 bg-zinc-900/40'
                        : 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
                    }`}
                  >
                    {event.status}
                  </span>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-[#C9A86C] hover:text-black text-white transition-all text-xs uppercase tracking-[0.18em] font-semibold"
                  >
                    EVENT DETAILS
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Official Event Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center text-xs text-zinc-400 font-mono">
          <p>
            OFFICIAL NOTICE: Live dates, showcases, and private listening sessions are managed by Cristina Casado’s team. Click &ldquo;EVENT DETAILS&rdquo; on any date for official registration and RSVP links.
          </p>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedEvent.eventPhoto && (
                <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src={selectedEvent.eventPhoto}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              )}

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono">
                {selectedEvent.tourName}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1 mb-3">
                {selectedEvent.title}
              </h3>

              <div className="space-y-3 py-4 border-t border-b border-white/10 my-4 text-xs text-zinc-300">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-[#C9A86C]" />
                  <span>
                    {selectedEvent.displayDate} &bull; {selectedEvent.time}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#C9A86C]" />
                  <span>
                    {selectedEvent.venue}, {selectedEvent.city}, {selectedEvent.country}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-[#C9A86C]" />
                  <span>Doors Open 1.5 Hours Prior to Performance</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedEvent.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-full border border-white/20 hover:border-white text-white text-xs uppercase tracking-wider transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Venue Map</span>
                </a>

                {selectedEvent.infoUrl && (
                  <a
                    href={selectedEvent.infoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-full bg-[#C9A86C] hover:bg-[#DFC28D] text-black font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Event Info</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
