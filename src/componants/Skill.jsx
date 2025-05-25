import { Box, Heading, Image, Stack, Text, SimpleGrid, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Import images
const skills = [
  { icon: require("../componants/Assets/html.png"), name: "HTML" },
  { icon: require("../componants/Assets/css.png"), name: "CSS" },
  { icon: require("../componants/Assets/js.png"), name: "JavaScript" },
  { icon: require("../componants/Assets/react.png"), name: "React" },
  { icon: require("../componants/Assets/redux.png"), name: "Redux" },
  { icon: require("../componants/Assets/node.png"), name: "Node.js" },
  { icon: require("../componants/Assets/express.png"), name: "Express.js" },
  { icon: require("../componants/Assets/mongodb.png"), name: "MongoDB" },
  { icon: require("../componants/Assets/chakra.png"), name: "Chakra UI" },
  { icon: require("../componants/Assets/api3.png"), name: "REST API" },
  { icon: require("../componants/Assets/dsa.png"), name: "DSA" },
  { icon: require("../componants/Assets/git.png"), name: "Git" },
  { icon: require("../componants/Assets/postman.png"), name: "Postman" },
  { icon: require("../componants/Assets/vscode.png"), name: "VS Code" },
  { icon: require("../componants/Assets/gitlab.png"), name: "GitLab" },
  { icon: require("../componants/Assets/tailwined.png"), name: "Tailwind css" },
];

const MotionBox = motion(Box);

const Skill = () => {
  const columns = useBreakpointValue({ base: 3, sm: 4, md: 5, lg: 6 });
  const imageSize = useBreakpointValue({ base: "50px", md: "60px", lg: "70px" });

  return (
    <Box id="skill" py={16} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50">
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
            width: "80px",
            height: "4px",
            bg: "teal.500",
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "full",
          }}
        >
          Tech Stack
        </Heading>
      </Box>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 6, md: 8, lg: 10 }}
        maxW="1200px"
        mx="auto"
      >
        {skills.map((skill, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Tooltip label={skill.name} hasArrow placement="top">
              <Stack
                spacing={3}
                align="center"
                justify="center"
                p={4}
                borderRadius="xl"
                bg="white"
                boxShadow="md"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                  bg: "white",
                }}
                transition="all 0.2s ease"
                height="100%"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  w={imageSize}
                  h={imageSize}
                  objectFit="contain"
                  loading="lazy"
                />
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="500"
                  color="gray.700"
                  textAlign="center"
                >
                  {skill.name}
                </Text>
              </Stack>
            </Tooltip>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skill;