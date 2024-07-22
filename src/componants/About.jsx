import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import mypic1 from "./Assets/mypic1.png";
import "./portfolio.css";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <Box id="about" pt={5} p={10}>
      <div id="profile">
        <div className="container-fluid  p-5  ">
          <div className="row  profile m-4 p-2">
            <h3>About Me</h3>
            <div className="pro1">
              <div>
                <Fade>
                  <div className="col-md-6  my-5 py-5  ">
                    <img
                      src={mypic1}
                      alt="mypic1"
                      style={{
                        width: "800px",
                        borderRadius: "20px",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                      }}
                    />
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
                        <br />I am a passionate and skilled front-end web
                        developer with extensive professional experience. I
                        craft intuitive, responsive, and engaging user
                        interfaces using the latest web technologies. I have
                        strong expertise in frontend development, skilled in
                        building and maintaining web applications with a focus
                        on performance and user experience. Additionally, I am
                        proficient in web technologies, with deep knowledge of
                        HTML, CSS, JavaScript, React, Redux, and React Native.
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
