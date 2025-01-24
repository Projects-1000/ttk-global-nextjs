import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const videoVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 1
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const itemVariants: Variants = {
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

export { videoVariants, itemVariants, containerVariants, buttonVariants };
