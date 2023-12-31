import React, { useContext } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import v from '../../public/images/1460/tinta.jpg'
import h from '../../public/images/800/tinta.jpg'
import { Reservar } from '../botones/reservas'
import { Logo } from '../logo'
import { ArenaContex } from '@/context/arenaProvider'

export const Portada = () => {
    const  {idioma}= useContext(ArenaContex)
    const h1= idioma.portada.h1
    const h2= idioma.portada.h2
  return (
    <Box w={'100%'}>
        <Box 
        className='fondo' 
        minW={{base:'400px', lg:'100vw'}}
        minH={{base:'600px', lg:'600px'}}
        position={'relative'}
        backgroundImage={{base:`url(${v.src})`,lg:`url(${h.src})`}}
        backgroundAttachment={'fixed'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}>
            <Box 
                className='contenedor-titulo'
                position={'absolute'}
                left={0}
                top={0}
                width={'100%'}
                height={'100%'}
                backgroundColor={'rgba(44, 42, 42, 0.527)'}
                textAlign={'center'}>
                <Flex flexDir={'column'}>
                    <Flex 
                    margin={'3%'}
                    className='titulo'
                    justifyContent={'center'}
                    color={'white'}
                    padding={'18px'}
                    fontSize={'25px'}
                    flexDir={'column'}
                    letterSpacing={'10px'}
                    >
                    <h2>{h2}</h2>
                    </Flex>

                    <Flex flexDir={'column'}>
                        <Reservar />
                    </Flex>
                    <Flex 
                        margin={'1%'}
                        padding={'2%'}
                        className='titulo'
                        justifyContent={'center'}
                        color={'white'}
                        fontSize={'25px'}
                        flexDir={'column'}
                        letterSpacing={'10px'}>
                        <h1>{h1}</h1>
                        <Logo width={'150px'}/>
                    </Flex>
                   
                </Flex>

            </Box>
        </Box>

        <Flex
             className='seccion'
             height={'auto'}
             alignItems={'center'}
             justifyContent={'center'}
             padding={'0 20'}
             >

        </Flex>
        
    </Box>
  )
}
