import { useContext } from 'react'
import { PokemonContext } from '../../context/context'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import * as S from './styles'
import { ThemeContext } from 'styled-components';


export default function FavoriteStar({ pokemonName }) {
  const { handleFavorite, favoritesPokemons } = useContext(PokemonContext);
  const { colors } = useContext(ThemeContext);

  const isFav = favoritesPokemons.some(favoritesPokemons => favoritesPokemons === pokemonName)

  return (
    <S.DivHeart
      onClick={() => handleFavorite(pokemonName)}
    >
      {!isFav ?
        <AiOutlineStar
          color={colors.textColor}
          size={22}
        />
        :
        <AiFillStar
          color={colors.textColor}

          size={26}
        />
      }
    </S.DivHeart>
  )
}