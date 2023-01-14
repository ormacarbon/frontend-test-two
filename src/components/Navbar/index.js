import { useContext } from "react";
import { StyledNavbar } from "./styles";
import Link from "next/link";
import { GlobalContext } from "../../../contexts/state";
import { ColorModeContext } from "../../../contexts/ColorMode";

export default function Navbar() {
  const {
    searchValue,
    setSearchValue,
    setSearchResults,
    allPokelist,
  } = useContext(GlobalContext);
  const context = useContext(ColorModeContext);


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
    <StyledNavbar mode={context.mode}>
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
          onKeyDown={(e) => e.key === "Enter" && searchPokemon()}
        />
        <button className="button-search" onClick={searchPokemon}>
          <img src={"/images/search.svg"} />
        </button>
      </div>
      <label className="switch">
        <input type="checkbox" onChange={() => {
          context.toggleMode()
        }}/>
        <span className="slider"></span>
      </label>
    </StyledNavbar>
  );
}
