import React from 'react'
import Box from '../../components/Box';
import VideoBanner from '../../components/VideoBanner';
import { Container, Content } from './styles'

function Overview() {
  return(
    <Container>
      <header>
        <h2>Hi Pokémon trainer,</h2>
        <h1>Overview</h1>
      </header>
      <VideoBanner />
      <Content>
        <Box title="Team of the day">
        </Box>
        <Box title="Pokémon quick view">
        </Box>
      </Content>
    </Container>
  )
}
export default Overview;