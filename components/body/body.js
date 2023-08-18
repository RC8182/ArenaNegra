import { Box, Flex } from '@chakra-ui/react'
import Portada from './portada'
import { About } from './about'
import Galeria from './galeria/galeria'
import { Testimonio } from './testimony/testimonio'


export const Body = () => {

  return (
    <Box w={'100%'} >    
         <Flex >
          <Portada/>
         </Flex>           

        <Flex marginTop={'1%'}>
          <Testimonio/>
        </Flex>

        <Flex marginTop={'1%'}>
          <About/>
        </Flex>
        <Flex marginTop={'1%'}>
          <Galeria/>
        </Flex>

    </Box>
  )
}
