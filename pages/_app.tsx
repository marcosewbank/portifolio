import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/header/Header'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header router={router}>
        <Component {...pageProps} key={router.route} />
      </Header>
    </ChakraProvider>
  )
}

export default Website
