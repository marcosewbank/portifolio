import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/layouts/Header'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Header router={router}>
        <Component {...pageProps} key={router.route} />
      </Header>
    </ChakraProvider>
  )
}

export default Website
