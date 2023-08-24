import React from 'react'
import bg from '../components/menu/imagenes/ArenaVertical.jpg'
import { Box, Flex } from '@chakra-ui/react'
import { Acordion } from '@/components/menu/acordion/acordion'
import Image from 'next/image'
import img from '../public/images/logoArena.jpg'

export default function Menu(){

  return (
    <Flex
    className='menu'
    minH={'900px'}
    backgroundColor={'black'}
    // backgroundImage= {`url(${bg.src})`}
    flexDir={'column'}>

        <Flex>

            <Flex
                className='logo'
                margin={'5%'}
                flex={'20%'}>
                <Image
                    src={img}
                    alt="Picture of the author"
                    width="50%" height="50%" layout="responsive" objectFit="contain"/>
            </Flex>
            <Flex
                flex={'75%'}
                color={'white'}
                alignSelf={'center'}
                margin={'1%'}
                textAlign={'center'}
                fontSize={'2xl'}>
                <h1>Arena Negra Restautante - Arrocería</h1>
            </Flex>
        </Flex>

        <Flex
            className='titulo'
            margin={'2%'}
            color={'white'}
            justifyContent={'center'}
            fontSize={'2xl'}>
            <h3>Menu</h3>
        </Flex>

        <Flex
            className='acordion'>
            <Acordion />
        </Flex>


    
    </Flex>
  )
}
