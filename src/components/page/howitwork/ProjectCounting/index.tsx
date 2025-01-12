'use client';
import SectionCard from '@/components/ui/Card/SectionCard';
import { motion } from 'framer-motion';
import React from 'react';
import { containerVariants } from '../../home/About/AboutAnimationVariants';

const progressBarVariants = {
  hidden: {
    width: '0%'
  },
  visible: {
    width: '100%',
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

const textVariants = {
  hidden: {
    color: '#2A36A2'
  },
  visible: {
    color: '#ffffff',
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

const ProjectCounting = () => {
  const description =
    'Trong năm 2025, TTK Global Ventures đang hướng đến mục tiêu tiếp nhận và triển khai tổng số 20 dự án với các đối tác.';
  return (
    <SectionCard customClass="container" title={<ProjectCountingTitle />} description={description}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex h-[75px] w-full items-center overflow-hidden rounded-full bg-blue-100 text-sm font-semibold text-greyscale-negative body-bold laptop:h-[75px] laptop:h3-bold"
      >
        <div className="relative flex h-full w-3/5 items-center justify-center rounded-full px-l text-center">
          <motion.span className="z-20" variants={textVariants}>
            Đã tiếp nhận 12 dự án
          </motion.span>
          <motion.div
            className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-blue-600 px-l text-center"
            variants={progressBarVariants}
          ></motion.div>
        </div>
        <div className="flex h-full w-2/5 items-center justify-center px-l text-center text-blue-600">Còn 8 dự án</div>
      </motion.div>
    </SectionCard>
  );
};

const ProjectCountingTitle = () => (
  <span className="uppercase h3-bold laptop:h1-bold">
    <span className="text-secondary-label">Dự án </span>được triển khai
  </span>
);

export default ProjectCounting;
