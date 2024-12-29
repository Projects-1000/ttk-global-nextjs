'use client';
import { containerVariants } from '@/components/page/home/Hero/HeroAnimationVariants';
import { motion, Variants } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';

interface SectionCardProps {
  title: ReactNode | string;
  children: ReactNode;
  description?: string;
  props?: HTMLAttributes<HTMLElement>;
}

// const SectionCard = ({ children, title, description, ...props }: SectionCardProps) => {
//   return (
//     <section
//       className="mobile:py-mobile_section_padding flex flex-col gap-2xl mobile:justify-start mobile:gap-l tablet:items-center tablet:gap-3xl desktop:py-desktop_section_padding"
//       {...props}
//     >
//       <h2 className="uppercase h3-bold tablet:h2-bold laptop:h1-bold">{title}</h2>
//       {description && <p className="body-regular mobile:w-full tablet:text-center laptop:w-1/2">{description}</p>}
//       {children}
//     </section>
//   );
// };

const SectionCard = ({ children, title, description, ...props }: SectionCardProps) => {
  return (
    <section className="mobile:py-mobile_section_padding desktop:py-desktop_section_padding" {...props}>
      <motion.div
        className="container flex flex-col justify-start gap-l tablet:items-center tablet:gap-2xl laptop:gap-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
      >
        <motion.h2 className="uppercase h3-bold tablet:h2-bold laptop:h1-bold" variants={titleVariants}>
          {title}
        </motion.h2>

        {description && (
          <motion.p
            className="body-regular mobile:w-full tablet:text-center laptop:w-1/2"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
      <div className="mx-auto mt-l tablet:mt-2xl laptop:mt-3xl">{children}</div>
    </section>
  );
};
const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scaleY: 0,
    originY: 1
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    originY: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

// Variants for Description
const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scaleY: 0,
    originY: 1
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    originY: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.2
    }
  }
};
export default SectionCard;
