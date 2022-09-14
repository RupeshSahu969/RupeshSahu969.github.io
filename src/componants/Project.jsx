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
import "./style/project.css";
import { arrow } from "./style/theme";

import { FaTelegramPlane, FaGithub } from "react-icons/fa";
const nord = require("../componants/Assets/geek.png");
const bestbuy = require("../componants/Assets/news.png");

const cardStyle = {
  borderRadius: "10px",
  // border: "1px Solid black",
  textAlign: "left",
  padding: "5%",
  boxShadow: " #c3073f 0px 2px 4px 0px inset",
  backgroundColor: "rgb(166,198,197,0.2)",
  color: "#1A1A1D",
};
const imgcardstyle = {
  marginTop: "-130px",
};
const Project = () => {
  return (
    <Box id="projects">
      <Box m="auto" w={["50%", "40%", "30%", "15%"]}>
        <Heading bg="pink" fontWeight="300" color="white">
          Projects
        </Heading>
        <Box style={arrow} bg="pink"></Box>
      </Box>
      <SimpleGrid
        columns={[1, 1, 1, 1, 2]}
        align="center"
        justify="center"
        spacingY={10}
        pt={"5%"}
        pb={"5%"}
      >
        <Box w="70%" m="auto" className="card">
          <Stack w="100%" h={"370px"} style={cardStyle}>
            <Heading fontSize="150%">GeekkBuying - Clone</Heading>
            <Text>
              
            GeekBuying is an Ecommerce website exclusive to electronic
              bikes, scooters, vacuum cleaners, and laptops
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
                <Link href="https://superlative-cucurucho-0929c4.netlify.app/" target="_blank">
                  <Flex align="center" gap={2}>
                    <Text>Live</Text>
                    <FaTelegramPlane />
                  </Flex>
                </Link>
              </Button>
            </Flex>
          </Stack>
          <Box w="90%" h="330px" className="imageBox" style={imgcardstyle}>
            <Image
              src={nord}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
        </Box>
        <Box w="70%" m="auto" className="card">
          <Stack w="100%" h={"370px"} style={cardStyle}>
            <Heading fontSize="150%">Deccan Herald</Heading>
            <Text>
            Deccan Herald brings breaking news today’s Live News
On Sports, Business, Technology, Entertainment
            </Text>
            <Text>
            Individual Project
            </Text>
            <Text>Tech Skill used : HTML | CSS | JavaScript | React | Axios | JSON API</Text>
            <Flex gap={3} align="center">
              <Button size="xs" colorScheme="green">
                <Link
                  href="https://github.com/RupeshSahu969/Deccan-Herald-"
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
                  href="https://deccannews-51i0xzhrs-rupeshsahu969.vercel.app/"
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
          <Box w="90%" h="330px" className="imageBox" style={imgcardstyle}>
            <Image
              src={bestbuy}
              w="100%"
              h="100%"
              pb="0"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Project;
