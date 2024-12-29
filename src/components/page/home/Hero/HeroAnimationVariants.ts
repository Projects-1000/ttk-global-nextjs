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

const imageVariants: Variants = {
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

const logosVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const infinityScrollContainerVariants = {
  animate: {
    x: ['0%', '-100%'], // Animate from left to right
    transition: {
      x: {
        repeat: Infinity, // Infinite loop
        repeatType: 'loop',
        duration: 30, // Duration of one scroll (adjust as needed)
        ease: 'linear' // Linear scroll
      }
    }
  }
};

export { imageVariants, itemVariants, containerVariants, logosVariants, infinityScrollContainerVariants };
