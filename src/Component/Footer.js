import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from "@chakra-ui/react";

import {AiOutlineSend} from "react-icons/ai";

const Footer=()=>{
    return (
        <Box bgColor={"blackAlpha.900"} minH={'40'} p="16" color={"white"}>
            <Stack direction={["column","row"]}>
                <VStack w="full" alignItems={"stretch"}>
                    <Heading size="md" textTransform={"uppercase"}>
                        Subscribe to get Updated
                    </Heading>
                <HStack borderBottom={"2px solid white"} py="2">
                    <Input placeholder="Enter your Email" 
                    border={"none"}
                    borderRadius={"none"}
                    focusBorderColor={"none"}
                     />
                    <Button p={"0"}
                    colorScheme={"purple"}
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0"}
                    >
                        <AiOutlineSend />
                    </Button>
                </HStack>
                </VStack>
                <VStack 
                w={"full"}
                borderLeft={"1px solid white"}
                >
                    <Heading>VIDEO HUB</Heading>
                    <Text>All Right Reserved</Text>
                </VStack>
                <VStack w={"full"}
                borderLeft={"1px solid white"}
                >
                    <Heading 
                    textTransform={"uppercase"}
                    size={"md"}
                    >Social Media</Heading>

                    <Button variant={"link"} colorScheme={"purple"}>
                        <a target={"blank"} href="https://www.youtube.com/">You Tube</a>
                    </Button>

                    <Button variant={"link"} colorScheme={"purple"}>
                        <a target={"blank"} href="https://www.instagram.com/">Instagram</a>
                    </Button>

                    <Button variant={"link"} colorScheme={"purple"}>
                        <a target={"blank"} href="https://www.github.com/">Git Hub</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer;