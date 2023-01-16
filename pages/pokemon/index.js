import { useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { Pokemons } from "./styles.js";
import PokemonCard from "./components/PokemonCard";
import Pagination from "./components/pagination";
import { NameContext } from "../../components/Context";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(15);

  const { user } = useContext(NameContext);

  async function getAllPokemons() {
    try {
      const allPokemons = await api.get("pokemon?limit=50&offset=0");

      setPokemons(allPokemons.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  // getting current pokemons per page
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemons = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemons,
    indexOfLastPokemon
  );

  // cont to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      {user ? (
        <h1>{user}, here you can check some pokemons</h1>
      ) : (
        <h1>Here you can check some pokemons</h1>
      )}

      <Pokemons>
        <PokemonCard pokemons={currentPokemons} />
      </Pokemons>

      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemons={pokemons.length}
        paginate={paginate}
      />
    </>
  );
}
