import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectImages = {
  smegrid: require("./Assets/smegridpro1.png"),
  dashboard: require("./Assets/tyre_management.png"),
  cg: require("./Assets/cg.png"),
  food: require("./Assets/foodimages.png"),
  hospital: require("./Assets/hospital.png"),
  tata: require("./Assets/tata.png"),
  nord: require("./Assets/geek.png"),
  timet: require("./Assets/timet.png"),
  fabbag: require("./Assets/fabbag.png"),
  popart1: require("./Assets/popart1.png"),
  horse: require("./Assets/horse.png"),
  quiz: require("./Assets/quiz.png"),
  ecommarce_bacend: require("./Assets/ecommarce_bacend.png"),
  bloager: require("./Assets/blaog.png"),
  myblog: require("./Assets/myblogaapplication.png"),
  aidetection: require("./Assets/aidetection.png"),
jobpotal: require("./Assets/jobpotal.png"),
multitheme: require("./Assets/multitheme.png"),
Aipic: require("./Assets/aichat_pic.png"),
Movie: require("./Assets/movie.png"),
};

const Project = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const imageHeight = useBreakpointValue({ base: "200px", md: "250px", lg: "300px" });

  const projects = [
    
    {
      title: "Smegrid",
      image: projectImages.smegrid,
      description: "We are on a mission to empower manufacturers and industrial businesses with smarter procurement, efficient waste management, and skilled workforce solutions",
      tech: "React | Tailwind CSS | Redux | Node.js | MongoDB",
      code: "https://github.com/RupeshSahu969/smegrid",
      live: "https://jazzy-paprenjak-6ea51f.netlify.app/",
    },
    {
      title: "Tyre Management (ERP)",
      image: projectImages.dashboard,
      description: "The system allowed various types of users (Master Admin, Side Admin, and User Admin) to have access to different sets of features, based on their roles and permissions.",
      tech: "React | JavaScript | Bootstrap | MongoDB| NodeJs| Express",
      code: "#",
      live: "https://suryakirangroup.in/login",
    },
    {
      title: "Incredible Chattisgarh",
      image: projectImages.cg,
      description: "Showcasing tourism and cultural heritage of Chattisgarh state.",
      tech: "HTML5 | CSS3 | JavaScript | React",
      code: "https://github.com/RupeshSahu969/Incredible_Chattisgarh",
      live: "https://66ebf82dd0033a7161209cd9--clever-pasca-0b68d4.netlify.app/#home",
    },
    {
      title: "Food Delivery Application",
      image: projectImages.food,
      description: "Food ordering experience for users. It includes dynamic product displays, an optimized ordering system, and a well-structured backend to manage data efficiently.",
      tech: "React | Redux | Axios | MongoDB| NodeJs| Express",
      code: "#",
      live: "#",
    },
    {
      title: "Movie Review Platform",
      image: projectImages.Movie,
      description: "Develop a movie review platform where users can browse movies, read and write reviews, and rate films.",
      tech: "React | Tailwind CSS | Redux | Node.js | MongoDB|Expressjs",
      code: "https://github.com/RupeshSahu969/Movie-Review-Platform",
      live: "https://mellow-florentine-4536c9.netlify.app/",
    },
    
    {
      title: "E-commerce Application",
      image: projectImages.ecommarce_bacend,
      description: "An e-commerce platform for shopping items like clothes and more. It features dynamic product displays, an optimized ordering system, and a well-structured backend for efficient data management.",
      tech: "MongoDB | Node.js | Express | EJS | Tailwind CSS",
      code: "https://nodejs-project-2-qhkq.onrender.com/shop",
      live: "https://nodejs-project-2-qhkq.onrender.com/shop",
    },
    {
      title: "Hospital Management",
      image: projectImages.hospital,
      description: "Hospital management system is a software application designed to manage the administrative, financial, and clinical aspects of a hospital or healthcare facility.",
      tech: "HTML | CSS | Nextjs | TailwinedCSS",
      code: "https://hospitalnewdatamananegments.netlify.app/",
      live: "https://hospitalnewdatamananegments.netlify.app/",
    },
    {
      title: "Blog Application",
      image: projectImages.myblog,
      description: "This is a Blog Application for creating, editing, and sharing blog posts with a clean and responsive design",
      tech: "React | JavaScript | Bootstrap | MongoDB| NodeJs| Express",
      code: "https://github.com/RupeshSahu969/Blog_Add",
      live: "https://ornate-chimera-2df085.netlify.app/",
    },
    
    {
      title: "AI-Powered Assistant",
      image: projectImages.Aipic,
      description: "AI chat app with real-time, intelligent responses. Built with React.js, Node.js, and Google Gemini API for seamless, low-latency interactions.",
      tech: "React | Tailwind CSS | Redux | Node.js | MongoDB| Gemini Api",
      code: "https://github.com/RupeshSahu969/AI-Chat-Assistant",
      live: "https://github.com/RupeshSahu969/AI-Chat-Assistant",
    },
    
    {
      title: "TATA 1mg Clone",
      image: projectImages.tata,
      description: "Online platform, which can be accessed for all your health needs. India’s leading digital consumer healthcare platform",
      tech: "React | Redux | Axios | MongoDB| NodeJs| Express",
      code: "https://github.com/sonuprasad66/omniscient-sheet-6598",
      live: "https://tata-1mg-clone-sage.vercel.app/",
    },
    {
      title: "Time Tracking App",
      image: projectImages.timet,
      description: "Time tracker Clockify is a time tracker and timesheet app that lets you track work hours across projects.",
      tech: "HTML | CSS | JavaScript | React |Redux | Axios | JSON API",
      code: "https://github.com/RupeshSahu969/equable-pleasure-9638",
      live: "https://timetracker-4jrwp56fe-rupeshsahu969.vercel.app/",
    },
    {
      title: "GeekBuying Clone",
      image: projectImages.nord,
      description: "GeekBuying is an Ecommerce website exclusive to electronic bikes, scooters, vacuum cleaners, and laptops",
      tech: "HTML | CSS | JavaScript",
      code: "https://github.com/manojkumar968/Geekbuying-clone",
      live: "https://superlative-cucurucho-0929c4.netlify.app/",
    },
    
   
    {
      title: "Application Social Media Blogger",
      image: projectImages.bloager,
      description: "A full-featured blog management system allowing users to create, edit, delete, and comment on posts. Includes user authentication and dynamic content rendering using EJS.",
      tech: "MongoDB | Node.js | Express | EJS | Bootstrap CSS",
      code: "https://myblogger-application.onrender.com/",
      live: "https://myblogger-application.onrender.com/",
    },
    {
  title: "Job Portal Application",
  image: projectImages.jobpotal,
  description: "A fully functional job portal that allows employers to post job openings and candidates to apply. This mini-app showcases both backend and frontend development, including dynamic job listings, user authentication, and a responsive UI.",
  tech: "MongoDB | Node.js | Express | React | Tailwind CSS | TypeScript",
  code: "https://github.com/RupeshSahu969/Job-Board-Mini-App",
  live: "https://loquacious-cocada-736aea.netlify.app/",
},
 {
  title: "Multi-Theme Web Application",
  image: projectImages.multitheme,
  description: "A React app that lets users easily switch between three themes, with real-time updates to colors, fonts, spacing, and layout for a personalized experience.",
  tech: "React | Tailwind CSS | TypeScript",
  code: "https://github.com/RupeshSahu969/RupeshSahu-MultiThemeApp-FrontendDeveloper",
  live: "https://funny-faun-46df98.netlify.app/",
},
 {
      title: "FabBag Clone",
      image: projectImages.fabbag,
      description: "Fab-Bag Website is buying monthly subscription of makeup",
      tech: "HTML | CSS| Bootstrap | JavaScript",
      code: "https://github.com/mdnasirdmt/fab-bag-clone-again",
      live: "https://fantastic-squirrel-8ca900.netlify.app/",
    },

    {
      title: "POPAT Namkeen",
      image: projectImages.popart1,
      description: "Project is an e-commerce platform designed to showcase and sell a variety of POPAT products",
      tech: "HTML5 | CSS3| Bootstrap | JavaScript | React",
      code: "https://github.com/RupeshSahu969/popat_namkenn",
      live: "https://66ed1ac4e16541fa802fa313--effulgent-semolina-aa07e5.netlify.app/",
    },
    {
      title: "Horse Ride Booking",
      image: projectImages.horse,
      description: "Booking system for recreational horse riding activities.",
      tech: "HTML5 | CSS3| Bootstrap | JavaScript | React | Redux",
      code: "https://github.com/RupeshSahu969/horse-ride-booking",
      live: "https://66948e54c9f4c804c3474c2b--frolicking-melba-84e996.netlify.app/",
    },
    {
      title: "Quiz Application",
      image: projectImages.quiz,
      description: "Basic Quiz app to test your computer knowledge. Also, the question and its options change on every page reload",
      tech: "HTML5 | CSS3| Bootstrap | JavaScript",
      code: "https://github.com/RupeshSahu969/QuizzApp-javasccript",
      live: "https://lively-kleicha-dca27e.netlify.app/",
    },
    {
      title: "Thief Detection Alarm",
      image: projectImages.aidetection,
      description: "An AI-powered thief detection system that triggers an alarm when suspicious activity is detected using a webcam. Built with Next.js and integrated with real-time video processing for proactive security monitoring.",
      tech: "Next.js",
      code: "https://github.com/RupeshSahu969/Thief-Detection-Alarm",
      live: "https://aidetectionapplication.netlify.app/",
    },
  ];

  return (
    <Box id="projects" py={16} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50">
      <Box textAlign="center" mb={16}>
        <Heading as="h2" size="2xl" mb={4} color="teal.600" fontWeight="semibold" letterSpacing="tight">
          My Projects
        </Heading>
        <Box h="4px" w="120px" bg="teal.500" mx="auto" borderRadius="full" boxShadow="md" />
      </Box>

      <SimpleGrid columns={columns} spacing={8} maxW="1400px" mx="auto">
        {projects.map((project, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          >
            <Box h={imageHeight} overflow="hidden" position="relative" borderBottom="2px solid" borderColor="teal.100">
              <Image
                src={project.image}
                alt={project.title}
                w="100%"
                h="100%"
                objectFit="cover"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.3s ease"
              />
            </Box>

            <Stack p={4} spacing={3}>
              <Heading as="h3" fontSize="lg" fontWeight="semibold" color="gray.800" minH="50px">
                {project.title}
              </Heading>

              <Text fontSize="sm" color="gray.600" lineHeight="short" minH="60px">
                {project.description}
              </Text>

              <Text fontSize="xs" color="teal.600" fontWeight="medium" bg="teal.50" p={1} borderRadius="md">
                {project.tech}
              </Text>

              <Flex gap={2} mt={2}>
                <Button
                  as="a"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  colorScheme="teal"
                  variant="outline"
                  leftIcon={<FaGithub />}
                  flex="1"
                  _hover={{ bg: "teal.50" }}
                >
                  Code
                </Button>
                <Button
                  as="a"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  colorScheme="teal"
                  leftIcon={<FaExternalLinkAlt />}
                  flex="1"
                >
                  Live
                </Button>
              </Flex>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
