'use client';
import { containerVariants } from '@/components/page/home/Hero/HeroAnimationVariants';
import { motion, Variants } from 'framer-motion';
import { DetailedHTMLProps, ReactNode } from 'react';

interface SectionCardProps
  extends Omit<DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'title'> {
  title?: string | ReactNode;
  children: ReactNode;
  description?: string | ReactNode;
  customClass?: DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['className'];
  isPaddingContent?: boolean;
}

const SectionCard = ({
  children,
  title,
  description,
  customClass,
  isPaddingContent = false,
  ...props
}: SectionCardProps) => {
  return (
    <section
      className={`relative w-full max-w-[1440px] mobile:py-mobile_section_padding desktop:py-desktop_section_padding ${customClass}`}
      {...props}
    >
      <motion.div
        className="flex flex-col justify-start gap-l text-start tablet:gap-2xl laptop:items-center laptop:gap-3xl laptop:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
      >
        <motion.div className="container z-50 w-full h4-bold tablet:h2-bold laptop:h1-bold" variants={titleVariants}>
          {title}
        </motion.div>

        {description && (
          <motion.p
            className="container z-50 w-full body-regular mobile:w-full laptop:w-1/2"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
      <div
        className={`mx-auto mt-xl ${!title && !description && 'tablet:mt-2xl laptop:mt-3xl'} ${isPaddingContent ? 'laptop:px-4xl' : ''}`}
      >
        {children}
      </div>
    </section>
  );
};
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

// Variants for Description
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
export default SectionCard;
