'use client';
import { containerVariants } from '@/components/page/home/Hero/HeroAnimationVariants';
import { motion, Variants } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface SectionCardProps
  extends Omit<DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'title'> {
  title: string | ReactNode;
  children: ReactNode;
  description?: string;
  customClass?: DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['className'];
}

const SectionCard = ({ children, title, description, customClass, ...props }: SectionCardProps) => {
  return (
    <section
      className={`mobile:py-mobile_section_padding desktop:py-desktop_section_padding ${customClass}`}
      {...props}
    >
      <motion.div
        className="flex flex-col justify-start  gap-l text-start tablet:gap-2xl laptop:items-center laptop:gap-3xl laptop:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
      >
        <motion.h2 className="container uppercase h4-bold tablet:h2-bold laptop:h1-bold z-50" variants={titleVariants}>
          {title}
        </motion.h2>

        {description && (
          <motion.p className="container body-regular mobile:w-full laptop:w-1/2 z-50" variants={descriptionVariants}>
            {description}
          </motion.p>
        )}
      </motion.div>
      <div className="mx-auto mt-xl tablet:mt-2xl laptop:mt-3xl laptop:px-4xl">{children}</div>
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
