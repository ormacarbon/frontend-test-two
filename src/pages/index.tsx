import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "react-query";
import PokemonList from "../components/PokemonList";
import PokemonGrid from "../components/PokemonGrid";
import { BsListUl, BsGrid3X3 } from "react-icons/bs";

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
    <div className="bg-gray-200 dark:bg-gray-800 min-w-screen min-h-screen -mb-6">
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
      <div className="flex pt-3">
        {grid ? (
          <div className="flex mx-auto gap-1">
            <input
              type="text"
              placeholder="Search for a Pokémon"
              className="border focus:border-gray-400 outline-none py-2 pl-3 pr-1 rounded-lg mx-auto dark:bg-gray-700 dark:border-gray-800 dark:text-gray-200 dark:focus:border-gray-800"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              onClick={() => setGrid(!grid)}
              className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
            >
              <BsListUl />
            </button>
          </div>
        ) : (
          <div className="flex mx-auto gap-1">
            <input
              type="text"
              placeholder="Search for a Pokémon"
              className="border focus:border-gray-400 outline-none py-2 pl-3 pr-1 rounded-lg mx-auto dark:bg-gray-700 dark:border-gray-800 dark:text-gray-200 dark:focus:border-gray-800"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              onClick={() => setGrid(!grid)}
              className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
            >
              <BsGrid3X3 />
            </button>
          </div>
        )}
      </div>
      {grid ? (
        <div className="mt-3">
          {isFetching ? (
            <Image
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="loading pokémon list"
              width={100}
              height={100}
              className="flex mx-auto my-[25vh]"
            />
          ) : (
            <div className="flex">
              <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:px-[10vw] xl:px-0 max-w-screen-xl">
                {data?.results?.map((pokemon: PokemonListType) => {
                  return (
                    <PokemonGrid key={pokemon.name} pokemonData={pokemon} />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-1">
          <ul>
            {isFetching ? (
              <Image
                src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                alt="loading pokémon list"
                width={100}
                height={100}
                className="flex mx-auto my-[25vh]"
              />
            ) : (
              data?.results?.map((pokemon: PokemonListType) => {
                return <PokemonList key={pokemon.name} pokemonData={pokemon} />;
              })
            )}
          </ul>
        </div>
      )}

      <div className="flex justify-center py-5 gap-1">
        <button
          onClick={() => setPage(1)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 1
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 2
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700"
          }`}
        >
          2
        </button>
        <button
          onClick={() => setPage(3)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 3
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700"
          }`}
        >
          3
        </button>
        <button
          onClick={() => setPage(4)}
          className={` py-3 px-5 text-gray-200 font-semibold rounded transition-all duration-250 ease-in ${
            page === 4
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700"
          }`}
        >
          4
        </button>
        <button
          onClick={() => setPage(5)}
          className={` py-3 px-5 text-gray-200 font-semibold rounded transition-all duration-250 ease-in ${
            page === 5
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-700"
          }`}
        >
          5
        </button>
      </div>
    </div>
  );
}
