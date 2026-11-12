import {
  ArtistProfile,
  Album,
  MusicVideo,
  TourEvent,
  GalleryPhoto,
  CareerMilestone,
  PressCritique,
  BlogPost,
} from '@/types/artist';

export const artistProfile: ArtistProfile = {
  name: 'CRISTINA CASADO',
  alias: 'Cristina Casado Music',
  title: 'Singer-Songwriter & Vocalist',
  tagline: 'THE SOUND OF YOUNG DOMINICAN MUSIC & ANGLO-SAXON POP',
  heroSubtitle:
    'A captivating journey of heartfelt pop ballads, vibrant rhythmic fusions, and acoustic intimacy from Punta Cana to Miami.',
  bioShort:
    'Throughout the course of her musical career, Cristina Casado has won over the hearts of music lovers from all walks of life. Performing at various venues, making dozens of appearances, and continuing to record new singles, Cristina Casado has been earning the admiration and affection of fans since 2020, when she released her first single.',
  bioFull: [
    'Cristina Casado is a Singer-Songwriter who began her music education when she was 8 years old. Since then, she has been studying Piano, Guitar, and Voice and experimenting with different musical sounds in order to find the sound that resonated more with who she was, as well as her life experiences. In the music world, there’s no standing still. You must constantly strive to evolve and tour with the purpose of offering something unique to devoted fans and followers. Cristina tries to find inspiration wherever she looks and channel whatever moves her into her music.',
    'The story of Cristina Casado is rooted in the Dominican Republic music scene and inspired by Anglo-Saxon Pop Music. A lover of Broadway musicals and Lin-Manuel Miranda, she draws artistic inspiration from international icons ranging from modern artists like Harry Styles, Taylor Swift, and Billie Eilish to legendary classics like Queen, Billy Joel, The Beatles, and The Cranberries. These influences merge with her heartfelt perspective, reflected in self-penned songs including "Without You", "Lilac", "Reliquia", "Oxymoron", "Fool For You", "Writing On A Wall", and "Don\'t Ask Don\'t Tell".',
    'Now, Cristina Casado is continuing her career in the Music Industry simultaneously with her career in Neuroscience, aiming to inspire others to follow their dreams no matter how far they may seem. Collaborating with Grammy-nominated producer Dani Crazy Town, she is actively expanding her musical showcase to embrace rich Latin sounds, live showcases, and her highly anticipated debut EP.',
  ],
  // Authentic master photographs from cristinacasadomusic.com
  heroImage:
    '/assets/hero-piano.jpg',
  heroSecondaryImage:
    '/assets/studio-piano.jpg',
  profilePortrait:
    '/assets/portrait-editorial.jpg',
  studioPortrait:
    '/assets/acoustic-shoot.jpg',
  quote:
    'I believe that my success is linked to the love and support of my fans. My commitment to quality and hard work is evident in every song that I write and performance that I\'m a part of. I\'m grateful for everyone who has been by my side, and I promise to continue making music that resonates with you. Thank you from the bottom of my heart for your ongoing support!',
  quoteAuthor: 'Cristina Casado',
  genres: ['Pop', 'Latin Pop', 'Pop Ballad', 'Alternative Pop', 'Acoustic Pop'],
  hometown: 'Punta Cana & Santo Domingo, Dominican Republic / Miami, FL',
  yearsActive: '2020 – Present',
  socialLinks: {
    spotify: 'https://open.spotify.com/artist/7IsJkcT7O5Abliw6W27UL5',
    appleMusic: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    amazonMusic: 'https://music.amazon.com/search/cristina%20casado',
    youtube: 'https://www.youtube.com/@cristinacasadomusic',
    instagram: 'https://www.instagram.com/cristinaccasado',
    tiktok: 'https://www.tiktok.com/@cristinaccasado',
    twitter: 'https://x.com/cristinaccasado',
    facebook: 'https://www.facebook.com/cristina.casado.90',
    threads: 'https://www.threads.net/@cristinaccasado',
  },
  management: {
    generalEmail: 'cristinacasadomusic@gmail.com',
    bookingEmail: 'cristinacasadomusic@gmail.com',
    pressEmail: 'cristinacasadomusic@gmail.com',
    phone: 'Direct Management Inquiries via Email',
    location: 'Punta Cana, Dominican Republic & Miami, FL',
  },
};

