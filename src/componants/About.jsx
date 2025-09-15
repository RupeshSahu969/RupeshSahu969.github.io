import React from "react";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      id="about"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.100, white)"
      px={{ base: 4, md: 12 }}
      py={{ base: 8, md: 16 }}
    >
      <VStack maxW="750px" spacing={6} textAlign="center">
        <Heading
          as="h2"
          size={{ base: "2xl", md: "3xl" }}
          color="teal.600"
          fontWeight="bold"
        >
          About Me
        </Heading>

        <Text
          fontSize={{ base: "sm", md: "lg" }}
          lineHeight="1.8"
          color="gray.700"
        >
          Hi, I’m Rupesh Kumar Sahu, a Full-Stack Developer who loves turning
          ideas into functional and user-friendly applications. My journey in
          tech started with a deep curiosity for how things work on the web, and
          that curiosity has grown into a strong skillset in modern web
          development.
        </Text>

        <Text
          fontSize={{ base: "sm", md: "lg" }}
          lineHeight="1.8"
          color="gray.700"
        >
          Over the past 2+ years, I’ve built and deployed real-world projects
          ranging from service-based CRMs to 3D visualization platforms. On the
          front-end, I craft seamless interfaces with React, Tailwind CSS, and
          Chakra UI, always keeping usability and performance in mind. On the
          back-end, I design robust APIs with Node.js, Express, and MongoDB to
          ensure scalability and security.
        </Text>

        <Text
          fontSize={{ base: "sm", md: "lg" }}
          lineHeight="1.8"
          color="gray.700"
        >
          What excites me most is solving problems that make a real impact—
          whether that’s automating workflows, visualizing complex data, or
          building apps that people enjoy using. I believe in writing clean,
          maintainable code, collaborating with teams effectively, and
          constantly learning to stay ahead in this ever-evolving tech space.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
