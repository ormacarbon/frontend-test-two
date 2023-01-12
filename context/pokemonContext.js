import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PokemonContext = createContext(undefined)

export function PokemonContextProvider({children}) {
  const [pokemonTeam, setPokemonTeam] = useState([]);

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1
  }

  async function getRandomPokemon() {
    try{
      return await fetchPokemonById(getRandomNumber(905))
    }
    catch(error) {
      console.error(error)
    }
  }

  async function fetchPokemonById(id) {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return response.data
    }
    catch(error) {
      console.error(error)
    }
  }

  async function getPokemonTeam() {
    const pokemonPromises = Array(6).fill().map(() => getRandomPokemon())
    const team = await Promise.all(pokemonPromises)
    return team
  }

  useEffect(() => {
    async function initPokemonTeam() {
      const randomTeam = await getPokemonTeam()
      setPokemonTeam(randomTeam)
    }
    
    initPokemonTeam()
  },[])

  return (
    <PokemonContext.Provider value={{pokemonTeam}}>
      {children}
    </PokemonContext.Provider>
  )
}