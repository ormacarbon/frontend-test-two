import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/state";
import Navbar from "../src/components/Navbar";
import PokemonCard from "../src/components/PokemonCard";
import { StyledPokedex } from "./pokedex.styles";

export default function Pokedex() {
  const { pokedex, searchResults, setSearchResults, searchValue } =
    useContext(GlobalContext);

  const router = useRouter();
  const pathname = router.pathname;

  const filteredSearchList = () => {
    return pokedex.filter((pokemonInPokedex) => {
      return pokemonInPokedex.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  };

  return (
    <>
      <Navbar />
      <StyledPokedex>
        <section className="container-pokemons">
          {pokedex.length === 0 && <p>Empty Pokedex</p>}
          {searchResults.length > 0
            ? filteredSearchList().map((pokemon) => {
                return (
                  <PokemonCard
                    pokemon={pokemon}
                    key={pokemon.url}
                    pathname={pathname}
                  />
                );
              })
            : pokedex.map((pokemon) => {
                return (
                  <PokemonCard
                    pokemon={pokemon}
                    key={pokemon.url}
                    pathname={pathname}
                  />
                );
              })}
        </section>
      </StyledPokedex>
    </>
  );
}
