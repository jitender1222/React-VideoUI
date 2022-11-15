
import { Box, Container, Heading,Image, Stack , Text } from "@chakra-ui/react";

import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assests/1.jpg"
import img2 from "../assests/2.jpg"
import img3 from "../assests/3.jpg"
import img4 from "../assests/4.jpg"
import img5 from "../assests/5.png"
import Footer from "./Footer"

const headingOptions={
    pos:"absolute",
    left:"30%",
    top:"30%",
    transfrorm:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"2xl",
}

const Home=()=>{
    return (
    <Box>
        <MyCarousel/>
        <Container maxW={"container.xl"} p="16" >
        <Heading textTransform={"uppercase"} m="auto" py="2" w={"fit-content"} borderBottom={"2px solid"}>
            Services
        </Heading>
        <Stack 
        h="full"
        p={"4"}
        alignItems={"center"}
        direction={['column','row']}
        >
            <Image src={img5} h={[40,400]} filter={'hue-rotate(-130deg)'}/>

            <Text letterSpacing={"widest"} lineHeight={"10"} textAlign={"center"}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </Text>
        </Stack>
        </Container>
        <Footer />
    </Box>
    )
};

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={3000} 
    showStatus={false} showThumb={false} showArrows={false} >
        <Box w="full" h={'110vh'}>
            <Image src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Future of Gaming
            </Heading>
        </Box>
        <Box w="full" h={'110vh'}>
            <Image src={img2}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Future of Gaming
            </Heading>
        </Box>
        <Box w="full" h={'110vh'}>
            <Image src={img3}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Future of Gaming
            </Heading>
        </Box>
        <Box w="full" h={'110vh'}>
            <Image src={img4}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Future of Gaming
            </Heading>
        </Box>
    </Carousel>
)

export default Home;