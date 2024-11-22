'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function Fade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
}: {
  direction: 'up' | 'down' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_VARIANTS = {
    show: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' } },
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 18 : direction === 'right' ? -18 : 0,
      y: direction === 'up' ? 18 : direction === 'down' ? -18 : 0,
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_VARIANTS}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
