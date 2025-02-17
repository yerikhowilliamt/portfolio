'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { workData } from '@/data/WorkData';

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
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
    >
      {workData.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer bg-neutral-400/85 backdrop-blur-sm px-12 pb-8 pt-6 rounded-md border -z-10'>
            {slide.images.map((image, index) => (
              <div
                key={index}
                className='relative rounded-lg overflow-hidden flex items-center justify-center group shadow-2xl shadow-black'
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
