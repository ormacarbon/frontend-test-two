import { useContext } from 'react'
import PokemonCard from '../../components/PokemonCard';
import { PokemonContext } from '../../context/context';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem; 
`; 

export default function FavoritePokemons() {
  const { favoritesPokemons } = useContext(PokemonContext)

  return (
    <>
      <ContainerDiv>
        {favoritesPokemons.map((item, index) => (
          <PokemonCard key={index} pokemon={item}></PokemonCard>
        ))}
      </ContainerDiv>
    </>
  )
}