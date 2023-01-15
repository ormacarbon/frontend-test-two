import { useContext, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import * as S from './styles'
import PokemonServices from '../services/PokemonServices';
import { PokemonContext } from '../context/context';
const pokemonServices = new PokemonServices()

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
      <S.HomeContainer>
        <S.Container>
          <S.InputText onChange={handleChange} placeholder='Search' type='text' />
          <S.Button onClick={handleClick}>Search</S.Button>
          <S.Button onClick={handleReset}>Reset</S.Button>
        </S.Container>
        <S.Container>
          {pokemonData.results.map((item, index) => (
            <PokemonCard key={index} pokemon={item.name} />
          ))
          }
        </S.Container>
        <S.Container>
          {pokemonData.previous && <S.Button onClick={() => handlePage(pokemonData.previous)} >Previous</S.Button>}
          {pokemonData.next && <S.Button onClick={() => handlePage(pokemonData.next)} >Next</S.Button>}
        </S.Container>
      </S.HomeContainer>
    </>
  )
}
