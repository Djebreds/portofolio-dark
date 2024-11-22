'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { AnimationProps, motion, Transition, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Globe } from './Globe';
import Counter from './Counter';
import { format, parseISO } from 'date-fns';
import ordinal from '@/helpers/ordinal';
import timeConvert from '@/helpers/time-convert';
import {
  GoRepo,
  GoStar,
  GoGitCommit,
  GoGitPullRequest,
  GoIssueOpened,
  GoGitMerge,
} from 'react-icons/go';
import { Meteors } from './Meteors';
import { BackgroundBeams } from './BackgroundBeams';
import { InfiniteMovingCards } from './InfiniteMovingCard';
import {
  databases,
  frameworks,
  infrastructures,
  languages,
} from '@/data/techstack';

interface WakaTimeData {
  data: {
    total_seconds: number;
    text: string;
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: {
      start: string;
      start_date: string;
      start_text: string;
      end: string;
      end_date: string;
      end_text: string;
      timezone: string;
    };
    timeout: number;
  };
}

interface WakaTimeWeek {
  worldRank: number | null;
  countryRank: number | null;
  totalSeconds: number;
  dailyAverage: number;
  languages: Array<{ name: string; total: string }>;
}

interface SolvedProblems {
  allQuestionsCount: Array<{
    difficulty: string;
    count: number;
  }>;
  matchedUser: {
    username: string;
    profile: {
      ranking: number;
    };
    problemsSolvedBeatsStats: Array<{
      difficulty: string;
      percentage: number | null;
    }>;
    submitStatsGlobal: {
      acSubmissionNum: Array<{
        difficulty: string;
        count: number;
        submissions: number;
      }>;
    };
    userCalendar: {
      submissionCalendar: string;
    };
  };
}

