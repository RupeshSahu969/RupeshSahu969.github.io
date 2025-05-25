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
import { IoIosRose } from "react-icons/io";
import { Link } from "react-scroll";

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
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex align="center" gap={2}>
          <IoIosRose size={28} color="#2cb67d" />
          <Box fontWeight="bold" fontSize="xl" color="teal.600">
            Rupesh
          </Box>
        </Flex>

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
          <Flex gap={10} fontWeight="semibold">
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
