'use client';
import React, { useState } from 'react';
import targetcartThumb from '@/assets/partner/targetpartner/target-partner-thumb.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TargetPartnerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TargetPartnerCard: React.FC<TargetPartnerCardProps> = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative aspect-square w-full cursor-pointer overflow-hidden"
      onClick={() => setIsFlipped((state) => !state)}
    >
      <motion.div
        className="absolute h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        <Image
          src={targetcartThumb}
          alt="targetcart-thumb"
          width={0}
          height={0}
          sizes="100vw"
          className="inset-0 h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d'
        }}
        className="absolute inset-0 bg-gradient-to-b from-[#202979] via-[#20297980] to-[#202979]/50"
      ></motion.div>

      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="absolute inset-0 flex flex-col justify-between gap-l p-2xl text-greyscale-negative laptop:p-4xl"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="flex flex-col gap-2">
            <div>{icon}</div>
            <h3 className="headline-bold laptop:h2-bold">{title}</h3>
          </div>
          <span className="inline self-end subtitle-bold laptop:hidden">Xem thêm</span>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-4 text-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="subtitle-regular laptop:body-regular">{description}</p>
          <span className="inline self-end subtitle-bold laptop:hidden">Trở về</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TargetPartnerCard;
