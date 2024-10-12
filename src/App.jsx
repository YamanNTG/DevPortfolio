import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { Cloudinary } from "@cloudinary/url-gen";

const App = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzilw7kgd", // Cloud name
    },
  });

  return (
    <div className="bg-[#d2fae5]">
      <Navbar />
      <About />
      <TechStack />
      <Projects />
      <Contact cloudinary={cld} />
    </div>
  );
};

export default App;
