'use client';

import { motion } from 'framer-motion';
import Counter from '../Counter';
import { format, parseISO } from 'date-fns';
import { Meteors } from '../Meteors';
import { IWakaTimeData } from '@/interfaces/wakatime-response';

export const WakaTimeStats = ({ wakaTime }: { wakaTime: IWakaTimeData }) => {
  return (
    <motion.div>
      <div className='z-[2] mx-auto flex flex-col items-center justify-between gap-3 text-center'>
        <div className='transition duration-200 group-hover/bento:translate-x-2'>
          <h2 className='z-[2] mb-3 text-4xl font-semibold text-white sm:text-3xl md:text-4xl'>
            WakaTime
          </h2>
        </div>
        <h2 className='z-[2] my-[2rem] text-center text-7xl font-semibold'>
          <Counter
            from={wakaTime.data.total_seconds / 3600 - 40}
            to={wakaTime.data.total_seconds / 3600}
          />
          <span className='ms-2 text-xl'>Hrs</span>
        </h2>
        <p className='w-40 text-center'>
          Coding Time Since{' '}
          {format(parseISO(wakaTime.data.range.start), 'MMMM d, yyyy')}
        </p>
      </div>
      <Meteors number={20} className='z-[1]' />
    </motion.div>
  );
};
