import { motion } from 'framer-motion';
import {
  GoRepo,
  GoStar,
  GoGitCommit,
  GoGitPullRequest,
  GoIssueOpened,
  GoGitMerge,
} from 'react-icons/go';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GithubStats = ({ stats }: { stats: any }) => {
  const stargazers = stats.repositories.nodes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((repo: any) => repo.stargazers.totalCount !== 0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
