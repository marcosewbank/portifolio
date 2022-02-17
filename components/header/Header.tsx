import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import { Navbar } from './Navbar'
import NoSsr from '../models/no-ssr'
import ModelPC from '../models/Pc'

function Header({ children, router }: any) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marcos Ewbank - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <ModelPC />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Header
