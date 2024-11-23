import ordinal from '@/helpers/ordinal';
import timeConvert from '@/helpers/time-convert';
import { AnimationProps, motion } from 'framer-motion';

interface WakaTimeWeek {
  worldRank: number | null;
  countryRank: number | null;
  totalSeconds: number;
  dailyAverage: number;
  languages: Array<{ name: string; total: string }>;
}

export const WakaTimeWeek = ({
  wakaTimeWeek,
}: {
  wakaTimeWeek: WakaTimeWeek;
}) => {
  const initial: AnimationProps['initial'] = { opacity: 0 };
  const animate: AnimationProps['animate'] = {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  };
  const exit: AnimationProps['exit'] = {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2,
    },
  };
  return (
    <motion.div className='grid space-y-5 transition duration-200 group-hover/bento:translate-x-2'>
      <div className='mb-3'>
        <h2 className='text-4xl font-semibold text-white sm:text-3xl md:text-3xl'>
          WakaTime Stats
        </h2>
        <span className='text-white/75'>Last week stats </span>
      </div>
      <motion.ul
        initial={initial}
        animate={animate}
        exit={exit}
        key='waka-stats-11'
        className='grid grid-cols-2 gap-5'
      >
        <li>
          <div className='flex font-semibold'>
            <span className='text-3xl'>
              {wakaTimeWeek.worldRank ?? 'No Data'}
            </span>
            <span className='text-lg'>
              {wakaTimeWeek.worldRank !== null
                ? ordinal(wakaTimeWeek.worldRank)
                : null}
            </span>
          </div>
          <span className='line-clamp-1 text-sm text-white/75'>World Rank</span>
        </li>
        <li>
          <div className='flex font-semibold'>
            <span className='text-3xl'>
              {wakaTimeWeek.countryRank ?? 'No Data'}
            </span>
            <span className='text-lg'>
              {wakaTimeWeek.countryRank !== null
                ? ordinal(wakaTimeWeek.countryRank)
                : null}
            </span>
          </div>
          <span className='line-clamp-1 text-sm text-white/75'>
            {process.env.NEXT_PUBLIC_WAKA_COUNTRY ?? 'Country'} Rank
          </span>
        </li>
        <li>
          <div className='flex items-baseline font-semibold'>
            <span className='text-3xl'>
              {timeConvert(wakaTimeWeek.totalSeconds, 'hours')}
            </span>
            <span className='text-lg'>H&nbsp;</span>
            <span className='text-3xl'>
              {timeConvert(wakaTimeWeek.totalSeconds, 'minutes')}
            </span>
            <span className='text-lg'>M</span>
          </div>
          <span className='line-clamp-1 text-sm text-white/75'>
            Coding Time
          </span>
        </li>
        <li>
          <div className='flex items-baseline font-semibold'>
            <span className='text-3xl'>
              {timeConvert(wakaTimeWeek.dailyAverage, 'hours')}
            </span>
            <span className='text-lg'>H&nbsp;</span>
            <span className='text-3xl'>
              {timeConvert(wakaTimeWeek.dailyAverage, 'minutes')}
            </span>
            <span className='text-lg'>M</span>
          </div>
          <span className='line-clamp-1 text-sm text-white/75'>
            Daily Average
          </span>
        </li>
      </motion.ul>
    </motion.div>
  );
};
