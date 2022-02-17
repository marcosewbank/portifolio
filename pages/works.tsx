import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section/Section'

import { WorkGridItem } from '../components/works/GridItem'
import thumb from '../public/images/profile.png'

const works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumb}>
            test
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default works
