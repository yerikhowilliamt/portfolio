import { motion } from 'framer-motion';

type IconScrollerProps = {
  icons: Array<{ name: string; icon: JSX.Element }>;
  hoveredIcon: string | null;
  setHoveredIcon: (iconName: string | null) => void;
  variant: 'leftToRight' | 'rightToLeft';
};

const IconScroller: React.FC<IconScrollerProps> = ({
  icons,
  hoveredIcon,
  setHoveredIcon,
  variant,
}) => {
  const initial = variant === 'leftToRight' ? { x: '-50%' } : { x: 0 };
  const animate = variant === 'leftToRight' ? { x: 0 } : { x: '-50%' };

  return (
    <motion.div
      className='flex whitespace-nowrap'
      initial={initial}
      animate={animate}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {icons.map((icon, iconIndex) => (
        <div
          key={iconIndex}
          className='text-2xl mx-5 hover:text-cyan-500 hover:border-cyan-500 hover:scale-110 hover:transition-all ease-in-out duration-300 border relative flex flex-col justify-center items-center gap-2 py-1 px-3 w-20 h-20 rounded-md dark:bg-neutral-500/10 bg-neutral-500 text-white'
          onMouseEnter={() => setHoveredIcon(icon.name)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {icon.icon}
          <span className='text-sm text-center'>
            {icon.name}
          </span>
        </div>
      ))}
    </motion.div>
  )
};

export default IconScroller;
