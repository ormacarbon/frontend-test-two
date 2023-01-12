import React from 'react'
import { Container } from './styles'

function TypeLabel(props) {
  return(
    <Container {...props}>
      <span>
        {props.type}
      </span>
    </Container>
  )
}
export default TypeLabel;