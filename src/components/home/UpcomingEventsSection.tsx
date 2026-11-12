'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  MapPin,
  ExternalLink,
  ArrowRight,
  Clock,
  X,
  Info,
} from 'lucide-react';
import { tourEventsData } from '@/data/artistData';
import { TourEvent } from '@/types/artist';

export default function UpcomingEventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<TourEvent | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 37,
    hours: 14,
    minutes: 22,
    seconds: 45,
  });

  const nextEvent = tourEventsData[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 md:py-36 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Live Performances</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.08em] uppercase text-white">
              UPCOMING SHOWS & DATES
            </h2>
          </div>

          <Link
            href="/events"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C9A86C] hover:text-[#DFC28D] mt-4 md:mt-0 font-medium"
          >
            <span>VIEW ALL DATES & CITIES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Live Countdown to Next Event */}
        <div className="mb-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-white/5 via-[#C9A86C]/10 to-white/5 border border-[#C9A86C]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86C] font-mono block">
              NEXT UPCOMING HEADLINE SHOW
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-light text-white mt-1">
              {nextEvent.title} &bull; {nextEvent.city}, {nextEvent.country}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {nextEvent.venue} ({nextEvent.displayDate})
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {[
              { label: 'DAYS', val: timeLeft.days },
              { label: 'HOURS', val: timeLeft.hours },
              { label: 'MINUTES', val: timeLeft.minutes },
              { label: 'SECONDS', val: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/60 border border-white/10"
              >
                <span className="text-xl sm:text-2xl font-mono font-light text-[#C9A86C]">
                  {unit.val.toString().padStart(2, '0')}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-zinc-400 font-mono">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tour Dates Table / List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {tourEventsData.slice(0, 5).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group py-6 md:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-colors"
            >
              {/* Date */}
              <div className="w-48 shrink-0">
                <span className="font-serif text-xl md:text-2xl font-light text-white group-hover:text-[#DFC28D] transition-colors">
                  {event.displayDate}
                </span>
                <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
                  {event.time}
                </span>
              </div>

              {/* City & Venue */}
              <div className="flex-1">
                <h4 className="font-serif text-lg md:text-xl font-light text-white tracking-wide">
                  {event.title}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-zinc-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A86C]" />
                  <span>
                    {event.venue} &bull; {event.city}, {event.country}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0">
                <span
                  className={`text-[10px] uppercase tracking-[0.2em] font-mono px-3 py-1 rounded-full border ${
                    event.status === 'SOLD OUT'
                      ? 'border-red-500/40 text-red-400 bg-red-950/20'
                      : 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
                  }`}
                >
                  {event.status}
                </span>
              </div>

              {/* Details Action */}
              <div className="shrink-0 flex items-center space-x-3 pt-2 lg:pt-0">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="px-5 py-2.5 rounded-full border border-white/20 hover:border-[#C9A86C] bg-white/5 hover:bg-[#C9A86C] text-white hover:text-black transition-all text-xs uppercase tracking-[0.15em] font-medium"
                >
                  VIEW DETAILS
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Official Information Note */}
        <p className="text-[11px] text-zinc-400 font-mono mt-6 flex items-center space-x-2">
          <Info className="w-3.5 h-3.5 text-[#C9A86C]" />
          <span>
            Official Notice: Showcases, listening sessions, and live dates are presented by Cristina Casado’s team. Click &ldquo;VIEW DETAILS&rdquo; on any date for official registration and RSVP information.
          </span>
        </p>
      </div>

      {/* Event Details Modal */}
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
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1 mb-2">
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
                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-full bg-[#C9A86C] hover:bg-[#DFC28D] text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
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
    </section>
  );
}