export const pressCritiquesData: PressCritique[] = [
  {
    id: 'critique-1',
    publication: 'Listin Diario',
    section: 'Sound And Soul',
    quote:
      'She ventures with equal grace into pop ballads, alternative music, and other rhythmic fusions […] managing to create interesting and creative fusions, which shape the sounds of young Dominican music.',
    author: 'Listin Diario',
  },
  {
    id: 'critique-2',
    publication: 'Diario Libre',
    section: 'Music and Lyricism',
    quote:
      'She has shown her interpretive quality and sensitivity as a writer.',
    author: 'Diario Libre',
  },
  {
    id: 'critique-3',
    publication: 'Nota Clave',
    section: 'Professional Impact',
    quote: 'I sense then that we are talking about a future star.',
    author: 'Alfonso Quiñones, Nota Clave',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-2',
    title: "Unveiling Cristina Casado's Unique Musical Journey",
    date: 'January 14, 2024',
    readTime: '5 min read',
    slug: 'unveiling-unique-musical-journey',
    excerpt:
      'Exploring Cristina’s roots in the Dominican Republic, inspirations from Lin-Manuel Miranda and Anglo-Saxon pop, and pursuing music alongside Neuroscience.',
    content:
      'In this journey, we introduce you to the incredible talent of Cristina Casado, a pop singer-songwriter hailing from the beautiful Dominican Republic. Cristina\'s passion for pop music is evident in her unique style and the way she effortlessly blends melodies and lyrics to create captivating songs. She is a lover of Broadway musicals and Lin Manuel Miranda, as well as great international artists from Harry Styles, Taylor Swift, and Billie Eilish to classics like Queen, Billy Joel, The Beatles, and The Cranberries. Now, Cristina Casado is continuing a career in the Music Industry simultaneously with her career in Neuroscience, proving you can inspire others to follow their dreams without limits.',
    externalUrl:
      'https://www.cristinacasadomusic.com/post/unveiling-cristina-casado-s-unique-musical-journey',
  },
  {
    id: 'post-3',
    title: "Stay Tuned for Cristina Casado's Latest Updates",
    date: 'December 22, 2024',
    readTime: '3 min read',
    slug: 'stay-tuned-latest-updates',
    excerpt:
      'Regular updates on the progress of upcoming singles, live showcases in Miami and the Dominican Republic, and direct connection with fans.',
    content:
      'Cristina\'s unique style and passion for pop music make her an artist to watch. With inspiration from various music styles, she creates a blend of melodies and lyrics that resonate deeply with her audience. Her upcoming EP promises to showcase her talent and take her fans on a musical journey they won\'t forget. To foster direct communication with her fans, Cristina\'s platform serves as a home for all things Cristina Casado, offering exclusive updates, behind-the-scenes content, and early access to new releases.',
    externalUrl:
      'https://www.cristinacasadomusic.com/post/stay-tuned-for-cristina-casado-s-latest-updates',
  },
];

export const originalSongsCatalog: string[] = [
  'Oxymoron',
  'Reliquia',
  'Lilac',
  'Pausa',
  'Me Perdiste',
  "Don't Ask Don't Tell",
];

