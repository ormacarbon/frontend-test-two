import React from 'react'
import Input from '../Input';
import { Container, Title } from './styles'

function Header(props) {
  return(
    <Container>
      <Title>
        {
          props.subtitle && 
          <h2>{props.subtitle}</h2>
        }
        <h1>{props.title}</h1>
      </Title>
      {props.showInput && <Input />}
    </Container>
  )
}
export default Header;