import { Box, Heading, Image, SimpleGrid, Text, Flex, useBreakpointValue, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const tools = [
  { name: "Git", image: require("../componants/Assets/git.png") },
  { name: "VS Code", image: require("../componants/Assets/vscode.png") },
  { name: "Postman", image: require("../componants/Assets/postman.png") },
  { name: "GitLab", image: require("../componants/Assets/gitlab.png") },
];

const Tooles = () => {
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const imageSize = useBreakpointValue({ base: "50px", md: "70px", lg: "90px" });

  return (
    <Box id="tools" py={16} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50">
      <Box textAlign="center" mb={12} maxW="1200px" mx="auto">
        <Heading
          as="h2"
          size="2xl"
          mb={4}
          color="teal.600"
          fontWeight="semibold"
          position="relative"
          _after={{
            content: '""',
            width: "60px",
            height: "4px",
            bg: "teal.500",
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "full",
          }}
        >
          Development Tools
        </Heading>
      </Box>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 6, md: 8, lg: 10 }}
        maxW="1200px"
        mx="auto"
      >
        {tools.map((tool, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Tooltip label={tool.name} hasArrow placement="top">
              <Flex
                direction="column"
                align="center"
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
                transition="all 0.2s ease"
                height="100%"
              >
                <Image
                  src={tool.image}
                  alt={tool.name}
                  w={imageSize}
                  h={imageSize}
                  objectFit="contain"
                  mb={4}
                  loading="lazy"
                />
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="600"
                  color="gray.700"
                  textAlign="center"
                >
                  {tool.name}
                </Text>
              </Flex>
            </Tooltip>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tooles;