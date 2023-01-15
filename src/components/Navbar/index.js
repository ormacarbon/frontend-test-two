import { useContext, useState } from "react";
import Link from "next/link";
import { GlobalContext } from "../../../contexts/state";
import { ColorModeContext } from "../../../contexts/ColorMode";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNavbar = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel2};
  min-height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.borderBase};
  img {
    width: 25px;
  }
  .switch {
    font-size: 17px;
    position: absolute;
    display: flex;
    width: 3.5em;
    height: 2em;
    right: 50px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 10px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.3em;
    width: 1.4em;
    border-radius: 6px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: grey;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px grey;
  }

  input:checked + .slider:before {
    transform: translateX(1.3em);
  }
`;

const NavbarWrapper = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel2};
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.borderBase};
  @media (max-width: 980px) {
    display: none;
  }
  a,
  button {
    cursor: pointer;
  }
  button {
    border: none;
    width: 180px;
    height: 3.5rem;
    font-weight: 500;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textColorBase};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
  }
  img {
    width: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-home {
    background-color: ${({ theme }) => theme.backgroundLevel1};
  }
  .button-pokedex {
    background-color: ${({ theme }) => theme.backgroundLevel1};
  }
  button:hover {
    background-color: lightgray;
  }
  button:active {
    background-color: darkgray;
  }

  .search-container {
    cursor: pointer;
    display: flex;

    img {
      width: 25px;
    }

    .button-search {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 80px;
      background-color: ${({ theme }) => theme.backgroundLevel1};
    }

    .button-search:hover {
      background-color: lightgrey;
    }

    .button-search:active {
      background-color: darkgray;
    }
  }

  .search-input {
    width: 350px;
    padding: 0 20px;
    font-size: 1.4rem;
    font-weight: 700;
    background: transparent;
    border: none;
    display: flex;
    align-self: center;
    color: ${({ theme }) => theme.textColorBase};
  }

  .search-input:focus {
    outline: none;
    border: 0 none;
  }

  .name-page {
    margin-left: 20px;
  }
`;

const BurgerWrapper = styled.header`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    max-height: 100%;
    min-height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding-left: 20px;
    padding-top: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.borderBase};
    a,
    button {
      cursor: pointer;
    }
    button {
      border: none;
      width: 180px;
      height: 56px;
      font-weight: 500;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.textColorBase};
      border-radius: 2px;
      border: 1px solid ${({ theme }) => theme.borderBase};
    }

    li {
      margin: 5px 0;
    }

    .button-burguer {
      width: 60px;
      height: 60px;
      background-color: ${({ theme }) => theme.backgroundLevel1};
      padding: 0 10px;
      hr {
        border: 1px solid ${({ theme }) => theme.textColorBase};
      }
    }

    .list-buttons {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: flex-start;
      list-style: none;
    }
    .button-home {
      background-color: ${({ theme }) => theme.backgroundLevel1};
    }
    .button-pokedex {
      background-color: ${({ theme }) => theme.backgroundLevel1};
    }
    .search-container {
      cursor: pointer;
      display: flex;
      border: 1px solid ${({ theme }) => theme.borderBase};
      .search-input {
        max-width: 50vw;
        padding: 0 20px;
        font-size: 1.4rem;
        font-weight: 700;
        background: transparent;
        border: none;
        display: flex;
        align-self: center;
        color: ${({ theme }) => theme.textColorBase};
      }

      .search-input:focus {
        outline: none;
        border: 0 none;
      }

      .button-search {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 80px;
        background-color: ${({ theme }) => theme.backgroundLevel1};
      }

      .button-search:hover {
        background-color: lightgrey;
      }

      .button-search:active {
        background-color: darkgray;
      }
    }
    button:hover {
      background-color: lightgray;
    }
    button:active {
      background-color: darkgray;
    }

    .name-page{
      position: absolute;
      left: 100px;
      top: 7px;
    }

    .switch {
      margin-top: 15px;
    }
  }
`;

export default function Navbar() {
  const { searchValue, setSearchValue, setSearchResults, allPokelist } =
    useContext(GlobalContext);
  const context = useContext(ColorModeContext);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  const searchPokemon = () => {
    const foundPokemons = allPokelist.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(foundPokemons);
    if (foundPokemons.length === 0) {
      alert("No Pokemon Found");
    }
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
          <button className="button-pokedex">Pokedex</button>
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
        <h1 className="name-page">
          {pathname === "/" && "Home"}
          {pathname === "/pokemons" && "Home"}
          {pathname === "/pokedex" && "Pokedex"}
          {pathname === "/details/[id]" && "Details"}
        </h1>
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
                <button className="button-pokedex">Pokedex</button>
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
        <h1 className="name-page">
          {pathname === "/" && "Home"}
          {pathname === "/pokemons" && "Home"}
          {pathname === "/pokedex" && "Pokedex"}
          {pathname === "/details/[id]" && "Details"}
        </h1>
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
