'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Fade } from './Fade';
import { WobbleCard } from './WoobleCard';
import Link from 'next/link';
import { FaDev, FaMedium } from 'react-icons/fa6';
import { RxLetterCaseCapitalize } from 'react-icons/rx';

export default function Blog({
  section,
}: {
  section: { title: string; slug: string };
}) {
  const ref = useRef(null);
  const { setActiveLink } = useNavigationProvider();

  const isInView = useInView(ref, {
    margin: '-50% 0px -50% 0px',
  });

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug);
    }
  }, [isInView, section.slug, setActiveLink]);

  return (
    <motion.section id='blog' ref={ref} className='mx-3 h-full'>
      <div className='mx-auto'>
        <Fade direction='right' className='mx-auto'>
          <div className='mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10'>
            <h2 className='mb-4 max-w-4xl text-3xl font-semibold text-black sm:text-5xl dark:text-white'>
              I occasionally share my learning journey through blogs.
            </h2>
          </div>
        </Fade>
        <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3'>
          <WobbleCard
            containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
            className=''
          >
            <div className='max-w-xs'>
              <h2 className='text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl'>
                My Learning Journey
              </h2>
              <p className='mt-4 text-left text-base/6 text-neutral-200'>
                I explore new skills, tackle challenges, and share the lessons
                I’ve learned along the way.
              </p>
            </div>
            <FaMedium
              size={400}
              className='absolute -bottom-20 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[1%]'
            />
          </WobbleCard>
          <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
            <h2 className='max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl'>
              Lessons from Challenges
            </h2>
            <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
              Every obstacle is a chance to grow. I’ll share the struggles I’ve
              faced and the insights I’ve gained to help inspire your path.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-secondary-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
            <div className='max-w-sm'>
              <h2 className='max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl'>
                Let’s Grow Together
              </h2>
              <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
                Follow my blog for practical tips, personal stories, and
                reflections that can add value to your own learning journey.
              </p>
              <div className='mt-5 flex gap-3'>
                <Link
                  href={'https://medium.com/@refi-fauzan'}
                  target='_blank'
                  className='z-[1] flex transform items-center gap-2 rounded-full border border-white bg-[#d2e6ff] bg-opacity-50 px-3 py-2 font-medium text-[#1b3251] shadow-black/[0.04] backdrop-blur-[0.5rem] transition duration-500 hover:scale-110'
                >
                  Medium
                  <FaMedium size={30} />
                </Link>

                <Link
                  href={'https://dev.to/refifauzan'}
                  target='_blank'
                  className='z-[1] flex transform items-center gap-2 rounded-full border border-white bg-[#d2e6ff] bg-opacity-50 px-3 py-2 font-medium text-[#1b3251] shadow-black/[0.04] backdrop-blur-[0.5rem] transition duration-500 hover:scale-110'
                >
                  Dev
                  <FaDev size={30} />
                </Link>
              </div>
            </div>
            <RxLetterCaseCapitalize
              size={400}
              className='absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[1%]'
            />
          </WobbleCard>
        </div>
      </div>
    </motion.section>
  );
}
