import React, { useState, useEffect } from "react";
import { links } from "../data";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-[#d2fae5]">
      <div className="align-element py-4 flex flex-col sm:gap-x-16 text-center sm:py-8">
        {/* Main nav content */}
        <div className="mb-6">
          <h1 className="text-7xl font-bold tracking-wider">I'm Claudiu</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
        </div>
      </div>

      {/* Sticky container for links and socials */}
      <div
        className={`${
          isSticky ? "fixed top-0 left-0 right-0" : ""
        } bg-[#c1e9d4] py-4 z-10 shadow-md transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    onClick={handleClick}
                    className="capitalize text-lg font-bold text-slate-700 tracking-wide hover:text-emerald-600 duration-300"
                  >
                    {text}
                  </a>
                );
              })}
            </div>
            {/* Socials */}
            <div className="flex gap-x-6">
              <a
                href="https://github.com/YamanNTG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-8 w-8 text-slate-700 hover:text-emerald-600 duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/claudiu-florin-oprea-365650280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="h-8 w-8 text-slate-700 hover:text-emerald-600 duration-300" />
              </a>
              <a
                href="https://www.instagram.com/claudiu_979/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogoIcon className="h-8 w-8 text-slate-700 hover:text-emerald-600 duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
