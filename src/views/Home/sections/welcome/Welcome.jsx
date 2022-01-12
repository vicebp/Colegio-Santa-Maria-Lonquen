import { Box, Center, Flex, Text } from "@chakra-ui/react";


export default function Welcome() {
    return (
        <div className="welcome-background">

            <Flex>
                <Center height='50vh' width="50vw">

                    <Text className="h1-welcome" fontSize='6xl'>Creemos en una educación diferente</Text>
                </Center>

                <Center height='50vh' width="50vw">
                    <Text className="h1-welcome" fontSize='6xl' fontWeight={700}>Creemos en una educación diferente g</Text>
                </Center>
            </Flex>
        </div>

    )
}
