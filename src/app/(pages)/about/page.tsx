'use client';

import Main from '@/components/Layouts/Main';
import { useState } from 'react';
import { motion } from 'framer-motion';
import IconScroller from '@/components/Elements/Animation/IconScroller';
import AboutData from '@/data/AboutData';
import aboutData from '@/data/AboutData';

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const icons = AboutData[index].info?.[0]?.icons;
  const duplicatedIcons = icons ? icons.concat(icons) : [];

  return (
    <Main>
      <div className='container mx-auto flex flex-col justify-center items-start xl:flex-row gap-x-32'>
        {/* Text */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1.75 }}
          className='w-full flex flex-1 flex-col justify-center items-center gap-4'
        >
          <h2 className='text-2xl md:text-4xl font-head font-semibold'>
            Creativity in <span className='text-cyan-500'>code</span> creates
            stunning designs.
          </h2>
          <p className='mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            I am a fresh graduate full-stack developer seeking work experience.
            Previously, I completed a full-stack developer bootcamp and
            successfully finished all the assignments given.
          </p>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1.75 }}
          className='w-full flex flex-col xl:max-w-[48%] gap-5'
        >
          <div className='w-full flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 justify-between'>
            {AboutData.map((item, itemIndex) => (
              <div
                key={item.title}
                className={`${
                  index === itemIndex &&
                  'text-cyan-500 after:w-[100%] after:bg-cyan-500 after:transition-all after:duration-300'
                } cursor-pointer xl:text-lg relative after:w-1/2 after:h-[2px] after:bg-current after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='w-full py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='w-full flex flex-1 flex-col md:flex-row max-w-max gap-2 items-center'
              >
                {/* Title */}
                <div className='font-head text-xl'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div className='flex justify-center items-center w-full h-full overflow-hidden py-2'>
                  {/* Icons */}
                  <IconScroller
                    variant='rightToLeft'
                    icons={duplicatedIcons}
                    hoveredIcon={hoveredIcon}
                    setHoveredIcon={setHoveredIcon}
                  />
                  <IconScroller
                    variant='rightToLeft'
                    icons={duplicatedIcons}
                    hoveredIcon={hoveredIcon}
                    setHoveredIcon={setHoveredIcon}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Main>
  );
};

export default AboutPage;
