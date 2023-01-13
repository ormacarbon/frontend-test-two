import { useState } from "react";
import { api } from "../api/api";

export default function Search() {
  const [pokemonSearched, setPokemonSearched] = useState("");

  async function handlePokemonSearch() {
    try {
      const allPokemons = await api.get("/pokemon");

      const pokemon = allPokemons.data.results.find(
        (pokemon) => pokemon.name === pokemonSearched
      );

      console.log(pokemon);

      setPokemonSearched(pokemon);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Search a pokemon</h1>
      <input
        type="text"
        placeholder="Type a pokemon name"
        onChange={(event) => setPokemonSearched(event.target.value)}
        required
      />
      <button onClick={handlePokemonSearch}>Search</button>
      <div>{pokemonSearched.name}</div>
    </div>
  );
}
