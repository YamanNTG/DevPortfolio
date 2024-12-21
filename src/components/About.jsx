import React from "react";
import webdev from "../assets/webdev.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="align-element flex flex-col items-center" id="about">
      <div className="hidden md:block">
        <img src={webdev} className="h-80 lg:h-96" />
      </div>
      <article>
        <SectionTitle text="about me" />
        <p className="text-slate-600 mt-8 leading-loose">
          Hi, I'm <span className="font-bold text-slate-800">Claudiu</span>, a{" "}
          <span className="font-bold text-slate-800">
            27-year-old full-stack developer
          </span>{" "}
          with a passion for{" "}
          <span className="text-teal-700 font-semibold">
            building web applications
          </span>
          . Over the past year and a half, I've gained strong proficiency in
          front-end technologies like{" "}
          <span className="text-teal-700 font-semibold">
            JavaScript, TypeScript, React, Tailwind, and Next.js
          </span>
          . My journey began with{" "}
          <span className="italic">YouTube tutorials</span> and{" "}
          <span className="italic">Udemy courses</span>, and now I've
          successfully mastered back-end development with{" "}
          <span className="text-teal-700 font-semibold">
            Node.js, Express, and MongoDB
          </span>
          . As a{" "}
          <span className="font-bold text-slate-800">full-stack developer</span>
          , I focus on delivering{" "}
          <span className="text-teal-700 font-semibold">
            clean, efficient solutions
          </span>{" "}
          that combine powerful backend systems with engaging user interfaces.
        </p>
      </article>
    </section>
  );
};

export default About;
