import { useEffect, useState } from "react";
import { api } from "./api/api";
import PokemonCard from "../components/PokemonCard";
import { Pokemons } from "../styles";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  async function getAllPokemons() {
    try {
      const allPokemons = await api.get("/pokemon");

      setPokemons(allPokemons.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Pokemons>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </Pokemons>
  );
}
