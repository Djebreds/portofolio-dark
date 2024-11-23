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
      <GoogleTagManager gtmId='GTM-5H9FGCXM' />
      <body className={inter.className}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5H9FGCXM'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        {/* Cloudflare Web Analytics */}
        <>
          <Script
            defer
            src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon='{"token": "7d57d4e2e259466294ead0c89fb63c02", "spa": true}'
          ></Script>
        </>
      </body>
      <GoogleAnalytics gaId='G-FWQGGQRT6Y' />
    </html>
  );
}
