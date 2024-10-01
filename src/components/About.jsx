import React from "react";
import webdev from "../assets/webdev.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="align-element flex flex-col items-center">
      <div className="hidden md:block">
        <img src={webdev} className="h-80 lg:h-96" />
      </div>
      <article>
        <SectionTitle text="about me" />
        <p className="text-slate-600 mt-8 leading-loose">
          Hi, I’m <span className="font-bold text-slate-800">Claudiu</span>, a
          <span className="font-bold text-slate-800">
            {" "}
            27-year-old self-taught developer{" "}
          </span>
          with a passion for{" "}
          <span className="text-teal-700 font-semibold">
            {" "}
            building web applications{" "}
          </span>
          . Over the past year and a half, I’ve gained strong proficiency in
          front-end technologies like
          <span className="text-teal-700 font-semibold">
            {" "}
            JavaScript, TypeScript, React, Tailwind, Next.js, and MongoDB{" "}
          </span>
          . My journey began with{" "}
          <span className="italic"> YouTube tutorials </span> and
          <span className="italic"> Udemy courses </span>, and now I’m focused
          on mastering back-end development with
          <span className="text-teal-700 font-semibold">
            {" "}
            Node.js, Express, and Nest.js{" "}
          </span>
          . My goal is to become a versatile{" "}
          <span className="font-bold text-slate-800">
            {" "}
            full-stack developer{" "}
          </span>
          , capable of delivering{" "}
          <span className="text-teal-700 font-semibold">
            {" "}
            clean, efficient code{" "}
          </span>{" "}
          across the entire stack.
        </p>
      </article>
    </section>
  );
};

export default About;
