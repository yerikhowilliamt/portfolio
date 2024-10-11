'use client';

/* eslint-disable react/no-unescaped-entities */
import ProjectButton from '@/components/Elements/ProjectButton/ProjectButton';
import Main from '@/components/Layouts/Main';
import { motion } from 'framer-motion';
import Avatar from '@/components/Elements/Avatar/Avatar';

export default function Home() {
  return (
    <Main>
      <div className='flex w-full h-full justify-center pr-16'>
        {/* Text */}
        <div className='relative flex w-full h-full'>
          <div className='w-full static xl:absolute top-0 flex flex-col gap-8'>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1.75 }}
              className='text-xl md:text-3xl xl:text-6xl font-bold md:max-w-md xl:max-w-4xl mx-auto xl:mx-0'
            >
              Innovative Web Developer. <br />
              Turning Ideas into Websites{' '}
              <span className='text-cyan-500'>Modern Web Technologies</span>
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1.75 }}
              className='md:max-w-md xl:max-w-4xl mx-auto xl:mx-0 text-sm md:text-base text-justify'
            >
              I am a dedicated web developer currently immersed in a full-stack
              bootcamp, where I'm honing my skills in both front-end and
              back-end technologies. With a strong foundation in HTML, CSS,
              JavaScript, and popular frameworks, I am committed to delivering
              innovative solutions that meet the needs of users and clients
              alike.
            </motion.p>
            <div className='flex justify-center xl:hidden relative'>
              <ProjectButton />
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 1.75 }}
              className='hidden xl:block'
            >
              <ProjectButton />
            </motion.div>
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1.75 }}
          className='relative w-full lg:w-[520px] lg:h-[320px] xl:w-[320px] xl:h-[320px] lg:right-0 hidden lg:block'
        >
          <Avatar />
        </motion.div>
      </div>
    </Main>
  );
}
