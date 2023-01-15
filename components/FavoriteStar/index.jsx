import { useContext, useState } from 'react'
import { PokemonContext } from '../../context/context'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import * as S from './styles'


export default function FavoriteStar({ pokemonName }) {
  const { handleFavorite, favoritesPokemons } = useContext(PokemonContext);

  const isFav = favoritesPokemons.some(favoritesPokemons => favoritesPokemons === pokemonName)

  return (
    <S.DivHeart
      onClick={() => handleFavorite(pokemonName)}
    >
      {!isFav ?
        <AiOutlineStar
          size={22}
        />
        :
        <AiFillStar
          size={26}
          color={'black'}
        />
      }
    </S.DivHeart>
  )
}