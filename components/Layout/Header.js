import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Box display={{ base: "flex", md: "none" }} alignItems="center">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        flexBasis={{ base: "100%", md: "auto" }}
        flexGrow={1}
      >
        <Box py={{ base: 4, md: 0 }}>
          <Box mb={2}>
            <Box as="span" color="blue.300">
              01
            </Box>{" "}
            <Box as="span">Menu item</Box>
          </Box>
          <Box mb={2}>
            <Box as="span" color="green.300">
              02
            </Box>{" "}
            <Box as="span">Menu item</Box>
          </Box>
          <Link href="/resume.pdf" passHref>
            <Button  variant="solid" colorScheme="blue" w="full">
              Resume
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
