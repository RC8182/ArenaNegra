import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

export const MenuAcordion = (props) => {
    const titulo= props.titulo;
    const comentario= props?.comentario;
    const menu= props?.menu;
  return (
    <AccordionItem>
    <h2>
    <AccordionButton color={'white'} _expanded={{ color: 'blue' }}>
        <Box as="span" flex='1' textAlign='center' fontSize={'2xl'} >
        {titulo}
        </Box>
        <AccordionIcon color={'blue'} />
    </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {
        menu?.map((e,i)=>{
        return <Box key={i}>{e}</Box>
      })
    }
    </AccordionPanel>
    <Box margin={'2%'} color={'white'}>
      <p>{comentario}</p>
    </Box>

</AccordionItem>
  )

}
