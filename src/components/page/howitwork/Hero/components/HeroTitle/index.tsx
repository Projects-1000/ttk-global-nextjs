'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const HeroTitle = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8 }}
    variants={titleVariants}
    className="uppercase h3-bold laptop:h1-bold"
  >
    Hợp tác kinh doanh
    <span className="hidden text-primary-label h3-light tablet:inline"> (cùng TTK Global Ventures)</span>
    <span className="text-secondary-label"> TMĐT quốc tế </span>
  </motion.div>
);
const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};
export default HeroTitle;
