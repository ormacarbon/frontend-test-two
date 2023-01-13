import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext(undefined);

export function PokemonContextProvider({ children }) {
  const [pokemonTeam, setPokemonTeam] = useState([]);

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  async function fetchData(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchPokemon(id) {
    try {
      const pokemon = await fetchData(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const description = await fetchPokemonDescription(pokemon.id);
      return { ...pokemon, ...description };
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchPokemonDescription(id) {
    try {
      const response = await fetchData(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const descriptionList = await response.flavor_text_entries;
      const description = await getLastDescription(descriptionList);
      return description;
    } catch (error) {
      console.error(error);
    }
  }

  function getLastDescription(descriptionList) {
    const filterList = descriptionList.filter(
      (desc) => desc.language.name === "en"
    );
    return filterList.pop();
  }

  async function getPokemonTeam() {
    const pokemonPromises = Array(6)
      .fill()
      .map(() => fetchPokemon(getRandomNumber(905)));

    const team = await Promise.all(pokemonPromises);
    return team;
  }

  useEffect(() => {
    async function initPokemonTeam() {
      const randomTeam = await getPokemonTeam();
      setPokemonTeam(randomTeam);
    }

    initPokemonTeam();
  }, []);

  useEffect(() => {
    console.log(pokemonTeam);
  }, [pokemonTeam]);

  return (
    <PokemonContext.Provider value={{ pokemonTeam }}>
      {children}
    </PokemonContext.Provider>
  );
}
