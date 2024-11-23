'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Globe } from './Globe';
import { BackgroundBeams } from './BackgroundBeams';
import { InfiniteMovingCards } from './InfiniteMovingCard';
import {
  databases,
  frameworks,
  infrastructures,
  languages,
} from '@/data/techstack';
import { LeetCodeStats } from './stats/LeetCodeStats';
import { GithubStats } from './stats/GithubStats';
import { IWakaTimeData } from '@/interfaces/wakatime-response';
import { IWakaTimeWeek } from '@/interfaces/wakatime-week-response';
import { WakaTimeWeek } from './stats/WakatimeWeekStats';
import { WakaTimeStats } from './stats/WakaTimeStats';

export default function Skill({
  section,
  github,
  wakaTime,
  wakaTimeWeek,
  leetCode,
}: {
  section: { title: string; slug: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  github: any;
  wakaTime: IWakaTimeData;
  wakaTimeWeek: IWakaTimeWeek;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leetCode: any;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const { data } = github;

  return (
    <>
      <motion.section id='skill' ref={ref} className='mx-3 h-full'>
        <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
          <BentoGridItem
            className='md:col-span-1'
            header={<GithubStats stats={data.user} />}
          />
          <BentoGridItem className='md:col-span-2' header={<Communication />} />
          <BentoGridItem className='md:col-span-2' header={<Ability />} />
          <BentoGridItem
            className='md:col-span-1'
            header={<WakaTimeStats wakaTime={wakaTime} />}
          />
          <BentoGridItem
            className='md:col-span-1'
            header={<WakaTimeWeek wakaTimeWeek={wakaTimeWeek} />}
          />
          <BentoGridItem
            className='md:col-span-2'
            header={<LeetCodeStats data={leetCode.data} />}
          />
        </BentoGrid>
      </motion.section>
    </>
  );
}

const Communication = () => {
  return (
    <motion.div className='transition duration-200 group-hover/bento:translate-x-2'>
      <h4 className='mx-auto max-w-5xl text-left text-3xl font-semibold tracking-tight text-black md:text-4xl md:leading-snug dark:text-white'>
        Flexible with timezone communications
      </h4>
      <div className='h-full w-full'>
        <div className='relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60 dark:bg-transparent'>
          <div className='absolute -bottom-80 -right-[50] md:-bottom-72 md:-right-10'>
            <Globe />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Ability = () => {
  return (
    <motion.div>
      <h2 className='z-[2] mb-3 text-4xl font-semibold text-white transition duration-200 group-hover/bento:translate-x-2 sm:text-3xl md:text-3xl'>
        Tech Stack
      </h2>
      <div className='overflow-hidden rounded-md antialiased'>
        <InfiniteMovingCards items={frameworks} direction='left' />
        <InfiniteMovingCards items={databases} direction='right' />
        <InfiniteMovingCards items={infrastructures} direction='left' />
        <InfiniteMovingCards items={languages} direction='right' />
      </div>
      <BackgroundBeams />
    </motion.div>
  );
};
