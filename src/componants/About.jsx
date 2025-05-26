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
          I am a passionate Full-Stack Developer specializing in crafting
          beautiful, intuitive, and responsive user interfaces as well as
          building efficient backend services. With expertise in React, Chakra UI,
          Node.js, and modern web technologies, I deliver seamless, user-friendly
          applications from front to back.
        </Text>

        <Text fontSize={{ base: "sm", md: "lg" }} lineHeight="1.8" color="gray.700">
          I love collaborating with designers and developers to transform ideas
          into polished products that meet real-world needs. I’m always eager to
          learn new skills and stay updated with the latest trends in both
          frontend and backend development, aiming to build scalable and
          maintainable software solutions.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
