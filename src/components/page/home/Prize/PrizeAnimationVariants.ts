import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.2
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 } }
};
const imagesContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const imageVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    scale: 0.95,
    x: index % 2 === 0 ? -500 : 500 // Set x to -500 for even indexes, 500 for odd indexes
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeInOut' }
  }
};
export { containerVariants, textVariants, titleVariants, descriptionVariants, imageVariants, imagesContainerVariants };