export const albumsData: Album[] = [
  {
    id: 'single-1',
    slug: 'oxymoron-single',
    title: 'OXYMORON',
    type: 'SINGLE',
    releaseDate: 'October 3, 2025',
    releaseYear: '2025',
    coverImage:
      '/assets/cover-oxymoron.jpg',
    bannerImage:
      '/assets/hero-piano.jpg',
    description:
      'A bold pop single from Cristina Casado exploring emotional contradictions and relationship dynamics. Produced in Miami with Grammy-nominated producer Dani Crazy Town.',
    spotifyUrl: 'https://open.spotify.com/album/35cZcDo6ybsC1b7a7QyXkh',
    appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    youtubeUrl: 'https://www.youtube.com/watch?v=U9R1tncQqCc',
    featured: true,
    tracks: [
      {
        id: 't-101',
        albumId: 'single-1',
        trackNumber: 1,
        title: 'Oxymoron',
        duration: '2:48',
        durationSeconds: 169,
        previewAudioUrl: '/audio/oxymoron.wav',
        spotifyUrl: 'https://open.spotify.com/album/35cZcDo6ybsC1b7a7QyXkh',
        appleMusicUrl:
          'https://music.apple.com/us/artist/cristina-casado/1565226271',
        youtubeUrl: 'https://www.youtube.com/watch?v=U9R1tncQqCc',
        producer: 'Dani Crazy Town (Grammy Nominee)',
        lyricsExcerpt:
          'You are a walking oxymoron, whispering silence in the storm. You say you love me while pulling away...',
      },
    ],
  },
  {
    id: 'single-2',
    slug: 'reliquia-single',
    title: 'RELIQUIA',
    type: 'SINGLE',
    releaseDate: 'July 17, 2025',
    releaseYear: '2025',
    coverImage:
      '/assets/cover-reliquia.jpg',
    bannerImage:
      '/assets/poster-reliquia.png',
    description:
      'An intimate, timeless ballad celebrating sacred connection and emotional depth. Featuring bilingual lyricism and delicate acoustic instrumentation.',
    spotifyUrl: 'https://open.spotify.com/album/4gFidBRqhl9AvhUZkqW7P7',
    appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    youtubeUrl: 'https://www.youtube.com/watch?v=Uz_Tc-yCCSk',
    featured: true,
    tracks: [
      {
        id: 't-102',
        albumId: 'single-2',
        trackNumber: 1,
        title: 'Reliquia',
        duration: '2:49',
        durationSeconds: 214,
        previewAudioUrl: '/audio/reliquia.wav',
        spotifyUrl: 'https://open.spotify.com/album/4gFidBRqhl9AvhUZkqW7P7',
        appleMusicUrl:
          'https://music.apple.com/us/artist/cristina-casado/1565226271',
        youtubeUrl: 'https://www.youtube.com/watch?v=Uz_Tc-yCCSk',
        producer: 'Dani Crazy Town & Cristina Casado',
        lyricsExcerpt:
          'Though our road is no longer rosy, what we have is a sacred relic. En cada latido guardo el secreto que nos une...',
      },
    ],
  },
  {
    id: 'single-3',
    slug: 'me-perdiste-single',
    title: 'ME PERDISTE',
    type: 'SINGLE',
    releaseDate: 'August 27, 2026',
    releaseYear: '2026',
    coverImage:
      '/assets/cover-me-perdiste.jpg',
    bannerImage:
      '/assets/portrait-editorial.jpg',
    description:
      'The latest release and official Spotify artist pick. An anthem of self-worth and independence navigating emotional growth with catchy Latin pop grooves.',
    spotifyUrl: 'https://open.spotify.com/album/0Vlzwi5cUuWOZI3HLrOrKN',
    appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    youtubeUrl: 'https://www.youtube.com/watch?v=JdyD-vz9wE4',
    featured: true,
    tracks: [
      {
        id: 't-103',
        albumId: 'single-3',
        trackNumber: 1,
        title: 'Me Perdiste',
        duration: '2:56',
        durationSeconds: 185,
        previewAudioUrl: '/audio/me-perdiste.wav',
        spotifyUrl: 'https://open.spotify.com/album/0Vlzwi5cUuWOZI3HLrOrKN',
        appleMusicUrl:
          'https://music.apple.com/us/artist/cristina-casado/1565226271',
        youtubeUrl: 'https://www.youtube.com/watch?v=JdyD-vz9wE4',
        producer: 'Cristina Casado',
        lyricsExcerpt:
          'Tú perdiste porque me perdiste a mí. No voy a mirar atrás cuando el futuro brilla tan claro...',
      },
    ],
  },
  {
    id: 'single-4',
    slug: 'pausa-single',
    title: 'PAUSA',
    type: 'SINGLE',
    releaseDate: '2026',
    releaseYear: '2026',
    coverImage:
      '/assets/cover-pausa.jpg',
    bannerImage:
      '/assets/studio-piano.jpg',
    description:
      'A serene acoustic-pop reflection on breathing space, self-care, and finding calm amidst the world’s noise.',
    spotifyUrl: 'https://open.spotify.com/album/0JvjiSXNvrOJbwtdi9vsw0',
    appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    youtubeUrl: 'https://www.youtube.com/watch?v=mid_2H450FY',
    featured: true,
    tracks: [
      {
        id: 't-104',
        albumId: 'single-4',
        trackNumber: 1,
        title: 'Pausa',
        duration: '3:23',
        durationSeconds: 192,
        previewAudioUrl: '/audio/pausa.wav',
        spotifyUrl: 'https://open.spotify.com/album/0JvjiSXNvrOJbwtdi9vsw0',
        appleMusicUrl:
          'https://music.apple.com/us/artist/cristina-casado/1565226271',
        youtubeUrl: 'https://www.youtube.com/watch?v=mid_2H450FY',
        producer: 'Cristina Casado & Production Team',
        lyricsExcerpt:
          'Hacer una pausa para respirar, dejar que las olas se lleven lo que no nos deja avanzar...',
      },
    ],
  },
  {
    id: 'single-5',
    slug: 'lilac-single',
    title: 'LILAC',
    type: 'SINGLE',
    releaseDate: 'May 23, 2025',
    releaseYear: '2025',
    coverImage:
      '/assets/cover-lilac.jpg',
    bannerImage:
      '/assets/banner-lilac.jpg',
    description:
      'A tender exploration of youth, innocence, and delicate melody layered over grand piano and rich vocal textures.',
    spotifyUrl: 'https://open.spotify.com/album/2AXxklrBVPh5BnsKyDJ515',
    appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    youtubeUrl: 'https://www.youtube.com/watch?v=EsveAXhwtXY',
    featured: false,
    tracks: [
      {
        id: 't-105',
        albumId: 'single-5',
        trackNumber: 1,
        title: 'Lilac',
        duration: '3:24',
        durationSeconds: 199,
        previewAudioUrl: '/audio/lilac.wav',
        spotifyUrl: 'https://open.spotify.com/album/2AXxklrBVPh5BnsKyDJ515',
        appleMusicUrl:
          'https://music.apple.com/us/artist/cristina-casado/1565226271',
        youtubeUrl: 'https://www.youtube.com/watch?v=EsveAXhwtXY',
        producer: 'Cristina Casado',
        lyricsExcerpt:
          'Under the lilac sky, innocent and young. A sweet first chapter in a song left unsung...',
      },
    ],
  },
  {
    id: 'single-6',
    slug: 'dont-ask-dont-tell-single',
    title: "DON'T ASK DON'T TELL",
    type: 'SINGLE',
    releaseDate: '2025',
    releaseYear: '2025',
    coverImage:
      '/assets/cover-dont-ask.jpg',
    bannerImage:
      '/assets/acoustic-shoot.jpg',
    description:
      'An introspective single navigating boundaries, unspoken truths, and magnetic attraction with acoustic pop sensibilities.',
    spotifyUrl: 'https://open.spotify.com/album/6WBJBDOc61RpctXEh6WAaQ',
    appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
    youtubeUrl: 'https://www.youtube.com/watch?v=Ykzg9-2kCO8',
    featured: false,
    tracks: [
      {
        id: 't-106',
        albumId: 'single-6',
        trackNumber: 1,
        title: "Don't Ask Don't Tell",
        duration: '3:24',
        durationSeconds: 221,
        previewAudioUrl: '/audio/dont-ask-dont-tell.wav',
        spotifyUrl: 'https://open.spotify.com/album/6WBJBDOc61RpctXEh6WAaQ',
        appleMusicUrl:
          'https://music.apple.com/us/artist/cristina-casado/1565226271',
        youtubeUrl: 'https://www.youtube.com/watch?v=Ykzg9-2kCO8',
        producer: 'Cristina Casado & Production Team',
        lyricsExcerpt:
          'Some things are better left unspoken in the quiet of the night...',
      },
    ],
  },
];

