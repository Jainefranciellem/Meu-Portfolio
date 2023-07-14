import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";


const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Frontend />
      <Backend />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;