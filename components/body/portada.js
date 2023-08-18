import { Box, Button, Container, Flex, useColorModeValue, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ArenaContex } from '@/context/arenaProvider';
import { Reservar } from '../botones/reservas';

const Portada = () => {
    const  {idioma}= useContext(ArenaContex)
    const titulo= idioma.portada.titulo
    const sub1= idioma.portada.subtitulo1
    const sub2= idioma.portada.subtitulo2
  return (
    <Box bgGradient={'linear(to-b, rgb(179, 164, 149),rgb(244, 241, 237))'} w={'100%'}>
    <Box margin={'5%'}>
            <Flex 
            w={'100%'}
            flexDir={{base:'column-reverse', lg:'column'}}
            flexWrap={'wrap'}
            textAlign={'center'}
            fontSize={{base:'4xl', lg:'6xl'}}>
            
            <h1 >{titulo}</h1>
            <Flex 
                flexDir={'column'}
                fontSize={{base:'xl', lg:'2xl'}}>
            <h2 >{sub1}</h2>
            <h2 >{sub2}</h2>
            </Flex>
            <Flex
                margin={'2%'} 
                justifyContent={'center'}>
                <Reservar />
            </Flex>
            <Flex 
                margin={'auto'}
                className='contenedor-foto-portada'
                justifyContent={'center'}
                maxH={'640px'}
                maxW={{base:'400px', lg:'7xl'}}>
                
            <Image
                src={require("../../public/images/collagearena.png")}
                alt="Picture of the author"
                />
            </Flex>

        </Flex>
        </Box>
        </Box>
        

  )
}

export default Portada