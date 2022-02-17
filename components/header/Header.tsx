import Head from 'next/head'
import { Navbar } from './Navbar'
import { Box, Container } from '@chakra-ui/react'

function Header({ children, router }: any) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marcos Ewbank - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Header
