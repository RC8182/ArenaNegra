
import { ArenaContex } from '@/context/arenaProvider'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { Direccion } from '../botones/direccion'
import { Llamar } from '../botones/llamar'
import { Logo } from '../logo'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {

  const {idioma}= useContext(ArenaContex);

  const contacto= idioma.pie.contacto;
  const direccion= idioma.pie.direccion;
  const horario= idioma.pie.horario;
  const siguenos= idioma.pie.siguenos;

  return (
    <Box
      backgroundColor={'black'}
      color={'white'}
      w={'100%'}
      >
      <Container as={Stack} maxW={{base:'380px',lg:'7xl'}} py={10} justifyContent={'center'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack id='contacto' align={'center'}>
            
            <ListHeader >{contacto.titulo}</ListHeader>
            <Box className='telefono'>
                <h2>{contacto.tel}</h2>
            </Box>

            <Flex className='boton-llamar'>
                <Llamar phone={+34648416513}/>
            </Flex>

          </Stack>
          <Stack align={'center'}>
            <ListHeader>{direccion.titulo}</ListHeader>
            <Flex className='direccion'
            flexDir={'column'}>
                <h2>{direccion.dir}</h2>
                <h2>{direccion.dir1}</h2>
                <h2>{direccion.dir2}</h2>
                <h2>{direccion.dir3}</h2>
            </Flex>
            <Flex className='boton-como-llegar'>
              <Direccion/>
            </Flex>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>{horario.titulo}</ListHeader>
            <Flex>
        <UnorderedList>
            <ListItem>{horario.lunes}</ListItem>
            <ListItem>{horario.martes}</ListItem>
            <ListItem>{horario.miercoles}</ListItem>
            <ListItem>{horario.jueves}</ListItem>
            <ListItem>{horario.viernes}</ListItem>
            <ListItem>{horario.sabado}</ListItem>
            <ListItem>{horario.domingo}</ListItem>
        </UnorderedList>
        </Flex>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>{siguenos.titulo}</ListHeader>
            <Box as="a" href={'https://www.facebook.com/profile.php?id=100076500755574'}>
              Facebook
            </Box>

            <Box as="a" href={'https://www.instagram.com/arenanegralosabrigos/'}>
              Instagram
            </Box>
            <Box as="a" href={'https://www.tripadvisor.es/Restaurant_Review-g1188716-d23657993-Reviews-Restaurente_Arena_Negra_Taberna_BBQ-Los_Abrigos_Tenerife_Canary_Islands.html'}>
              TripAdvisor
            </Box>

            <Box as="a" href={'https://www.thefork.es/restaurante/arena-negra-taberna-marinera-bbq-r712642'}>
              TheFork
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo width={'50px'}/>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Arena Negra Restaurante. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}