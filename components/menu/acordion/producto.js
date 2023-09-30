'use client'
import bg from "../imagenes/tablaHorizontal.jpg"
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  AccordionPanel,
  Divider,
  Flex,
  Card,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Alergenos } from "../alergenos/alergenos";



export default function ProductSimple(props) {
    const img= props?.img;
    const nombre= props.nombre;
    const precio= props.precio;
    const extra= props?.extra;
    const descripcion =props?.descripcion;
    const alergenos=props?.alergenos;

  return (
    <AccordionPanel pb={4}>
    <Center py={12}>
      <Card
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
          
          // backgroundImage={`url(${bg.src})`}
          >
          <Box margin={'2%'}
          padding={'1%'}>
          <Image
                src={img}
                alt="Picture of the author"
                // width="100%" height="100%" layout="responsive" objectFit="cover"
          />
          </Box>

        </Box>
        <Stack pt={5} align={'center'} margin={'5%'}>

          <Heading fontSize={'md'} textTransform={'uppercase'}>
           {nombre}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} >
            {descripcion}
          </Text>

        </Stack>
        <Divider />
        <Stack direction={'row'} align={'center'}>
          <Flex flex={'20%'}>
            <Text fontWeight={800} fontSize={'sm'}>
              { precio + ' €'}
            </Text>
          </Flex>
          <Flex flex={'70%'}>
          <Text color={'gray.600'}>
             {extra}
            </Text>
          </Flex>
        </Stack>
        <Divider />  
        <Flex justifyContent={'flex-end'} margin={'5%'}>
          <Alergenos alergenos={alergenos}/>
        </Flex>
      </Card>
    </Center>
    </AccordionPanel>
  )
}