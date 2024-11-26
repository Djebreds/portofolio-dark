import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Refi Ahmad Fauzan - Backend Developer Portfolio',
    default: 'Refi Ahmad Fauzan - Backend Developer | Ruby on Rails & NestJS',
  },
  authors: { name: 'Refi Ahmad Fauzan' },
  keywords: [
    'Refi Fauzan',
    'Refi Ahmad Fauzan',
    'Refi Ahmad Fauzan portfolio',
    'Refi Fauzan Emveep',
    'Contact Refi Fauzan',
    'Dadang Jebred',
    'developer Bandung',
    'Djebreds',
    'djebreds',
    'Portfolio Refi',
    'Portfolio Refi Fauzan',
    'Refi Ahmad Fauzan Developer',
    'tech',
    'stack',
    'developer',
    'contributions',
  ],
  description: `Explore Refi Ahmad Fauzan's portfolio, a backend developer skilled in Ruby on Rails, NestJS, React.js, and Next.js. Discover innovative, precise projects.`,
  metadataBase: new URL('https://refifauzan.my.id'),
  creator: 'Refi Ahmad Fauzan',
  publisher: 'Refi Ahmad Fauzan',
  openGraph: {
    type: 'website',
    url: 'https://refifauzan.my.id',
    title: 'Refi Fauzan - Backend Developer Portfolio',
    description:
      'Explore the portfolio of Refi Ahmad Fauzan, a backend developer with expertise in Ruby on Rails, NestJS, React.js, and Next.js.',
    images: [
      {
        url: 'https://refifauzan.my.id/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Refi Fauzan Portfolio Thumbnail',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@djebreds',
    creator: '@djebreds',
    title: 'Refi Fauzan - Backend Developer Portfolio',
    description:
      'Explore the portfolio of Refi Ahmad Fauzan, a backend developer specializing in Ruby on Rails, NestJS, and frontend technologies like React.js and Next.js.',
  },
  robots: 'index, follow',
  other: {
    'apple-mobile-web-app-title': 'Refi Fauzan',
    'application-name': 'Refi Fauzan Portfolio',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='canonical' href='https://refifauzan.my.id' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Refi Ahmad Fauzan',
            url: 'https://refifauzan.my.id',
            jobTitle: 'Backend Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Emveep',
            },
            sameAs: [
              'https://linkedin.com/in/refifauzan',
              'https://github.com/djebreds',
              'https://medium.com/@refi-fauzan',
              'https://dev.to/refifauzan',
            ],
          })}
        </script>
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId='GTM-5H9FGCXM' />
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5H9FGCXM'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <GoogleAnalytics gaId='G-FWQGGQRT6Y' />
        <Script
          defer
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "7d57d4e2e259466294ead0c89fb63c02", "spa": true}'
        ></Script>
      </body>
    </html>
  );
}
