'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Fade } from './Fade';

export default function Navigation({
  links,
}: {
  links: { title: string; slug: string }[];
}) {
  const { activeLink, setActiveLink } = useNavigationProvider();
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [animationProps, setAnimationProps] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const url = window.location.hash;

    if (url) {
      const link = url.replace('#', '');
      setActiveLink(link);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updateActiveLink = () => {
      if (activeLinkRef.current) {
        const { width } = activeLinkRef.current.getBoundingClientRect();
        const left = activeLinkRef.current.offsetLeft;
        setAnimationProps({
          left,
          width,
        });
      }
    };

    updateActiveLink();
    window.addEventListener('resize', updateActiveLink);

    return () => {
      window.removeEventListener('resize', updateActiveLink);
    };
  }, [activeLink]);

  return (
    <header className='fixed inset-x-0 bottom-6 z-30 mx-auto w-fit sm:sticky sm:bottom-6 sm:top-6 md:top-6'>
      <div className='mx-auto px-4 sm:px-6'>
        <Fade direction='down'>
          <div className='flex h-12 items-center justify-center gap-3 rounded-full bg-primary-100 bg-opacity-10 px-3 shadow-lg shadow-black/[0.04] backdrop-blur-[0.6rem]'>
            <nav className='relative flex justify-center'>
              <motion.div
                className='absolute inset-y-0 left-0 rounded-full bg-primary-500 bg-opacity-50'
                aria-hidden='true'
                animate={{
                  ...animationProps,
                }}
                transition={{ type: 'spring', duration: 0.5 }}
              ></motion.div>
              <ul className='relative flex flex-wrap items-center gap-1 text-sm font-medium md:gap-8'>
                {links.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={`#${link.slug}`}
                      ref={activeLink === link.slug ? activeLinkRef : null}
                      className={`inline-flex rounded-full p-2 font-normal text-slate-500 hover:text-primary-500 [&.active]:text-white ${activeLink === link.slug ? 'active' : ''}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Fade>
      </div>
    </header>
  );
}
