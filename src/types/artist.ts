export type MediaType = 'ALBUM' | 'EP' | 'SINGLE';

export interface SocialLinks {
  spotify: string;
  appleMusic: string;
  amazonMusic?: string;
  youtube: string;
  instagram: string;
  tiktok: string;
  twitter?: string;
  facebook?: string;
  threads?: string;
}

export interface ManagementContact {
  generalEmail: string;
  bookingEmail: string;
  pressEmail: string;
  phone: string;
  location: string;
}

export interface ArtistProfile {
  name: string;
  alias?: string;
  title: string;
  tagline: string;
  heroSubtitle: string;
  bioShort: string;
  bioFull: string[];
  heroImage: string;
  heroSecondaryImage: string;
  profilePortrait: string;
  studioPortrait: string;
  quote: string;
  quoteAuthor: string;
  genres: string[];
  hometown: string;
  yearsActive: string;
  socialLinks: SocialLinks;
  management: ManagementContact;
}

export interface Track {
  id: string;
  albumId: string;
  trackNumber: number;
  title: string;
  duration: string;
  durationSeconds: number;
  previewAudioUrl?: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  isExplicit?: boolean;
  lyricsExcerpt?: string;
  producer?: string;
}

export interface Album {
  id: string;
  slug: string;
  title: string;
  type: MediaType;
  releaseDate: string;
  releaseYear: string;
  coverImage: string;
  bannerImage?: string;
  description: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  featured: boolean;
  tracks: Track[];
}

export type VideoCategory =
  | 'ALL'
  | 'OFFICIAL MUSIC VIDEOS'
  | 'LIVE PERFORMANCES'
  | 'ACOUSTIC'
  | 'BEHIND THE SCENES';

export interface MusicVideo {
  id: string;
  title: string;
  youtubeId: string;
  category: Exclude<VideoCategory, 'ALL'>;
  releaseYear: string;
  releaseDate: string;
  duration: string;
  thumbnail: string;
  featured: boolean;
  description: string;
  viewsCount?: string;
}

export type EventStatus = 'UPCOMING' | 'SOLD OUT' | 'PAST';

export interface TourEvent {
  id: string;
  title: string;
  tourName: string;
  date: string;
  displayDate: string;
  time: string;
  venue: string;
  city: string;
  country: string;
  status: EventStatus;
  eventPhoto: string;
  description: string;
  mapsUrl: string;
  infoUrl?: string;
}

export type GalleryCategory =
  | 'ALL'
  | 'Live'
  | 'Studio'
  | 'Photoshoots'
  | 'Behind the Scenes';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'ALL'>;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
  year: string;
  location?: string;
  featured: boolean;
}

export interface CareerMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface AwardItem {
  year: string;
  organization: string;
  category: string;
  work: string;
  result: 'WINNER' | 'NOMINATED';
}

export interface PlayingTrackState {
  track: Track;
  album: {
    title: string;
    coverImage: string;
  };
  isPlaying: boolean;
}

export interface PressCritique {
  id: string;
  publication: string;
  section: string;
  quote: string;
  author: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
  readTime: string;
  externalUrl?: string;
}

