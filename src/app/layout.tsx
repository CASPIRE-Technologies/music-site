import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { MusicPlayerProvider } from '@/context/MusicPlayerContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MusicPlayerDrawer from '@/components/layout/MusicPlayerDrawer';
import VideoModal from '@/components/videos/VideoModal';
import GoogleTranslate from '@/components/layout/GoogleTranslate';
import { artistProfile } from '@/data/artistData';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cristinacasadomusic.com'),
  title: `${artistProfile.name} | Official Website • Reliquia & Oxymoron`,
  description: `${artistProfile.name} - ${artistProfile.tagline}. Official music, videos, upcoming concerts, and biography.`,
  keywords: [
    'Cristina Casado',
    'Cristina Casado Music',
    'Reliquia',
    'Oxymoron',
    'Lilac',
    'Without You',
    'Dominican Pop Artist',
  ],
  authors: [{ name: 'Cristina Casado Music' }],
  openGraph: {
    title: `${artistProfile.name} | The Official Website`,
    description: `${artistProfile.name} - ${artistProfile.tagline}. Stream latest releases and discover tour dates.`,
    url: 'https://cristinacasadomusic.com',
    siteName: 'Cristina Casado Official',
    images: [
      {
        url: artistProfile.heroImage,
        width: 640,
        height: 640,
        alt: `${artistProfile.name} Official Portrait`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${artistProfile.name} | Official Website`,
    description: `${artistProfile.name} - ${artistProfile.tagline}`,
    images: [artistProfile.heroImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#080808] text-white selection:bg-[#C9A86C] selection:text-black">
        <LanguageProvider>
          <MusicPlayerProvider>
            <GoogleTranslate />
            <Preloader />
            <Navbar />
            <div className="flex-1 w-full">{children}</div>
            <Footer />
            <MusicPlayerDrawer />
            <VideoModal />
          </MusicPlayerProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
