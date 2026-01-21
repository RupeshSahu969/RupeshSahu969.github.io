import React from "react";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Skill from "./Skill.jsx";
import Navbar from "./Navbar.jsx";
import { Skill1 } from "./Skill1.jsx";
import Calendar from "./Calendar.jsx";
import Tooles from "./Tooles";

const Main = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="pt-20 md:pt-24">
        <Home />
        <About />
        <Skill />
        <Skill1 />
        <Tooles />
        <Project />
        <Calendar />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
