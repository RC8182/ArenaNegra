import { Box, Flex } from '@chakra-ui/react'
import Portada from './portada'
import { About } from './about'
import Galeria from './galeria/galeria'
import { Testimonio } from './testimony/testimonio'
import { Parallax } from '../parallax/parallax'
import v1 from '../../public/images/tinta.jpg'
import h1 from '../../public/images/tinta.jpg'
import v2 from '../../public/images/paellas.jpg'
import h2 from '../../public/images/collagearena.png'
export const Body = () => {

  return (
    <Box>    
        <Flex >
        <Portada/>
        </Flex> 

        <Flex>
          <Parallax imgv={v1} imgh={h1} titulo={'Paella tinta calamares'}/>
        </Flex>  
        <Flex>
          <Parallax imgv={v2} imgh={h2} titulo={'Paella Valenciana'}/>
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
