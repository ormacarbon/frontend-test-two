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
  width: 100%;
  align-self: center;
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

const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 12rem;
  list-style: none;  
`;

const LiStyled = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: ${({theme})=> theme.colors.textColor};
`;

const StrongStyled = styled.strong`
  text-transform: uppercase;
`;



export default function PokemonInfo() {
  const { query } = useRouter();
  const { data, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${query.name}`, fetcher)
  const [isMouseHover, setIsMouseHover] = useState(false)

  if (!data) return <Title>Carregando</Title>
  console.log(data);

  const frontDefault = data.sprites.other.home.front_default;
  const frontShiny = data.sprites.other.home.front_shiny;

  return (
    <>
      <ContainerDiv>
        <FavoriteStar pokemonName={data.name}></FavoriteStar>
        {
          !isMouseHover ?
            <Image
              onMouseEnter={() => setIsMouseHover(true)}
              onMouseLeave={() => setIsMouseHover(false)}
              alt={data.name} src={frontDefault}
            />
            :
            <Image
              onMouseEnter={() => setIsMouseHover(true)}
              onMouseLeave={() => setIsMouseHover(false)}
              alt={data.name} title={`${data.name} Shiny`}
              src={frontShiny}
            />
        }

        <Title>
          {data.name}
        </Title>
        <ContainerDiv >
          <UlStyled>
            {data.stats.map((item, index) => (
              <LiStyled key={index}>
                <StrongStyled>{item.stat.name} </StrongStyled>
                <span >{item.base_stat}</span>
              </LiStyled>
            ))}
          </UlStyled>
        </ContainerDiv>
      </ContainerDiv>
    </>
  )
}