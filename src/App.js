import React from "react";

import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  // const ref = {ref1: about, ref2: projects, ref3: skills};
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
