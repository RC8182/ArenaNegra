import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Alergenos = (props) => {
    const alergenos= props?.alergenos;
  return (
    <Flex>
    { alergenos?.map((e)=>{
        return  <Flex width={'40px'} height={'40px'}>
                    <Image
                        src={e.img}
                        alt={e.alt}
                        width="10%" height="10%" layout="responsive" objectFit="cover"
                    />
                </Flex>
    })}
    </Flex>
  )
}
