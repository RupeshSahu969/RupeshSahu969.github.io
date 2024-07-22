import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
// import "./style/project.css";
import { arrow } from "./style/theme";

import { FaTelegramPlane, FaGithub } from "react-icons/fa";
const nord = require("../componants/Assets/geek.png");
const bestbuy = require("../componants/Assets/news.png");
const fabbag = require("../componants/Assets/fabbag.png");
const quiz = require("../componants/Assets/quiz.png");
const tata = require("../componants/Assets/tata.png");
const timet = require("../componants/Assets/timet.png");
const horse= require("../componants/Assets/horse.png")
const cardStyle = {
  // borderRadius: "10px",
  // border: "1px Solid black",
  textAlign: "left",
  padding: "5%",
  // boxShadow: " #c3073f 0px 2px 4px 0px inset",
  // backgroundColor: "rgb(166,198,197,0.2)",
  // color: "#1A1A1D",
};
const imgcardstyle = {
  marginTop: "-130px",
};
const Project = () => {
  return (
    <Box id="projects">
      <Box m="auto" w={["50%", "40%", "30%", "15%"]}>
        <Heading bg="teal" fontWeight="300" color="white">
          Projects
        </Heading>
        <Box style={arrow} bg="teal"></Box>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 1, 2]}
        align="center"
        justify="center"
        spacingY={20}
        pt={"5%"}
        pb={"5%"}
        // pl={"100px"}
        // pr={"100px"}
      >
        <Box w="50%" m="auto" className="card">
          <Box w="100%" h="280px" className="imageBox">
            <Image
              src={tata}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Stack w="100%" style={cardStyle}>
            <Heading fontSize="150%">TATA 1mg</Heading>
            <Text>
              online platform, which can be accessed for all your health
              needs.India’s leading digital consumer healthcare platform
            </Text>
            <Text>An Group Project ,Executed in 4 days.</Text>
            <Text>
              Tech Skill used : HTML | CSS | React | Redux | Axios |MongoDB|
              NodeJs| Express |
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/sonuprasad66/omniscient-sheet-6598"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://tata-1mg-clone-sage.vercel.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Box>

        <Box w="50%" m="auto" className="card">
          <Box w="100%" h="280px" className="imageBox">
            <Image
              src={timet}
              w="100%"
              h="100%"
              pb="0"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Stack w="100%" style={cardStyle}>
            <Heading fontSize="150%">Time Tracking</Heading>
            <Text>
              Time tracker Clockify is a time tracker and timesheet app that
              lets you track work hours across projects.
            </Text>
            <Text>An Group Project ,Executed in 4 days.</Text>
            <Text>
              Tech Skill used : HTML | CSS | JavaScript | React |Redux | Axios |
              JSON API
            </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/RupeshSahu969/equable-pleasure-9638"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://timetracker-4jrwp56fe-rupeshsahu969.vercel.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Box>

        <Box w="50%" m="auto" className="card">
          <Box w="100%" h="280px" className="imageBox">
            <Image
              src={nord}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Stack w="100%" style={cardStyle}>
            <Heading fontSize="150%">GeekkBuying - Clone</Heading>
            <Text>
              GeekBuying is an Ecommerce website exclusive to electronic bikes,
              scooters, vacuum cleaners, and laptops
            </Text>
            <Text>An Group Project ,Executed in 5 days.</Text>
            <Text>Tech Skill used : HTML | CSS| Bootstrap | JavaScript</Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/manojkumar968/Geekbuying-clone"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://superlative-cucurucho-0929c4.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Box>

        <Box w="50%" m="auto" className="card">
          <Box w="100%" h="300px" className="imageBox">
            <Image
              src={fabbag}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Stack w="100%" style={cardStyle}>
            <Heading fontSize="150%">Fab-Bag- Clone</Heading>
            <Text>Fab-Bag Website is buying monthly subscrition of makupp</Text>
            <Text>An Group Project ,Executed in 5 days.</Text>
            <Text>Tech Skill used : HTML | CSS| Bootstrap | JavaScript</Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/mdnasirdmt/fab-bag-clone-again"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://fantastic-squirrel-8ca900.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Box>

        <Box w="50%" m="auto" className="card">
          <Box w="100%" h="280px" className="imageBox">
            <Image
              src={quiz}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Stack w="100%" style={cardStyle}>
            <Heading fontSize="150%">Quiz App</Heading>
            <Text>
              Basic Quiz app to test your computer knowledge Also the question
              and its optins changed in every pages reload
            </Text>
            <Text>Simple Project.</Text>
            <Text>Tech Skill used : HTML5 | CSS3| Bootstrap | JavaScript</Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/RupeshSahu969/QuizzApp-javasccript"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://lively-kleicha-dca27e.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Box>

        <Box w="50%" m="auto" className="card">
          <Box w="100%" h="330px" className="imageBox">
            <Image
              src={horse}
              w={{base:"100%",md:"100%"}}
              h={{base:"100%",md:"100%"}}
              
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Stack w="100%" style={cardStyle}>
            <Heading fontSize="150%">horse ride booking</Heading>
            <Text>Horse ride booking system</Text>
            <Text>Simple Project.</Text>
            <Text>Tech Skill used : HTML5 | CSS3| Bootstrap | JavaScript | React | Redux </Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/RupeshSahu969/horse-ride-booking"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text> Code</Text>
                    <FaGithub />
                  </Flex>
                </Link>
              </Button>
              <Button size="xs" colorScheme="red">
                <Link
                  href="https://66948e54c9f4c804c3474c2b--frolicking-melba-84e996.netlify.app/"
                  target="_blank"
                >
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Project;
