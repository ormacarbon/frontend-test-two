import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import PokemonCard from "../src/components/PokemonCard";
import { StyledIndex } from "./index.styles";
import { useRouter } from "next/router";

export default function Home() {
  const [pokelist, setPokelist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const router = useRouter();

  const fetchPokemons = async (page) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${(page - 1) * 15}`
      );
      setPokelist(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 15));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCurrentPage(Number(router.query.page) || 1);
    fetchPokemons(currentPage);
  }, [router.query.page]);

  return (
    <StyledIndex>
      <Navbar />
      <section className="container-pokemons">
        {pokelist.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.url} />;
        })}
      </section>
      <section className="container-buttons">
        <button
          className="button-pages"
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
          className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
        {currentPage >= 4 && currentPage <=6 &&  (
          <>
            <button
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
              className="button-pages"
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
            if (currentPage < totalPages && currentPage < 10) {
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
