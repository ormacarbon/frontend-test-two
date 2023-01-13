import { useState } from "react";
import { api } from "../api/api";
import PokemonResult from "./components/PokemonResult";
import { SearchPokemons } from "./styles";

export default function Search() {
  const [pokemonSearched, setPokemonSearched] = useState("");

  async function handlePokemonSearch() {
    try {
      const allPokemons = await api.get("/pokemon?limit=100000&offset=0");

      const pokemon = allPokemons.data.results.find(
        (pokemon) => pokemon.name === pokemonSearched
      );

      if (pokemon !== undefined) {
        setPokemonSearched(pokemon);
      } else {
        alert("Pokemon não encontrado.");
      }

      console.log(pokemon);
    } catch (err) {
      console.log(err);
      alert("Pokemon não encontado", err);
    }
  }

  return (
    <SearchPokemons>
      <h1>Search a pokemon</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Type a pokemon name"
          onChange={(event) => setPokemonSearched(event.target.value)}
          required
        />
        <button onClick={handlePokemonSearch}>Search</button>
      </div>
      {pokemonSearched && <PokemonResult pokemonSearched={pokemonSearched} />}
    </SearchPokemons>
  );
}