export const latestRelease = {
  songTitle: 'Oxymoron',
  albumTitle: 'Oxymoron - Single',
  releaseDate: 'October 3, 2025',
  releaseYear: '2025',
  duration: '2:48',
  coverImage:
    '/assets/cover-oxymoron.jpg',
  description:
    'The compelling pop single from Cristina Casado, produced in collaboration with Grammy Nominee producer Dani Crazy Town. Exploring thought-provoking themes with delicate vocal delivery and contemporary soundscapes.',
  previewAudioUrl: '/audio/oxymoron.wav',
  spotifyUrl: 'https://open.spotify.com/album/35cZcDo6ybsC1b7a7QyXkh',
  appleMusicUrl: 'https://music.apple.com/us/artist/cristina-casado/1565226271',
  youtubeUrl: 'https://www.youtube.com/watch?v=U9R1tncQqCc',
};

export const musicVideosData: MusicVideo[] = [
  {
    id: 'vid-1',
    title: 'Oxymoron (Official Music Video)',
    youtubeId: 'U9R1tncQqCc',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'October 03, 2025',
    duration: '2:54',
    thumbnail:
      '/assets/cover-oxymoron.jpg',
    featured: true,
    description:
      'The official music video for "Oxymoron", exploring contradictions and emotional dissonance with delicate vocals and production by Danicrazytown.',
  },
  {
    id: 'vid-2',
    title: 'Reliquia (Official Music Video)',
    youtubeId: 'Uz_Tc-yCCSk',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'July 17, 2025',
    duration: '3:34',
    thumbnail:
      '/assets/cover-reliquia.jpg',
    featured: true,
    description:
      'The official music video for "Reliquia", capturing the timeless intimacy, bilingual lyricism, and acoustic warmth of Cristina Casado.',
  },
  {
    id: 'vid-3',
    title: 'Lilac (Official Music Video)',
    youtubeId: 'EsveAXhwtXY',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: 'May 23, 2025',
    duration: '3:19',
    thumbnail:
      '/assets/cover-lilac.jpg',
    featured: false,
    description:
      'Official music video for "Lilac", exploring nostalgic innocence, delicate grand piano chords, and melodic indie pop sensibilities.',
  },
  {
    id: 'vid-4',
    title: 'Pausa (Official Music Video)',
    youtubeId: 'mid_2H450FY',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2026',
    releaseDate: '2026',
    duration: '3:12',
    thumbnail:
      '/assets/cover-pausa.jpg',
    featured: false,
    description:
      'Official music video for "Pausa", an evocative coastal reflection on breathing space and emotional stillness.',
  },
  {
    id: 'vid-5',
    title: 'Me Perdiste (Official Video)',
    youtubeId: 'JdyD-vz9wE4',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2026',
    releaseDate: 'August 27, 2026',
    duration: '3:05',
    thumbnail:
      '/assets/cover-me-perdiste.jpg',
    featured: false,
    description:
      'Empowerment anthem transforming romantic separation into self-assurance and independence ("Tú perdiste porque me perdiste a mí").',
  },
  {
    id: 'vid-6',
    title: "Don't Ask Don't Tell (Official Music Video)",
    youtubeId: 'Ykzg9-2kCO8',
    category: 'OFFICIAL MUSIC VIDEOS',
    releaseYear: '2025',
    releaseDate: '2025',
    duration: '3:41',
    thumbnail:
      '/assets/cover-dont-ask.jpg',
    featured: false,
    description:
      'Intimate vocal narrative exploring unspoken boundaries and lingering feelings in modern romance.',
  },
  {
    id: 'vid-7',
    title: 'Lover by Taylor Swift (Live Acoustic Cover)',
    youtubeId: '3McME2tM1Pc',
    category: 'LIVE PERFORMANCES',
    releaseYear: '2024',
    releaseDate: 'Live Performance',
    duration: '3:45',
    thumbnail: '/assets/thumb-lover.jpg',
    featured: false,
    description:
      'Acoustic live cover of Taylor Swift’s "Lover" performed by Cristina Casado, demonstrating vocal range and heartfelt delivery.',
  },
  {
    id: 'vid-8',
    title: 'Falling by Harry Styles (Acoustic Cover)',
    youtubeId: 'iJjgTKNumXU',
    category: 'LIVE PERFORMANCES',
    releaseYear: '2024',
    releaseDate: 'Live Performance',
    duration: '3:55',
    thumbnail: '/assets/thumb-falling.jpg',
    featured: false,
    description:
      'Emotional piano and vocal interpretation of Harry Styles’ ballad "Falling", captured in an intimate session.',
  },
  {
    id: 'vid-9',
    title: 'In The Studio: Collaboration with Dani Crazy Town',
    youtubeId: 'U9R1tncQqCc',
    category: 'BEHIND THE SCENES',
    releaseYear: '2025',
    releaseDate: 'January 15, 2025',
    duration: '4:20',
    thumbnail:
      '/assets/studio-piano.jpg',
    featured: false,
    description:
      'Behind the scenes in the studio tracking vocals, developing melodies, and crafting Cristina’s new sound.',
  },
];

