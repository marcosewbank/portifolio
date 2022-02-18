import React from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Article from '../components/works/Article'
import Section from '../components/section/Section'
import Paragraph from '../components/section/Paragraph'
import { BioSection, BioYear } from '../components/section/Bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'

const Page = () => {
  return (
    <Article title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={3}
          alignItems="center"
        >
          Hello, I'm a Frontend developer from Brazil :D
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-evenly' }}
          alignItems="center"
        >
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            display="flex"
            justifyContent="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              borderRadius="full"
              alt="Profile Image"
              src="/images/profile.png"
            />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading as="h2" variant="page-title">
              Marcos Ewbank
            </Heading>
            <p>Digital Craftsman (Developer)</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            About me{' '}
            <NextLink href="/works/inkdrop">
              <Link>Link</Link>
            </NextLink>
            .
          </Paragraph>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my="4"
          >
            <NextLink href="works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portifolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Atibaia, São Paulo, Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed FATEC Technology management graduation
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>Won 2º Place at NASA Space Apps challenge SP
            (Biggest Hackathon of the world)
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Launched Carrefour Brazil (Biggest marketplace from VTEX)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            VTEX Certified Professional Advanced Implementation Expert
            (Enterprise)
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            VTEX IO Developer Certification - North America
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Works as VTEX Specialist at Pivotree
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/marcosewbank" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @marcosewbank
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/marcoslixogames" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @marcoslixogames
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/marcos.ewbank" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @marcos.ewbank
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/marcosewbank/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @marcosewbank
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Article>
  )
}

export default Page
