import React, { useContext, useCallback } from 'react'
import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react';
import Button from '../Button'
import {DatalistInput, startsWithValueFilter } from 'react-datalist-input';
import { PokemonContext } from '../../context/pokemonContext'

function Input() {
  const { referenceList } = useContext(PokemonContext);
  const limitOptionsFilter = useCallback((items) => items.slice(0, 5), []);
  const closeMatchOptionsFilter = useCallback((items, value) => items.filter((item) => item.value !== value.toLowerCase()),[]);
  const filters = [startsWithValueFilter, limitOptionsFilter, closeMatchOptionsFilter];

  return(
    <Container>
      <Button color="primary200" hoverColor="primary300" icon={<MagnifyingGlass size={20} weight="bold"/>}/>
      {
        referenceList.length > 0 &&
        <DatalistInput
          placeholder='Search Pokémon'
          onSelect={(item) => console.log(item.value)}
          items={referenceList.map(item => {return({id:item.name, value:item.name})})}
          highlightProps={{as: 'span'}}
          filters={filters}
        />
      }
    </Container>
  )
}
export default Input;