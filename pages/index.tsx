import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" p={3} mb={6} alignItems="center">
        Hello, I'm a Frontend developer from Brazil :D
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marcos Ewbank
          </Heading>
          <p>Digital Craftsman (Developer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
