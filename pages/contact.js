import Head from 'next/head'
import { Bottom, Container, Middle, Text, Top } from './styles/styles'

export default function Library() {
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
                Contact me at +5561996660249
            </Middle>
            <Bottom>
                <ul>
                    <li><a href='/library'>See here</a></li>
                    <li>Contact</li>
                    <li><a href='/'>Home</a></li>
                </ul>
            </Bottom>
        </Container>
    )
}