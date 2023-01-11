import { useEffect, useState } from "react";
import { api } from "./api/api";
import PokemonCard from "./components/PokemonCard";

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
    <div>
      <h1>Hello, World!</h1>

      <div className="pokemons">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}
