'use client';
import { TtkFrame } from '@/assets/TtkFrame';
import Button from '@/components/ui/Button/Button';
import SectionCard from '@/components/ui/Card/SectionCard';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const CTASection = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum nibh, porta vitae luctus a, tristique eu ex. Nam hendrerit urna nec erat mattis, et luctus nisl cursus. Phasellus orci arcu, placerat sit amet venenatis ac, mollis eget enim. Donec ut nulla ipsum.';
  return (
    <SectionCard title={<CTASectionTitle />}>
      <div className="relative flex flex-col gap-2xl laptop:gap-3xl">
        <div className="px-2xl laptop:px-4xl">
          <motion.p
            className="z-50 px-mobile_container text-center body-regular laptop:px-desktop_container"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        </div>
        <div className="flex w-full justify-center">
          <Button size="medium" text="Cộng tác ngay" />
        </div>
        <div className="absolute bottom-[0] right-0 -z-10 translate-x-[40%] translate-y-[50%] scale-[0.6] opacity-30">
          <TtkFrame />
        </div>
      </div>
    </SectionCard>
  );
};
const CTASectionTitle = () => (
  <span>
    Bạn muốn
    <span className="text-secondary-label"> hợp tác </span>
    với chúng tôi?
  </span>
);
const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.2
    }
  }
};

export default CTASection;
