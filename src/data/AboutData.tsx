import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMysql, SiPrisma, SiExpress, SiNestjs, SiJest, SiAxios } from 'react-icons/si';
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
        title: 'Frontend',
        icons: [
          { name: 'HTML', icon: <FaHtml5 /> },
          { name: 'CSS', icon: <FaCss3 /> },
          { name: 'JavaScript', icon: <FaJs /> },
          { name: 'TypeScript', icon: <SiTypescript /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'React.js', icon: <FaReact /> },
          { name: 'Next.js', icon: <SiNextdotjs /> },
          { name: 'Git', icon: <FaGitAlt /> },
          { name: 'Bootstrap', icon: <FaBootstrap /> },
          { name: 'Tailwind', icon: <RiTailwindCssFill /> },
        ],
      },
      {
        title: 'Backend',
        icons: [
          { name: 'JavaScript', icon: <FaJs /> },
          { name: 'TypeScript', icon: <SiTypescript /> },
          { name: 'MySQL', icon: <SiMysql /> },
          { name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
          { name: 'Prisma', icon: <SiPrisma /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Axios', icon: <SiAxios /> },
          { name: 'Express.js', icon: <SiExpress /> },
          { name: 'NestJs', icon: <SiNestjs /> },
          { name: 'Jest', icon: <SiJest /> },
          { name: 'Git', icon: <FaGitAlt /> },
        ]
      }
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
