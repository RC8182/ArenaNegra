import React from 'react'
import { ContenedorPadre } from '../components/ContenedorPadre'
import { Seo } from '../components/Seo'
import { Flex } from '@chakra-ui/react'
import { Body } from '@/components/body/body'


export default function Index1() {
  return (
    <ContenedorPadre>

    <Seo 
        title={'Restaruante en Los Abrigos | Arena Negra Restaurant'}
        metaName={"description"}    
        metaContent={'Restaurante típico canario donde comer el mejor pescado de nuestras costas'}
        metaKey={'Desc'}
        />
      <Flex className='contenedor-body'>
      <Body/>
      </Flex>
    </ContenedorPadre>
  )
}
