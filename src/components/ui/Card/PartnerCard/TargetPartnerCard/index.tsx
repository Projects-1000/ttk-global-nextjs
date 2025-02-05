'use client';
import React, { useState } from 'react';
import targetcartThumb from '@/assets/partner/targetpartner/targetpartner-thumb.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TargetPartnerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TargetPartnerCard: React.FC<TargetPartnerCardProps> = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle flip on smaller screens
  const handleClick = () => {
    setIsFlipped((state) => !state);
  };

  return (
    <div
      className="relative aspect-square w-full cursor-pointer overflow-hidden"
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setIsFlipped(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setIsFlipped(false);
      }}
      onClick={window.innerWidth <= 768 ? handleClick : undefined}
    >
      <motion.div
        className="absolute h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d'
        }}
        className="absolute inset-0 bg-gradient-to-b from-[#202979] via-[#20297980] to-[#202979]/50"
      ></motion.div>

      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
            <h3 className="headline-bold tablet:h4-bold laptop:h3-bold desktop:h2-bold">{title}</h3>
          </div>
          <span className="inline self-end subtitle-bold active:text-primary-label laptop:hidden" onClick={handleClick}>
            Xem thêm
          </span>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-2xl text-white tablet:p-3xl laptop:p-4xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="subtitle-regular laptop:body-regular">{description}</p>
          <span className="inline self-end subtitle-bold active:text-primary-label laptop:hidden" onClick={handleClick}>
            Trở về
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TargetPartnerCard;