export const tourEventsData: TourEvent[] = [
  {
    id: 'event-1',
    title: 'CREATIVE MONDAY JAM SESSION WITH CRISTINA CASADO',
    tourName: 'Creative Showcase Sessions',
    date: '2025-11-17T20:00:00Z',
    displayDate: '17 NOV 2025',
    time: '8:00 PM',
    venue: 'Miami Soundstage & Studios',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/jam-session.jpg',
    description:
      'Live jam session and intimate acoustic performance featuring Cristina Casado, presenting original songs and creative jams.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-showcase-in-miami',
  },
  {
    id: 'event-2',
    title: 'OXYMORON RELEASE DAY!',
    tourName: 'Official Single & Visualizer Premiere',
    date: '2025-10-03T00:00:00Z',
    displayDate: '03 OCT 2025',
    time: 'Worldwide Premiere',
    venue: 'All Streaming Platforms & Studios',
    city: 'Miami & Global',
    country: 'Worldwide',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/cover-oxymoron.jpg',
    description:
      'Official release day for the highly awaited single "Oxymoron", produced by Grammy Nominee Dani Crazy Town.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-private-listening-session',
  },
  {
    id: 'event-3',
    title: 'RELIQUIA RELEASE DAY & CONCERT',
    tourName: 'Reliquia Premiere Showcase',
    date: '2025-07-17T19:30:00Z',
    displayDate: '17 JUL 2025',
    time: '7:30 PM',
    venue: 'Location TBD',
    city: 'Miami / Santo Domingo',
    country: 'United States / Dominican Republic',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/poster-reliquia.png',
    description:
      'Official release celebration for "Reliquia", bringing live acoustic arrangements and contemporary Latin-Anglo pop fusion.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/reliquia-release',
  },
  {
    id: 'event-4',
    title: 'LILAC RELEASE DAY',
    tourName: 'Single Premiere',
    date: '2025-05-23T00:00:00Z',
    displayDate: '23 MAY 2025',
    time: 'Global Streaming',
    venue: 'Digital Release & Live Q&A',
    city: 'Punta Cana & Miami',
    country: 'Worldwide',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/cover-lilac.jpg',
    description:
      'Worldwide release of the atmospheric single "Lilac", exploring youth, innocence, and delicate melodies.',
    mapsUrl: 'https://maps.google.com/?q=Punta+Cana+Dominican+Republic',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-showcase-in-miami',
  },
  {
    id: 'event-5',
    title: "WOMEN'S MONTH SHOWCASE",
    tourName: "Women's Month Series",
    date: '2025-03-21T19:00:00Z',
    displayDate: '21 MAR 2025',
    time: '7:00 PM',
    venue: 'Miami Beach Venue',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/acoustic-shoot.jpg',
    description:
      "Special Women's Month showcase celebrating female creative power, featuring Cristina Casado live.",
    mapsUrl: 'https://maps.google.com/?q=Miami+Beach+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/womens-month-showcase',
  },
  {
    id: 'event-6',
    title: 'CRISTINA CASADO SHOWCASE',
    tourName: 'Showcase in Miami',
    date: '2025-01-23T20:00:00Z',
    displayDate: '23 JAN 2025',
    time: '8:00 PM',
    venue: 'Miami Soundstage',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/jam-session.jpg',
    description:
      'Exclusive live showcase in Miami previewing the upcoming EP.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-showcase-in-miami',
  },
  {
    id: 'event-7',
    title: 'CRISTINA CASADO PRIVATE LISTENING SESSION',
    tourName: 'Intimate Listening Experience',
    date: '2025-01-20T19:30:00Z',
    displayDate: '20 JAN 2025',
    time: '7:30 PM',
    venue: 'Location TBD',
    city: 'Miami',
    country: 'United States',
    status: 'UPCOMING',
    eventPhoto:
      '/assets/listening-session.jpg',
    description:
      'An intimate listening session for press, collaborators, and special guests to hear unreleased tracks ahead of public release.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/cristina-casado-private-listening-session',
  },
];

