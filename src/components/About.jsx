import React from "react";
import webdev from "../assets/webdev.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="align-element">
      <div className="hidden md:block">
        <img src={webdev} className="h-80 lg:h-96" />
      </div>
      <article>
        <SectionTitle text="about me" />
        <p className="text-slate-600 mt-8 leading-loose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores
          itaque doloribus asperiores dolorum quas voluptates distinctio, porro
          beatae quam provident libero animi totam, praesentium voluptatem
          corrupti dignissimos ipsum accusantium!
        </p>
      </article>
    </section>
  );
};

export default About;
