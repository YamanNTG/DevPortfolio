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
          Hi, my name is{" "}
          <span className="font-bold text-slate-800">Claudiu</span>, and I’m a
          <span className="font-bold text-slate-800">
            {" "}
            27-year-old self-taught developer{" "}
          </span>
          with a passion for{" "}
          <span className="text-teal-700 font-semibold">
            {" "}
            building web applications{" "}
          </span>
          . Over the past year and a half, I’ve{" "}
          <span className="font-bold"> immersed myself in coding </span>,
          learning everything from the basics of HTML and CSS to more advanced
          frameworks and tools such as
          <span className="text-teal-700 font-semibold">
            {" "}
            JavaScript, TypeScript, jQuery, React, Tailwind, Next.js, Prisma,
            MongoDB, Git, and GitHub{" "}
          </span>
          . My journey started with{" "}
          <span className="italic"> countless YouTube videos </span>, learning
          platforms, and a series of in-depth courses on Udemy. I’ve developed a
          strong proficiency in front-end technologies and enjoy creating
          responsive, user-friendly interfaces. Now, I’m shifting my focus to
          <span className="text-teal-700 font-semibold">
            {" "}
            mastering the back-end with Node.js, Express, and Nest.js{" "}
          </span>
          to become a well-rounded full-stack developer. I’m committed to{" "}
          <span className="font-bold"> honing my skills </span>
          and delivering{" "}
          <span className="text-teal-700 font-semibold">
            {" "}
            clean, efficient code{" "}
          </span>{" "}
          that powers intuitive applications. In the coming months, I’ll be
          continuing my studies and expanding my skill set with the goal of
          becoming a{" "}
          <span className="font-bold text-slate-800">
            {" "}
            full-stack developer{" "}
          </span>{" "}
          who can confidently handle both{" "}
          <span className="font-bold text-slate-800">
            {" "}
            front-end and back-end tasks{" "}
          </span>
          .
        </p>
      </article>
    </section>
  );
};

export default About;
