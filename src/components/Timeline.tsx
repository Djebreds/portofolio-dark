'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { FlipWords } from './FlipWord';
import { Fade } from './Fade';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const words = ['Project', 'Work', 'Experience', 'Learning'];

  return (
    <div
      className='w-full bg-white md:px-10 dark:bg-neutral-950'
      ref={containerRef}
    >
      <Fade direction='right'>
        <div className='mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10'>
          <h2 className='mb-4 max-w-4xl text-3xl font-semibold text-black sm:text-5xl dark:text-white'>
            {'Journey of my'}
            <FlipWords words={words} />
          </h2>
          <p className='max-w-xl text-sm md:text-base'>
            I&apos;ve been working for the past 3 years. Here&apos;s a timeline
            of my journey.
          </p>
        </div>
      </Fade>

      <div ref={ref} className='relative mx-auto max-w-7xl pb-20'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start pt-10 md:gap-10 ${index === 0 ? 'md:pt-5' : 'md:pt-40'}`}
          >
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black'>
                <div className='h-4 w-4 rounded-full border border-secondary-600 bg-primary-300 p-2' />
              </div>
              <h3 className='h-15 hidden bg-gradient-to-l from-secondary-100 to-secondary-600 bg-clip-text text-xl font-bold text-neutral-500 text-transparent md:block md:pl-20 md:text-4xl'>
                {item.title}
              </h3>
            </div>

            <div className='relative w-full pl-20 pr-4 md:pl-4'>
              <h3 className='mb-4 block bg-gradient-to-l from-secondary-100 to-secondary-600 bg-clip-text text-left text-2xl font-bold text-neutral-500 text-transparent md:hidden'>
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div className='absolute left-8 top-0 h-full w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700'>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-secondary-200 from-[0%] via-primary-500 via-[10%] to-transparent'
          />
        </div>
      </div>
    </div>
  );
};
