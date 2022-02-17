import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import { WorkGridItem } from '../components/works/GridItem'
import Section from '../components/section/Section'
import Article from '../components/works/Article'
import thumb from '../public/images/profile.png'

const works = () => {
  return (
    <Article title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="test" title="test" thumbnail={thumb}>
              test
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="test" title="test" thumbnail={thumb}>
              test
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default works
