import { Box, Flex } from '@chakra-ui/react'
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
    <Box backgroundColor={'black'}
        color={'white'} w={'100%'}>
    
        <div
            margin={'auto'}
            className='contenedor-foto-portada'
            height={'640px'}
            // max={{base:'400px', lg:'7xl'}}
            >
            {/* <div position={'relative'}
                left= {0}
                top= {'25%'}
                width= {'100%'}
                text-align= {'center'}
                background-color={'aqua'} 
                color= {'antiquewhite'}
                padding= {'18px'}
                font-size= {'25px'}>
                <h1> {titulo}</h1>
                <div                 
                background-color={'aqua'} 
                color= {'antiquewhite'}
                padding= {'18px'}
                font-size= {'25px'}>
                    
                </div>
                
            </div> */}
            
            <Image
                src={require("../../public/images/collagearena.png")}
                alt="Picture of the author"
                width="100%" height="100%" layout="responsive" objectFit="contain"
                />
        </div>

        <Flex
            flexDir={'column'}
            margin={'3%'} 
            >

            <Flex 
                fontSize={{base:'xl', lg:'2xl'}}
                justifyContent={'center'}>
                <Flex flexDir={'column'}>
                    <h2 >{sub1}</h2>
                    <h2 >{sub2}</h2>
                </Flex>
            </Flex>

            <Reservar />
        </Flex>
                
    </Box>
        
  )
}

export default Portada