export const pastEventsData: TourEvent[] = [
  {
    id: 'past-1',
    title: "WOMEN'S MONTH SHOWCASE",
    tourName: "Women's Month Showcase",
    date: '2024-11-07T20:00:00Z',
    displayDate: '07 NOV 2024',
    time: '8:00 PM',
    venue: 'Miami Soundstage',
    city: 'Miami',
    country: 'United States',
    status: 'PAST',
    eventPhoto:
      '/assets/live-stage.jpg',
    description:
      'Live showcase in Miami highlighting original songs and dynamic stage performances.',
    mapsUrl: 'https://maps.google.com/?q=Miami+Florida',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/womens-month-showcase',
  },
  {
    id: 'past-2',
    title: 'OPENING FOR ISMAEL SERRANO (GUITARRA Y VOZ)',
    tourName: 'Special Guest Performance',
    date: '2024-07-17T20:30:00Z',
    displayDate: '17 JUL 2024',
    time: '8:30 PM',
    venue: 'Teatro Nacional Eduardo Brito',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'PAST',
    eventPhoto:
      '/assets/ismael-serrano.jpg',
    description:
      'Special opening act performance for celebrated Spanish singer-songwriter Ismael Serrano on his "Guitarra y Voz" acoustic concert tour.',
    mapsUrl: 'https://maps.google.com/?q=Teatro+Nacional+Santo+Domingo',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/ismael-serrano-guitarra-y-voz',
  },
  {
    id: 'past-3',
    title: 'NOCHE DE MERENGUE Y BOLERO - SERGIO VARGAS E INVITADOS!',
    tourName: 'Sergio Vargas e Invitados Gala',
    date: '2024-01-31T20:00:00Z',
    displayDate: '31 JAN 2024',
    time: '8:00 PM',
    venue: 'Hard Rock Live / Sala Santo Domingo',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'PAST',
    eventPhoto:
      '/assets/sergio-vargas.jpg',
    description:
      'Guest artist performance with Latin Grammy legend Sergio Vargas celebrating Dominican Merengue, Bolero tradition, and vocal artistry.',
    mapsUrl: 'https://maps.google.com/?q=Santo+Domingo+Dominican+Republic',
    infoUrl:
      'https://www.cristinacasadomusic.com/event-details-registration/noche-de-merengue-y-bolero-sergio-vargas-e-invitados-18',
  },
  {
    id: 'past-4',
    title: 'WITHOUT YOU DEBUT LAUNCH',
    tourName: 'Debut Single Presentation',
    date: '2021-04-30T19:00:00Z',
    displayDate: '30 APR 2021',
    time: '7:00 PM',
    venue: 'Santo Domingo Sessions',
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    status: 'PAST',
    eventPhoto:
      '/assets/portrait-editorial.jpg',
    description:
      'The formal unveiling of Cristina Casado’s debut single "Without You", produced by Álvaro Dinzey.',
    mapsUrl: 'https://maps.google.com/?q=Santo+Domingo+Dominican+Republic',
  },
];

