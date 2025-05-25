import { Box, Heading, SimpleGrid, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { theme } from "./style/theme";

const MotionBox = motion(Box);

const Calendar = () => {
  const blockSize = useBreakpointValue({ base: 12, md: 14, lg: 16 });
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box id="github" py={16} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50">
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
          Coding Activity
        </Heading>
      </Box>

      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        maxW="1200px"
        mx="auto"
        mb={16}
      >
        <GitHubCalendar
          username="rupeshsahu969"
          blockSize={blockSize}
          blockMargin={4}
          fontSize={16}
          theme={{
            light: ['#ebedf0', theme.colors.teal[100], theme.colors.teal[300], theme.colors.teal[400], theme.colors.teal[600]],
            dark: ['#161b22', theme.colors.teal[700], theme.colors.teal[500], theme.colors.teal[400], theme.colors.teal[300]]
          }}
          style={{ margin: 'auto' }}
        />
      </MotionBox>

      <SimpleGrid
        columns={columns}
        spacing={6}
        maxW="1200px"
        mx="auto"
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs?username=rupeshsahu969&show_icons=true&locale=en&layout=compact"
            alt="Top Languages"
            w="100%"
            borderRadius="lg"
            boxShadow="xl"
            loading="lazy"
          />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Image
            src="https://github-readme-stats.vercel.app/api?username=rupeshsahu969&show_icons=true&locale=en"
            alt="GitHub Stats"
            w="100%"
            borderRadius="lg"
            boxShadow="xl"
            loading="lazy"
          />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=rupeshsahu969&"
            alt="GitHub Streak"
            w="100%"
            borderRadius="lg"
            boxShadow="xl"
            loading="lazy"
          />
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default Calendar;