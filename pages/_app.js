import { ChakraProvider } from '@chakra-ui/react'
import '../components/body/galeria/galeria.css'
import { ArenaProvider } from '@/context/arenaProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ArenaProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </ArenaProvider>
  )
}

export default MyApp;