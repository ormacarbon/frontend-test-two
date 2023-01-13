import React from 'react'
import { Container } from './styles'

function Button({title, color}) {
  return(
    <Container color={color}>
      {title}
    </Container>
  )
}
export default Button;