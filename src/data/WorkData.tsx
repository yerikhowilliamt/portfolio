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
import { FaNode } from 'react-icons/fa';

type WorkDataType = {
  slides: Array<{
    images: Array<{
      src: string;
      height: number;
      width: number;
      alt: string;
      title: string;
      description: string;
      projectHref: string;
      repoHref: string;
      tech: Array<JSX.Element>
    }>
  }>
}

export const workData: WorkDataType = {
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