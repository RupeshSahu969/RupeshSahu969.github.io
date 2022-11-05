import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
import styles from "./header.module.css";
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import mypic1 from "./Assets/mypic1.png"
import "./portfolio.css";
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <Box id="about"  pt={5} p={10}>
      {/* <Box m="auto" w={["30%", "25%", "30%", "20%"]}>
        <Heading fontWeight="300" color="white" bg="pink">
          About Me
        </Heading>

        <Box style={arrow} bg="pink"></Box>
      </Box>
      <Stack
        fontWeight="bold"
        color="#1A1A1D"
        textAlign="justify"
        fontSize="24px"
        w={["98%", "90%", "70%", "60%"]}
        m="auto"
        mt={10}
        p={8}
        borderRadius="8px"
        boxShadow="#c3073f 1.95px 1.95px 2.6px"
      >
        <Text> Hello 🙋‍♀️</Text>
        <Flex gap={3} align="center">
          <Text>As you know I'm</Text>
          <Heading> Rupesh Sahu </Heading>
        </Flex>
        <Text>
          I am Full Stack Web Developer , Having knowledge of MERN Stack
          technology . Collaborative , Proficient in working in team and
          executing goal orianted projects. Looking forward to applying and
          enhancing my skills and knowledge as a developer
        </Text>
      </Stack> */}

<div id="profile">
     <div className='container-fluid  p-5  '>
         <div className="row  profile m-4 p-2">
         <h3>About Me</h3>
         <div className="pro1">
          <div>
         <Fade>
             <div className="col-md-6  my-5 py-5  ">
             <img src={mypic1} className="img-thumbnail " alt="mypic1"/>
             </div>
             </Fade>


             </div>
             <div>
             <Fade right>
             <div className="col-md-6  my-5 py-5">
               {/* <h1 className='text text-center font-weight-bold'>Hello, I am Rupesh Sahu👋</h1> */}
               <div className="pro2">
                <h4>I am Rupesh Sahu</h4>
                 <p>
                  <br/>
                  Dedicated and efficient aspiring full-stack web developer
                  Capable of writing production-ready code. Executing goal
                  oriented projects and learning MERN Stack and Data
                  Structures and Algorithms Eager to tackle web development
                  challenges to achieve lasting impacts on user experience and
                  to grow technical knowledge simultaneously.


                 </p>
               </div>
               {/*  */}
               
             </div>
             </Fade>
             </div>
             </div>
         </div>
     </div>
    </div>

    </Box>
  );
};

export default About;