export default function Skill({
  section,
  github,
  wakaTime,
  wakaTimeWeek,
  leetCode,
}: {
  section: { title: string; slug: string };
  github: unknown;
  wakaTime: WakaTimeData;
  wakaTimeWeek: WakaTimeWeek;
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

const GithubStats = ({ stats }: { stats: any }) => {
  const stargazers = stats.repositories.nodes
    .filter((repo: any) => repo.stargazers.totalCount !== 0)
    .reduce((prev: any, curr: any) => prev + curr.stargazers.totalCount, 0);

  const currentYear = new Date().getFullYear();

  return (
    <motion.div className='transition duration-200 group-hover/bento:translate-x-2'>
      <div className='mb-10 flex justify-between gap-4 transition duration-200 group-hover/bento:translate-x-2 sm:mb-3 sm:gap-3'>
        <div>
          <h2 className='text-4xl font-semibold text-white sm:text-3xl md:text-4xl'>
            GitHub Stats
          </h2>
        </div>
        <div>
          <div className='opacity-5; mx-3 mb-3 flex flex-1 transform-none justify-end'>
            <svg width='0' height='0'>
              <linearGradient
                id='gh-gradient'
                gradientTransform='rotate(178.11528 0.5 0.5)'
              >
                <stop stopColor='#FFFFFF' offset='0%'></stop>
                <stop stopColor='#223F66' offset='100%'></stop>
              </linearGradient>
            </svg>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              role='img'
              viewBox='0 0 24 24'
              className='h-32 w-32 fill-[url(#gh-gradient)] sm:h-20 sm:w-20'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
            </svg>
          </div>
        </div>
      </div>
      <ul className=''>
        <li className='flex items-center gap-2'>
          <GoRepo />
          <span>{stats.repositories.totalCount} Public Repositories</span>
        </li>
        <li className='flex items-center gap-2'>
          <GoStar />
          <span>
            {stargazers}
            &nbsp;Stars Earned
          </span>
        </li>
        <li className='flex items-center gap-2'>
          <GoGitCommit />
          <span>
            {stats.contributionsCollection.totalCommitContributions}&nbsp;
            Commits ({currentYear})
          </span>
        </li>
        <li className='flex items-center gap-2'>
          <GoGitPullRequest />
          <span>{stats.pullRequests.totalCount} Pull Requests</span>
        </li>
        <li className='flex items-center gap-2'>
          <GoIssueOpened />
          <span>
            {stats.openIssues.totalCount + stats.closedIssues.totalCount}
            &nbsp;Issues
          </span>
        </li>
        <li className='flex items-center gap-2'>
          <GoGitMerge />
          <span>
            {stats.repositoriesContributedTo.totalCount} Contributed to
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

const WakaTimeStats = ({ wakaTime }: { wakaTime: WakaTimeData }) => {
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

const WakaTimeWeek = ({ wakaTimeWeek }: { wakaTimeWeek: WakaTimeWeek }) => {
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

const LeetCodeStats = ({ data }: { data: SolvedProblems }) => {
  const transition: Transition = {
    type: 'spring',
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  };

  const username = data.matchedUser.username;

  const allProblems = data.allQuestionsCount.filter(
    (val) => val.difficulty !== 'All',
  );

  const solvedProblems =
    data.matchedUser.submitStatsGlobal.acSubmissionNum.filter(
      (val) => val.difficulty !== 'All',
    );

  const solvedBeats = data.matchedUser.problemsSolvedBeatsStats.filter(
    (val) => val.difficulty !== 'All',
  );

  const progress = solvedProblems.map((val, i) => ({
    background:
      val.difficulty === 'Easy'
        ? 'bg-teal-900'
        : val.difficulty === 'Medium'
          ? 'bg-yellow-900'
          : 'bg-rose-900',
    foreground:
      val.difficulty === 'Easy'
        ? 'bg-teal-500'
        : val.difficulty === 'Medium'
          ? 'bg-yellow-500'
          : 'bg-rose-500',
    percentage: (val.count / allProblems[i].count) * 100,
  }));

  const submissions = Object.values(
    JSON.parse(data.matchedUser.userCalendar.submissionCalendar) as Record<
      string,
      number
    >,
  ).reduce((prev, curr) => prev + curr, 0);

  const currentYear = new Date().getFullYear();

  return (
    <motion.div className='transition duration-200 group-hover/bento:translate-x-2'>
      <div className='grid gap-5'>
        <div className='flex flex-col justify-between sm:flex-row'>
          <div>
            <h2 className='text-4xl font-semibold text-white sm:text-3xl md:text-3xl'>
              LeetCode
            </h2>
            <div className='flex text-lg'>
              <span className='text-white/75'>Rank&nbsp;</span>
              <span className='font-semibold'>
                {data.matchedUser.profile.ranking.toLocaleString()}
              </span>
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-white sm:text-3xl md:text-3xl'>
            {username}
          </h2>
        </div>
        <div className='flex justify-between sm:flex-col md:flex-row'>
          <div>
            <span className='font-semibold'>{submissions}</span>
            <span className='text-white/75'>
              &nbsp;Submissions ({currentYear})
            </span>
          </div>
          <div>
            <span className='font-semibold'>
              {data.matchedUser.submitStatsGlobal.acSubmissionNum[0].count}
            </span>
            <span className='text-white/75'>&nbsp;Solved</span>
          </div>
        </div>
        {solvedProblems.map((problem, i) => (
          <div key={i}>
            <div className='flex items-baseline sm:justify-between lg:justify-normal'>
              <span className='w-16 text-sm text-white/75'>
                {problem.difficulty}
              </span>
              <div className='flex flex-1 items-baseline gap-1 sm:flex-none lg:flex-1'>
                <span className='font-semibold'>{problem.count}</span>
                <span>/</span>
                <span className='text-sm text-white/75'>
                  {allProblems[i].count}
                </span>
              </div>
              <div className='block sm:hidden lg:block'>
                {solvedBeats[i].percentage !== null ? (
                  <>
                    <span className='text-sm text-white/75'>Beats&nbsp;</span>
                    <span className='font-semibold'>
                      {solvedBeats[i].percentage?.toFixed(2)}%
                    </span>
                  </>
                ) : (
                  <span className='text-sm text-white/75'>Not enough data</span>
                )}
              </div>
            </div>
            <div
              className={`h-2 w-full overflow-hidden rounded-full ${progress[i].background}`}
            >
              <motion.div
                initial={{ width: 0 }}
                viewport={{ once: true }}
                whileInView={{ width: `${progress[i].percentage}%` }}
                transition={transition}
                className={`h-full ${progress[i].foreground}`}
              />
            </div>
          </div>
        ))}
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
