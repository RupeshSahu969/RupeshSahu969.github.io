import { Box, Text, Heading, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import { arrow } from "./style/theme";
const About = () => {
  return (
    <Box id="about" pt={5} p={10}>
      <Box m="auto" w={["30%", "25%", "30%", "20%"]}>
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
      </Stack>
    </Box>
  );
};

export default About;
