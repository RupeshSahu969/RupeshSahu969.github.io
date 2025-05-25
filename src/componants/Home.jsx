import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import mypic1 from "../componants/Assets/mypic1.png";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const Home = () => {
  const flexDirection = useBreakpointValue({ base: "column-reverse", md: "row" });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (
    <Box
      id="home"
      bgGradient="linear(to-r, gray.900, gray.800)"
      color="white"
      px={{ base: 4, md: 8, lg: 16 }}
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Flex
        direction={flexDirection}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={12}
        w="full"
        flexWrap="wrap"
        py={{ base: 12, md: 0 }}
      >
        {/* Left: Text Content */}
        <Stack spacing={6} flex="1" textAlign={textAlign}>
          <MotionFlex
            justify={textAlign}
            gap={2}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Heading size="md" fontWeight="normal" color="teal.300">
              Hello, I'm
            </Heading>
            <Text fontSize="2xl" className="hand">👋</Text>
          </MotionFlex>

          <Heading size="2xl" lineHeight="1.2">
            Rupesh Sahu
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
            Frontend Web Developer crafting scalable UIs using React, Redux, and modern toolchains.
          </Text>

          <Flex
            gap={4}
            justify={textAlign}
            flexWrap="wrap"
            align="center"
            mt={4}
          >
            {/* <Button
              bg="teal.400"
              color="white"
              _hover={{ bg: "teal.500" }}
              size="lg"
              as="a"
              href="#"
              download
            >
              Download CV
            </Button> */}
            <IconButton
              as={Link}
              href="https://github.com/RupeshSahu969"
              isExternal
              icon={<BsGithub />}
              aria-label="GitHub"
              borderRadius="full"
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/rupesh-sahu-4924a6119/"
              isExternal
              icon={<BsLinkedin />}
              aria-label="LinkedIn"
              borderRadius="full"
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
            />
            <IconButton
              as={Link}
              href="tel:8103490175"
              icon={<BsTelephoneFill />}
              aria-label="Phone"
              borderRadius="full"
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
            />
            <IconButton
              as={Link}
              href="mailto:rupeshsahu969@email.com"
              icon={<MdEmail />}
              aria-label="Email"
              borderRadius="full"
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
            />
          </Flex>
        </Stack>

        {/* Right: Circular Profile Image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          flex="1"
          display="flex"
          justifyContent="center"
        >
          <Box
            borderRadius="full"
            overflow="hidden"
            boxSize={{ base: "180px", sm: "220px", md: "260px", lg: "300px" }}
            border="4px solid teal"
            boxShadow="md"
          >
            <img
              src={mypic1}
              alt="Rupesh Sahu"
              style={{
                width: "100%",
                height: "100%",
                // objectFit: "cover",
                borderRadius: "10%",
              }}
            />
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Home;
