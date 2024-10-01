import { links } from "../data";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
const Navbar = () => {
  return (
    <nav>
      <div className="align-element py-4 flex flex-col md:flex-row md:justify-between items-center sm:gap-x-16 text-center sm:py-8 ">
        {/* Main nav content */}
        <div className="">
          <h1 className="text-7xl font-bold tracking-wider">I'm Claudiu</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-5 mt-5 md:mt-0">
          <div className="flex flex-col md:flex-row gap-x-3 items-center">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg font-bold text-slate-500 tracking-wide hover:text-emerald-600 duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
          {/* Socials */}
          <div className="flex md:flex-row gap-x-4 mt-4">
            <a
              href="https://github.com/YamanNTG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/claudiu-florin-oprea-365650280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a
              href="https://www.instagram.com/claudiu_979/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogoIcon className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

//on mobile => Big title with my name - sitting in the midle - role that i hold under it with lower font size -
// What i build - list of Socials
