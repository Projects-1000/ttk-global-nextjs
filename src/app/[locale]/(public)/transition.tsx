'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Transition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center gap-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
