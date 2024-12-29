'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
};

export default function NumberCounter({ value, direction = 'up', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 300
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(Number(latest.toFixed(0)));
        }
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}