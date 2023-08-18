import { Box, Flex, } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'


export const Slide = () => {
  return (
    <Box margin={'auto'}>
        <Flex flexDir={{base:'column', lg:'row'}}
        margin={'auto'}

        justifyContent={'center'}
        flexWrap={'wrap'}
        gap={'5px'}>
        <Box className='zoom'>
        <Image
            width={500}
                src={require("../../../public/images/10.jpg")}
                alt="Picture of the author"
                        />
            </Box>
            <Box className='zoom'>
        <Image
            width={500}
                src={require("../../../public/images/4.jpg")}
                alt="Picture of the author"
                        />
            </Box>
            <Box className='zoom'>
        <Image
            width={500}
                src={require("../../../public/images/2.jpg")}
                alt="Picture of the author"
                        />
            </Box>
            <Box className='zoom'>
        <Image
            width={500}
                src={require("../../../public/images/3.jpg")}
                alt="Picture of the author"
                        />
            </Box>
            <Box className='zoom'>
        <Image
            width={500}
                src={require("../../../public/images/1.jpg")}
                alt="Picture of the author"
                        />
            </Box>

        </Flex>
    </Box>
  


  )
}
