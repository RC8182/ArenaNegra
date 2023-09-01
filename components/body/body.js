import { Box, Flex } from '@chakra-ui/react'
import { About } from './about'
import Galeria from './galeria/galeria'
import { Testimonio } from './testimony/testimonio'
import { Parallax } from '../parallax/parallax'
import v1 from '../../public/images/tinta.jpg'
import h1 from '../../public/images/tinta.jpg'
import v2 from '../../public/images/paellas.jpg'
import h2 from '../../public/images/collagearena.png'
import { Portada } from './portada'
import { Especialidades } from './especialidades/especialidades'
export const Body = () => {

  return (
    <Box>    
        <Flex >
        <Portada/>
        </Flex> 

        <Flex marginTop={'1%'}>
          <Especialidades/>
        </Flex>

        <Flex marginTop={'1%'}>
          <Testimonio/>
        </Flex>

        <Flex marginTop={'1%'}>
          <About/>
        </Flex>
        <Flex marginTop={'1%'}
        marginBottom={'1%'}>
          <Galeria/>
        </Flex>

    </Box>
  )
}
