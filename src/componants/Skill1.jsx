import {
  Box,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DiGit, DiNodejs, DiReact } from "react-icons/di";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";

const MotionBox = motion(Box);

export const Skill1 = () => {
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const pipelineDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box id="skills" py={16} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50">
      {/* Skills Section */}
      <Box maxW="1200px" mx="auto" mb={16}>
        <Heading as="h2" size="2xl" mb={4} textAlign="center" color="teal.600">
          My Technical Skills
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600" maxW="800px" mx="auto">
          A collection of technologies and tools I work with regularly to build scalable, maintainable applications and manage efficient DevOps pipelines.
        </Text>
      </Box>

      {/* CI/CD Pipeline Visualization */}
      <Box maxW="1200px" mx="auto">
        <Heading as="h3" size="xl" mb={8} textAlign="center" color="teal.600">
          CI/CD Pipeline
        </Heading>

        <Flex
          direction={pipelineDirection}
          justify="center"
          align="center"
          gap={6}
          wrap="wrap"
        >
          {["Build", "Test", "Deploy"].map((stage, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <Flex
                direction="column"
                align="center"
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="lg"
                position="relative"
                minW="250px"
                _after={{
                  content: '""',
                  position: "absolute",
                  [pipelineDirection === "row" ? "right" : "bottom"]: "-30px",
                  [pipelineDirection === "row" ? "top" : "left"]: "50%",
                  width: pipelineDirection === "row" ? "30px" : "4px",
                  height: pipelineDirection === "row" ? "4px" : "30px",
                  bg: "teal.500",
                  display: index === 2 ? "none" : "block",
                  transform: pipelineDirection === "row" ? "translateY(-50%)" : "translateX(-50%)",
                }}
              >
                <Text fontSize="xl" fontWeight="600" color="teal.600">
                  {stage}
                </Text>
                <Text mt={2} color="gray.600" textAlign="center">
                  {stage === "Build" && "GitLab Runner executes build commands"}
                  {stage === "Test" && "Automated testing with Jest and Cypress"}
                  {stage === "Deploy" && "Deployment to production environment"}
                </Text>
                <Tag mt={4} colorScheme="teal" borderRadius="full">
                  Stage {index + 1}
                </Tag>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
