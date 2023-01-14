import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PokemonContext = createContext(undefined)

export function PokemonContextProvider({ children }) {
  const [referenceList, setReferenceList] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])
  const [pokemonList, setPokemonList] = useState([])
  const [itemsPerPage] = useState(12)

  async function fetchData(url, params) {
    try {
      const response = await axios.get(url, params)
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }

  async function fetchPokemonList() {
    const response = await fetchData(`https://pokeapi.co/api/v2/pokemon`, {
      params: {
        limit: 905,
      }}
    )
    return response.results
  }

  async function fetchPokemonsFromList(pokemonList) {
    const promisseList = pokemonList.map((pokemon) => fetchData(pokemon.url))
    const list = await Promise.all(promisseList)
    return list
  }

  async function initPokemonList() {
    const list = await fetchPokemonList()
    setReferenceList(list)
    const pokemonList = await fetchPokemonsFromList(list.slice(0, itemsPerPage))
    setPokemonList(pokemonList)
  }

  async function updatePokemonList() {
    const pokemons = await fetchPokemonsFromList(referenceList.slice(pokemonList.length, pokemonList.length + itemsPerPage))
    setPokemonList([...pokemonList, ...pokemons])
  }

  async function fetchPokemon(url) {
    try {
      const pokemon = await fetchData(url)
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

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1
  }

  function searchPokemon(name) {
    const match = referenceList.find(pokemon => pokemon.name === name);
    return match
  }

  async function getPokemonTeam() {
    const pokemonPromises = Array(6).fill().map(() => fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber(905)}`))
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
    console.log(referenceList)
  }, [referenceList])

  return (
    <PokemonContext.Provider value={{ 
      pokemonTeam,
       referenceList, 
       pokemonList, 
       updatePokemonList, 
       referenceList, 
       fetchPokemon,
       searchPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  );
}
