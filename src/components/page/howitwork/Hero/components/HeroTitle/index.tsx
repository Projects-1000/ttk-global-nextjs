'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const HeroTitle = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8 }}
    variants={titleVariants}
    className="flex justify-start gap-x-m"
  >
     <p className="uppercase h4-bold tablet:h3-bold laptop:h1-bold desktop:basis-1/2">
      Hợp tác kinh doanh
      <br />
      <span className="text-secondary-label"> TMĐT quốc tế </span>
    </p>
    <span className="mt-3 hidden text-primary-label tablet:inline laptop:h4-light desktop:h3-light">
      (cùng TTK Global Ventures)
    </span>
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
