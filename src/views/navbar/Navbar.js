import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/media-query";
import LogoColegio from "../../logo/Logo.svg";

export default function Navbar() {
  const [displayHamburger, changeDisplayHamburger] = useState("none");
  const [isSmallScreen] = useMediaQuery("(max-width: 1014px)");
  return (
    <div className="navbar-container">
      <Flex direction={isSmallScreen ? "column" : "row"}>
        <Box className="logo-container" pl={50} my={5}>
          <img
            src={LogoColegio}
            alt="Logo Institucional"
            width="300vw"
            height="300vh"
          />
        </Box>
        <Spacer />

        <Flex justifyContent={isSmallScreen ? "center" : "center"}>
          {/* Desktop */}
          <Box>
            <Flex className="link-list">
              <Link
                className="links-navbar nuestro-colegio"
                href="#nuestro-colegio"
                fontSize={"md"}
                fontWeight={500}
                color={"#000"}
                _hover={{
                  textDecoration: "none",
                  color: "#000",
                }}
                my={5}
                // w="37rem"
                px={6}
                mr={6}
              >
                Nuestro Colegio
              </Link>

              <Link
                className="links-navbar"
                href="#nuestro-colegio"
                fontSize={"md"}
                fontWeight={500}
                color={"#000"}
                _hover={{
                  textDecoration: "none",
                  color: "#000",
                }}
                my={5}
                px={6}
                mr={6}
              >
                Testimonios
              </Link>

              <Link
                className="links-navbar"
                href="#nuestro-colegio"
                fontSize={"md"}
                fontWeight={500}
                color={"#000"}
                _hover={{
                  textDecoration: "none",
                  color: "#000",
                }}
                my={5}
                px={6}
                mr={6}
              >
                Galería
              </Link>

              <Button
                _hover={{ bg: "#fff" }}
                variant="outline"
                colorScheme="blue"
                aria-label="Contact"
                my={5}
                w="100%"
                px={6}
                mr={5}
              >
                <Link className="link-matricula" href="#nuestro-colegio">
                  Matricula 2022
                </Link>
              </Button>
            </Flex>
          </Box>

          {/* Mobile */}
          <Box>
            <IconButton
              className="hamburguer-button"
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<HamburgerIcon />}
              onClick={() => changeDisplayHamburger("flex")}
            />
          </Box>
        </Flex>
      </Flex>
      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={displayHamburger}
        bgColor="gray.50"
        zIndex={20}
        h="40vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplayHamburger("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            <Link className="links-navbar" href="#nuestro-colegio">
              Nuestro Colegio
            </Link>
          </Button>
          <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
            <Link className="links-navbar" href="#nuestro-colegio">
              Testimonios
            </Link>
          </Button>
          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            <Link className="links-navbar" href="#nuestro-colegio">
              Galería
            </Link>
          </Button>
          <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            <Link className="links-navbar" href="#nuestro-colegio">
              Matricula 2022
            </Link>
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
