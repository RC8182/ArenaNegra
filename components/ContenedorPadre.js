import React from 'react'
import NavBar from './navbar/navbar'
import { Box } from '@chakra-ui/react'
import { FootBar } from './footer/footBar'
import Footer from './footer/footer'

export const ContenedorPadre = (props) => {
  return (
    <Box >
        <Box >
          <NavBar/>
        </Box>
        <Box>
          {props.children}
        </Box>
        <Box >
          <Footer />
        </Box>
        <Box >
          <FootBar />
        </Box>
    </Box>
  )
}
