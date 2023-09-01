'use client'
import bg from "../imagenes/tablaHorizontal.jpg"
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  AccordionPanel,
} from '@chakra-ui/react'
import Image from 'next/image'



export default function ProductSimple(props) {
    const img= props?.img;
    const nombre= props.nombre;
    const precio= props.precio;
    const extra= props?.extra;
    const descripcion =props?.descripcion;

  return (
    <AccordionPanel pb={4}>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          margin={'2%'}
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          backgroundImage={`url(${bg.src})`}>
          <Box margin={'2%'}
          padding={'1%'}>
          <Image
                src={img}
                alt="Picture of the author"
                // width="100%" height="100%" layout="responsive" objectFit="cover"
          />
          </Box>

        </Box>
        <Stack pt={10} align={'center'}>

          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} textTransform={'uppercase'} textAlign={'center'}>
           {nombre}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} >
            {descripcion}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              { precio + ' €'}
            </Text>
            <Text color={'gray.600'}>
             {extra}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </AccordionPanel>
  )
}