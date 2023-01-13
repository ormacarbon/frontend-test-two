import { MagnifyingGlass } from 'phosphor-react';
import React from 'react'
import { Container } from './styles'

function Input() {
  return(
    <Container>
      <MagnifyingGlass size={20} weight="bold" />
      <input type={'text'} placeholder={'search for a pokémon'}/>
    </Container>
  )
}
export default Input;