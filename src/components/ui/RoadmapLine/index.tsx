import { motion, Variants } from 'framer-motion';

const RoadmapLine: React.FC<{ isReverse: boolean }> = ({ isReverse }) => {
  return (
    <motion.div
      className="flex w-[50%] flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
    >
      <motion.div
        className={`relative h-[50px] w-full border-[2px] border-b-0 border-t-0 border-dashed border-primary-lighter laptop:h-[100px] ${
          isReverse ? 'border-l-[2px] border-r-0' : 'border-l-0 border-r-[2px]'
        }`}
        variants={lineVariants(0)} // No delay for the top line
      >
        <motion.div
          className={`absolute -top-2 h-2/3 w-[20px] ${isReverse ? '-left-[10px]' : '-right-[10px]'}`}
          style={{
            background: 'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
            filter: 'blur(5px)'
          }}
          variants={blurVariants(0)} // No delay for the top blur
        ></motion.div>
      </motion.div>

      <motion.div
        className="h-[2px] w-full border-[2px] border-l-0 border-r-0 border-t-0 border-dashed border-primary-lighter"
        variants={middleLineVariants(0.5, isReverse)} // Delay after top line finishes
      ></motion.div>

      <motion.div
        className={`relative h-[50px] w-full border-[2px] border-b-0 border-t-0 border-dashed border-primary-lighter laptop:h-[100px] ${
          !isReverse ? 'border-l-[2px] border-r-0' : 'border-l-0 border-r-[2px]'
        }`}
        variants={lineVariants(1)} // Delay after middle line finishes
      >
        <motion.div
          className={`absolute -bottom-2 h-2/3 w-[20px] ${!isReverse ? '-left-[10px]' : '-right-[10px]'}`}
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
            filter: 'blur(5px)'
          }}
          variants={blurVariants(1)} // Delay after middle blur
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

// Variants with delay parameter
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Stagger the animation of child elements
    }
  }
};

const lineVariants = (delay: number): Variants => ({
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    originY: 0,
    transition: { duration: 0.5, delay, ease: 'linear' }
  }
});

const middleLineVariants = (delay: number, isReverse: boolean): Variants => ({
  hidden: { scaleX: 0, originX: !isReverse ? 1 : 0 }, // Animate from the correct side
  visible: {
    scaleX: 1,
    originX: !isReverse ? 1 : 0,
    transition: { duration: 0.5, delay, ease: 'linear' }
  }
});

const blurVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'linear' }
  }
});

export default RoadmapLine;
