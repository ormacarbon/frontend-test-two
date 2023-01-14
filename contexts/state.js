import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [allPokelist, setAllPokelist] = useState([]);
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([])
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isAddPokemon, setIsAddPokemon] = useState(true);


  function getPokemonColor(pokemonType) {
    switch (pokemonType) {
      case "bug":
        return "#316520";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#F44900";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#70B873";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#8A8A8A";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#33A4F5";
      default:
        return "#8A8A8A";
    }
  }

  const addToPokedex = (pokemonToAdd) => {
    setIsAddPokemon(true)
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
    filterPokemon(pokemonToAdd.name);
  };

  const removeFromPokedex = (pokemonToRemove) => {
    setIsAddPokemon(false)
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
  };

  const filterPokemon = (pokemonName) => {
    const pokeFilter = pokelist.filter(
      (pokemon) => pokemon.name !== pokemonName
    );
    setPokelist(pokeFilter);
  };

  return (
    <GlobalContext.Provider value={{ 
      pokelist,
      setPokelist,
      getPokemonColor,
      allPokelist,
      setAllPokelist,
      searchResults,
      setSearchResults,
      searchValue,
      setSearchValue,
      pokedex,
      setPokedex,
      addToPokedex,
      removeFromPokedex,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
