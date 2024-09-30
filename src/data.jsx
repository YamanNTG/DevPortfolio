import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const links = [
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#techstack", text: "techstack" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML & CSS, creating structured, responsive, and accessible websites that deliver optimal user experiences across all devices.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Tailwind CSS, rapidly building modern and responsive user interfaces with utility-first styling and customization.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in JavaScript, crafting dynamic, interactive web applications with a focus on seamless user experiences and efficient functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Expert in React, building scalable, component-based front-end applications with a strong emphasis on performance and user interface efficiency.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in TypeScript, enhancing JavaScript applications with static typing to improve reliability, maintainability, and scalability.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <RiNextjsFill className="h-16 w-16 text-emerald-500" />,
    text: "Advanced knowledge of Next.js, developing server-side rendered and statically generated applications for optimal performance and SEO.",
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Prisma, managing databases with a modern ORM to simplify complex queries and streamline database workflows.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Experienced with MongoDB, building and maintaining flexible, NoSQL databases for scalable and high-performance applications.",
  },
];