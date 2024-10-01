import React from "react";
import contact from "../assets/contact.svg";
import SectionTitle from "./SectionTitle";
const Contact = () => {
  return (
    <section className="align-element flex items-center flex-col">
      <div className="hidden md:block">
        <img src={contact} className="h-80 lg:h-96" />
      </div>
      <article>
        <SectionTitle text="Contact" />
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

export default Contact;
