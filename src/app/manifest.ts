import { type MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Refi Ahmad Fauzan',
  short_name: 'Refi',
  description: 'A Personal portfolio website',
  background_color: '#0A0A0A',
  theme_color: '#0A0A0A',
  categories: ['portfolio', 'personal', 'projects', 'resume', 'contact'],
  display: 'standalone',
  start_url: '/',
  lang: 'en',
  icons: [
    {
      src: '/favicon.ico',
      sizes: 'any',
      type: 'image/x-icon',
      purpose: 'any',
    },
  ],
});

export default manifest;
