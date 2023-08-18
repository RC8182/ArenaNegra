import { Box, Button, Flex, ListItem, UnorderedList, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
     <Flex 
        width={'50%'}
        margin={'auto'}
        overflow={'initial'}
        flexWrap={'wrap'}
        flexDir={{base: 'column', lg:'row'}}
        justifyContent={'space-around'}
        >
        <Flex 

            className='contacto'
            flexDir={'column'}
            gap={'15px'}
            marginBottom={'10%'}
            padding={'1%'}
        >
            <Flex className='titulo'>
            <h2>Contacto</h2>
            </Flex>
            
            <Flex className='telefono'>
                <h2>Teléfono: 922 222 333</h2>
            </Flex>

            <Flex className='boton-llamar'>
                <Button>LLAMAR AHORA</Button>
            </Flex>

            <Flex className='boton-whatsapp'>
                <Button>WHATSAPP</Button>
            </Flex>

        </Flex>
        
        <Flex 
            className='dirección'
            flexDir={'column'}
            gap={'15px'}
            marginBottom={'10%'}
            padding={'1%'}>
            <Flex className='titulo'>
            <h2>Dirección</h2>
            </Flex>
            
            <Flex className='direccion'
            flexDir={'column'}>
                <h2>Paseo Marítimo </h2>
                <h2>Local 3</h2>
                <h2>38618 Los Abrigos</h2>
                <h2>Santa Cruz de Tenerife</h2>
            </Flex>

            <Flex className='boton-como-llegar'>
                <Button>COMO LLEGAR</Button>
            </Flex>

        </Flex>
        
        <Flex 
            className='horario'
            flexDir={'column'}
            gap={'15px'}
            marginBottom={'1%'}
            padding={'1%'}>
        <Flex className='titulo'>
            <h2>Horario</h2>
        </Flex>
        <Flex>
        <UnorderedList>
            <ListItem>Lunes: 12:30 - 23:30</ListItem>
            <ListItem>Martes: Cerrado </ListItem>
            <ListItem>Miércoles: 12:30 - 23:30</ListItem>
            <ListItem>Jueves: 12:30 - 23:30</ListItem>
            <ListItem>Viernes: 12:30 - 23:30</ListItem>
            <ListItem>Sábado: 12:30 - 23:30</ListItem>
            <ListItem>Domingo: 12:30 - 23:30</ListItem>
        </UnorderedList>
        </Flex>
        </Flex>
    </Flex>
    </Box>


  )
}
