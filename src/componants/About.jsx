import {
  Box,
  Text,
  Heading,
  Stack,
  Flex,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const About = () => {
  // Flex direction is currently unused in the layout, could be used if you want side-by-side layouts.
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box
      id="about"
      py={{ base: 10, md: 16, lg: 20 }}
      px={{ base: 4, md: 8, lg: 16 }}
      bg="gray.50"
      minH="70vh"
    >
      <Flex
        direction="column"
        maxW="900px"
        mx="auto"
        align="center"
        justify="center"
      >
        <Heading
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          mb={{ base: 4, md: 6 }}
          color="teal.600"
          fontWeight="extrabold"
          textAlign="center"
          position="relative"
          _after={{
            content: '""',
            display: "block",
            width: "70px",
            height: "4px",
            bg: "teal.500",
            mx: "auto",
            mt: 3,
            borderRadius: "full",
          }}
        >
          About Me
        </Heading>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          maxW={{ base: "100%", md: "700px" }}
          textAlign="center"
          px={{ base: 2, md: 0 }}
        >
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color="gray.700"
            mb={{ base: 3, md: 4 }}
            lineHeight="tall"
          >
            I’m a <strong>dedicated Frontend & Full Stack Developer</strong> with
            over <strong>2 years of professional experience</strong> crafting
            scalable and performant web applications. My expertise includes
            building modern, responsive user interfaces using{" "}
            <strong>React, Redux, and the MERN stack</strong>, focusing on clean,
            maintainable code and intuitive UX.
          </Text>

          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color="gray.600"
            mb={{ base: 5, md: 6 }}
            lineHeight="tall"
          >
            Over the years, I’ve delivered <strong>15+ successful projects</strong>, ranging
            from complex dashboards to feature-rich e-commerce platforms. I
            believe in writing reusable components, prioritizing accessibility,
            and continuously optimizing performance for a seamless user
            experience.
          </Text>

          <Divider borderColor="teal.200" mb={{ base: 6, md: 8 }} />

          <Box textAlign="left" maxW={{ base: "100%", md: "500px" }} mx="auto" mb={{ base: 6, md: 8 }}>
            <Heading fontSize={{ base: "md", md: "lg", lg: "xl" }} color="teal.600" mb={3}>
              Key Achievements:
            </Heading>
            <Stack spacing={3} color="gray.600" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <Text>✅ Boosted React app performance by up to 40%</Text>
              <Text>✅ Led cross-functional teams delivering projects ahead of deadlines</Text>
              <Text>✅ Built scalable UI component libraries used across teams</Text>
            </Stack>
          </Box>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color="teal.600"
            fontWeight="semibold"
          >
            Excited to tackle new challenges and contribute to impactful projects — let’s create something great together!
          </Text>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default About;
