import React from 'react'
import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react';
import Button from '../Button'

function Input() {
  return(
    <Container>
      <input type={'text'} placeholder={'Search Pokémon'}/>
      <Button color="transparent" hoverColor="primary200" icon={<MagnifyingGlass size={20} weight="bold"/>}/>
      
    </Container>
  )
}
export default Input;