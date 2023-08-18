import Image from 'next/image'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1}  spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text color={'red'}>
              Page under constuction!
            </Text>
            <Text
              as={'span'}
              position={'relative'}>
              GREAT THINGS ARE COMING 
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
              Arena Negra Restaurant
            </Text>
          </Heading>
          <Link fontSize={'3xl'} color='red.600' href={'https://www.google.com/maps/reserve/v/dine/c/eoDa6QDec8E?source=pa&hl=es-ES&gei=34XXZMCEA7ClkdUPrtqgsAg&sourceurl=https://www.google.com/search?q%3Darena%2Bnegra%26sca_esv%3D556298466%26sxsrf%3DAB5stBjzgTHaiVLO-MjX9feVPft7TEJjwA:1691844969692%26ei%3DaYHXZObmKaylkdUPpP2T2AE%26oq%3Dare%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiA2FyZSoCCAAyBxAjGIoFGCcyDRAuGIoFGLEDGIMBGEMyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyCxAuGIAEGMcBGK8BMgsQLhiABBjHARivATIFEAAYgAQyBxAAGIoFGEMyBRAAGIAESLIZUABYugVwAHgBkAEAmAGAAaAB6QKqAQMwLjO4AQHIAQD4AQHCAgsQABiABBixAxiDAcICExAuGIoFGLEDGIMBGMcBGNEDGEPCAhEQLhiABBixAxiDARjHARjRA8ICDhAuGMcBGLEDGNEDGIAEwgILEC4YgAQYsQMYgwHCAgcQLhiKBRhDwgIFEC4YgATCAgsQLhiKBRixAxiDAcICGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEB4gMEGAAgQYgGAboGBggBEAEYFA%26sclient%3Dgws-wiz-serp'} isExternal>
            Book you table!
          </Link>

          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>

          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('blue.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>

            <Image
                src={require("../public/images/collagearena.png")}
                alt="Picture of the author"
                />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}


const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}