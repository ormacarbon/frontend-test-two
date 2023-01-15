import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import FavoriteStar from '../../components/FavoriteStar';
import * as S from './style'
import { useState } from 'react';


export default function PokemonInfo() {
  const { query } = useRouter();
  const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/${query.name}`, fetcher)
  const [isMouseHover, setIsMouseHover] = useState(false)
  const frontDefault = data.sprites.front_default;
  const frontShiny = data.sprites.front_shiny;

  return (
    <>
      <S.ContainerDiv>
        <FavoriteStar pokemonName={data.name}></FavoriteStar>
        <S.ContainerDiv onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
          {
            !isMouseHover ? <S.Image src={frontDefault} /> : <S.Image title={`${data.name} Shiny`}src={frontShiny} />
          }

        </S.ContainerDiv>
        <S.Title>
          {data.name}
        </S.Title>
        {data.types.map((item, index) => (
          <p key={index}>{item.type.name}</p>
        ))}
      </S.ContainerDiv>
    </>
  )
}