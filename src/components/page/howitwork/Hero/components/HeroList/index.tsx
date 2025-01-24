'use client';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const HeroList = () => {
  const HERO_ITEMS = [
    <span key={1} className="text-black subtitle-regular laptop:headline-regular">
      Vận hành gian hàng <span className="text-primary-label subtitle-bold laptop:headline-bold">miễn phí</span> cho đến
      khi hòa vốn
    </span>,
    <span key={2} className="text-black subtitle-regular laptop:headline-regular">
      Cam kết <span className="text-primary-label subtitle-bold laptop:headline-bold">hoàn 100% vốn & lãi</span> nếu
      không hài lòng
    </span>,
    <span key={3} className="text-black subtitle-regular laptop:headline-regular">
      Hệ thống quảng cáo độc quyền{' '}
      <span className="text-primary-label subtitle-bold laptop:headline-bold">ACOS trung bình dưới 20%</span>
    </span>
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      },
      delay: 0.5
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return (
    <motion.div
      className="flex flex-col gap-l"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.5 }}
      initial="hidden"
      whileInView="visible"
    >
      {HERO_ITEMS.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          <HeroItem>{item}</HeroItem>
        </motion.div>
      ))}
    </motion.div>
  );
};
const HeroItem: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex gap-[10px]">
    <div className="flex h-[28px] w-[28px] flex-none items-center justify-center">
      <CheckIcon />
    </div>
    {children}
  </div>
);
export default HeroList;
