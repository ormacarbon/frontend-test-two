import { useContext, useEffect, useState } from "react";
import { StyledNavbar } from "./styles";
import Link from "next/link";
import { GlobalContext } from "../../../contexts/state";

export default function Navbar() {
  const {
    searchValue,
    setSearchValue,
    searchResults,
    setSearchResults,
    allPokelist,
  } = useContext(GlobalContext);

  const searchPokemon = () => {
    const foundPokemons = allPokelist.filter((pokemon) =>
      pokemon.name.includes(searchValue)
    );
    setSearchResults(foundPokemons);
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  return (
    <StyledNavbar>
      <Link href="/">
        <button className="button-home" onClick={clearSearch}>
          Home
        </button>
      </Link>
      <Link href="/pokedex">
        <button className="button-pokedex">Pokédex</button>
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokemon..."
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchPokemon()}
        />
        <button className="button-search" onClick={searchPokemon}>
          <img src={"/images/search.svg"} />
        </button>
      </div>
    </StyledNavbar>
  );
}
