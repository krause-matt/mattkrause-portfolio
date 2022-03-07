import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./app.scss";

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="components">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
