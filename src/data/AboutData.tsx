import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMysql, SiPrisma, SiExpress, SiNestjs, SiJest } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';

type AboutDataType = {
  title: string;
  info?: Array<{
    title?: string;
    icons?: Array<{
      name: string;
      icon: JSX.Element;
    }>;
  }>;
};

const aboutData: AboutDataType[] = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          { name: 'HTML', icon: <FaHtml5 /> },
          { name: 'CSS', icon: <FaCss3 /> },
          { name: 'JavaScript', icon: <FaJs /> },
          { name: 'TypeScript', icon: <SiTypescript /> },
          { name: 'React.js', icon: <FaReact /> },
          { name: 'Next.js', icon: <SiNextdotjs /> },
          { name: 'MySQL', icon: <SiMysql /> },
          { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
          { name: 'Prisma', icon: <SiPrisma /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Express.js', icon: <SiExpress /> },
          { name: 'NestJs', icon: <SiNestjs /> },
          { name: 'Jest', icon: <SiJest /> },
          { name: 'Git', icon: <FaGitAlt /> },
          { name: 'Bootstrap', icon: <FaBootstrap /> },
          { name: 'Tailwind', icon: <RiTailwindCssFill /> },
        ],
      },
    ],
  },
  {
    title: 'Experience',
    info: [
      {
        title: 'Fresh Graduate',
      },
    ],
  },
  {
    title: 'Credentials',
    info: [
      {
        title: 'Not Available',
      },
    ],
  },
];

export default aboutData;
