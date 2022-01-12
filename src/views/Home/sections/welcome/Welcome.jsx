import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";


export default function Welcome() {
    return (
        <div className="welcome-background">


            <Flex >
                <Flex flexDirection={"column"}>
                    <Center height='50vh' width="50vw">

                        <Text className="h1-welcome" fontSize='6xl' fontWeight={800}>Creemos en una educación diferente</Text>
                        <Text className="h1-welcome" fontSize='3xl' fontWeight={200} > En un espacio libre y amistoso, lleno de amor y contención.
                            El contacto, permanente con la naturaleza, los hace amarla y protegerla</Text>

                    </Center>
                </Flex>

                <Center height='50vh' width="50vw">
                    <Text className="h1-welcome" fontSize='6xl' fontWeight={400} fontStyle='italic'>Creemos en una educación diferente</Text>
                </Center>
            </Flex>
        </div>

    )
}
