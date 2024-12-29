const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3, 
    },
  },
};

// Define variants for individual cards
const cardVariants  = ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {  duration: 0.8 }, 
  },
});

// Define variants for the text (afterTitle) that appears after NumberCounter
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.5 }, // Delay to show after NumberCounter
  },
};
export { containerVariants, cardVariants, textVariants };