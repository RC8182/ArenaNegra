import React from 'react'
import NavBar from './navbar/navbar'
import { Box } from '@chakra-ui/react'
import { FootBar } from './footer/footBar'
import Footer from './footer/footer'

export const ContenedorPadre = (props) => {
  return (
    <div>
        <Box minW={{base:'380px', lg:'1300'}}>
          <NavBar/>
        </Box>
        <Box margin={'1%'}>
          {props.children}
        </Box>
        <Box minW={{base:'380px', lg:'1300'}}>
          <Footer />
        </Box>
        <Box >
          <FootBar />
        </Box>
    </div>
  )
}
