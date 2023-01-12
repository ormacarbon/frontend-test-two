import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PokemonList from "../components/PokemonList";
import PokemonGrid from "../components/PokemonGrid";
import Image from "next/image";
import { BsListUl, BsGrid3X3 } from "react-icons/bs";

type PokemonListType = {
  name: string;
  url: string;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [grid, setGrid] = useState(true);

  // It's better to use React Query than useEffect and useState for API calls
  const { data, isFetching } = useQuery(["pokémon list", page], async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
    );
    return response.data;
  });

  return (
    <div className="bg-gray-200 w-screen min-h-screen -mb-6">
      <div className="flex justify-around pt-2">
        <div></div>
        {grid ? (
          <button
            onClick={() => setGrid(!grid)}
            className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 py-3 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
          >
            <BsListUl />
          </button>
        ) : (
          <button
            onClick={() => setGrid(!grid)}
            className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 py-3 px-5 text-white font-semibold rounded-lg transition-all duration-250 ease-in"
          >
            <BsGrid3X3 />
          </button>
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
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 2
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600"
          }`}
        >
          2
        </button>
        <button
          onClick={() => setPage(3)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 3
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600"
          }`}
        >
          3
        </button>
        <button
          onClick={() => setPage(4)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 4
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600"
          }`}
        >
          4
        </button>
        <button
          onClick={() => setPage(5)}
          className={` py-3 px-5 text-white font-semibold rounded transition-all duration-250 ease-in ${
            page === 5
              ? "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
              : "bg-gray-400 hover:bg-gray-500 active:bg-gray-600"
          }`}
        >
          5
        </button>
      </div>
    </div>
  );
}
