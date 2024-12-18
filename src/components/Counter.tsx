'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  viewMargin?: string;
  from?: number;
  to: number;
}

const Counter = ({
  className,
  viewMargin,
  to,
  from = 0,
}: Props): JSX.Element => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(from);

  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: viewMargin as any });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [motionValue, isInView, to]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current !== null) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            latest.toFixed(0) as any,
          );
        }
      }),
    [springValue],
  );

  return (
    <span ref={ref} className={className}>
      {to.toFixed(0)}
    </span>
  );
};
export default Counter;
