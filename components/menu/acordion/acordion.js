import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { TipoProducto } from './tipo-producto'
import { bebidas, comida, postres } from './productos'


export const Acordion = () => {

  return (
    <Box 
        border={'1px solid white'}
        w={'100vw'}>
        <Accordion allowToggle>
           <TipoProducto titulo={'Bebidas'} productos={bebidas} /> 
           <TipoProducto titulo={'Paellas'} productos={comida} comentario={'Todos nuestros arroces son elaborados con arroz artezanal de la airifera valenciana del maestro agricultor Rafaél Mañez'} />
           <TipoProducto titulo={'Postres'} productos={postres} />
        </Accordion>
    </Box>
   
  )
}
