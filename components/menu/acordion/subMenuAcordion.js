import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'


export const SubMenuAcordion = (props) => {
    const titulo= props.titulo;
    const comentario= props?.comentario;
    const submenu= props?.submenu;
  return (
    <AccordionItem>
    <h2>
    <AccordionButton color={'white'} _expanded={{ color: 'blue' }}>
        <Box as="span" flex='1' textAlign='center' fontSize={'3xl'} >
        {titulo}
        </Box>
        <AccordionIcon color={'blue'} />
    </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {
      submenu?.map((e,i)=>{
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
