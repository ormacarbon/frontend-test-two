import React, { useContext, useCallback } from 'react'
import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react';
import Button from '../Button'
import {DatalistInput, startsWithValueFilter } from 'react-datalist-input';
import { PokemonContext } from '../../context/pokemonContext'
import { RouteContext } from '../../context/routeContext';

function Input() {
  const { referenceList } = useContext(PokemonContext);
  const limitOptionsFilter = useCallback((items) => items.slice(0, 5), []);
  const filters = [startsWithValueFilter, limitOptionsFilter];
  const { toPokemonLink } = useContext(RouteContext);

  function handleSubmit(event) {
    event.preventDefault();
    toPokemonLink(event.target.elements.pokemon.value);
  }

  return(
    <Container onSubmit={(event) => handleSubmit(event)}>
      <Button type="submit" color="primary200" hoverColor="primary300" icon={<MagnifyingGlass size={20} weight="bold"/>}/>
      {
        referenceList.length > 0 &&
        <DatalistInput
          placeholder='Search Pokémon'
          items={referenceList.map(item => {return({id:item.name, value:item.name})})}
          highlightProps={{as: 'span'}}
          filters={filters}
          inputProps={{name:"pokemon", required: true}}
        />
      }
    </Container>
  )
}
export default Input;