import { useContext, useState } from "react";
import { BurgerWrapper, NavbarWrapper, StyledNavbar } from "./styles";
import Link from "next/link";
import { GlobalContext } from "../../../contexts/state";
import { ColorModeContext } from "../../../contexts/ColorMode";

export default function Navbar() {
  const { searchValue, setSearchValue, setSearchResults, allPokelist } =
    useContext(GlobalContext);
  const context = useContext(ColorModeContext);
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const searchPokemon = () => {
    const foundPokemons = allPokelist.filter((pokemon) =>
      pokemon.name.includes(searchValue)
    );
    foundPokemons > 0
      ? setSearchResults(foundPokemons)
      : alert("No Pokemon Found");
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  return (
    <StyledNavbar mode={context.mode}>
      <NavbarWrapper mode={context.mode}>
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
          <input
            type="checkbox"
            onChange={() => {
              context.toggleMode();
            }}
          />
          <span className="slider"></span>
        </label>
      </NavbarWrapper>
      <BurgerWrapper mode={context.mode}>
        <button
          className="button-burguer"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          <hr />
          <hr />
          <hr />
        </button>
        {menuIsVisible === true && (
          <ul className="list-buttons">
            <li>
              <Link href="/">
                <button className="button-home" onClick={clearSearch}>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="/pokedex">
                <button className="button-pokedex">Pokédex</button>
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
        )}
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              context.toggleMode();
            }}
          />
          <span className="slider"></span>
        </label>
      </BurgerWrapper>
    </StyledNavbar>
  );
}
