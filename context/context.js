import { createContext, useEffect, useState } from 'react';
import PokemonServices from '../services/PokemonServices';

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [favoritesPokemons, setFavoritesPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState([])
  const pokemonServices = new PokemonServices()

  function setLocalStorage() {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorite'));
    console.log({favoritesFromLocalStorage});
    if (!favoritesFromLocalStorage) return localStorage.setItem('favorite', JSON.stringify([]));
    setFavoritesPokemons(favoritesFromLocalStorage)
  }

  function handleFavorite(pokemonName) {
    const isFav = favoritesPokemons.some(item => item === pokemonName);

    if (isFav) {
      const filterPokemons = favoritesPokemons.filter(item => item !== pokemonName);
      localStorage.setItem('favorite', JSON.stringify(filterPokemons));
      setFavoritesPokemons(filterPokemons);
    } else {
      setFavoritesPokemons([...favoritesPokemons, pokemonName]);
      localStorage.setItem('favorite', JSON.stringify([...favoritesPokemons, pokemonName]));
    }
  }

  async function getPokemonList() {
    const pokemonList = await pokemonServices.getAllPokemons();
    setPokemonData(pokemonList);
  }

  async function handlePage(url) {
    const pokemonList = await pokemonServices.getNextPage(url)
    setPokemonData(pokemonList)
  }

  useEffect(() => {
    getPokemonList()
    setLocalStorage()
  }, [])

  const initialValue = {
    favoritesPokemons,
    handleFavorite,
    pokemonData,
    handleNewPokemons: (param) => setPokemonData(param),
    getPokemonList,
    handlePage
  }

  return (
    <PokemonContext.Provider value={initialValue}>
      {children}
    </PokemonContext.Provider>
  );
};