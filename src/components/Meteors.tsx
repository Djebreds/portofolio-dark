'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<
    {
      top: string;
      left: string;
      animationDelay: string;
      animationDuration: string;
    }[]
  >([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      top: '0px',
      left: `${Math.floor(Math.random() * 800) - 400}px`,
      animationDelay: `${Math.random() * 0.6 + 0.2}s`,
      animationDuration: `${Math.random() * 8 + 2}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            'absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className,
          )}
          style={style}
        ></span>
      ))}
    </>
  );
};
