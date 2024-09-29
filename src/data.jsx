import { nanoid } from "nanoid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const socials = [
  {
    id: nanoid(),
    href: "#git",
    icon: <FaGithub />,
  },
  {
    id: nanoid(),
    href: "#linked",
    icon: <FaLinkedin />,
  },
  {
    id: nanoid(),
    href: "#instag",
    icon: <FaSquareInstagram />,
  },
];
