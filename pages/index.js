import Head from 'next/head'
import { Container, Top, Text, Middle, Bottom } from './styles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Teste Técnico - Orma Carbon</title>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='website pages' />
      </Head>
      <Top>
        <Text>Rafa's Library</Text>
      </Top>
      <Middle>

      </Middle>
      <Bottom>
        <ul>
          <li>Library</li>
          <li>Contact</li>
        </ul>
      </Bottom>
    </Container>
  )
}
