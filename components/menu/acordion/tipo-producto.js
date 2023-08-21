import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react'
import React from 'react'

export const TipoProducto = (props) => {
    const titulo= props.titulo;
    const productos= props.productos;
    const comentario= props?.comentario;

  return (
    <AccordionItem>
    <h2>
    <AccordionButton>
        <Box as="span" flex='1' textAlign='center' color={'white'}>
        {titulo}
        </Box>
        <AccordionIcon />
    </AccordionButton>
    </h2>
   
    {
      productos.map((e)=>{
        return e
      })
    }
    <Box margin={'2%'} color={'white'}>
      <p>{comentario}</p>
    </Box>

</AccordionItem>
  )
}
