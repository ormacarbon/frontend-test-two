import Image from 'next/image'
import Head from 'next/head'
import GitLogo from './assets/github.svg'
import { Bottom, Container, Middle, Text, Top } from './styles/styles'

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
        <h2>A plache where you can see you github profile
          <br /> by adding your username to the code!</h2>
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
