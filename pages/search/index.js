import { useContext, useState } from "react";
import { NameContext } from "../../components/Context";
import { api } from "../api/api";
import PokemonResult from "./components/PokemonResult";
import { SearchPokemons } from "./styles";

export default function Search() {
  const [pokemonSearched, setPokemonSearched] = useState("");
  const [showPokemon, setShowPokemon] = useState("");
  const { user } = useContext(NameContext);

  async function handlePokemonSearch() {
    try {
      const allPokemons = await api.get("/pokemon?limit=100000&offset=0");

      const pokemon = allPokemons.data.results.find(
        (pokemon) => pokemon.name === pokemonSearched
      );

      setPokemonSearched(pokemon);

      if (pokemon !== undefined) {
        setShowPokemon(pokemon);
      } else {
        alert("Pokemon não encontrado.");
      }
    } catch (err) {
      console.log(err);
      alert("Pokemon não encontado", err);
    }
  }

  return (
    <SearchPokemons>
      {user ? <h1>Search a pokemon, {user}</h1> : <h1>Search a pokemon</h1>}
      <div className="search">
        <input
          type="text"
          placeholder="Type a pokemon name"
          onChange={(event) => setPokemonSearched(event.target.value)}
          required
        />
        <button onClick={handlePokemonSearch}>Search</button>
      </div>
      {showPokemon && <PokemonResult pokemonSearched={pokemonSearched} />}
    </SearchPokemons>
  );
}
