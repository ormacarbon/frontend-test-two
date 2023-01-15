import { useContext, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import PokemonServices from '../services/PokemonServices';
import { PokemonContext } from '../context/context';
const pokemonServices = new PokemonServices()
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
`;

export const InputText = styled.input`
  align-items: center; 
  border-radius: 0.9rem;
  height: 2rem;
  padding: 12px 20px;
  font-size: 1rem;

  &:focus {
  border: 3px solid #555;
  padding: 15px 20px;
} 
`;

export const Button = styled.button`
  color: ${(({ theme }) => theme.colors.background.beau_blue)};
  background-color: ${(({ theme }) => theme.colors.background.darkbg)};
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 2.1999999999999993rem;
  width: 5rem;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    height: 2rem;
    transition: 50ms;
  }
`;

export default function Home() {
  const { pokemonData, handleNewPokemons, getPokemonList, handlePage } = useContext(PokemonContext);
  const [inputSearch, setInputSearch] = useState();

  function handleChange({ target: { value } }) {
    setInputSearch(value)
  }

  async function handleClick() {
    const filteredPokemon = await pokemonServices.findPokemonByName(inputSearch);
    const newPokemon = {
      results: [filteredPokemon]
    }
    handleNewPokemons(newPokemon);
  }

  function handleReset() {
    getPokemonList();
  }

  if (!pokemonData.results) return <p>Carregando...</p>

  return (
    <>
      <HomeContainer>
        <Container>
          <InputText onChange={handleChange} placeholder='Search' type='text' />
          <Button onClick={handleClick}>Search</Button>
          <Button onClick={handleReset}>Reset</Button>
        </Container>
        <Container>
          {pokemonData.results.map((item, index) => (
            <PokemonCard key={index} pokemon={item.name} />
          ))
          }
        </Container>
        <Container>
          {pokemonData.previous && <Button onClick={() => handlePage(pokemonData.previous)} >Previous</Button>}
          {pokemonData.next && <Button onClick={() => handlePage(pokemonData.next)} >Next</Button>}
        </Container>
      </HomeContainer>
    </>
  )
}