// All 12 gallery photos directly sourced from cristinacasadomusic.com
export const galleryPhotosData: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Grand Piano Composition',
    category: 'Studio',
    imageUrl:
      '/assets/hero-piano.jpg',
    aspect: 'wide',
    caption:
      'Cristina Casado at the grand piano developing melodic motifs and vocal harmonies.',
    year: '2025',
    location: 'Santo Domingo',
    featured: true,
  },
  {
    id: 'gal-2',
    title: 'Master Editorial Portrait',
    category: 'Photoshoots',
    imageUrl:
      '/assets/portrait-editorial.jpg',
    aspect: 'tall',
    caption:
      'Official portrait featured on the official website about page and press releases.',
    year: '2025',
    location: 'Miami, FL',
    featured: true,
  },
  {
    id: 'gal-3',
    title: 'Studio Piano Session',
    category: 'Studio',
    imageUrl:
      '/assets/studio-piano.jpg',
    aspect: 'wide',
    caption:
      'Refining piano chord structures and songwriting arrangements.',
    year: '2025',
    location: 'Punta Cana',
    featured: true,
  },
  {
    id: 'gal-4',
    title: 'Behind the Scenes in Miami',
    category: 'Behind the Scenes',
    imageUrl:
      '/assets/studio-piano.jpg',
    aspect: 'tall',
    caption:
      'Behind the scenes in Miami during an active period of music-making.',
    year: '2024',
    location: 'Miami, FL',
    featured: true,
  },
  {
    id: 'gal-5',
    title: 'Official Editorial Photoshoot',
    category: 'Photoshoots',
    imageUrl:
      '/assets/acoustic-shoot.jpg',
    aspect: 'wide',
    caption:
      'Acoustic editorial photoshoot capturing the natural warmth of Cristina Casado’s sound.',
    year: '2025',
    location: 'Dominican Republic',
    featured: true,
  },
  {
    id: 'gal-6',
    title: 'Acoustic Vocal Tracking',
    category: 'Studio',
    imageUrl:
      '/assets/acoustic-tracking.jpg',
    aspect: 'tall',
    caption:
      'Tracking acoustic guitar and lead vocals in the recording studio.',
    year: '2024',
    location: 'Miami Studios',
    featured: false,
  },
  {
    id: 'gal-7',
    title: 'Studio Vocal Session',
    category: 'Studio',
    imageUrl:
      '/assets/vocal-session.jpg',
    aspect: 'tall',
    caption:
      'Vocal tracking for the highly awaited single "Oxymoron".',
    year: '2024',
    location: 'Miami Studios',
    featured: false,
  },
  {
    id: 'gal-8',
    title: "Women's Month Showcase",
    category: 'Live',
    imageUrl:
      '/assets/live-stage.jpg',
    aspect: 'tall',
    caption:
      "Live showcase art for the Women's Month concert series in Miami.",
    year: '2025',
    location: 'Miami Beach, FL',
    featured: false,
  },
  {
    id: 'gal-9',
    title: 'Private Listening Session',
    category: 'Behind the Scenes',
    imageUrl:
      '/assets/listening-session.jpg',
    aspect: 'square',
    caption:
      'Private listening session with close collaborators and industry partners.',
    year: '2025',
    location: 'Miami, FL',
    featured: false,
  },
  {
    id: 'gal-10',
    title: 'Live Stage Vocal Performance',
    category: 'Live',
    imageUrl:
      '/assets/live-stage.jpg',
    aspect: 'tall',
    caption:
      'Captivating the crowd on stage during an intimate acoustic showcase.',
    year: '2024',
    location: 'Miami Showcase',
    featured: false,
  },
  {
    id: 'gal-11',
    title: 'Opening for Ismael Serrano',
    category: 'Live',
    imageUrl:
      '/assets/ismael-serrano.jpg',
    aspect: 'square',
    caption:
      'Special opening guest artist for Ismael Serrano’s "Guitarra y Voz" acoustic concert.',
    year: '2024',
    location: 'Teatro Nacional Eduardo Brito',
    featured: false,
  },
  {
    id: 'gal-12',
    title: 'Noche de Merengue y Bolero Gala',
    category: 'Live',
    imageUrl:
      '/assets/sergio-vargas.jpg',
    aspect: 'square',
    caption:
      'Collaborative vocal performance with Latin Grammy legend Sergio Vargas.',
    year: '2024',
    location: 'Santo Domingo',
    featured: false,
  },
];

