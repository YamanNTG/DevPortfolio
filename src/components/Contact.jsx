import React from "react";
import contact from "../assets/contact.svg";
import SectionTitle from "./SectionTitle";
const Contact = () => {
  return (
    <section className="align-element flex items-center flex-col" id="contact">
      <div className="hidden md:block">
        <img src={contact} className="h-80 lg:h-96" />
      </div>
      <article>
        <SectionTitle text="Get in touch" />
        <p className="text-slate-600 mt-8 leading-loose">
          Whether you're looking to{" "}
          <span className="font-bold text-slate-800">
            {" "}
            collaborate on a project{" "}
          </span>
          , have a question, or just want to chat, feel free to reach out! I’m
          always open to
          <span className="text-teal-700 font-semibold">
            {" "}
            discussing new opportunities and ideas{" "}
          </span>
          .
        </p>
        <ul className="mt-4">
          <li className="font-bold text-slate-800">Email: </li>
          <li className="font-bold text-slate-800">LinkedIn:</li>
        </ul>
        <div className="mt-4 flex flex-col items-center capitalize">
          <button className="btn btn-wide bg-teal-700 text-white hover:bg-teal-500 hover:text-yellow-100">
            Download CV
          </button>
          <p className="text-slate-600 leading-loose font-bold mt-5">
            Looking forward to hearing from you!
          </p>
        </div>
      </article>
    </section>
  );
};

export default Contact;
