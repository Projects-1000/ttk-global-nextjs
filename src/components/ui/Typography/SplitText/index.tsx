'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  onComplete?: () => void;
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: 'tween',
      ease: 'easeIn'
    }
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.6,
      delay: i * 0.1
    }
  })
};

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 100,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onComplete
}) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasAnimated]);

  return (
    <motion.p
      ref={ref}
      className={`inline-block overflow-hidden ${className}`}
      style={{ textAlign }}
      onAnimationComplete={() => onComplete?.()}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default SplitText;
