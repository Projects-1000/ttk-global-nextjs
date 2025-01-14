'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './index.scss';
export type ToolSectionItemProps = {
  isLast: boolean;
  title: string;
  rate?: string;
  description?: string;
  card: React.ReactNode;
};

const ToolSectionItem: React.FC<ToolSectionItemProps> = ({ title, rate, description, card, isLast }) => {
  return (
    <div className="tool-item-container flex w-full gap-xl laptop:gap-4xl">
      <div className="">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex h-2xl w-2xl flex-none items-center justify-center rounded-full border-[2px] border-solid border-primary-default laptop:h-[80px] laptop:w-[80px] laptop:border-[8px]"
        >
          <div className="h-m w-m rounded-full bg-primary-default laptop:h-[30px] laptop:w-[30px]"></div>
        </motion.div>
        {!isLast && (
          <div className="relative h-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="line"
            ></motion.div>
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: isLast ? 0.3 : 0.6 }}
        className="flex flex-auto flex-col gap-m"
      >
        <div className="flex w-full flex-col gap-1">
          <h3 className="text-primary-label headline-bold laptop:h3-bold">{title}</h3>
          {rate && <p className="text-secondary-label body-bold laptop:h4-bold">{rate}</p>}
          {description && <p className="subtitle-regular laptop:body-regular">{description}</p>}
        </div>
        {card}
      </motion.div>
    </div>
  );
};

export default ToolSectionItem;
