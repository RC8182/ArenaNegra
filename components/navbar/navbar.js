import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from './navLink'
import { Llamar } from '../botones/llamar'
import { Direccion } from '../botones/direccion'
import { Idiomas } from '../botones/idiomas'



export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bgGradient={'linear(to-b, rgb(179, 164, 149),rgb(244, 241, 237))'} 
            px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Arena Negra</Box>
            <HStack display={{ base: 'none', md: 'flex' }}>
              <NavLink/>
            </HStack>
          </HStack>

        <Flex alignItems={'center'} margin={'3%'}>

          <Flex >
                <HStack display={{ base: 'none', md: 'flex' }} margin={'1%'}>
                  <Llamar phone={+34648416513}/>
                </HStack>
                <HStack display={{ base: 'none', md: 'flex' }} margin={'1%'}>
                  <Direccion />
                </HStack>
                <HStack display={{ base: 'none', md: 'flex' }} margin={'1%'}>
                  <Idiomas />
                </HStack>

            {/* <Flex margin={'1%'}>
              <ColorMode/>
            </Flex> */}
          </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
          <NavLink/>
          </Box>
        ) : null}
      </Box>

    </>
  )
}