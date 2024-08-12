import React from "react";
import { Box, Stack } from "@chakra-ui/react";
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
    <Stack>
      <Box position="fixed" zIndex="1" w="100%" height="5rem">
        <Navbar />
      </Box>
      <Box>
        <Home />
        <About />
        <Skill />
        <Skill1 />
        <Tooles />
        <Project />
        <Calendar />
        <Contact />
      </Box>
    </Stack>
  );
};

export default Main;
