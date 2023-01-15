import { useContext } from 'react'
import PokemonCard from '../../components/PokemonCard';
import { PokemonContext } from '../../context/context';
import * as S from './style'

export default function FavoritePokemons() {
  const { favoritesPokemons } = useContext(PokemonContext)

  return (
    <>
      <S.ContainerDiv>
        {favoritesPokemons.map((item, index) => (
          <PokemonCard key={index} pokemon={item}></PokemonCard>
        ))}
      </S.ContainerDiv>
    </>
  )
}