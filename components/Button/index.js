import React from 'react'
import { Container } from './styles'

function Button(props) {
  return(
    <Container color={props.color} onClick={props.onClick}>
      {props.title}
    </Container>
  )
}
export default Button;