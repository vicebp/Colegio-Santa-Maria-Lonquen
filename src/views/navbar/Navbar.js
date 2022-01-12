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

    const handleOnClickClose = () => {
        changeDisplayHamburger("none")
    }

    const handleOnClickOpen = () => {
        changeDisplayHamburger("felx")
    }

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

                <Flex justifyContent={isSmallScreen ? "center" : "center"} my={8}>
                    {/* Desktop */}
                    <Box >
                        <Flex className="link-list">
                            <Link
                                className="links-navbar"
                                href="#nuestro-colegio"
                                textAlign={"center"}

                                fontSize={"xl"}
                                fontWeight={200}
                                color={"#000"}
                                _hover={{
                                    textDecoration: "none",
                                    color: "#000",
                                }}
                                pr={50}
                                ml={-150}



                            // w="37rem"

                            >
                                Nuestro Colegio
                            </Link>

                            <Link
                                className="links-navbar"
                                href="#nuestro-colegio"
                                fontSize={"xl"}
                                fontWeight={200}
                                color={"#000"}
                                _hover={{
                                    textDecoration: "none",
                                    color: "#000",
                                }}
                                pr={50}

                            >
                                Testimonios
                            </Link>

                            <Link
                                className="links-navbar"
                                href="#nuestro-colegio"
                                fontSize={"xl"}
                                fontWeight={200}
                                color={"#000"}
                                _hover={{
                                    textDecoration: "none",
                                    color: "#000",
                                }}
                                pr={50}


                            >
                                Galería
                            </Link>

                            <Button
                                _hover={{ bg: "#fff" }}
                                variant="outline"
                                colorScheme="blue"
                                aria-label="Contact"
                                my={5}
                                w="30%"
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
                            onClick={handleOnClickOpen}
                        />
                    </Box>
                </Flex>
            </Flex >
            {/* Mobile Content */}
            < Flex
                className="hamburguer-mobile"
                w="100vw"
                display={displayHamburger}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
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

                        onClick={handleOnClickClose}
                    />
                </Flex>

                <Flex flexDir="column" align="center">

                    <Link className="links-navbar-mobile" href="#nuestro-colegio" fontSize={"md"}
                        fontWeight={500}
                        color={"#000"}
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                        }}
                        py={4}
                        onClick={handleOnClickClose}
                    >
                        Nuestro Colegio
                    </Link>

                    <Link className="links-navbar-mobile" href="#nuestro-colegio"
                        className="links-navbar-mobile" href="#nuestro-colegio" fontSize={"md"}
                        fontWeight={500}
                        color={"#000"}
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                        }}
                        py={4}
                        onClick={handleOnClickClose}
                    >
                        Testimonios
                    </Link>


                    <Link className="links-navbar-mobile" href="#nuestro-colegio"
                        className="links-navbar-mobile" href="#nuestro-colegio" fontSize={"md"}
                        fontWeight={500}
                        color={"#000"}
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                        }}
                        py={5}
                        onClick={handleOnClickClose}
                    >
                        Galería
                    </Link>


                    <Link className="links-navbar-mobile" href="#nuestro-colegio"
                        className="links-navbar-mobile" href="#nuestro-colegio" fontSize={"md"}
                        fontWeight={500}
                        color={"#000"}
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                        }}
                        py={5}
                        onClick={handleOnClickClose}
                    >
                        Matricula 2022
                    </Link>

                </Flex>
            </Flex >
        </div >
    );
}
