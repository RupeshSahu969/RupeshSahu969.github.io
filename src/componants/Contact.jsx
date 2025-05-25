import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="contact" bg="gray.900" color="white" py={16} px={{ base: 4, md: 8, lg: 20 }}>
      <Box maxW="900px" mx="auto" textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="teal.300" mb={4}>
          How to Reach Me
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} mb={10} color="gray.300">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your team.
        </Text>

        <Stack direction={isMobile ? "column" : "row"} spacing={8} align="center" justify="center">
          <Link href="tel:8103490175" isExternal _hover={{ color: "teal.300" }}>
            <Flex direction="column" align="center">
              <IconButton
                icon={<IoIosCall />}
                isRound
                size="lg"
                colorScheme="teal"
                aria-label="Phone"
              />
              <Text mt={2}>+91 81034 90175</Text>
            </Flex>
          </Link>

          <Link href="mailto:rupeshsahu969@email.com" isExternal _hover={{ color: "teal.300" }}>
            <Flex direction="column" align="center">
              <IconButton
                icon={<IoMdMail />}
                isRound
                size="lg"
                colorScheme="teal"
                aria-label="Email"
              />
              <Text mt={2}>rupeshsahu969@email.com</Text>
            </Flex>
          </Link>

          <Link href="https://www.linkedin.com/in/rupesh-sahu-4924a6119/" isExternal _hover={{ color: "teal.300" }}>
            <Flex direction="column" align="center">
              <IconButton
                icon={<IoLogoLinkedin />}
                isRound
                size="lg"
                colorScheme="teal"
                aria-label="LinkedIn"
              />
              <Text mt={2}>LinkedIn</Text>
            </Flex>
          </Link>

          <Link href="https://github.com/RupeshSahu969" isExternal _hover={{ color: "teal.300" }}>
            <Flex direction="column" align="center">
              <IconButton
                icon={<BsGithub />}
                isRound
                size="lg"
                colorScheme="teal"
                aria-label="GitHub"
              />
              <Text mt={2}>GitHub</Text>
            </Flex>
          </Link>
        </Stack>

        <Text mt={10} fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Rupesh Sahu. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
