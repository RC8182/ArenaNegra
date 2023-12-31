import { ArenaContex } from '@/context/arenaProvider'
import { Box, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'

export const About = () => {
  const {idioma}=useContext(ArenaContex);
  const titulo= idioma.about.titulo;
  const texto= idioma.about.texto;
  return (
    <Box backgroundColor={'black'} color={'white'} w={'100%'}>
    <Box margin={'5%'}>
      <Stack spacing={0} align={'center'}>
        <Heading id='sobre-nosotros'>{titulo}</Heading>
        <Flex marginTop={'3%'}>
          <Text>{texto}</Text>
        </Flex>        
    </Stack>
    </Box>
    </Box>    
  )
}
