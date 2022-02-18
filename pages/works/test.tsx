import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works/Work'
import P from '../../components/section/Paragraph'
import Layout from '../../components/works/Article'

const Work = () => {
  return (
    <Layout title="Test">
      <Container>
        <Title>
          Test <Badge>2016</Badge>
        </Title>
        <P>Text about the project</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="www.google.com">www.google.com</Link>
            <ExternalLinkIcon mx="2px" />
          </ListItem>
          <ListItem>
            <Meta>Plataform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
