'use client';

import { ISolvedProblems } from '@/interfaces/leetcode-response';
import { motion, Transition } from 'framer-motion';

export const LeetCodeStats = ({ data }: { data: ISolvedProblems }) => {
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
