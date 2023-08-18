import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'

import { Llamar } from '../botones/llamar';
import { Idiomas } from '../botones/idiomas';
import { Direccion } from '../botones/direccion';

export const FootBar = () => {


  return (
    <Box 
        bgGradient={'linear(to-t, rgb(179, 164, 149),rgb(244, 241, 237))'}
        px={4}
        pos={'fixed'} 
        overflow={'hidden'} 
        bottom={0} 
        w={'100%'}>
        <Flex flexDir={'row'}>
            <HStack display={{ base: 'flex', md: 'none' }} w={'33%'} justifyContent={'flex-start'}>
            <Llamar phone={+34648416513}/>
            </HStack>
            <HStack display={{ base: 'flex', md: 'none' }} w={'33%'} justifyContent={'center'}>
            <Direccion />
            </HStack>
            <HStack display={{ base: 'flex', md: 'none' }} w={'33%'} justifyContent={'flex-end'}>
            <Idiomas/>
            </HStack>
        </Flex>

    </Box>
  )
}
