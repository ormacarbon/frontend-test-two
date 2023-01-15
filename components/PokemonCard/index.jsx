import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher'
import * as S from './styles'
import FavoriteStar from '../FavoriteStar';

export default function PokemonCard({ pokemon: pokemonName }) {
  const { data, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, fetcher)
  const [isMouseHover, setIsMouseHover] = useState(false)

  if (isLoading) return <p>carregando</p>


  return (
    <>
      <S.Card
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
        type={data.types[0].type.name}
      >
        {
          !isMouseHover ? <S.Imagem
            src={data.sprites.front_default} 
            alt={pokemonName}
          /> : <S.Imagem
            src={data.sprites.front_shiny} 
            title={`${pokemonName} shiny`} alt={pokemonName}
          />
        }
        <S.LinkButton href={`/pokemon/${pokemonName}`} >
          <S.Title>{pokemonName}</S.Title>
        </S.LinkButton>
        <S.Id>{data.id}</S.Id>
        <FavoriteStar pokemonName={pokemonName} />
      </S.Card>
    </>
  );
}