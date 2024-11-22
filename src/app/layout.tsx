import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Refi Fauzan Portofolio',
  applicationName: "Refi's Portofolio",
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
  themeColor: 'dark',
  colorScheme: 'dark',
  creator: 'Refi Fauzan',
  publisher: 'Refi Fauzan',
  category: 'Portofolio',
  description:
    'Specializing in backend development, I bring nearly three years of experience crafting efficient solutions with Ruby on Rails and NestJS, along with frontend skills in React.js and Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
