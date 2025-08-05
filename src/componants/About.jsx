import React from "react";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      id="about"                 // <-- Added id here for scroll target
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.100, white)"
      px={{ base: 4, md: 12 }}
      py={{ base: 8, md: 16 }}
    >
      <VStack maxW="700px" spacing={6} textAlign="center">
        <Heading as="h2" size={{ base: "2xl", md: "3xl" }} color="teal.600" fontWeight="bold">
          About Me
        </Heading>

        <Text fontSize={{ base: "sm", md: "lg" }} lineHeight="1.8" color="gray.700">
          I am a passionate Full-Stack Developer with over 2 years of experience in building
          scalable and efficient web applications. I specialize in both front-end and back-end
          development, with expertise in React, Node.js, Express, and modern web technologies. 
          My focus is on delivering high-quality, user-centric applications that are both
          visually appealing and functionally robust.
        </Text>

        <Text fontSize={{ base: "sm", md: "lg" }} lineHeight="1.8" color="gray.700">
          With a solid understanding of front-end technologies like React and UI frameworks 
          such as Chakra UI , Tailwind CSS, I am able to create seamless and responsive user interfaces. 
          On the back-end, I have extensive experience with Node.js and databases like MongoDB, 
          enabling me to build well-structured, secure, and scalable APIs. My passion for learning 
          and continuous improvement drives me to stay updated with the latest industry trends 
          and best practices.
        </Text>

        
      </VStack>
    </Box>
  );
};

export default About;
