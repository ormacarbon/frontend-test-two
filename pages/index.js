import { useEffect, useState } from "react";
import { api } from "./api/api";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  async function getAllPokemons() {
    try {
      const allPokemons = await api.get("/pokemon");

      setPokemons(allPokemons.data.results);
      console.log(allPokemons.data);
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
          return (
            <div className="pokemon" key={pokemon.name}>
              <h3>{pokemon.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
