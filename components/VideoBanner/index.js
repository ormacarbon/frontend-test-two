import React from 'react'
import Button from '../Button';
import { Container, Content } from './styles'

function VideoBanner() {
  return(
    <Container>
      <Content>
        <h4>Pokémon Pokédex</h4>
        <p>Your definitive guide to the universe of Pokémons</p>
        <Button title="Discover More"/>
      </Content>
      
      <video autoPlay loop muted>
        <source src="/pokemon-in-the-wild.mp4" type="video/mp4" />
      </video>
    </Container>
  )
}
export default VideoBanner;