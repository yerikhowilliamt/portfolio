'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import {
  SiNextdns,
  SiNextdotjs,
  SiShadcnui,
  SiTypescript,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const workData = {
  slides: [
    {
      images: [
        {
          src: '/img 1.png',
          width: 800,
          height: 500,
          alt: 'work image',
          title: 'LIVEPLAY',
          description:
            'This project i use auth.js for authentication and authorization',
          projectHref: 'https://liveplayevents.vercel.app',
          repoHref: 'https://github.com/yerikhowilliamt/liveplay.com',
          tech: [
            <SiNextdotjs key='next' />,
            <SiNextdns key='nextauth' />,
            <BiLogoPostgresql key='postgresql' />,
            <RiTailwindCssFill key='tailwind' />,
            <SiShadcnui key='shadcnui' />,
            <SiTypescript key='typescript' />,
          ],
        },
        {
          src: '/img 2.png',
          width: 800,
          height: 500,
          alt: 'work image',
          title: 'VIDEO BELAJAR',
          description: 'Website for online education course with nextjs',
          projectHref: 'https://videobelajar-course.vercel.app',
          repoHref: 'https://github.com/yerikhowilliamt/videobelajar.app',
          tech: [
            <SiNextdotjs key='next' />,
            <RiTailwindCssFill key='tailwind' />,
            <SiShadcnui key='shadcnui' />,
            <SiTypescript key='typescript' />,
          ],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const router = useRouter();

  const handleProjectClick = (url: string) => {
    router.push(url);
  };

  const handleRepoClick = (url: string) => {
    router.push(url);
  };

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-full'
    >
      {workData.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid md:grid-cols-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => (
              <div
                key={index}
                className='relative rounded-lg overflow-hidden flex items-center justify-center group'
              >
                {/* image */}
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  className='rounded-md absolute w-full h-full object-cover'
                />
                <div className='relative w-full h-[280px] transform transition-all ease-in-out duration-500 opacity-0 hover:opacity-100 z-10 flex flex-col justify-center items-center'>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    className='absolute top-0 w-full h-full rounded-lg object-cover -z-10  brightness-[30%]'
                  />
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col justify-center items-center px-5 md:p-10 text-center gap-y-4'>
                      <h3 className='text-lg md:text-2xl font-head font-bold text-cyan-500'>
                        {image.title}
                      </h3>
                      <p className='text-sm md:text-base text-white'>
                        {image.description}
                      </p>
                      <span className='flex gap-4'>{image.tech}</span>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-x-4 gap-y-2 w-full px-5'>
                      <Button
                        onClick={() => handleProjectClick(image.projectHref)}
                        className='w-full gap-2 text-sm md:text-base bg-white'
                      >
                        Go to project
                        <ChevronsRight />
                      </Button>
                      <Button
                        onClick={() => handleRepoClick(image.repoHref)}
                        className='w-full gap-2 text-sm md:text-base bg-white'
                      >
                        Go to repository
                        <FaGithub />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
