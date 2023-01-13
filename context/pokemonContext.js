import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PokemonContext = createContext(undefined)

export function PokemonContextProvider({ children }) {
  const [pokemonTeam, setPokemonTeam] = useState([])
  const [pokemonList, setPokemonList] = useState(Array(12))
  const [itemsPerPage] = useState(12)

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1
  }

  async function fetchData(url, params) {
    try {
      const response = await axios.get(url, params)
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }

  async function fetchPokemonList(limit, offset) {
    const response = await fetchData(`https://pokeapi.co/api/v2/pokemon`, {
      params: {
        limit: limit,
        offset: offset
      }}
    )
    return response.results
  }

  async function fetchPokemonFromList(pokemonList) {
    const promisseList = pokemonList.map((pokemon) => fetchData(pokemon.url))

    const list = await Promise.all(promisseList)
    return list
  }

  async function initPokemonList() {
    const list = await fetchPokemonList(itemsPerPage)
    const pokemonList = await fetchPokemonFromList(list)
    setPokemonList(pokemonList)
  }

  async function loadPokemonList() {
    console.log(pokemonTeam);
    const list = await fetchPokemonList(itemsPerPage, pokemonList.length)
    const pokemons = await fetchPokemonFromList(list)
    setPokemonList([...pokemonList, ...pokemons])
  }

  async function fetchPokemon(id) {
    try {
      const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const description = await fetchPokemonDescription(pokemon.id)
      return { ...pokemon, ...description }
    }
    catch (error) {
      console.error(error)
    }
  }

  async function fetchPokemonDescription(id) {
    try {
      const response = await fetchData(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      )
      const descriptionList = await response.flavor_text_entries
      const description = await getLastDescription(descriptionList)
      return description
    }
    catch (error) {
      console.error(error)
    }
  }

  function getLastDescription(descriptionList) {
    const filterList = descriptionList.filter(
      (desc) => desc.language.name === "en"
    )
    return filterList.pop()
  }

  async function getPokemonTeam() {
    const pokemonPromises = Array(6).fill().map(() => fetchPokemon(getRandomNumber(905)))

    const team = await Promise.all(pokemonPromises)
    return team
  }

  async function initPokemonTeam() {
    const randomTeam = await getPokemonTeam()
    setPokemonTeam(randomTeam)
  }

  useEffect(() => {
    initPokemonTeam();
    initPokemonList();
  }, [])

  useEffect(() => {
    console.log(pokemonTeam)
  }, [pokemonTeam])

  return (
    <PokemonContext.Provider value={{ pokemonTeam, pokemonList, loadPokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
}
