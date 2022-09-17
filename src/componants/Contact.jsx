import { Box, Flex, Heading, Text, Stack,Link } from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { Button } from "react-scroll";
import { arrow } from "./style/theme";
import styles from "./header.module.css";
import Slide from "react-reveal/Slide";

const Contact = () => {
  const iconstyle = {
    borderRadius: "30% 5% 30% 5%",

    padding: 3,
  };
  const iconhover = {
    // transform: "",
  };
  return (
    <Box id="contact" pb={10} pt={10}>
      <Box m="auto">
        {/* <Heading bg="whitesmoke" fontWeight="300" color="pink">
          Contact Me
        </Heading> */}
        {/* <Box style={arrow} bg="whitesmoke"></Box> */}
      </Box>

      {/* <Heading color="whitesmoke" m="2%">
        Rupesh Sahu
      </Heading> */}
      {/* <Flex
        fontSize="34px"
        align="center"
        justify="center"
        gap={12}
        color="white"
      >

        
        <Box style={iconstyle} _hover={iconhover}>
          
          <IoIosCall/>
            
          
        </Box>
        <Box style={iconstyle} _hover={iconhover}>
          <IoMdMail />
        </Box>
        <Box style={iconstyle} _hover={iconhover}>
          <IoLogoLinkedin />
        </Box>
      </Flex> */}
      <div id="footer">
      <div className={styles.footer}>
        <h1 className="text text-center h1 my-3 p-3">
         
          <u>HOW TO REACH ME</u>
        </h1>
        <div className="container my-4 ">
          <div className="row">
            <div className="col-xl-6 py-4 ">
              <div className={styles.footer_image}>
                <div>
                <Slide left>
                  <img
                    src="contactgif.webp"
                    alt="contact"
                  />
                </Slide>
                </div>
                <div>
                  <p className="text h5 ">Contact Me:</p>
                  <h2 className="text  "> 
                  <a href="tel:8103490175" className="text-reset text-decoration-none">8103490175</a></h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6 py-4 ">
              <h2 className="text">FEEL FREE TO REACH OUT TO ME</h2>
              {/* <p className="text">
                I am always open to discuss about my project or any other
                project.let's get in touch and make something amazing together.
              </p> */}
              <div className={styles.footer_maindiv}>
                <Slide right>
                  <div>
                    <a href="https://github.com/RupeshSahu969" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="white"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                        target="_blank"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/rupesh-sahu-4924a6119/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="white"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                        target="_blank"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:rupeshshau969@email.com" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="white"
                        class="bi bi-envelope-open-fill"
                        viewBox="0 0 16 16"
                        
                      >
                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
                      </svg>
                    </a>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="byname">
      
      </div>
    </div>
    </Box>



  );
};

export default Contact;
