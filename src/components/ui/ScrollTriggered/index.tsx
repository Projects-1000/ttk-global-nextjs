import { motion, Variants } from 'framer-motion';

interface ScrollTriggeredProps {
  index: number;
  children: React.ReactNode;
}

export default function ScrollTriggered({ children, index }: ScrollTriggeredProps) {
  const cardVariants: Variants = {
    offscreen: {
      x: index % 2 === 0 ? 3000 : -3000
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 1.2
      }
    }
  };

  return (
    <div className="mx-auto w-full py-10">
      <motion.div
        className="relative mb-[-30px] flex items-center justify-center overflow-hidden pt-5"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="w-full" variants={cardVariants}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
