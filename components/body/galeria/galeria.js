import { Box, Flex, Heading, } from "@chakra-ui/react";
import  { Slide } from "./slide";
import { ArenaContex } from "@/context/arenaProvider";
import { useContext } from "react";



export default function Galeria() {

  const {idioma}= useContext(ArenaContex);
  const titulo= idioma.galeria.titulo;

  return (
    <Box bgGradient={'linear(to-b, rgb(179, 164, 149),rgb(244, 241, 237))'} w={'100%'}>
    <Box margin={'5px'} >
      <Flex flexDir={'column'} 
        align={'center'}
        flexWrap={'wrap'}>
        <Heading id="galeria">{titulo}</Heading>        
         <Flex marginTop={'3%'}>
          <Slide/>
         </Flex> 
      </Flex>
    </Box>
    </Box>
  )
}