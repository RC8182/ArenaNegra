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
          <MenuAcordion titulo={'Refrescos'} menu={['']}/>,
          <MenuAcordion titulo={'Cervezas'} menu={['']}/>,
          <MenuAcordion titulo={'Vinos'} menu={['']}/>,
          <MenuAcordion titulo={'Sangria'} menu={['']}/>,
          <MenuAcordion titulo={'Cocktais'} menu={['']}/>,
          <MenuAcordion titulo={'Gin'} menu={['']}/>,
          <MenuAcordion titulo={'Vodka'} menu={['']}/>,
          <MenuAcordion titulo={'Ron'} menu={['']}/>,
          <MenuAcordion titulo={'Brandi'} menu={['']}/>,
          <MenuAcordion titulo={'Wisky'} menu={['']}/>,
          <MenuAcordion titulo={'Licores'} menu={['']}/>,
          <MenuAcordion titulo={'Cafe'} menu={cafe}/>,]} />

          <SubMenuAcordion titulo={'Comida'} submenu={[
            <SubMenuAcordion titulo={'Entrantes'} submenu={[
              <MenuAcordion titulo={'Crudos'} menu={['']}/>,
              <MenuAcordion titulo={'Ensaladas'} menu={['']}/>,
              <MenuAcordion titulo={'Guarniciones'} menu={['']}/>,
              <MenuAcordion titulo={'Raciones'} menu={['']}/>,]} />,

              <MenuAcordion titulo={'Paellas'} menu={arroces}/>,

              <SubMenuAcordion titulo={'Tabla Pescado'} submenu={[
              <MenuAcordion titulo={'Tabla 25'} menu={['']}/>,
              <MenuAcordion titulo={'Tabla 30'} menu={['']}/>,
              ]} />,
              <MenuAcordion titulo={'Pasta'} menu={['']}/>,
              <MenuAcordion titulo={'Hamburguesa'} menu={['']}/>,
              <MenuAcordion titulo={'Pescado'} menu={['']}/>,
              <MenuAcordion titulo={'Menu del día'} menu={['']}/>,
              <MenuAcordion titulo={'Menu Infantil'} menu={['']}/>,
              ]} />

          <MenuAcordion titulo={'Postres'} menu={['']}/>
          
   

        </Accordion>
    </Box>
   
  )
}
