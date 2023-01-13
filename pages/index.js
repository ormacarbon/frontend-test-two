import Head from 'next/head'
import Image from 'next/image'
import GitLogo from './assets/github.svg'
import { Bottom, Container, Message, Middle, Text, Top } from './styles/styles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Teste Técnico - Orma Carbon</title>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='website pages' />
      </Head>
      <Top>
        <Image src={GitLogo} alt='github logo' />
        <Text>Github Pages</Text>
      </Top>
      <Middle>
        <Text>Welcome to your portfolio!</Text>
        <Message>
          <h2>A plache where you can see your github profile
            <br /> by adding your <span style={{ color: 'black' }}>username</span> to the code!</h2>
        </Message>
      </Middle>
      <Bottom>
        <ul>
          <li><a href='/library'>See here</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </Bottom>
    </Container>
  )
}
