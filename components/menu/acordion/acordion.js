import { Accordion, Box} from '@chakra-ui/react'
import React from 'react'
import { SubMenuAcordion } from './subMenuAcordion'
import { MenuAcordion } from './menuAcordion'
import { refrescos, vinoBlanco, vinoTinto, arroces, bebidasAlcoholicas, cocktails, cafe, postres } from './productos'


export const Acordion = () => {

  return (
    <Box
      margin={'1%'} 
        w={'100vw'}>
        <Accordion defaultIndex={[]} allowMultiple>

          <SubMenuAcordion titulo={'Bebidas'} submenu={[
          <MenuAcordion titulo={'Refrescos'} menu={refrescos}/>,
          <MenuAcordion titulo={'Vino Tinto'} menu={vinoTinto}/>,
          <MenuAcordion titulo={'Vino Blanco'} menu={vinoBlanco}/>,
          <MenuAcordion titulo={'Bebidas Alcoholicas'} menu={bebidasAlcoholicas}/>,
          <MenuAcordion titulo={'Cocktais'} menu={cocktails}/>,
          <MenuAcordion titulo={'Cafe'} menu={cafe}/>,]} />

          <SubMenuAcordion titulo={'Comida'} submenu={[
            <SubMenuAcordion titulo={'Entrantes'} submenu={[
              <MenuAcordion titulo={'Crudos'} menu={refrescos}/>,
              <MenuAcordion titulo={'Ensaladas'} menu={vinoTinto}/>,
              <MenuAcordion titulo={'Guarniciones'} menu={vinoBlanco}/>,
              <MenuAcordion titulo={'Raciones'} menu={vinoBlanco}/>,]} />,

              <MenuAcordion titulo={'Arroces'} menu={arroces}/>,

              <SubMenuAcordion titulo={'Tabla Pescado'} submenu={[
              <MenuAcordion titulo={'Tabla 25'} menu={refrescos}/>,
              <MenuAcordion titulo={'Tabla 30'} menu={vinoTinto}/>,
              ]} />,
              <MenuAcordion titulo={'Pasta'} menu={arroces}/>,
              <MenuAcordion titulo={'Hamburguesa'} menu={arroces}/>,
              <MenuAcordion titulo={'Pescado'} menu={arroces}/>,
              <MenuAcordion titulo={'Menu del día'} menu={arroces}/>,
              <MenuAcordion titulo={'Menu Infantil'} menu={arroces}/>,
              ]} />

          <MenuAcordion titulo={'Postres'} menu={postres}/>
          
   

        </Accordion>
    </Box>
   
  )
}
