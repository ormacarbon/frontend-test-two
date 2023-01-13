import React from 'react'
import { Container } from './styles'

function Header(props) {
  return(
    <Container className='header'>
      {
        props.subtitle && 
        <h2>{props.subtitle}</h2>
      }
      <h1>{props.title}</h1>
    </Container>
  )
}
export default Header;