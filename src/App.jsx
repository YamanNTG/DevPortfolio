import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div className="bg-[#d2fae5]">
      <Navbar />
      <About />
      <TechStack />
      <Projects />
    </div>
  );
};

export default App;
