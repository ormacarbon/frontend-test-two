import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import PokemonCard from "../src/components/PokemonCard";
import { useRouter } from "next/router";
import { GlobalContext } from "../contexts/state";
import styled from "styled-components";

const StyledIndex = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundBase};
  min-height: 100vh;

  .container-pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 33px;
    margin-top: 30px;
  }

  .container-buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    padding-bottom: 20px;

    .button-pages {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      height: 40px;
      width: 40px;
      background-color: ${({ theme }) => theme.backgroundLevel3};
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: box-shadow 0.2s ease;
      margin: 0 15px;
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .button-pages.active {
    text-decoration: underline;
    font-weight: 800;
  }

  .button-pages[disabled] {
    background-color: ${({ theme }) => theme.backgroundLevel1};
    color: ${({ theme }) => theme.borderBase};
    cursor: not-allowed;
  }
`;

export default function Home() {
  const { pokelist, setPokelist, setAllPokelist, searchResults, setSearchResults, searchValue, pokedex } =
    useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const pathname = router.pathname;

  const fetchPokemons = async (page) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${(page - 1) * 15}`
      );
      setPokelist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
      );
      setAllPokelist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCurrentPage(Number(router.query.page) || 1);
    fetchPokemons(Number(router.query.page) || 1);
  }, [router.query.page]);

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    if (searchValue === "" || router.query.page) {
      setSearchResults([]);
    }
  }, [searchValue, router.query.page]);

  const filteredPokemonList = () =>
  pokelist.filter(
    (pokemonInList) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
  );

  const getButtonClass = (page) => {
    if (page === currentPage) {
      return "button-pages active";
    }
    return "button-pages";
  };

  return (
    <StyledIndex>
      <Navbar />
      <section className="container-pokemons">
        {searchResults.length > 0 ?
          searchResults.map((pokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.url} pathname={pathname} />;
            })
          : filteredPokemonList().map((pokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.url} pathname={pathname} />;
            })}
      </section>
      <section className="container-buttons">
        <button
          className={getButtonClass(0)}
          onClick={() => {
            setCurrentPage(1);
            router.push({
              pathname: "/pokemons",
              query: { page: 1 },
            });
          }}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <button
          className={getButtonClass(currentPage - 1)}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              router.push({
                pathname: "/pokemons",
                query: { page: currentPage - 1 },
              });
            }
          }}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {currentPage <= 3 && (
          <>
            <button
              className={getButtonClass(2)}
              onClick={() => {
                setCurrentPage(2);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 2 },
                });
              }}
            >
              2
            </button>
            <button
              className={getButtonClass(3)}
              onClick={() => {
                setCurrentPage(3);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 3 },
                });
              }}
            >
              3
            </button>
            <button
              className={getButtonClass(4)}
              onClick={() => {
                setCurrentPage(4);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 4 },
                });
              }}
            >
              4
            </button>
          </>
        )}
        {currentPage >= 4 && currentPage <= 6 && (
          <>
            <button
              className={getButtonClass(4)}
              onClick={() => {
                setCurrentPage(4);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 4 },
                });
              }}
            >
              4
            </button>
            <button
              className={getButtonClass(5)}
              onClick={() => {
                setCurrentPage(5);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 5 },
                });
              }}
            >
              5
            </button>
            <button
              className={getButtonClass(6)}
              onClick={() => {
                setCurrentPage(6);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 6 },
                });
              }}
            >
              6
            </button>
            <button
              className={getButtonClass(7)}
              onClick={() => {
                setCurrentPage(7);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 7 },
                });
              }}
            >
              7
            </button>
          </>
        )}
        {currentPage >= 7 && (
          <>
            <button
              className={getButtonClass(7)}
              onClick={() => {
                setCurrentPage(7);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 7 },
                });
              }}
            >
              7
            </button>
            <button
              className={getButtonClass(8)}
              onClick={() => {
                setCurrentPage(8);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 8 },
                });
              }}
            >
              8
            </button>
            <button
              className={getButtonClass(9)}
              onClick={() => {
                setCurrentPage(9);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 9 },
                });
              }}
            >
              9
            </button>
            <button
              className={getButtonClass(10)}
              onClick={() => {
                setCurrentPage(10);
                router.push({
                  pathname: "/pokemons",
                  query: { page: 10 },
                });
              }}
            >
              10
            </button>
          </>
        )}
        <button
          className="button-pages"
          onClick={() => {
            if (currentPage < 10) {
              setCurrentPage(currentPage + 1);
              router.push({
                pathname: "/pokemons",
                query: { page: currentPage + 1 },
              });
            }
          }}
          disabled={currentPage >= 10}
        >
          {">"}
        </button>
        <button
          className="button-pages"
          onClick={() => {
            setCurrentPage(10);
            router.push({
              pathname: "/pokemons",
              query: { page: 10 },
            });
          }}
          disabled={currentPage >= 10}
        >
          {">>"}
        </button>
      </section>
    </StyledIndex>
  );
}
