import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    template: '%s / Refi Fauzan',
    default: 'Refi Fauzan',
  },
  authors: {
    name: 'Refi Ahmad Fauzan',
  },
  keywords: [
    'portofolio',
    'refi',
    'refi fauzan',
    'refi ahmad fauzan',
    'refi ahmad',
    'Refi Ahmad Fauzan',
    'Refi Fauzan',
    'Refi',
    'Refi Ahmad',
    'Portofolio',
    'Modern portofolio',
    'backend developer',
    'ruby on rails developer',
    'djebreds',
    'dadang jebred',
  ],
  description:
    'Specializing in backend development, I bring nearly three years of experience crafting efficient solutions with Ruby on Rails and NestJS, along with frontend skills in React.js and Next.js.',
  metadataBase: new URL('https://refifauzan.my.id'),
  creator: 'Refi Ahmad Fauzan',
  publisher: 'Refi Ahmad Fauzan',
  openGraph: {
    type: 'website',
    title: {
      template: '%s / Refi Fauzan',
      default: 'Refi Fauzan',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s / Refi Fauzan',
      default: 'Refi Fauzan',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId='G-FWQGGQRT6Y' />
    </html>
  );
}
