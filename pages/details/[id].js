import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Details () {
  const[pokemonDetail, setPokemonDetail] = useState({})

  const router = useRouter()
  const { id } = router.query

  const fetchPokemonDetail = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonDetail(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  console.log(pokemonDetail);
  return (
    <div>
      <h1>Details of Pokemon: {id}</h1>
    </div>
  )
}


