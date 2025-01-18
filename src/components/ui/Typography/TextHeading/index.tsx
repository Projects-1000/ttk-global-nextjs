'use client';

import { motion } from 'framer-motion';

interface TextHeadingProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export default function TextHeading({
  children,
  className = '',
  backgroundColor = 'from-primary-subtle',
  borderColor = 'border-primary-default'
}: TextHeadingProps) {
  return (
    <div className="flex items-center">
      <h2
        className={`relative border border-b-0 border-l-[2px] border-r-0 border-t-0 border-solid laptop:border-l-[4px] ${borderColor} pl-1 ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className={`absolute inset-y-0 left-0 top-0 bg-gradient-to-r ${backgroundColor} to-white`}
          initial={{ width: '0%' }}
          whileInView={{
            width: '25%'
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut'
          }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </h2>
    </div>
  );
}
