'use client';

import { useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DefaultButton = ({ text, icon }: { text: string; icon?: any }) => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <button
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-gray-800 bg-gray-950 bg-gradient-to-t from-[#fff] to-secondary-500 bg-clip-text px-6 font-medium text-transparent text-white shadow-2xl transition-all hover:scale-110 focus:scale-110 active:scale-105'
      >
        <div
          className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(194,229,255,.1), #0000000f)`,
          }}
        />
        <span className='flex items-center gap-3 bg-gradient-to-t from-white to-secondary-500 bg-clip-text font-normal text-transparent'>
          {text}
          {icon}
        </span>
      </button>
    </>
  );
};

export default DefaultButton;
