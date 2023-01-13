import React from 'react'
import { Container } from './styles'

function Button(props) {
  return(
    <Container {...props}>
      {props.icon}
      <span>{props.title}</span>
    </Container>
  )
}
export default Button;