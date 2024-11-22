import { cn } from '@/libs/utils';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input relative row-span-1 justify-between space-y-4 overflow-hidden rounded-xl border border-b-0 border-slate-700 border-transparent bg-white p-4 px-[3rem] py-[3rem] transition duration-200 hover:shadow-xl sm:px-8 sm:py-6',
        className,
      )}
      style={{
        background:
          'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
      }}
    >
      {header}
      {/* <div className='transition duration-200 group-hover/bento:translate-x-2'>
        {icon}
        <div className='mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
      </div> */}
    </div>
  );
};
