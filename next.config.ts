import type { NextConfig } from 'next';
const dotenv = require('dotenv');
dotenv.config();

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    localPatterns: [
      {
        pathname: '/public/assets/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'leetcard.jacoblin.cool',
      },
    ],
  },
};

export default nextConfig;
