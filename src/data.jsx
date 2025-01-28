import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiExpress,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export const links = [
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#techstack', text: 'techstack' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in HTML & CSS, creating structured, responsive, and accessible websites that deliver optimal user experiences across all devices.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Tailwind CSS, rapidly building modern and responsive user interfaces with utility-first styling and customization.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in JavaScript, crafting dynamic, interactive web applications with a focus on seamless user experiences and efficient functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Expert in React, building scalable, component-based front-end applications with a strong emphasis on performance and user interface efficiency.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in TypeScript, enhancing JavaScript applications with static typing to improve reliability, maintainability, and scalability.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <RiNextjsFill className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced knowledge of Next.js, developing server-side rendered and statically generated applications for optimal performance and SEO.',
  },
  {
    id: nanoid(),
    title: 'Prisma',
    icon: <SiPrisma className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Prisma, managing databases with a modern ORM to simplify complex queries and streamline database workflows.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: 'Experienced with MongoDB, building and maintaining flexible, NoSQL databases for scalable and high-performance applications.',
  },
  {
    id: nanoid(),
    title: 'Node JS',
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Node.js, developing secure and high-performance server-side applications with RESTful APIs that enable reliable data flow and backend functionality.',
  },
  {
    id: nanoid(),
    title: 'Express JS',
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in Express.js, developing clean and organized web applications with robust routing systems and middleware management for optimal backend performance.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dzilw7kgd/image/upload/v1727812871/DarkUniMusic_nlcftl.png',
    url: 'https://uni-music-delta.vercel.app/',
    github: 'https://github.com/YamanNTG',
    title: 'Uni Music',
    text: 'Uni Music was developed using Next.js, Prisma, and TypeScript, styled with Tailwind, and deployed on Vercel. The platform connects music teachers and students, enabling teachers to create classes that students can book at an hourly rate. It includes features for class management and real-time availability. The project offers a smooth and user-friendly experience for scheduling music lessons.',
    techUsed: [
      <RiNextjsFill className="h-8 w-8 text-emerald-500" />,
      <SiTypescript className="h-8 w-8 text-emerald-500" />,
      <SiTailwindcss className="h-8 w-8 text-emerald-500" />,
      <SiPrisma className="h-8 w-8 text-emerald-500" />,
      <SiMongodb className="h-8 w-8 text-emerald-500" />,
    ],
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dzilw7kgd/image/upload/v1728769155/Academiademuzica_zqwgli.png',
    url: 'https://www.invatamuzica.eu/',
    title: 'Academia de Muzica Daniela Music',
    text: 'The website was built using Next.js, React.js, and Tailwind CSS, with an emphasis on responsive design and user experience. The project included multi-language support. Key takeaways from this project include SEO optimization, custom components, and a smooth user experience across both desktop and mobile platforms. Deployment was managed through Vercel.',
    techUsed: [
      <RiNextjsFill className="h-8 w-8 text-emerald-500" />,
      <SiTailwindcss className="h-8 w-8 text-emerald-500" />,
      <SiReact className="h-8 w-8 text-emerald-500" />,
    ],
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dzilw7kgd/image/upload/v1738025339/TransitTask_rbvlbk.png',
    url: 'https://buss-front.netlify.app/',
    github: 'https://github.com/YamanNTG',
    title: 'TransitTask',
    text: 'TransitTask is a project under development, changes are being pushed constantly so viewers can test the current functionalities. The scope of the project is to create a platform for bus drivers where they can post news, create and track progress on issue and a swap holidays feature between drivers.',
    techUsed: [
      <SiTypescript className="h-8 w-8 text-emerald-500" />,
      <FaNodeJs className="h-8 w-8 text-emerald-500" />,
      <SiExpress className="h-8 w-8 text-emerald-500" />,
      <SiMongodb className="h-8 w-8 text-emerald-500" />,
    ],
  },
];
