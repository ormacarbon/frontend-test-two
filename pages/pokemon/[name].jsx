import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import FavoriteStar from '../../components/FavoriteStar';
import { useState } from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transition: 0.5s;
  }  
`;

const Title = styled.h2`
    text-transform: capitalize;
    
`;


export default function PokemonInfo() {
  const { query } = useRouter();
  const { data, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${query.name}`, fetcher)
  const [isMouseHover, setIsMouseHover] = useState(false)

  if (isLoading) return <Title>Carregando</Title>
  
  const frontDefault = data.sprites.front_default;
  const frontShiny = data.sprites.front_shiny;

  return (
    <>
      <ContainerDiv>
        <FavoriteStar pokemonName={data.name}></FavoriteStar>
        <ContainerDiv onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
          {
            !isMouseHover ? <Image alt={data.name} src={frontDefault} /> : <Image alt={data.name} title={`${data.name} Shiny`}src={frontShiny} />
          }

        </ContainerDiv>
        <Title>
          {data.name}
        </Title>
        {data.types.map((item, index) => (
          <p key={index}>{item.type.name}</p>
        ))}
      </ContainerDiv>
    </>
  )
}