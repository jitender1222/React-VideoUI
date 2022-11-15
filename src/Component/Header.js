
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'

  import {Link} from "react-router-dom";
  import {BiMenuAltLeft} from "react-icons/bi";

const Header=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <Button 
            zIndex={"overlay"}
            pos={"fixed"}
            top={"4"}
            left={"4"}
            colorScheme={"purple"}
            p={'0'}
            w={'10'}
            h={'10'}
            borderRadius={"full"}
            onClick={onOpen}
            >
            <BiMenuAltLeft size={"20"}/>
            </Button>
            <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Video Hub</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={"flex-start"} >
                        <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                            <Link to={"/"}>Home</Link>
                        </Button>
                        
                        <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                            <Link to={"/about"}>Video</Link>
                        </Button>
                        
                        <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                            <Link to={"/video?category=freeVideo"}>Free Videos</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                            <Link to={"/upload"}>Upload Video</Link>
                        </Button>
                    </VStack>

                    <HStack pos={"absolute"} bottom={"10"} justifyContent={"space-evenly"} w={"full"}>

                        <Button onClick={onClose} colorScheme={"purple"}>
                           <Link to={"/login"}> Log In </Link>
                           </Button>
                        <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}>
                           <Link to={"/signup"}>Sign Up</Link>
                            </Button>

                    </HStack>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )

}

export default Header;