import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useQuery } from "react-query";
import PokemonList from "../components/PokemonList";
import PokemonGrid from "../components/PokemonGrid";
import { BsListUl, BsGrid3X3 } from "react-icons/bs";
import {
  Container,
  CurrentPagePaginationButton,
  GridSwitchButton,
  GridWrapper,
  GridWrapperInner,
  ListWrapper,
  LoadingImage,
  PaginationButton,
  PaginationWrapper,
  SearchInput,
  SearchWrapper,
  SearchWrapperInner,
} from "../styles/IndexPage";

type PokemonListType = {
  name: string;
  url: string;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [grid, setGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // It's better to use React Query than useEffect and useState for API calls
  const { data, isFetching } = useQuery(
    ["pokémon list", page, searchTerm],
    async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
      );
      const filteredData = response.data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...response.data, results: filteredData };
    }
  );

  return (
    <Container>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta
          name="description"
          content="A simple website for Pokémon searching made with Next JS, React JS, React Query and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Pokémon, Search, List, Pokédex, Pedro, Lucena"
        />
        <meta name="author" content="Pedro Lucena"></meta>
        <title>Pokémon Search</title>
      </Head>
      <SearchWrapper>
        {grid ? (
          <SearchWrapperInner>
            <SearchInput
              input="text"
              placeholder="Search for a Pokémon"
              value={searchTerm}
              onChange={handleSearch}
            />
            <GridSwitchButton onClick={() => setGrid(!grid)}>
              <BsListUl />
            </GridSwitchButton>
          </SearchWrapperInner>
        ) : (
          <SearchWrapperInner>
            <SearchInput
              input="text"
              placeholder="Search for a Pokémon"
              value={searchTerm}
              onChange={handleSearch}
            />
            <GridSwitchButton onClick={() => setGrid(!grid)}>
              <BsGrid3X3 />
            </GridSwitchButton>
          </SearchWrapperInner>
        )}
      </SearchWrapper>
      {grid ? (
        <GridWrapper>
          {isFetching ? (
            <LoadingImage
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="loading pokémon list"
              width={100}
              height={100}
            />
          ) : (
            <span>
              <GridWrapperInner>
                {data?.results?.map((pokemon: PokemonListType) => {
                  return (
                    <PokemonGrid key={pokemon.name} pokemonData={pokemon} />
                  );
                })}
              </GridWrapperInner>
            </span>
          )}
        </GridWrapper>
      ) : (
        <ListWrapper>
          <ul>
            {isFetching ? (
              <LoadingImage
                src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                alt="loading pokémon list"
                width={100}
                height={100}
              />
            ) : (
              data?.results?.map((pokemon: PokemonListType) => {
                return <PokemonList key={pokemon.name} pokemonData={pokemon} />;
              })
            )}
          </ul>
        </ListWrapper>
      )}

      <PaginationWrapper>
        {page === 1 ? (
          <CurrentPagePaginationButton onClick={() => setPage(1)}>
            1
          </CurrentPagePaginationButton>
        ) : (
          <PaginationButton onClick={() => setPage(1)}>1</PaginationButton>
        )}
        {page === 2 ? (
          <CurrentPagePaginationButton onClick={() => setPage(2)}>
            2
          </CurrentPagePaginationButton>
        ) : (
          <PaginationButton onClick={() => setPage(2)}>2</PaginationButton>
        )}
        {page === 3 ? (
          <CurrentPagePaginationButton onClick={() => setPage(3)}>
            3
          </CurrentPagePaginationButton>
        ) : (
          <PaginationButton onClick={() => setPage(3)}>3</PaginationButton>
        )}
        {page === 4 ? (
          <CurrentPagePaginationButton onClick={() => setPage(4)}>
            4
          </CurrentPagePaginationButton>
        ) : (
          <PaginationButton onClick={() => setPage(4)}>4</PaginationButton>
        )}
        {page === 5 ? (
          <CurrentPagePaginationButton onClick={() => setPage(5)}>
            5
          </CurrentPagePaginationButton>
        ) : (
          <PaginationButton onClick={() => setPage(5)}>5</PaginationButton>
        )}
      </PaginationWrapper>
    </Container>
  );
}
