import { motion } from 'framer-motion';

const AnimatedDots = () => {
  const dotCount = 30; 
  const dotElements = Array.from({ length: dotCount }, (_, index) => (
    <motion.div
      key={index}
      className='w-4 h-4 bg-cyan-500 rounded-full'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 50, opacity: 1 }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: index * 0.1,
      }}
    />
  ));

  return (
    <div className='w-full h-full flex items-center'>
      <div className='w-full h-1/2 flex justify-center items-center gap-4'>
        {dotElements}
      </div>
    </div>
  );
};

export default AnimatedDots;
