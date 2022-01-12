import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function Welcome() {
    const [isSmallScreen] = useMediaQuery("(max-width: 1014px)");

    return (
        <div className="welcome-background">


            <Flex className="welcome-container" direction={isSmallScreen ? "column" : "row"} width="100vw" height="50vh" alignItems={isSmallScreen ? "center" : "center"}>
                <Flex className="welcome-body-container" direction="column" justifyContent="center" width="50vw" alignItems="center">
                    <Box width="30vw" >
                        <Text className="title-welcome" fontSize='7xl' fontWeight={800} lineHeight="5rem">Creemos en <br />una educación

                        </Text>
                        <div className="main">

                            <h1>
                                <div>
                                    <ul>
                                        <li className="try">

                                            <span>d</span>
                                            <span>i</span>
                                            <span>f</span>
                                            <span>e</span>
                                            <span>r</span>
                                            <span>e</span>
                                            <span>n</span>
                                            <span>t</span>
                                            <span>e</span>

                                        </li>
                                        <li className="try middle">
                                            <span>c</span>
                                            <span>e</span>
                                            <span>r</span>
                                            <span>c</span>
                                            <span>a</span>
                                            <span>n</span>
                                            <span>a</span>
                                        </li>
                                        <li className="try last">
                                            <span>i</span>
                                            <span>n</span>
                                            <span>c</span>
                                            <span>l</span>
                                            <span>u</span>
                                            <span>s</span>
                                            <span>i</span>
                                            <span>v</span>
                                            <span>a</span>
                                        </li>
                                    </ul>
                                </div>
                            </h1>
                        </div>

                        <Text className="body-welcome" fontSize='2xl' fontWeight={200} textAlign="justify" width="23vw" pt={"1rem"}> En un espacio libre y amistoso, lleno de amor y contención.
                            El contacto, permanente con la naturaleza, los hace amarla y protegerla</Text>
                        <Text className="sentence-welcome" fontSize='2xl' fontWeight={150} textAlign="justify" width="23vw" color="#8d8d8d" fontStyle="italic" pt={"1rem"}> "Nadie destruye lo que ama"</Text>
                    </Box>

                </Flex>

                <Flex direction="column" justifyContent="center" width="50vw" alignItems="center">
                    <Box width="30vw" >
                        <Text fontSize='6xl' fontWeight={800}>Creemos en una educación diferente</Text>
                    </Box>
                </Flex>
            </Flex>
        </div>

    )
}
