import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../componants/Assets/logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skill" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="999"
      bg="white"
      boxShadow="md"
      px={{ base: 4, md: 10 }}
      py={3}
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        // Add responsive direction for mobile if you want logo center and menu below or something else
        flexDirection={{ base: "row", md: "row" }}
      >
        {/* Centered Logo */}
        <Box
          flex="1"
          display="flex"
          justifyContent={{ base: "flex-start", md: "flex-start" }}
          cursor="pointer"
          _hover={{ transform: "scale(1.1)", transition: "transform 0.3s ease" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </Box>

        {/* Spacer for desktop so menu stays right */}
        {!isMobile && <Box flex="1" />}

        {isMobile ? (
          <>
            <IconButton
              icon={<MdMenu />}
              onClick={onOpen}
              variant="ghost"
              fontSize="24px"
              aria-label="Open Menu"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg="white">
                <DrawerCloseButton />
                <VStack spacing={6} mt={16} align="start" px={6}>
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      smooth
                      spy
                      offset={-80}
                      duration={500}
                      onClick={onClose}
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </VStack>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Flex flex="1" justify="flex-end" gap={10} fontWeight="semibold">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                offset={-80}
                duration={500}
                style={{
                  cursor: "pointer",
                  color: "#2d2d2d",
                }}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
