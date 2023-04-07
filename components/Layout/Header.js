import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Blur,
  Center,
  VStack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  // toggle mobile menu and blur effect
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="gray.800"
      color="white"
    >
      <Box display="flex" alignItems="center">
        <Link href="/" passHref>
          <Image src="/logo.png" alt="Logo" width={70} height={30} />
        </Link>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        fontSize="13px"
        fontFamily="SF Mono"
      >
        <Box mr="2rem">
          <Box as="span" color="green.300">
            01.
          </Box>
          {"  "}
          <Box as="span" fontFamily="SF Mono">
            About
          </Box>
        </Box>
        <Box mr="2rem">
          <Box as="span" color="green.300" fontFamily="SF Mono">
            02.
          </Box>
          {"  "}
          <Box as="span" fontFamily="SF Mono">
            Experience
          </Box>
        </Box>
        <Box mr="2rem">
          <Box as="span" color="green.300">
            03.
          </Box>
          {"  "}
          <Box as="span">Projects</Box>
        </Box>
        <Box mr="2rem">
          <Box as="span" color="green.300">
            04.
          </Box>
          {"  "}
          <Box as="span">Contact</Box>
        </Box>
        <Spacer />
        <Link href="/resume.pdf" passHref>
          <Button variant="solid" colorScheme="blue">
            Resume
          </Button>
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
          onClick={toggleMobileMenu}
        />

        <Drawer
          isOpen={isMobile}
          placement="right"
          onClose={toggleMobileMenu}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent bg="gray.800" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Center h="100%">
                <VStack spacing="1rem" fontFamily="SF Mono">
                  <Box mb="2rem">
                    <Box  color="green.300">
                      01.
                    </Box>
                    
                    <Box>
                      About
                    </Box>
                  </Box>
                  <Box mb="2rem">
                    <Box as="span" color="green.300" >
                      02.
                    </Box>
                    
                    <Box as="span" >
                      Experience
                    </Box>
                  </Box>
                  <Box mb="2rem">
                    <Box as="span" color="green.300">
                      03.
                    </Box>
                    {"  "}
                    <Box as="span">Projects</Box>
                  </Box>
                  <Box mb="2rem">
                    <Box as="span" color="green.300">
                      04.
                    </Box>
                    {"  "}
                    <Box as="span">Contact</Box>
                  </Box>
                  <Link href="/resume.pdf" passHref>
                    <Button variant="solid" colorScheme="blue" mb="2rem">
                      Resume
                    </Button>
                  </Link>
                </VStack>
              </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
}
