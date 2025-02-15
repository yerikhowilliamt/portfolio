'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import {
  SiAxios,
  SiExpress,
  SiJest,
  SiJsonwebtokens,
  SiLeaflet,
  SiMysql,
  SiNestjs,
  SiNextdns,
  SiNextdotjs,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FaNode } from 'react-icons/fa';

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
            <SiPrisma key='prisma' />,
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
    {
      images: [
        {
          src: '/img 3.jpg',
          width: 800,
          height: 500,
          alt: 'work image',
          title: 'VIDEO BELAJAR RESTful API',
          description:
            'RESTful API for videobelajar with express, nodemailer, jwt token, prisma orm, and MySQL for database',
          projectHref:
            'https://github.com/yerikhowilliamt/mission-advanced-backend-2-A',
          repoHref:
            'https://github.com/yerikhowilliamt/mission-advanced-backend-2-A',
          tech: [
            <SiExpress key='express' />,
            <SiJsonwebtokens key='JWT' />,
            <SiPrisma key='prisma' />,
            <FaNode key='node.js' />,
            <SiMysql key='mysql' />,
          ],
        },
        {
          src: '/img 4.jpg',
          width: 800,
          height: 500,
          alt: 'work image',
          title: 'CONTACT MANAGEMENT RESTful API',
          description:
            'RESTful API for contact management with NestJS, Prisma orm, and PostgreSQL for database',
          projectHref:
            'https://github.com/yerikhowilliamt/restful-api-contact-app',
          repoHref:
            'https://github.com/yerikhowilliamt/restful-api-contact-app',
          tech: [
            <SiNestjs key='nestjs' />,
            <SiPrisma key='prisma' />,
            <FaNode key='node.js' />,
            <BiLogoPostgresql key='postgresql' />,
            <SiTypescript key='typescript' />,
            <SiJest key='jest' />,
          ],
        },
      ],
    },
    {
      images: [
        {
          src: '/img 6.png',
          width: 800,
          height: 500,
          alt: 'work image',
          title: 'Yellow Taxi Dashboard',
          description: `This is the frontend of the Yellow Taxi Trip project, built using Next.js, along with various libraries to enhance the application's UI/UX and functionality.`,
          projectHref: 'https://yellow-taxi-trips.vercel.app',
          repoHref:
            'https://github.com/yerikhowilliamt/yellow-taxi-trip-frontend',
          tech: [
            <SiNextdotjs key='next' />,
            <SiAxios key='axios' />,
            <SiShadcnui key='shadcnui' />,
            <RiTailwindCssFill key='tailwind' />,
            <SiLeaflet key='leaflet' />,
          ],
        },
        {
          src: '/img 5.jpg',
          width: 800,
          height: 500,
          alt: 'work image',
          title: 'Yellow Taxi Dashboard RESTful API',
          description:
            'RESTful API for yellow taxi dashboard with NestJS, and PostgreSQL for database with Postgis for the extension',
          projectHref:
            'https://yellow-taxi-trips.up.railway.app/api/yellow-taxi-trips?page=1&limit=10',
          repoHref:
            'https://github.com/yerikhowilliamt/yellow-taxi-trip-backend',
          tech: [
            <SiNestjs key='nestjs' />,
            <FaNode key='node.js' />,
            <SiAxios key='axios' />,
            <BiLogoPostgresql key='postgresql' />,
            <SiTypescript key='typescript' />,
            <SiJest key='jest' />,
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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer'>
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
                  className='rounded-md absolute w-full h-full object-fill -z-10 '
                />
                <div className='relative w-full h-[250px] transform transition-all ease-in-out duration-500 opacity-0 hover:opacity-100 flex flex-col justify-center items-center'>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    className='absolute top-0 w-full h-full rounded-lg object-fill -z-10  brightness-[15%]'
                  />
                  <div className='flex flex-col justify-between h-full px-5 py-2 w-full'>
                    <div className='flex flex-col justify-center items-center px-0 md:px-10 text-center'>
                      <h3 className='text-lg md:text-2xl font-head font-bold text-cyan-500'>
                        {image.title}
                      </h3>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4'>
                      <p className='text-xs md:text-sm text-white text-center'>
                        {image.description}
                      </p>
                      <span className='flex gap-4 text-white'>
                        {image.tech}
                      </span>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-x-4 gap-y-2 w-full'>
                      <Button
                        onClick={() => handleProjectClick(image.projectHref)}
                        className='w-full gap-2 text-sm md:text-base bg-white text-black hover:text-cyan-500'
                      >
                        Go to project
                        <ChevronsRight />
                      </Button>
                      <Button
                        onClick={() => handleRepoClick(image.repoHref)}
                        className='w-full gap-2 text-sm md:text-base bg-white text-black hover:text-cyan-500'
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
