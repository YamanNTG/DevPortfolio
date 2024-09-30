import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";

const App = () => {
  return (
    <div className="bg-[#d2fae5]">
      <Navbar />
      <About />
      <TechStack />
    </div>
  );
};

export default App;
