import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import Header from '../components/header/Header'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Header>
    </ChakraProvider>
  )
}

export default Website
