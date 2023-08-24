import { Accordion, Box} from '@chakra-ui/react'
import React from 'react'
import { TipoProducto } from './tipo-producto'
import { bebidas, comida, postres } from './productos'
import { SubMenuAcordion } from './subMenuAcordion'


export const Acordion = () => {

  return (
    <Box
      margin={'1%'} 
        w={'100vw'}>
        <Accordion defaultIndex={[]} allowMultiple>
           <SubMenuAcordion titulo={'Bebidas'} submenu={[ <SubMenuAcordion titulo={'Refrescos'}  />,
           <SubMenuAcordion titulo={'Vinos Tinto'}  />,
           <SubMenuAcordion titulo={'Vinos Blanco'} />]}/> 
           <SubMenuAcordion titulo={'Paellas'} productos={comida} comentario={'Todos nuestros arroces son elaborados con arroz artezanal de la airifera valenciana del maestro agricultor Rafaél Mañez'} />
           <TipoProducto titulo={'Postres'} productos={postres} />
        </Accordion>
    </Box>
   
  )
}
