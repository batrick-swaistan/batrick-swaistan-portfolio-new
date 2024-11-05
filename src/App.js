import React from "react";
import "./App.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import ConnectMe from "./Components/ConnectMe/ConnectMe";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <ConnectMe />
      <Footer />
    </div>
  );
};

export default App;
