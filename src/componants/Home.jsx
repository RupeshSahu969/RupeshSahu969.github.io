import React from "react";
import "./style/home.css";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

import {
  Image,
  Stack,
  SimpleGrid,
  Box,
  Heading,
  Flex,
  Text,
  Tooltip,
  Button,
  Link,
  Container,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin, BsMailbox, BsPhone } from "react-icons/bs";
import { arrow } from "./style/theme";
const profile = require("../componants/Assets/mypic1.png");

const Home = () => {
  const imagestyle = {
    width: "90%",
    height: "65%",
  };

  return (
    <>
      {" "}
      <Stack
        id="home"
        mt={["-10px"]}
        w="100%"
        h={{ base: "600px", md: "100vh" }}
        bg="teal"
        pb={3}
      >
        <Flex
          m="auto"
          direction={["column", "column", "row"]}
          h="100%"
          align="center"
          w="100%"
        >
          <Stack
            textAlign="left"
            m="auto"
            spacing={3}
            w={["100%", "100%", "65%", "70%"]}
            h="100%"
            justify="center"
            pl={"10%"}
          >
            <Box w={["30%", "25%", "30%", "20%"]} marginTop="30px">
              <Flex gap={2} bg="teal" p={1} align="center">
                <Heading fontWeight="300" color="white">
                  Hello
                </Heading>
                <Heading className="hand">👋</Heading>
              </Flex>

              <Box style={arrow} bg="white"></Box>
            </Box>
            <Heading fontSize="60px" color="black">
              I'm Rupesh Sahu
            </Heading>
            <Heading fontSize="40px" color="black">
              FrontEnd Web Developer
            </Heading>
            <Flex align="center" gap={2}>
              <a
                // href="Rupesh-Sahu.pdf"
                // download="Rupesh-Sahu.pdf"
              >
                <Button bg="pink" color="white">
                  DownloadCV
                </Button>
              </a>
              <Link
                className="iconlink"
                borderRadius="50%"
                border="1px solid black"
                fontSize="30px"
                href="https://github.com/RupeshSahu969"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link
                className="iconlink"
                borderRadius="50%"
                border="1px solid black"
                fontSize="30px"
                href="https://www.linkedin.com/in/rupesh-sahu-4924a6119/"
                target="_blank"
              >
                <BsLinkedin />
              </Link>
              <Link
                className="iconlink"
                borderRadius="50%"
                border="1px solid black"
                fontSize="30px"
                href="tel:8103490175"
                target="_blank"
              >
                {/* <BsPhone className="icon" /> */}
                <BsTelephoneFill />
              </Link>
              <Link
                className="iconlink"
                borderRadius="50%"
                border="1px solid black"
                fontSize="30px"
                href="mailto:rupeshsahu969@email.com?subject=subject&cc=supeshshau969@gmail.com"
                target="_blank"
              >
                {/* <BsMailbox className="icon" /> */}
                <MdEmail />
              </Link>
            </Flex>
          </Stack>
          <Box
            w={["100%", "100%", "45%", "30%"]}
            h="100%"
            align="center"
            pt={3}
          ></Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
