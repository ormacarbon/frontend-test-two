import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import PokemonCard from "../src/components/PokemonCard";
import { StyledIndex } from "./index.styles";

export default function Home() {
  const [pokelist, setPokelist] = useState([]);
  const fetchPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      setPokelist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <StyledIndex>
      <Navbar />
      <section className="container-pokemons">
        {pokelist.map((pokemon) => {
          return (
            <PokemonCard pokemon={pokemon} key={pokemon.url}/>
          )
        })}
        
      </section>
    </StyledIndex>
  );
}
