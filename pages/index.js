import React from 'react'
import { ContenedorPadre } from '../components/ContenedorPadre'
import { Seo } from '../components/Seo'
import { Flex } from '@chakra-ui/react'
import { Body } from '@/components/body/body'


export default function Index() {

  return (
    <Flex>
      <ContenedorPadre>
      <Seo 
        title={'Restaurante en Los Abrigos | Arena Negra Restaurant'}
        metaName={"description"}    
        metaContent={'Disfruta de las mejores paellas y parrilladas de pescado local en Los Abrigos, Tenerife. Arena Negra Restaurant ofrece una experiencia única con vistas impresionantes y un servicio al cliente inmejorable.'}
        metaKey={'restaurante, Los Abrigos, paellas, parrillada de pescado, vistas, servicio al cliente'}
      />
        <Flex className='contenedor-body'>
          <Body/>
        </Flex>
      </ContenedorPadre>
    </Flex>

  )
}