export const careerMilestones: CareerMilestone[] = [
  {
    year: '2025',
    title: 'RELIQUIA, OXYMORON & LILAC RELEASES',
    subtitle: 'Collaboration with Dani Crazy Town',
    description:
      'Released key singles "Oxymoron", "Reliquia", and "Lilac", produced in collaboration with Grammy Nominee producer Dani Crazy Town, heralding her first EP.',
    tag: 'NEW ERA',
  },
  {
    year: '2025',
    title: "WOMEN'S MONTH SHOWCASES",
    subtitle: 'Miami Beach Live Showcases',
    description:
      "Featured at Women's Month showcases in Miami, delivering standout live vocals and connecting with international audiences.",
    tag: 'LIVE SHOWCASE',
  },
  {
    year: '2024',
    title: 'OPENING FOR ISMAEL SERRANO',
    subtitle: 'Teatro Nacional Eduardo Brito, Santo Domingo',
    description:
      'Selected as the official opening act for revered Spanish singer-songwriter Ismael Serrano on his "Guitarra y Voz" acoustic concert.',
    tag: 'HONOR',
  },
  {
    year: '2024',
    title: 'NOCHE DE MERENGUE Y BOLERO GALA',
    subtitle: 'Sergio Vargas e Invitados Gala',
    description:
      'Invited guest performance alongside Latin Grammy winner Sergio Vargas celebrating the richness of Dominican vocal traditions.',
    tag: 'HERITAGE',
  },
  {
    year: '2021',
    title: 'PROFESSIONAL DEBUT "WITHOUT YOU"',
    subtitle: 'Produced by Álvaro Dinzey',
    description:
      'Formally debuted with the emotional piano ballad "Without You", recorded with acclaimed producer Álvaro Dinzey, marking music as her deepest creative sanctuary.',
    tag: 'DEBUT',
  },
  {
    year: '2008',
    title: 'EARLY EDUCATION & MULTI-INSTRUMENTAL STUDIES',
    subtitle: 'Piano, Guitar & Voice from Age 8',
    description:
      'Began music studies at age 8, building foundational mastery of piano, acoustic guitar, and vocal technique while exploring diverse musical genres.',
    tag: 'ORIGINS',
  },
];

export const notableCollaborators = [
  {
    name: 'Dani Crazy Town',
    role: 'Grammy Nominee Producer ("Oxymoron", Production, Mix & Master)',
  },
  {
    name: 'Álvaro Dinzey',
    role: 'Renowned Dominican Producer & Arranger ("Without You")',
  },
  {
    name: 'Sergio Vargas',
    role: 'Latin Grammy Legend ("Noche de Merengue y Bolero" Gala Guest)',
  },
  {
    name: 'Ismael Serrano',
    role: 'Spanish Singer-Songwriter (Opened for "Guitarra y Voz" Tour)',
  },
  {
    name: 'Neuroscience & Music',
    role: 'Dual Career: Scientific Neuroscience & Pop Songwriting',
  },
];
