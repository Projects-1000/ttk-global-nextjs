'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MoveLeft, MoveRight } from 'lucide-react';
import { containerVariants } from '@/components/page/home/Hero/HeroAnimationVariants';

interface CardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  subtitle: ReactNode;
}

const PartnershipFormCard: React.FC<CardProps> = ({ index, icon, title, subtitle }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className={`flex w-full items-center laptop:w-[50%] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className={`shrink-0 ${index % 2 === 0 ? 'order-2' : 'order-1'} hidden laptop:block`}
      >
        {index % 2 === 0 ? (
          <MoveLeft size={60} className="text-primary-default" />
        ) : (
          <MoveRight size={60} className="text-primary-default" />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay:0.5 }}
        viewport={{ once: true }}
        className={`group flex min-h-full w-full flex-col gap-l rounded-m bg-blue-10 p-xl text-center duration-300 hover:bg-primary-subtle laptop:max-w-[540px] laptop:gap-2xl laptop:bg-white laptop:p-3xl laptop:shadow-2xl laptop:shadow-blue-50 ${
          index % 2 === 0 ? 'order-1' : 'order-2'
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <div className="aspect-square w-[50px] overflow-hidden text-primary-label laptop:w-[75px]">{icon}</div>
          <div className="text-[#3C4BCC]/15 text-blue-100 duration-300 h1-bold group-hover:text-blue-500 laptop:text-[96px] laptop:font-extrabold laptop:leading-none">
            {index + 1 < 10 ? '0' + (index + 1) : index + 1}
          </div>
        </div>
        <div className="flex flex-col gap-m laptop:gap-2xl">
          <div className="text-primary-label headline-bold laptop:h3-bold">{title}</div>
          <div className="text-start text-black subtitle-regular laptop:body-regular">{subtitle}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PartnershipFormCard;
