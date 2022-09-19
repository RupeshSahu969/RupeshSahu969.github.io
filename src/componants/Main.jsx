import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Skill from "./Skill.jsx";
import Navbar from "./Navbar.jsx";
import { Skill1 } from "./Skill1.jsx";

const Main = () => {
  return (
    <Stack>
      <Navbar />
      <Box>
        <Home />
        <About />
        {/* <Profile/> */}
        <Skill />
        <Skill1/>
        <Project />
        <Contact />
        {/* <Footer/> */}
      </Box>
    </Stack>
  );
};

export default Main;
