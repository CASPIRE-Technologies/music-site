'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { artistProfile } from '@/data/artistData';

const inquiryTypes = [
  'Concert Booking',
  'Private Event',
  'Corporate Event',
  'Media Inquiry',
  'Collaboration',
  'General Inquiry',
] as const;

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  inquiryType: z.enum(inquiryTypes, {
    errorMap: () => ({ message: 'Please select an inquiry type' }),
  }),
  eventDate: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: 'Concert Booking',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      console.log('Inquiry submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#080808] pb-28">
      <PageHeader
        badge="Artist Representation & Inquiries"
        title="LET'S CREATE SOMETHING TOGETHER"
        subtitle="For concert bookings, live showcases, press representation, collaborations, and inquiries, please reach out to artist management below."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Management Directory & Representation */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86C] font-mono mb-2 block">
                Direct Representation
              </span>
              <h3 className="font-serif text-3xl font-light text-white uppercase tracking-wide">
                MANAGEMENT DIRECTORY
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                All booking and press inquiries are reviewed directly by Cristina Casado’s team in Miami and the Dominican Republic.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A86C]/10 border border-[#C9A86C]/30 flex items-center justify-center text-[#C9A86C] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block">
                    GENERAL MANAGEMENT & BOOKING
                  </span>
                  <a
                    href={`mailto:${artistProfile.management.generalEmail}`}
                    className="text-white hover:text-[#C9A86C] text-sm font-medium transition-colors"
                  >
                    {artistProfile.management.generalEmail}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A86C]/10 border border-[#C9A86C]/30 flex items-center justify-center text-[#C9A86C] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block">
                    BASE LOCATIONS
                  </span>
                  <span className="text-zinc-300 text-xs font-light">
                    {artistProfile.management.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-[#121212]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-16 flex flex-col items-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#C9A86C] mb-4" />
                    <h3 className="font-serif text-3xl font-light text-white mb-2">
                      Inquiry Dispatched
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed mb-8">
                      Thank you for reaching out. Management has received your booking inquiry and will respond within 48 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-[#C9A86C] text-black text-xs uppercase tracking-widest font-semibold hover:bg-[#DFC28D] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-mono mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          placeholder="e.g. Sofia Rodriguez"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#C9A86C] transition-colors"
                        />
                        {errors.fullName && (
                          <span className="text-[10px] text-red-400 font-mono mt-1 block">
                            {errors.fullName.message}
                          </span>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-mono mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="sofia@agency.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#C9A86C] transition-colors"
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-400 font-mono mt-1 block">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-mono mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#C9A86C] transition-colors"
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-400 font-mono mt-1 block">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-mono mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          {...register('inquiryType')}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0e0e0e] border border-white/15 text-white text-xs focus:outline-none focus:border-[#C9A86C] transition-colors"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#121212]">
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.inquiryType && (
                          <span className="text-[10px] text-red-400 font-mono mt-1 block">
                            {errors.inquiryType.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Event Date (Optional) */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-mono mb-2">
                        Event Date (Optional)
                      </label>
                      <input
                        type="date"
                        {...register('eventDate')}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-[#C9A86C] transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-zinc-400 font-mono mb-2">
                        Message & Details *
                      </label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Provide details regarding the proposed venue, expected audience, dates, or collaboration scope..."
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#C9A86C] transition-colors resize-none"
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-400 font-mono mt-1 block">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#C9A86C] hover:bg-[#DFC28D] text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-[#C9A86C]/20 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting
                          ? 'TRANSMITTING INQUIRY...'
                          : 'SUBMIT OFFICIAL INQUIRY'}
                      </span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
